import Link from 'next/link'
import LogoutButton from '@/components/admin/LogoutButton'
import DashboardClient from '@/components/admin/DashboardClient'
import { getAllProperties, getDashboardAnalytics } from '@/lib/property-service'

export const dynamic = 'force-dynamic'

export default async function AdminDashboardPage() {
  const [analytics, allResidential, allFarmland] = await Promise.all([
    getDashboardAnalytics(),
    getAllProperties('property'),
    getAllProperties('farmhouse'),
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur p-5 shadow-sm flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-600">Manage your property listings</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/Admin/dashboard/new"
              className="px-4 py-2 bg-blue-700 border border-blue-700 rounded-xl text-white font-medium hover:bg-blue-800 transition-colors"
            >
              + Create Listing
            </Link>
            <Link
              href="/"
              className="px-4 py-2 bg-white border border-slate-300 rounded-xl text-slate-700 font-medium hover:bg-slate-50 transition-colors"
            >
              View Site
            </Link>
            <LogoutButton />
          </div>
        </div>

        <DashboardClient
          analytics={analytics}
          residential={allResidential.map((p) => ({
            id: p.id,
            name: p.name,
            city: p.city,
            developer: p.developer,
            location: p.location,
            type: p.type,
          }))}
          farmland={allFarmland.map((p) => ({
            id: p.id,
            name: p.name,
            city: p.city,
            developer: p.developer,
            location: p.location,
            type: p.type,
          }))}
        />
      </div>
    </div>
  )
}
