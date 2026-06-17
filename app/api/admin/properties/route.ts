import { NextResponse } from 'next/server'
import { getAllProperties, getPropertyBySlug, upsertProperty, type ListingKind } from '@/lib/property-service'

const VALID_KINDS: ListingKind[] = ['property', 'farmhouse', 'land']

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const kind = searchParams.get('kind') as ListingKind | null

  const items = await getAllProperties(kind && VALID_KINDS.includes(kind) ? kind : undefined)
  return NextResponse.json({ items })
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export async function POST(request: Request) {
  const body = await request.json()

  const requiredFields = ['name', 'location', 'city', 'state']
  for (const field of requiredFields) {
    if (!String(body?.[field] || '').trim()) {
      return NextResponse.json({ error: `${field} is required` }, { status: 400 })
    }
  }

  const baseId = slugify(String(body.id || body.name || 'listing')) || `listing-${Date.now()}`
  let nextId = baseId
  let counter = 2
  while (await getPropertyBySlug(nextId)) {
    nextId = `${baseId}-${counter}`
    counter += 1
  }

  const created = await upsertProperty({
    id: nextId,
    kind: body.kind,
    name: body.name,
    developer: body.developer,
    location: body.location,
    city: body.city,
    state: body.state,
    region: body.region,
    type: body.type,
    association: body.association,
    possession: body.possession,
    structure: body.structure,
    reraId: body.reraId,
    priceVisible: body.priceVisible,
    units: Array.isArray(body.units) ? body.units : [],
    images: Array.isArray(body.images) ? body.images : [],
    farmhouseDetails: body.farmhouseDetails || null,
    landDetails: body.landDetails || null,
  })

  return NextResponse.json(created, { status: 201 })
}
