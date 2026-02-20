import type { MetadataRoute } from 'next'
import { projects } from '@/data/project'
import { farmhouseProperties } from '@/data/farmhouse'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://citizenhousing.in'
  const now = new Date()

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

  const propertyEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/properties/${project.id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const farmhouseEntries: MetadataRoute.Sitemap = farmhouseProperties.map((property) => ({
    url: `${baseUrl}/properties/farmhouse/${property.id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticEntries, ...propertyEntries, ...farmhouseEntries]
}
