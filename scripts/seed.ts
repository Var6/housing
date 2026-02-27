import { projects } from '@/data/project'
import { farmhouseProperties } from '@/data/farmhouse'
import { connectToDatabase } from '@/lib/mongodb'
import { PropertyModel } from '@/models/Property'

function normalizeImages(images: string[] = []) {
  return images
    .map((item) => item?.trim())
    .filter(Boolean)
    .map((item) => {
      if (!item) return item
      if (item.startsWith('/') || item.startsWith('http://') || item.startsWith('https://')) {
        return item
      }
      return `/${item}`
    })
}

async function seed() {
  await connectToDatabase()

  const farmhouseMap = new Map(farmhouseProperties.map((item) => [item.id, item]))

  const documents = projects.map((item) => {
    const farmhouse = farmhouseMap.get(item.id)
    const isFarmhouse =
      item.type?.toLowerCase().includes('farmhouse') ||
      item.city.toLowerCase().includes('noida') ||
      Boolean(farmhouse)

    return {
      slug: item.id,
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
      images: normalizeImages(item.images || []),
      farmhouseDetails: farmhouse
        ? {
            priceRange: farmhouse.priceRange,
            area: farmhouse.area,
            bedrooms: farmhouse.bedrooms,
            bathrooms: farmhouse.bathrooms,
            description: farmhouse.description,
            image: farmhouse.image,
            features: farmhouse.features,
            highlights: farmhouse.highlights,
            nearbyPlaces: farmhouse.nearbyPlaces,
          }
        : null,
    }
  })

  await PropertyModel.deleteMany({})
  await PropertyModel.insertMany(documents)

  console.log(`Seeded ${documents.length} records into MongoDB`)
  process.exit(0)
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
