'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Search, MapPin, TreePine, Building2 } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-900 px-4 py-12 sm:py-16">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_25%,#6ee7b7_0,transparent_28%),radial-gradient(circle_at_85%_12%,#34d399_0,transparent_24%)]" />

      <div className="relative mx-auto flex min-h-[80vh] w-full max-w-5xl items-center justify-center">
        <div className="w-full rounded-3xl border border-emerald-200/20 bg-white/10 p-6 text-center shadow-[0_20px_60px_-30px_rgba(6,95,70,0.65)] backdrop-blur-xl sm:p-10">
          <div className="mx-auto mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full border border-emerald-200/30 bg-emerald-100/10">
            <Home className="h-12 w-12 text-emerald-200" />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Error 404</p>
          <h1 className="mt-3 text-4xl font-extrabold text-white md:text-6xl">Page Not Found</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-emerald-100 md:text-lg">
            This page is not available right now. It may have moved, been removed, or the URL may be incorrect.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-emerald-900 transition hover:bg-emerald-50"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-100/50 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-emerald-900"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
          </div>

          <div className="mt-10 rounded-2xl border border-emerald-200/25 bg-white/10 p-5 sm:p-6">
            <h2 className="text-lg font-bold text-white sm:text-xl">Popular Links</h2>
            <div className="mt-4 grid gap-3 text-left sm:grid-cols-2">
              <Link
                href="/properties/farmhouse"
                className="group flex items-center gap-3 rounded-xl border border-emerald-200/20 bg-white/10 p-4 transition hover:bg-white/20"
              >
                <TreePine className="h-5 w-5 text-emerald-200" />
                <div>
                  <p className="font-semibold text-white">Farmhouse</p>
                  <p className="text-sm text-emerald-100">Countryside options</p>
                </div>
              </Link>

              <Link
                href="/properties/commercial"
                className="group flex items-center gap-3 rounded-xl border border-emerald-200/20 bg-white/10 p-4 transition hover:bg-white/20"
              >
                <Building2 className="h-5 w-5 text-emerald-200" />
                <div>
                  <p className="font-semibold text-white">Commercial</p>
                  <p className="text-sm text-emerald-100">Business properties</p>
                </div>
              </Link>

              <Link
                href="/properties/plot"
                className="group flex items-center gap-3 rounded-xl border border-emerald-200/20 bg-white/10 p-4 transition hover:bg-white/20"
              >
                <MapPin className="h-5 w-5 text-emerald-200" />
                <div>
                  <p className="font-semibold text-white">Plots</p>
                  <p className="text-sm text-emerald-100">Land opportunities</p>
                </div>
              </Link>

              <Link
                href="/properties"
                className="group flex items-center gap-3 rounded-xl border border-emerald-200/20 bg-white/10 p-4 transition hover:bg-white/20"
              >
                <Search className="h-5 w-5 text-emerald-200" />
                <div>
                  <p className="font-semibold text-white">All Properties</p>
                  <p className="text-sm text-emerald-100">Browse complete listings</p>
                </div>
              </Link>
            </div>
          </div>

          <p className="mt-7 text-sm text-emerald-100">
            Need help?{' '}
            <a
              href="mailto:citizen.housing@citizencooperative.in"
              className="font-semibold text-white underline underline-offset-4"
            >
              citizen.housing@citizencooperative.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}