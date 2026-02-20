'use client'

import Link from 'next/link'
import { MapPin, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { farmhouseProperties } from '@/data/farmhouse'

export default function FarmhouseListingPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProperties = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()
    if (!term) return farmhouseProperties

    return farmhouseProperties.filter((property) =>
      `${property.name} ${property.location} ${property.city}`.toLowerCase().includes(term),
    )
  }, [searchTerm])

  return (
    <div className="min-h-screen bg-green-50">
      <section className="bg-gradient-to-r from-green-800 to-emerald-700 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Farmhouse Properties</h1>
          <p className="text-green-100 text-lg mb-6">Explore premium farmhouse options in Greater Noida</p>
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-700" />
            <input
              type="text"
              placeholder="Search by name or location..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full rounded-xl bg-white pl-12 pr-4 py-3 text-slate-900 outline-none ring-2 ring-transparent focus:ring-green-500"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProperties.map((property) => (
            <article key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-green-100">
              <img src={property.image} alt={property.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <p className="text-green-700 text-sm font-semibold mb-2">{property.type}</p>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{property.name}</h2>
                <div className="flex items-center gap-2 text-slate-600 mb-4">
                  <MapPin className="w-4 h-4 text-green-700" />
                  <span>{property.location}</span>
                </div>
                <p className="text-slate-700 mb-5 line-clamp-2">{property.description}</p>
                <Link
                  href={`/properties/farmhouse/${property.id}`}
                  className="inline-flex items-center rounded-lg bg-green-700 px-5 py-3 text-white font-semibold hover:bg-green-800 transition"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-20 text-slate-600">No farmhouse properties matched your search.</div>
        )}
      </section>
    </div>
  )
}
