import { loadEnvConfig } from '@next/env'
import { existsSync, readdirSync, statSync } from 'fs'
import { join } from 'path'
import { projects } from '@/data/project'
import { farmhouseProperties } from '@/data/farmhouse'
import { connectToDatabase } from '@/lib/mongodb'
import { PropertyModel } from '@/models/Property'

loadEnvConfig(process.cwd())

const PUBLIC_DIR = join(process.cwd(), 'public')
const IMAGE_RE = /\.(jpe?g|png|webp|jfif|avif|gif)$/i
const norm = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '')

// Slugs whose images live in a folder that can't be matched by normalized name.
const FOLDER_ALIASES: Record<string, string> = {
  'piramal-aranya-rani-baug': 'primalaranya-rani bug',
}

// Index every public/ subfolder with the image files it actually contains.
const PUBLIC_INDEX = readdirSync(PUBLIC_DIR)
  .filter((entry) => {
    try {
      return statSync(join(PUBLIC_DIR, entry)).isDirectory()
    } catch {
      return false
    }
  })
  .map((dir) => ({
    dir,
    n: norm(dir),
    files: readdirSync(join(PUBLIC_DIR, dir))
      .filter((file) => IMAGE_RE.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true })),
  }))
  .filter((entry) => entry.files.length > 0)

function matchFolder(slug: string) {
  const alias = FOLDER_ALIASES[slug]
  if (alias) {
    const hit = PUBLIC_INDEX.find((entry) => entry.dir === alias)
    if (hit) return hit
  }
  const ns = norm(slug)
  const exact = PUBLIC_INDEX.find((entry) => entry.n === ns)
  if (exact) return exact
  const candidates = PUBLIC_INDEX.filter((entry) => entry.n.includes(ns) || ns.includes(entry.n))
  candidates.sort((a, b) => Math.min(b.n.length, ns.length) - Math.min(a.n.length, ns.length))
  return candidates[0]
}

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

const isBadLocal = (img: string) =>
  !/^https?:\/\//.test(img) && !existsSync(join(PUBLIC_DIR, img.replace(/^\//, '')))

// Keep curated images when they all resolve; otherwise rebuild from the
// real files in the listing's public/ folder so galleries never 404.
function resolveImages(slug: string, images: string[] = []) {
  const normalized = normalizeImages(images)
  if (normalized.length > 0 && !normalized.some(isBadLocal)) return normalized
  const folder = matchFolder(slug)
  if (!folder) return normalized
  return folder.files.map((file) => `/${folder.dir}/${file}`)
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
      images: resolveImages(item.id, item.images || []),
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

  const dedupedDocuments = Array.from(
    new Map(documents.map((doc) => [doc.slug, doc])).values(),
  )

  await PropertyModel.bulkWrite(
    dedupedDocuments.map((doc) => ({
      updateOne: {
        filter: { slug: doc.slug },
        update: { $set: doc },
        upsert: true,
      },
    })),
  )

  console.log(`Seeded ${dedupedDocuments.length} unique records into MongoDB`)
  process.exit(0)
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
