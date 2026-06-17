import Link from 'next/link'
import { getAllProperties } from '@/lib/property-service'

export const dynamic = 'force-dynamic'

export default async function LandListingPage() {
  const lands = await getAllProperties('land')

  return (
    <div className="min-h-screen bg-amber-50">
      <section className="bg-gradient-to-r from-amber-700 to-orange-600 text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Land &amp; Farmland</h1>
          <p className="text-amber-100 text-lg">Explore residential plots, commercial land, and agricultural farmland</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        {lands.length === 0 ? (
          <div className="rounded-2xl border border-amber-100 bg-white p-12 text-center text-slate-600">
            No land listings available right now. Please check back soon.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lands.map((property) => (
              <article key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-amber-100">
                {property.images[0] ? (
                  <img src={property.images[0]} alt={property.name} className="w-full h-64 object-cover" />
                ) : (
                  <div className="w-full h-64 bg-amber-100" />
                )}
                <div className="p-6">
                  <p className="text-amber-700 text-sm font-semibold mb-2">
                    {property.landDetails?.isFarmland ? 'Farmland' : property.type || 'Land'}
                  </p>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{property.name}</h2>
                  <p className="text-slate-600 mb-4">{property.location}, {property.city}</p>
                  <div className="flex flex-wrap gap-2 mb-4 text-sm">
                    {property.landDetails?.totalArea && (
                      <span className="rounded-full bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1">{property.landDetails.totalArea}</span>
                    )}
                    {property.priceVisible && property.landDetails?.priceRange && (
                      <span className="rounded-full bg-lime-50 text-lime-700 border border-lime-200 px-3 py-1">{property.landDetails.priceRange}</span>
                    )}
                  </div>
                  <p className="text-slate-700 mb-5 line-clamp-2">{property.landDetails?.description || 'Premium land parcel.'}</p>
                  <Link href={`/properties/land/${property.id}`} className="inline-flex items-center rounded-lg bg-amber-700 px-5 py-3 text-white font-semibold hover:bg-amber-800 transition">
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
