import { connectToDatabase } from '@/lib/mongodb'
import { PropertyModel } from '@/models/Property'
import { projects } from '@/data/project'
import { farmhouseProperties } from '@/data/farmhouse'

type Unit = {
  bhk: string
  sqft: number
  price: string
}

export type PropertyDTO = {
  id: string
  kind: 'property' | 'farmhouse'
  name: string
  developer: string
  location: string
  city: string
  state: string
  region: string
  type: string
  association?: string
  possession: string
  structure: string
  reraId?: string
  priceVisible: boolean
  units: Unit[]
  images: string[]
  farmhouseDetails?: {
    priceRange?: string
    area?: string
    bedrooms?: string
    bathrooms?: string
    description?: string
    image?: string
    features?: string[]
    highlights?: string[]
    nearbyPlaces?: string[]
  } | null
}

const toDTO = (doc: any): PropertyDTO => ({
  id: doc.slug,
  kind: doc.kind,
  name: doc.name,
  developer: doc.developer || '',
  location: doc.location,
  city: doc.city,
  state: doc.state,
  region: doc.region || '',
  type: doc.type || '',
  association: doc.association || '',
  possession: doc.possession || '',
  structure: doc.structure || '',
  reraId: doc.reraId || '',
  priceVisible: doc.priceVisible ?? true,
  units: Array.isArray(doc.units) ? doc.units : [],
  images: Array.isArray(doc.images) ? doc.images : [],
  farmhouseDetails: doc.farmhouseDetails || null,
})

const farmhouseDetailsById = new Map(
  farmhouseProperties.map((item) => [
    item.id,
    {
      priceRange: item.priceRange,
      area: item.area,
      bedrooms: item.bedrooms,
      bathrooms: item.bathrooms,
      description: item.description,
      image: item.image,
      features: item.features,
      highlights: item.highlights,
      nearbyPlaces: item.nearbyPlaces,
    },
  ]),
)

const staticFallbackData: PropertyDTO[] = projects.map((item) => {
  const isFarmhouse =
    item.type?.toLowerCase().includes('farmhouse') ||
    item.city.toLowerCase().includes('noida') ||
    farmhouseDetailsById.has(item.id)

  return {
    id: item.id,
    kind: isFarmhouse ? 'farmhouse' : 'property',
    name: item.name,
    developer: item.developer || '',
    location: item.location,
    city: item.city,
    state: item.state,
    region: item.region,
    type: item.type || (isFarmhouse ? 'Farmhouse' : 'Residential'),
    association: item.association || '',
    possession: item.possession,
    structure: item.structure,
    reraId: item.reraId || '',
    priceVisible: item.price !== false,
    units: item.units || [],
    images: item.images || [],
    farmhouseDetails: farmhouseDetailsById.get(item.id) || null,
  }
})

export async function getAllProperties(kind?: 'property' | 'farmhouse') {
  try {
    await connectToDatabase()
    const filter = kind ? { kind } : {}
    const docs = await PropertyModel.find(filter).sort({ createdAt: -1 }).lean()
    if (docs.length === 0) {
      if (!kind) {
        return staticFallbackData
      }

      return staticFallbackData.filter((item) => item.kind === kind)
    }

    return docs.map(toDTO)
  } catch {
    if (!kind) {
      return staticFallbackData
    }

    return staticFallbackData.filter((item) => item.kind === kind)
  }
}

export async function getPropertyBySlug(slug: string) {
  try {
    await connectToDatabase()
    const doc = await PropertyModel.findOne({ slug }).lean()
    if (doc) {
      return toDTO(doc)
    }

    return staticFallbackData.find((item) => item.id === slug) || null
  } catch {
    return staticFallbackData.find((item) => item.id === slug) || null
  }
}

export async function upsertProperty(payload: Partial<PropertyDTO> & { id: string }) {
  await connectToDatabase()

  const update = {
    slug: payload.id,
    kind: payload.kind || 'property',
    name: payload.name,
    developer: payload.developer || '',
    location: payload.location,
    city: payload.city,
    state: payload.state,
    region: payload.region || '',
    type: payload.type || '',
    association: payload.association || '',
    possession: payload.possession || '',
    structure: payload.structure || '',
    reraId: payload.reraId || '',
    priceVisible: payload.priceVisible ?? true,
    units: payload.units || [],
    images: payload.images || [],
    farmhouseDetails: payload.farmhouseDetails || null,
  }

  const doc = await PropertyModel.findOneAndUpdate({ slug: payload.id }, update, {
    upsert: true,
    new: true,
    setDefaultsOnInsert: true,
  }).lean()

  return toDTO(doc)
}

export async function getDashboardAnalytics() {
  try {
    await connectToDatabase()

    const [totalListings, totalFarmhouses, byCity, byType] = await Promise.all([
      PropertyModel.countDocuments(),
      PropertyModel.countDocuments({ kind: 'farmhouse' }),
      PropertyModel.aggregate([
        { $group: { _id: '$city', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 8 },
      ]),
      PropertyModel.aggregate([
        {
          $group: {
            _id: {
              $cond: [
                { $or: [{ $eq: ['$type', ''] }, { $not: ['$type'] }] },
                '$kind',
                '$type',
              ],
            },
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
        { $limit: 8 },
      ]),
    ])

    if (totalListings === 0) {
      const fallbackTotal = staticFallbackData.length
      const fallbackFarmhouses = staticFallbackData.filter((item) => item.kind === 'farmhouse').length
      const fallbackResidential = fallbackTotal - fallbackFarmhouses

      const cityCount = new Map<string, number>()
      const typeCount = new Map<string, number>()

      for (const item of staticFallbackData) {
        cityCount.set(item.city, (cityCount.get(item.city) || 0) + 1)
        const type = item.type || item.kind
        typeCount.set(type, (typeCount.get(type) || 0) + 1)
      }

      const topCities = Array.from(cityCount.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([city, count]) => ({ city, count }))

      const listingTypes = Array.from(typeCount.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([type, count]) => ({ type, count }))

      return {
        totalListings: fallbackTotal,
        totalFarmhouses: fallbackFarmhouses,
        totalResidential: fallbackResidential,
        topCities,
        listingTypes,
      }
    }

    return {
      totalListings,
      totalFarmhouses,
      totalResidential: totalListings - totalFarmhouses,
      topCities: byCity.map((item) => ({ city: item._id || 'Unknown', count: item.count })),
      listingTypes: byType.map((item) => ({ type: item._id || 'Unknown', count: item.count })),
    }
  } catch {
    const totalListings = staticFallbackData.length
    const totalFarmhouses = staticFallbackData.filter((item) => item.kind === 'farmhouse').length
    const totalResidential = totalListings - totalFarmhouses

    const cityCount = new Map<string, number>()
    const typeCount = new Map<string, number>()

    for (const item of staticFallbackData) {
      cityCount.set(item.city, (cityCount.get(item.city) || 0) + 1)
      const type = item.type || item.kind
      typeCount.set(type, (typeCount.get(type) || 0) + 1)
    }

    const topCities = Array.from(cityCount.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([city, count]) => ({ city, count }))

    const listingTypes = Array.from(typeCount.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([type, count]) => ({ type, count }))

    return { totalListings, totalFarmhouses, totalResidential, topCities, listingTypes }
  }
}
