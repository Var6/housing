import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin, ArrowLeft, Check } from 'lucide-react'
import { getPropertyBySlug } from '@/lib/property-service'
import VisitLeadPopup from '@/components/UX/VisitLeadPopup'

export const dynamic = 'force-dynamic'

export default async function FarmhouseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const property = await getPropertyBySlug(slug)

  if (!property || property.kind !== 'farmhouse') {
    notFound()
  }

  const details = property.farmhouseDetails
  const description = details?.description || 'Premium farmhouse listing.'
  const nearbyPlaces = details?.nearbyPlaces || []
  const features = details?.features || []
  const highlights = details?.highlights || []
  const images = property.images || []
  const heroImage = images[0] || '/placeholder.jpg'

  return (
    <div className="min-h-screen bg-green-50">
      <div className="bg-white border-b border-green-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/properties/farmhouse" className="inline-flex items-center gap-2 text-green-800 font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to Farmhouse List
          </Link>
        </div>
      </div>

      <section className="bg-gradient-to-r from-green-800 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-4xl font-bold mb-2">{property.name}</h1>
          <div className="inline-flex items-center gap-2 text-green-100">
            <MapPin className="w-4 h-4" />
            <span>{property.location}</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl p-6 border border-green-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.map((image, index) => (
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Nearby Area / Proximity</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {nearbyPlaces.map((place) => (
                <div key={place} className="flex items-start gap-3 rounded-lg bg-green-50 p-3">
                  <MapPin className="w-5 h-5 text-green-700 mt-0.5" />
                  <span className="text-slate-700">{place}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-green-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
            <p className="text-slate-700 leading-relaxed">{description}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-green-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-lg bg-green-50 p-3">
                  <Check className="w-5 h-5 text-green-700 mt-0.5" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-green-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Highlights</h2>
            <ul className="space-y-2 text-slate-700 list-disc list-inside">
              {highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-5">
          <img src={heroImage} alt={property.name} className="w-full rounded-2xl h-56 object-cover border border-green-100" />
          <div className="grid grid-cols-2 gap-3">
            {images.slice(1).map((image) => (
              <img key={image} src={image} alt={property.name} className="rounded-xl h-28 w-full object-cover border border-green-100" />
            ))}
          </div>

          <div className="bg-white rounded-2xl p-5 border border-green-100">
            <h3 className="font-bold text-lg text-slate-900 mb-3">Property Details</h3>
            <div className="space-y-2 text-sm text-slate-700">
              <p><span className="font-semibold">Price:</span> {details?.priceRange || 'On Request'}</p>
              <p><span className="font-semibold">Area:</span> {details?.area || 'N/A'}</p>
              <p><span className="font-semibold">Type:</span> {property.type || 'Farmhouse'}</p>
              <p><span className="font-semibold">Location:</span> {property.city}, {property.state}</p>
            </div>
          </div>
        </aside>
      </section>

      <VisitLeadPopup propertyName={property.name} storageKey={`farmhouse-${property.id}`} />
    </div>
  )
}
