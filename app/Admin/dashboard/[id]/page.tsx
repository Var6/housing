import Link from 'next/link'
import { notFound } from 'next/navigation'
import PropertyEditor from '@/components/admin/PropertyEditor'
import { getPropertyBySlug } from '@/lib/property-service'

export const dynamic = 'force-dynamic'

export default async function EditPropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const item = await getPropertyBySlug(id)

  if (!item) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Link href="/Admin/dashboard" className="text-blue-700 font-semibold">← Back to Dashboard</Link>
        <h1 className="text-3xl font-bold text-slate-900 mt-4 mb-6">Edit {item.kind === 'farmhouse' ? 'Farmland' : 'Property'}</h1>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <PropertyEditor initial={item} />
        </div>
      </div>
    </div>
  )
}
