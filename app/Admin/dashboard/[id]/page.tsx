import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  Plus,
  Pencil,
  Home,
  TreePine,
  Landmark,
  Layers,
  Sparkles,
  ChevronRight,
} from 'lucide-react'
import PropertyEditor from '@/components/admin/PropertyEditor'
import { getAllProperties, getPropertyBySlug } from '@/lib/property-service'
import type { Unit } from '@/types/property'

export const dynamic = 'force-dynamic'

interface PageParams {
  params: Promise<{ id: string }>
}

const EMPTY_PROPERTY = {
  id: '',
  kind: 'property' as const,
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
  units: [] as Unit[],
  images: [] as string[],
  farmhouseDetails: null,
  landDetails: null,
}

function deriveAvailableTypes(
  properties: Awaited<ReturnType<typeof getAllProperties>>,
): string[] {
  return Array.from(
    new Map(
      properties
        .map((p) => String(p.type ?? '').trim())
        .filter(Boolean)
        .map((t) => [t.toLowerCase(), t]),
    ).values(),
  ).sort()
}

function KindIcon({ kind }: { kind?: string }) {
  if (kind === 'farmhouse') return <TreePine className="w-5 h-5" />
  if (kind === 'land') return <Landmark className="w-5 h-5" />
  return <Home className="w-5 h-5" />
}

function StatusBadge({ isNew }: { isNew: boolean }) {
  return isNew ? (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/40 bg-emerald-300/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-100">
      <Plus className="h-3.5 w-3.5" />
      New Listing
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/40 bg-amber-300/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-100">
      <Pencil className="h-3.5 w-3.5" />
      Editing
    </span>
  )
}

export default async function EditPropertyPage({ params }: PageParams) {
  const { id } = await params
  const isNew = id === 'new'

  const [allProperties, item] = await Promise.all([
    getAllProperties(),
    isNew ? Promise.resolve(null) : getPropertyBySlug(id),
  ])

  if (!isNew && !item) notFound()

  const initial = item ?? EMPTY_PROPERTY
  const availableTypes = deriveAvailableTypes(allProperties)
  const editLabel = item?.kind === 'farmhouse' ? 'Farmhouse' : item?.kind === 'land' ? 'Land' : 'Property'
  const pageTitle = isNew ? 'Create New Listing' : `Edit ${editLabel}`
  const pageSubtitle = isNew
    ? 'Add media, unit plans, and all listing metadata.'
    : `${item?.name ?? id} — update details, gallery, and pricing.`

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-r from-slate-800 via-emerald-900 to-teal-900 py-5">
         <div className="relative z-10 mx-auto flex h-14 max-w-7xl items-center gap-3 px-4 md:px-6">
          <Link
            href={"/Admin/dashboard"}
            className="group inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-medium text-slate-300 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
            Dashboard
 </Link>
          <ChevronRight className="h-4 w-4 text-slate-300" />
          <span className="text-sm text-slate-300">Listings</span>
          <ChevronRight className="h-4 w-4 text-slate-300" />
          <span className="max-w-[220px] truncate text-sm font-semibold text-slate-500">
            {isNew ? 'New' : item?.name ?? id}
          </span>
         

          <div className="ml-auto" />
          <div className="hidden sm:block">
            <StatusBadge isNew={isNew} />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,#34d399_0,transparent_35%),radial-gradient(circle_at_80%_10%,#5eead4_0,transparent_30%)]" />
        <div className="relative mx-auto flex max-w-7xl items-center gap-4 px-4 py-10 md:px-6 md:py-12">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-white shadow-lg backdrop-blur">
            <KindIcon kind={item?.kind} />
          </div>

          <div className="min-w-0">
            <p className="mb-1 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200/90">
              <Sparkles className="h-3.5 w-3.5" />
              Admin · Listings
            </p>
            <h1 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              {pageTitle}
            </h1>
            <p className="mt-1.5 text-sm text-emerald-100/85">{pageSubtitle}</p>
          </div>

          {!isNew && item?.units && (
            <div className="ml-auto hidden items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-white backdrop-blur md:flex">
              <Layers className="h-4 w-4 text-emerald-200" />
              <span className="text-sm font-semibold">{item.units.length}</span>
              <span className="text-sm text-emerald-100/90">units</span>
            </div>
          )}
        </div>
         <div className="flex items-center justify-between  px-5 py-3.5 md:px-6">
       <p className="text-[16px] font-bold uppercase tracking-[0.18em] text-slate-200 pl-25">
              Listing Details
            </p>
            {!isNew && item?.kind && (
              <span className="text-xs font-semibold tracking-wide text-slate-900 pr-19">
                Kind: <span className="capitalize text-slate-200">{item.kind}</span>
              </span>
            )}
            </div>
      </section>

      {/* Content */}
      <main className="mx-auto  px-4 py-8 md:px-6 md:py-10">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_35px_-18px_rgba(2,6,23,0.35)]">
          <div className="p-5 md:p-8">
            <PropertyEditor
              initial={initial}
              availableTypes={availableTypes}
              isNew={isNew}
            />
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-slate-500">
          Changes are saved after form submission.
        </p>
      </main>
    </div>
  )
}