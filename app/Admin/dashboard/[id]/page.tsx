import Link from 'next/link'
import { notFound } from 'next/navigation'
import PropertyEditor from '@/components/admin/PropertyEditor'
import { getAllProperties, getPropertyBySlug } from '@/lib/property-service'

export const dynamic = 'force-dynamic'

export default async function EditPropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [allItems, item] = await Promise.all([
    getAllProperties(),
    id === 'new' ? Promise.resolve(null) : getPropertyBySlug(id),
  ])

  const availableTypes = Array.from(
    new Set(allItems.map((property) => property.type).filter(Boolean)),
  ).sort()

  const isNew = id === 'new'

  if (!isNew && !item) {
    notFound()
  }

  const initial =
    item ||
    ({
      id: '',
      kind: 'property',
      name: '',
      developer: '',
      location: '',
      city: '',
      state: '',
      region: '',
      type: '',
      association: '',
      possession: '',
      structure: '',
      reraId: '',
      priceVisible: true,
      units: [],
      images: [],
      farmhouseDetails: null,
    })

  const editLabel = item?.kind === 'farmhouse' ? 'Farmland' : 'Property'

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Link href="/Admin/dashboard" className="text-blue-700 font-semibold">← Back to Dashboard</Link>
        <h1 className="text-3xl font-bold text-slate-900 mt-4 mb-6">
          {isNew ? 'Create Property' : `Edit ${editLabel}`}
        </h1>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <PropertyEditor initial={initial} availableTypes={availableTypes} isNew={isNew} />
        </div>
      </div>
    </div>
  )
}
