import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin, ArrowLeft, Check } from 'lucide-react'
import { getPropertyBySlug } from '@/lib/property-service'
import VisitLeadPopup from '@/components/UX/VisitLeadPopup'

export const dynamic = 'force-dynamic'

export default async function LandDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const property = await getPropertyBySlug(slug)

  if (!property || property.kind !== 'land') {
    notFound()
  }

  const details = property.landDetails
  const description = details?.description || 'Premium land parcel.'
  const nearbyPlaces = details?.nearbyPlaces || []
  const features = details?.features || []
  const highlights = details?.highlights || []
  const images = property.images || []
  const heroImage = images[0] || '/placeholder.jpg'
  const galleryImages = images.slice(1)
  const showPrice = property.priceVisible
  const categoryLabel = details?.isFarmland ? 'Farmland' : property.type || 'Land'

  // Quick spec rows shown in the sidebar / overview
  const specRows: { label: string; value?: string }[] = [
    { label: 'Total Area', value: details?.totalArea },
    { label: 'Price / Unit', value: showPrice ? details?.pricePerUnit : undefined },
    { label: 'Dimensions', value: details?.dimensions },
    { label: 'Facing', value: details?.facing },
    { label: 'Road / Access', value: details?.roadWidth },
    { label: 'Boundary', value: details?.boundaryWall },
    { label: 'Water Source', value: details?.waterSource },
    { label: 'Soil Type', value: details?.soilType },
    { label: 'Electricity', value: details?.electricity },
    { label: 'Approvals', value: details?.approvals },
    { label: 'Survey / Khasra No.', value: details?.surveyNumber },
  ]
  const visibleSpecs = specRows.filter((row) => row.value)

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50/40 to-white">
      <section className="relative overflow-hidden bg-gradient-to-r from-amber-900 via-amber-800 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/properties/land" className="inline-flex items-center gap-2 text-neutral-200 font-semibold hover:text-amber-100 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Land List
          </Link>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-end">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-amber-50 mb-4 border border-white/25">
                {categoryLabel}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-3">{property.name}</h1>
              <div className="inline-flex items-center gap-2 text-amber-100 text-sm md:text-base">
                <MapPin className="w-4 h-4" />
                <span>{property.location}, {property.city}</span>
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="relative rounded-xl border border-white/25 bg-white/10 px-3 py-2 h-20 flex items-center justify-center">
                  <p className="absolute top-2 left-3 text-xs text-amber-100">Price</p>
                  <p className="text-sm font-semibold text-white">{showPrice ? details?.priceRange || 'On Request' : 'On Request'}</p>
                </div>
                <div className="relative rounded-xl border border-white/25 bg-white/10 px-3 py-2 h-20 flex items-center justify-center">
                  <p className="absolute top-2 left-3 text-xs text-amber-100">Area</p>
                  <p className="text-sm font-semibold text-white">{details?.totalArea || 'N/A'}</p>
                </div>
                <div className="relative rounded-xl border border-white/25 bg-white/10 px-3 py-2 h-20 flex items-center justify-center">
                  <p className="absolute top-2 left-3 text-xs text-amber-100">Type</p>
                  <p className="text-sm font-semibold text-white">{categoryLabel}</p>
                </div>
                <div className="relative rounded-xl border border-white/25 bg-white/10 px-3 py-2 h-20 flex items-center justify-center">
                  <p className="absolute top-2 left-3 text-xs text-amber-100">Facing</p>
                  <p className="text-sm font-semibold text-white">{details?.facing || 'N/A'}</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-2xl border border-white/30 bg-white/10 p-2 backdrop-blur-sm shadow-lg">
                <img
                  src={heroImage}
                  alt={property.name}
                  className="w-full h-72 xl:h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6 md:space-y-7">
          <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
            <p className="text-slate-700 leading-relaxed text-[15px] whitespace-pre-line">{description}</p>
          </div>

          {visibleSpecs.length > 0 && (
            <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Land Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {visibleSpecs.map((row) => (
                  <div key={row.label} className="flex items-center justify-between rounded-xl border border-amber-100 bg-gradient-to-br from-amber-50 to-orange-50/30 px-4 py-3">
                    <span className="text-slate-500 text-sm">{row.label}</span>
                    <span className="text-slate-900 font-semibold text-sm text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {images.length > 0 && (
            <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Land Images</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {images.map((image, index) => (
                  <img
                    key={`${image}-${index}`}
                    src={image}
                    alt={`${property.name} image ${index + 1}`}
                    className="w-full h-56 object-cover rounded-xl border border-amber-100"
                  />
                ))}
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Features</h2>
            {features.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 rounded-xl border border-amber-100 bg-gradient-to-br from-amber-50 to-orange-50/30 p-3.5">
                    <Check className="w-5 h-5 text-amber-700 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-600">Feature details are available on request.</p>
            )}
          </div>

          <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Highlights</h2>
            {highlights.length > 0 ? (
              <ul className="space-y-2 text-slate-700 list-disc list-inside">
                {highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-600">No additional highlights listed for this land.</p>
            )}
          </div>

          <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Nearby Address</h2>
            {nearbyPlaces.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {nearbyPlaces.map((place) => (
                  <div key={place} className="flex items-start gap-3 rounded-xl border border-amber-100 bg-gradient-to-br from-amber-50 to-orange-50/30 p-3.5">
                    <MapPin className="w-5 h-5 text-amber-700 mt-0.5" />
                    <span className="text-slate-700 text-sm md:text-base">{place}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-600">Nearby location details are available on request.</p>
            )}
          </div>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="bg-white rounded-2xl p-3 border border-amber-100 shadow-sm">
            <img src={heroImage} alt={property.name} className="w-full rounded-xl h-60 object-cover" />
          </div>

          {galleryImages.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {galleryImages.map((image) => (
                <img key={image} src={image} alt={property.name} className="rounded-xl h-28 w-full object-cover border border-amber-100" />
              ))}
            </div>
          )}

          <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
            <h3 className="font-bold text-lg text-slate-900 mb-3">Land Details</h3>
            <div className="space-y-2 text-sm text-slate-700">
              <p><span className="font-semibold">Price:</span> {showPrice ? details?.priceRange || 'On Request' : 'On Request'}</p>
              {showPrice && details?.pricePerUnit && <p><span className="font-semibold">Rate:</span> {details.pricePerUnit}</p>}
              <p><span className="font-semibold">Area:</span> {details?.totalArea || 'N/A'}</p>
              <p><span className="font-semibold">Type:</span> {categoryLabel}</p>
              <p><span className="font-semibold">Location:</span> {property.city}, {property.state}</p>
            </div>
          </div>
        </aside>
      </section>

      <VisitLeadPopup propertyName={property.name} storageKey={`land-${property.id}`} />
    </div>
  )
}
