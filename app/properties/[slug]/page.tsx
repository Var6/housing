import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Building2, CalendarDays, Landmark, MapPin, Ruler, ShieldCheck } from 'lucide-react'
import { getPropertyBySlug } from '@/lib/property-service'
import VisitLeadPopup from '@/components/UX/VisitLeadPopup'

export const dynamic = 'force-dynamic'

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getPropertyBySlug(slug)

  if (!project || project.kind === 'farmhouse' || project.kind === 'land') {
    notFound()
  }

  const images = project.images || []
  const heroImage = images[0] || '/placeholder.jpg'
  const galleryImages = images.slice(1)
  const units = project.units || []

  return (
    <div className="min-h-screen bg-slate-50">
           <section className="bg-gradient-to-r from-green-900 via-emerald-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/properties" className="inline-flex items-center gap-2 text-neutral-100 font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to Properties
          </Link>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
          <div className="lg:col-span-3 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
                {project.type || 'Residential'}
              </span>
              {project.region ? (
                <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide">
                  {project.region}
                </span>
              ) : null}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{project.name}</h1>
            <p className="text-emerald-100 mt-3 text-lg">{project.developer}</p>
            <div className="inline-flex items-center gap-2 text-emerald-100 mt-3">
              <MapPin className="w-4 h-4" />
              <span>{project.location}, {project.city}, {project.state}</span>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-sm">
            <img src={heroImage} alt={project.name} className="h-60 lg:h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6 lg:space-y-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs text-slate-500">Starting Price</p>
              <p className="text-lg font-bold text-slate-900 mt-1">{units[0]?.price ? `₹${units[0].price}` : 'On Request'}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs text-slate-500">Configurations</p>
              <p className="text-lg font-bold text-slate-900 mt-1">{units.length || 0}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs text-slate-500">Possession</p>
              <p className="text-lg font-bold text-slate-900 mt-1">{project.possession || 'N/A'}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs text-slate-500">Project Type</p>
              <p className="text-lg font-bold text-slate-900 mt-1">{project.type || 'Residential'}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Unit Configurations</h2>
            {units.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {units.map((unit, index) => (
                  <div key={`${unit.bhk}-${index}`} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-slate-900 font-semibold">{unit.bhk}</p>
                    <p className="text-slate-600 mt-1">{unit.sqft} sq.ft</p>
                    <p className="text-green-700 font-bold mt-2">₹{unit.price}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-600">Configuration details are currently unavailable.</p>
            )}
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {images.map((image, index) => (
                <img
                  key={`${image}-${index}`}
                  src={image}
                  alt={`${project.name} image ${index + 1}`}
                  className="w-full h-56 object-cover rounded-xl border border-slate-200"
                />
              ))}
            </div>
          </div>

          {galleryImages.length > 0 ? (
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {galleryImages.map((image, index) => (
                  <img
                    key={`${image}-thumb-${index}`}
                    src={image}
                    alt={`${project.name} gallery ${index + 1}`}
                    className="h-28 md:h-32 w-full rounded-lg object-cover border border-slate-200"
                  />
                ))}
              </div>
            </div>
          ) : null}

          <div className="bg-white rounded-2xl p-6 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Snapshot</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700">
              <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-green-700 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500">Developer</p>
                  <p className="font-semibold text-slate-900">{project.developer || 'N/A'}</p>
                </div>
              </div>
              <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-700 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500">Address</p>
                  <p className="font-semibold text-slate-900">{project.location}, {project.city}</p>
                </div>
              </div>
              <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 flex items-start gap-3">
                <CalendarDays className="w-5 h-5 text-green-700 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500">Possession</p>
                  <p className="font-semibold text-slate-900">{project.possession || 'N/A'}</p>
                </div>
              </div>
              <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 flex items-start gap-3">
                <Landmark className="w-5 h-5 text-green-700 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-500">RERA</p>
                  <p className="font-semibold text-slate-900">{project.reraId || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 h-fit">
          <div className="bg-white rounded-2xl p-5 border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-4">Quick Facts</h3>
            <div className="space-y-3 text-sm text-slate-700">
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-green-700" /> <span><span className="font-semibold">Region:</span> {project.region || 'N/A'}</span></p>
              <p className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-green-700" /> <span><span className="font-semibold">Possession:</span> {project.possession || 'N/A'}</span></p>
              <p className="flex items-center gap-2"><Ruler className="w-4 h-4 text-green-700" /> <span><span className="font-semibold">Structure:</span> {project.structure || 'N/A'}</span></p>
              <p className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-green-700" /> <span><span className="font-semibold">RERA:</span> {project.reraId || 'N/A'}</span></p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900 to-slate-900 text-white rounded-2xl p-5 border border-green-800">
            <h3 className="font-bold text-lg mb-2">Contact Advisor</h3>
            <p className="text-sm text-emerald-100 mb-4">Get floor plans, latest pricing, and site visit support.</p>
            <a href="tel:+919031007097" className="block text-white font-semibold">+91 9031007097</a>
            <a href="mailto:sales@citizenhousing.in" className="block text-emerald-200 font-medium mt-1 break-all">sales@citizenhousing.in</a>
          </div>
        </aside>
      </section>

      <VisitLeadPopup propertyName={project.name} storageKey={`property-${project.id}`} />
    </div>
  )
}
