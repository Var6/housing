'use client'

import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, ArrowLeft, Check } from 'lucide-react'
import { farmhouseProperties } from '@/data/farmhouse'

export default function FarmhouseSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params)
  const property = farmhouseProperties.find((item) => item.id === slug)

  if (!property) {
    notFound()
  }

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
              {property.images.map((image, index) => (
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
              {property.nearbyPlaces.map((place) => (
                <div key={place} className="flex items-start gap-3 rounded-lg bg-green-50 p-3">
                  <MapPin className="w-5 h-5 text-green-700 mt-0.5" />
                  <span className="text-slate-700">{place}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-green-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
            <p className="text-slate-700 leading-relaxed">{property.description}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-green-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {property.features.map((feature) => (
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
              {property.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-5">
          <img src={property.images[0]} alt={property.name} className="w-full rounded-2xl h-56 object-cover border border-green-100" />
          <div className="grid grid-cols-2 gap-3">
            {property.images.slice(1).map((image) => (
              <img key={image} src={image} alt={property.name} className="rounded-xl h-28 w-full object-cover border border-green-100" />
            ))}
          </div>

          <div className="bg-white rounded-2xl p-5 border border-green-100">
            <h3 className="font-bold text-lg text-slate-900 mb-3">Property Details</h3>
            <div className="space-y-2 text-sm text-slate-700">
              <p><span className="font-semibold">Price:</span> {property.price}</p>
              <p><span className="font-semibold">Area:</span> {property.area}</p>
              <p><span className="font-semibold">Type:</span> {property.type}</p>
              <p><span className="font-semibold">Location:</span> {property.city}, {property.state}</p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}
