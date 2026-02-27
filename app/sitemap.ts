import type { MetadataRoute } from 'next'
import { connectToDatabase } from '@/lib/mongodb'
import { PropertyModel } from '@/models/Property'

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://citizenhousing.in'
  const now = new Date()

  // Connect to database and fetch all properties
  await connectToDatabase()
  const properties = await PropertyModel.find({}).select('slug kind updatedAt').lean()

  const staticRoutes = [
    '',
    '/about',
    '/careers',
    '/Contact',
    '/faq',
    '/PrivacyPolicy',
    '/properties',
    '/properties/farmhouse',
    '/services/buying',
    '/services/legal',
    '/services/rental',
    '/services/selling',
    '/terms',
    '/testimonials',
  ]

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }))

  const propertyEntries: MetadataRoute.Sitemap = properties
    .filter((p: any) => p.kind === 'property')
    .map((property: any) => ({
      url: `${baseUrl}/properties/${property.slug}`,
      lastModified: property.updatedAt || now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

  const farmhouseEntries: MetadataRoute.Sitemap = properties
    .filter((p: any) => p.kind === 'farmhouse')
    .map((property: any) => ({
      url: `${baseUrl}/properties/farmhouse/${property.slug}`,
      lastModified: property.updatedAt || now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

  return [...staticEntries, ...propertyEntries, ...farmhouseEntries]
}
