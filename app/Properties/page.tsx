'use client';

import { properties } from '@/data';
import { slugify } from '@/lib/slugify';
import { Button } from '@heroui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function OurProperty() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50 py-24 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-5xl font-extrabold text-green-800 mb-20">
        Our Properties
      </h1>

      <div className="max-w-[1600px] mx-auto space-y-20">
        {properties.map((property) => (
          <div
            key={property.id}
            onClick={() => router.push(`/Properties/${slugify(property.title)}`)}
            className="group cursor-pointer flex flex-col lg:flex-row w-full bg-white border border-gray-200 rounded-4xl overflow-hidden shadow-xl transition-all hover:shadow-2xl hover:scale-[1.01]"
          >
            {/* Image Section */}
            <div className="lg:w-[55%] w-full h-72 lg:h-[400px] overflow-hidden">
              <Image
                height={400}
                width={600}
                src={property.thumbnail}
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Text Section */}
            <div className="lg:w-[45%] w-full px-8 py-10 flex flex-col justify-center space-y-4">
              <h2 className="text-4xl font-bold text-green-800">{property.title}</h2>
              <p className="text-gray-700 text-lg"><strong>📍 Location:</strong> {property.location}</p>
              <p className="text-gray-700 text-lg"><strong>📐 Size:</strong> {property.size}</p>
              <p className="text-gray-700 text-lg"><strong>🗺️ Landmark:</strong> {property.landmark}</p>

              <div className="pt-6">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button
                    color="success"
                    className="px-6 py-3 text-white text-base rounded-lg hover:bg-green-700 transition mx-0 sm:mx-3"
                  >
                    <Link
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                        property.location
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full h-full flex items-center justify-center"
                    >
                      📌 Get Directions
                    </Link>
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/Properties/${slugify(property.title)}`);
                    }}
                    className="px-6 py-3 bg-black text-white text-base rounded-lg hover:bg-gray-800 transition mx-0 sm:mx-3"
                  >
                    🏡 View Property
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
