'use client';

import { useState } from 'react';
import { MapPin, Bed, Bath, Square, Heart, Eye, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { sortTypeLabelsByPriority } from '@/lib/listing-priority';

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  originalPrice?: string;
  type: string;
  bedrooms?: number;
  bathrooms?: number;
  area: string;
  image: string;
  kind: 'property' | 'farmhouse';
  featured?: boolean;
  rating: number;
  reviews: number;
  association?: string
}

export default function FeaturedProperties({ properties }: { properties: Property[] }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [favorites, setFavorites] = useState<string[]>([]);

  const filters = [
    { key: 'all', label: 'All Properties' },
    ...sortTypeLabelsByPriority(Array.from(new Set(properties.map((p) => p.type?.trim()).filter(Boolean)))).map((type) => ({
      key: type.toLowerCase(),
      label: type,
    })),
  ];

  const filteredProperties = activeFilter === 'all' 
    ? properties 
    : properties.filter((p) => p.type.toLowerCase() === activeFilter);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Properties</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties across major cities in India
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                activeFilter === filter.key
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => {
            const href = property.kind === 'farmhouse'
              ? `/properties/farmhouse/${property.id}`
              : `/properties/${property.id}`;

            return (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.featured && (
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                  {property.originalPrice && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Sale
                    </span>
                  )}
                </div>
                {/* Actions */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      favorites.includes(property.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className="h-5 w-5" fill={favorites.includes(property.id) ? 'currentColor' : 'none'} />
                  </button>
                  <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-blue-500 hover:text-white transition-all duration-300">
                    <Eye className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700 ml-1">{property.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({property.reviews} reviews)</span>
                </div>

                {/* Title & Location */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Features */}
                {property.type !== 'plot' && property.type !== 'commercial' ? (
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.bedrooms} Bed</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.bathrooms} Bath</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.area}</span>
                    </div>
                  </div>
                ):(<></>)}

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{property.price}</div>
                    {property.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">{property.originalPrice}</div>
                    )}
                  </div>
                  <Link href={href}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1 group">
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  </Link>
                  
                </div>
                {
                  property.association ?(
                    <div className='text-red-600 pt-4 text-center'>In Association with {property.association}</div>

                  ):(
                    <></>
                  )
                }
              </div>
            </div>
          )})}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/properties" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 mx-auto">
            <span>View All Properties</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}