import { NextResponse } from 'next/server'
import { deletePropertyBySlug, getPropertyBySlug, upsertProperty } from '@/lib/property-service'
import { deleteCloudinaryImagesByUrls } from '@/lib/cloudinary'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const item = await getPropertyBySlug(id)
  if (!item) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  return NextResponse.json(item)
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const body = await request.json()

  const requiredFields = ['name', 'location', 'city', 'state']
  for (const field of requiredFields) {
    if (!String(body?.[field] || '').trim()) {
      return NextResponse.json({ error: `${field} is required` }, { status: 400 })
    }
  }

  const updated = await upsertProperty({
    id,
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

  return NextResponse.json(updated)
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  const item = await getPropertyBySlug(id)

  if (!item) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const cloudinaryCleanup = await deleteCloudinaryImagesByUrls(item.images || [])

  if (cloudinaryCleanup.failed.length > 0) {
    return NextResponse.json(
      {
        error: 'Failed to delete one or more Cloudinary images',
        failedAssets: cloudinaryCleanup.failed,
      },
      { status: 500 },
    )
  }

  const deleted = await deletePropertyBySlug(id)
  return NextResponse.json({ success: true, deleted, cloudinaryCleanup })
}
