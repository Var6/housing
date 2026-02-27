import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPropertyBySlug } from '@/lib/property-service'

export const dynamic = 'force-dynamic'

export default async function FarmhouseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const property = await getPropertyBySlug(slug)

  if (!property || property.kind !== 'farmhouse') {
    notFound()
  }

  return (
    <div className="min-h-screen bg-green-50">
      <div className="bg-white border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/properties/farmhouse" className="text-green-800 font-semibold">← Back to Farmhouse List</Link>
        </div>
      </div>

      <section className="bg-gradient-to-r from-green-800 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold mb-2">{property.name}</h1>
          <p>{property.location}, {property.city}, {property.state}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl p-6 border border-green-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {property.images.map((image, index) => (
                <img
                  key={`${image}-${index}`}
                  src={image}
                  alt={`${property.name} image ${index + 1}`}
                  className="w-full h-56 object-cover rounded-xl border border-green-100"
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-green-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
            <p className="text-slate-700 leading-relaxed">{property.farmhouseDetails?.description || 'Premium farmhouse listing.'}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-green-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Features</h2>
            <ul className="space-y-2 text-slate-700 list-disc list-inside">
              {(property.farmhouseDetails?.features || []).map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="bg-white rounded-2xl p-5 border border-green-100">
            <h3 className="font-bold text-lg text-slate-900 mb-3">Property Details</h3>
            <div className="space-y-2 text-sm text-slate-700">
              <p><span className="font-semibold">Price Range:</span> {property.farmhouseDetails?.priceRange || 'On Request'}</p>
              <p><span className="font-semibold">Area:</span> {property.farmhouseDetails?.area || 'N/A'}</p>
              <p><span className="font-semibold">Type:</span> {property.type || 'Farmhouse'}</p>
              <p><span className="font-semibold">Location:</span> {property.city}, {property.state}</p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}
