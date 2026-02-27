import { NextResponse } from 'next/server'
import { getAllProperties } from '@/lib/property-service'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const kind = searchParams.get('kind') as 'property' | 'farmhouse' | null

  const items = await getAllProperties(kind === 'property' || kind === 'farmhouse' ? kind : undefined)
  return NextResponse.json({ items })
}
