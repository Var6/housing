import { NextResponse } from 'next/server'
import { getDashboardAnalytics } from '@/lib/property-service'

export async function GET() {
  const analytics = await getDashboardAnalytics()
  return NextResponse.json(analytics)
}
