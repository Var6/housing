'use client';

import Link from 'next/link';
import { MapPin, TrendingUp, Building } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  district: string;
  image: string;
  propertyCount: number;
  averagePrice: string;
  priceGrowth: string;
  popular: boolean;
  description: string;
}

const popularLocations: Location[] = [
  {
    id: 'patna-boring-road',
    name: 'Boring Road',
    district: 'Patna',
    image: '/api/placeholder/600/400',
    propertyCount: 245,
    averagePrice: '₹75 Lakh',
    priceGrowth: '+12%',
    popular: true,
    description: 'Premium residential area with excellent connectivity and modern amenities.'
  },
  {
    id: 'patna-kankarbagh',
    name: 'Kankarbagh',
    district: 'Patna',
    image: '/api/placeholder/600/400',
    propertyCount: 189,
    averagePrice: '₹85 Lakh',
    priceGrowth: '+8%',
    popular: true,
    description: 'Upscale locality known for independent houses and villas.'
  },
  {
    id: 'patna-frazer-road',
    name: 'Frazer Road',
    district: 'Patna',
    image: '/api/placeholder/600/400',
    propertyCount: 156,
    averagePrice: '₹65 Lakh',
    priceGrowth: '+15%',
    popular: true,
    description: 'Central location with great shopping and dining options.'
  },
  {
    id: 'gaya-central',
    name: 'Gaya Central',
    district: 'Gaya',
    image: '/api/placeholder/600/400',
    propertyCount: 98,
    averagePrice: '₹35 Lakh',
    priceGrowth: '+18%',
    popular: false,
    description: 'Historic city center with growing real estate opportunities.'
  },
  {
    id: 'muzaffarpur-mithanpura',
    name: 'Mithanpura',
    district: 'Muzaffarpur',
    image: '/api/placeholder/600/400',
    propertyCount: 124,
    averagePrice: '₹42 Lakh',
    priceGrowth: '+10%',
    popular: false,
    description: 'Emerging residential hub with modern infrastructure.'
  },
  {
    id: 'bhagalpur-tatarpur',
    name: 'Tatarpur',
    district: 'Bhagalpur',
    image: '/api/placeholder/600/400',
    propertyCount: 76,
    averagePrice: '₹28 Lakh',
    priceGrowth: '+22%',
    popular: false,
    description: 'Rapidly developing area with affordable housing options.'
  }
];

export default function PopularLocations() {
  const featuredLocations = popularLocations.slice(0, 3);
  const otherLocations = popularLocations.slice(3);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
          Popular Locations in Bihar
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore the most sought-after residential and commercial areas across Bihar with promising investment potential.
        </p>
      </div>

      {/* Featured Locations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {featuredLocations.map((location, index) => (
          <Link
            key={location.id}
            href={`/locations/${location.id}`}
            className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
              index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
            }`}
          >
            {/* Background Image */}
            <div className={`relative ${index === 0 ? 'h-96' : 'h-64'}`}>
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              {/* Popular Badge */}
              {location.popular && (
                <div className="absolute top-4 left-4 bg-secondary-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              {/* Price Growth Badge */}
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                <TrendingUp className="w-3 h-3" />
                <span>{location.priceGrowth}</span>
              </div>

              {/* Location Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm opacity-90">{location.district}</span>
                </div>
                
                <h3 className={`font-bold font-heading ${index === 0 ? 'text-3xl' : 'text-xl'}`}>
                  {location.name}
                </h3>
                
                <p className={`text-gray-200 ${index === 0 ? 'text-base' : 'text-sm'} line-clamp-2`}>
                  {location.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between pt-2 border-t border-white/20">
                  <div className="flex items-center space-x-1">
                    <Building className="w-4 h-4" />
                    <span className="text-sm">{location.propertyCount} Properties</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-75">Avg Price</div>
                    <div className="font-semibold">{location.averagePrice}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Other Locations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {otherLocations.map((location) => (
          <Link
            key={location.id}
            href={`/locations/${location.id}`}
            className="group bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-32">
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {location.name}
                </h3>
                <div className="flex items-center space-x-1 text-green-600 text-sm font-medium">
                  <TrendingUp className="w-3 h-3" />
                  <span>{location.priceGrowth}</span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 text-sm mb-2">
                <MapPin className="w-3 h-3 mr-1" />
                <span>{location.district}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-1 text-gray-600">
                  <Building className="w-3 h-3" />
                  <span>{location.propertyCount} Properties</span>
                </div>
                <div className="font-semibold text-gray-900">
                  {location.averagePrice}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Locations */}
      <div className="text-center">
        <Link
          href="/locations"
          className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
        >
          <span>Explore All Locations</span>
          <MapPin className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}