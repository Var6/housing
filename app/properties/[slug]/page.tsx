import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPropertyBySlug } from '@/lib/property-service'

export const dynamic = 'force-dynamic'

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getPropertyBySlug(slug)

  if (!project || project.kind === 'farmhouse') {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link href="/properties" className="text-blue-700 font-semibold">← Back to Properties</Link>
          <h1 className="text-4xl font-bold text-slate-900 mt-4">{project.name}</h1>
          <p className="text-slate-600 mt-1">{project.developer}</p>
          <p className="text-slate-700 mt-2">{project.location}, {project.city}, {project.state}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Project Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <img
                  key={`${image}-${index}`}
                  src={image}
                  alt={`${project.name} image ${index + 1}`}
                  className="w-full h-56 object-cover rounded-lg border"
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Unit Configurations</h2>
            <div className="space-y-3">
              {project.units.map((unit, index) => (
                <div key={`${unit.bhk}-${index}`} className="p-4 rounded-lg border bg-slate-50">
                  <p className="font-semibold text-slate-900">{unit.bhk}</p>
                  <p className="text-slate-600">{unit.sqft} sq.ft</p>
                  <p className="text-green-700 font-bold">₹{unit.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bg-white rounded-xl p-5 shadow-sm border">
            <h3 className="font-bold text-lg mb-3">Quick Facts</h3>
            <p className="text-sm"><span className="font-semibold">Region:</span> {project.region || 'N/A'}</p>
            <p className="text-sm"><span className="font-semibold">Possession:</span> {project.possession || 'N/A'}</p>
            <p className="text-sm"><span className="font-semibold">Structure:</span> {project.structure || 'N/A'}</p>
            <p className="text-sm"><span className="font-semibold">RERA:</span> {project.reraId || 'N/A'}</p>
            <p className="text-sm"><span className="font-semibold">Type:</span> {project.type || 'Residential'}</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border">
            <h3 className="font-bold text-lg mb-3">Contact</h3>
            <a href="tel:+919031007097" className="block text-blue-700 font-medium">+91 9031007097</a>
            <a href="mailto:citizen.housing@citizencooperative.in" className="block text-blue-700 font-medium mt-1">citizen.housing@citizencooperative.in</a>
          </div>
        </aside>
      </section>
    </div>
  )
}
