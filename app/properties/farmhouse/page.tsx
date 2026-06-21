import Link from 'next/link'
import { getAllProperties } from '@/lib/property-service'

export const dynamic = 'force-dynamic'

export default async function FarmhouseListingPage() {
  const farmhouses = await getAllProperties('farmhouse')

  return (
    <div className="min-h-screen bg-green-50">
      <section className="bg-gradient-to-r from-green-800 to-emerald-700 text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Farmhouse Properties</h1>
          <p className="text-green-100 text-lg">Explore premium farmhouse options</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {farmhouses.map((property) => (
            <article key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-green-100">
              {property.images[0] ? (
                <img src={property.images[0]} alt={property.name} className="w-full h-64 object-cover" />
              ) : (
                <div className="flex h-64 w-full items-center justify-center bg-gradient-to-br from-green-100 to-emerald-200 px-4 text-center font-semibold text-green-800">
                  {property.name}
                </div>
              )}
              <div className="p-6">
                <p className="text-green-700 text-sm font-semibold mb-2">{property.type || 'Farmhouse'}</p>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{property.name}</h2>
                <p className="text-slate-600 mb-4">{property.location}, {property.city}</p>
                <p className="text-slate-700 mb-5 line-clamp-2">{property.farmhouseDetails?.description || 'Premium farmhouse listing'}</p>
                <Link href={`/properties/farmhouse/${property.id}`} className="inline-flex items-center rounded-lg bg-green-700 px-5 py-3 text-white font-semibold hover:bg-green-800 transition">
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
