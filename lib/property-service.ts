import { connectToDatabase } from '@/lib/mongodb'
import { PropertyModel } from '@/models/Property'

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

export async function getAllProperties(kind?: 'property' | 'farmhouse') {
  await connectToDatabase()
  const filter = kind ? { kind } : {}
  const docs = await PropertyModel.find(filter).sort({ createdAt: -1 }).lean()
  return docs.map(toDTO)
}

export async function getPropertyBySlug(slug: string) {
  await connectToDatabase()
  const doc = await PropertyModel.findOne({ slug }).lean()
  return doc ? toDTO(doc) : null
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

  return {
    totalListings,
    totalFarmhouses,
    totalResidential: totalListings - totalFarmhouses,
    topCities: byCity.map((item) => ({ city: item._id || 'Unknown', count: item.count })),
    listingTypes: byType.map((item) => ({ type: item._id || 'Unknown', count: item.count })),
  }
}
