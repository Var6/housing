import Link from 'next/link'
import {
  ArrowRight,
  Building2,
  Plus,
  ShieldCheck,
  TreePine,
} from 'lucide-react'
import LogoutButton from '@/components/admin/LogoutButton'
import DashboardClient from '@/components/admin/DashboardClient'
import { getAllProperties, getDashboardAnalytics } from '@/lib/property-service'

export const dynamic = 'force-dynamic'

export default async function AdminDashboardPage() {
  const [analytics, allResidential, allFarmland] = await Promise.all([
    getDashboardAnalytics(),
    getAllProperties('property'),
    getAllProperties('farmhouse'),
  ])

  const totalListings = analytics.totalListings
  const residentialCount = analytics.totalResidential
  const farmlandCount = analytics.totalFarmhouses

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_14px_35px_-22px_rgba(2,6,23,0.45)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(59,130,246,0.10),transparent_34%),radial-gradient(circle_at_85%_10%,rgba(16,185,129,0.10),transparent_28%)]" />
          <div className="relative flex flex-col gap-6 p-6 md:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  Admin Console
                </p>
                <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                  Listings Dashboard
                </h1>
                <p className="mt-1.5 text-sm text-slate-600 md:text-base">
                  Track inventory, jump into edits, and keep residential and farmland listings up to date.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <Link
                  href="/Admin/dashboard/new"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
                >
                  <Plus className="h-4 w-4" />
                  Create Listing
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  View Site
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <LogoutButton />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Total Listings</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-2xl font-extrabold text-slate-900">{totalListings}</span>
                </div>
              </article>
              <article className="rounded-2xl border border-emerald-200/70 bg-emerald-50/60 px-4 py-3.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Residential</p>
                <div className="mt-1 flex items-center gap-2 text-emerald-900">
                  <Building2 className="h-4 w-4" />
                  <span className="text-2xl font-extrabold">{residentialCount}</span>
                </div>
              </article>
              <article className="rounded-2xl border border-emerald-200/70 bg-emerald-50/70 px-4 py-3.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Farmland</p>
                <div className="mt-1 flex items-center gap-2 text-emerald-900">
                  <TreePine className="h-4 w-4" />
                  <span className="text-2xl font-extrabold">{farmlandCount}</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="my-12">
        </section>

        <div className="mt-6 md:mt-7">
          <DashboardClient
            analytics={analytics}
            residential={allResidential.map((p) => ({
              id: p.id,
              name: p.name,
              city: p.city,
              developer: p.developer,
              location: p.location,
              type: p.type,
            }))}
            farmland={allFarmland.map((p) => ({
              id: p.id,
              name: p.name,
              city: p.city,
              developer: p.developer,
              location: p.location,
              type: p.type,
            }))}
          />
        </div>
      </div>
    </div>
  )
}
