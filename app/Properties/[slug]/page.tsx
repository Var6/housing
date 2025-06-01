'use client';

import { useParams } from 'next/navigation';
import { properties } from '@/data';
import { slugify } from '@/lib/slugify';
import Image from 'next/image';

export default function PropertySlugPage() {
  const { slug } = useParams();
  const property = properties.find((p) => slugify(p.title) === slug);

  return (
    <main className="max-w-6xl mx-auto py-16 px-6 space-y-12">
      <h1 className="text-5xl font-bold text-green-900">{property?.title || 'Property Not Found'}</h1>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {property?.images?.map((img, idx) => (
          <div key={idx} className="relative aspect-video rounded-xl overflow-hidden shadow border">
            <Image src={img} alt={`Gallery ${idx + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Property Info */}
      <section className="bg-white rounded-3xl shadow-xl p-8 space-y-4 text-lg">
        <div><strong>🏠 Owner:</strong> {property?.owner || '-'}</div>
        <div><strong>📍 Address:</strong> {property?.address || '-'}</div>
        <div><strong>🗺️ Location:</strong> {property?.location || '-'}</div>
        <div><strong>📌 Landmark:</strong> {property?.landmark || '-'}</div>
        <div><strong>📐 Size:</strong> {property?.size || '-'}</div>
        <div><strong>📄 Details:</strong> {property?.details || '-'}</div>
      </section>

      {/* Side Boundaries */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {['east', 'west', 'north', 'south'].map((dir) => (
          <div
            key={dir}
            className="bg-green-50 rounded-xl p-4 text-center shadow-sm border"
          >
            <strong className="capitalize">{dir}:</strong>
            <div>{property?.sides?.[dir as keyof typeof property.sides] || 'N/A'}</div>
          </div>
        ))}
      </div>

      {/* Documents */}
      <section className="bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold mb-4">📁 Property Documents</h2>
        <div className="flex flex-wrap gap-4">
          {property?.documents?.map((doc, idx) => (
            <a
              key={idx}
              href={doc}
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 rounded-xl shadow hover:shadow-md transition"
            >
              <Image src={doc} alt={`Document ${idx + 1}`} width={120} height={160} className="object-contain" />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
