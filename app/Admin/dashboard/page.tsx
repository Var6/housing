import Link from 'next/link'
import LogoutButton from '@/components/admin/LogoutButton'
import { getAllProperties, getDashboardAnalytics } from '@/lib/property-service'

export const dynamic = 'force-dynamic'

export default async function AdminDashboardPage() {
  const [analytics, allResidential, allFarmland] = await Promise.all([
    getDashboardAnalytics(),
    getAllProperties('property'),
    getAllProperties('farmhouse'),
  ])

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-600">Analytics and listing management</p>
          </div>
          <LogoutButton />
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <article className="bg-white rounded-xl p-5 shadow-sm border">
            <p className="text-slate-600">Total Listings</p>
            <p className="text-3xl font-bold text-slate-900">{analytics.totalListings}</p>
          </article>
          <article className="bg-white rounded-xl p-5 shadow-sm border">
            <p className="text-slate-600">Residential</p>
            <p className="text-3xl font-bold text-slate-900">{analytics.totalResidential}</p>
          </article>
          <article className="bg-white rounded-xl p-5 shadow-sm border">
            <p className="text-slate-600">Farmland</p>
            <p className="text-3xl font-bold text-slate-900">{analytics.totalFarmhouses}</p>
          </article>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm border">
            <h2 className="text-xl font-bold mb-3">Top Cities</h2>
            <div className="space-y-2">
              {analytics.topCities.map((item) => (
                <div key={item.city} className="flex items-center justify-between">
                  <span className="text-slate-700">{item.city}</span>
                  <span className="font-semibold">{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border">
            <h2 className="text-xl font-bold mb-3">Listing Types</h2>
            <div className="space-y-2">
              {analytics.listingTypes.map((item) => (
                <div key={item.type} className="flex items-center justify-between">
                  <span className="text-slate-700">{item.type}</span>
                  <span className="font-semibold">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl p-5 shadow-sm border mb-8">
          <h2 className="text-xl font-bold mb-4">Residential Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {allResidential.map((item) => (
              <div key={item.id} className="border rounded-lg p-3 bg-slate-50">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-600">{item.city}</p>
                <Link href={`/Admin/dashboard/${item.id}`} className="inline-block text-sm mt-2 text-blue-700 font-semibold">
                  Edit Property
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl p-5 shadow-sm border">
          <h2 className="text-xl font-bold mb-4">Farmland Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {allFarmland.map((item) => (
              <div key={item.id} className="border rounded-lg p-3 bg-green-50">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-600">{item.city}</p>
                <Link href={`/Admin/dashboard/${item.id}`} className="inline-block text-sm mt-2 text-blue-700 font-semibold">
                  Edit Farmland
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
