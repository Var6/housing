import { NextResponse } from 'next/server'
import { getLocationData } from '@/lib/property-service'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const locations = await getLocationData()
    return NextResponse.json(locations)
  } catch (error) {
    console.error('Failed to fetch locations:', error)
    return NextResponse.json({ error: 'Failed to fetch locations' }, { status: 500 })
  }
}
