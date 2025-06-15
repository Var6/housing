'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, MapPin, Bed, Bath, Square, ArrowRight, Star } from 'lucide-react';

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  originalPrice?: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
  featured: boolean;
  rating: number;
  reviews: number;
  agent: {
    name: string;
    verified: boolean;
  };
}

const featuredProperties: Property[] = [
  {
    id: '1',
    title: 'Luxury 3BHK Apartment in Boring Road',
    location: 'Boring Road, Patna',
    price: '₹85 Lakh',
    originalPrice: '₹95 Lakh',
    image: '/api/placeholder/400/300',
    bedrooms: 3,
    bathrooms: 2,
    area: '1,450 sq ft',
    type: 'Apartment',
    featured: true,
    rating: 4.8,
    reviews: 24,
    agent: {
      name: 'Rajesh Kumar',
      verified: true
    }
  },
  {
    id: '2',
    title: 'Independent Villa with Garden',
    location: 'Kankarbagh, Patna',
    price: '₹1.2 Crore',
    image: '/api/placeholder/400/300',
    bedrooms: 4,
    bathrooms: 3,
    area: '2,100 sq ft',
    type: 'Villa',
    featured: true,
    rating: 4.9,
    reviews: 18,
    agent: {
      name: 'Priya Singh',
      verified: true
    }
  },
  {
    id: '3',
    title: 'Modern 2BHK in Frazer Road',
    location: 'Frazer Road, Patna',
    price: '₹65 Lakh',
    image: '/api/placeholder/400/300',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,200 sq ft',
    type: 'Apartment',
    featured: true,
    rating: 4.7,
    reviews: 31,
    agent: {
      name: 'Amit Sharma',
      verified: true
    }
  },
  {
    id: '4',
    title: 'Commercial Plot in Danapur',
    location: 'Danapur, Patna',
    price: '₹45 Lakh',
    image: '/api/placeholder/400/300',
    bedrooms: 0,
    bathrooms: 0,
    area: '2,400 sq ft',
    type: 'Plot',
    featured: true,
    rating: 4.6,
    reviews: 12,
    agent: {
      name: 'Suresh Yadav',
      verified: true
    }
  }
];

export default function FeaturedProperties() {
  const [likedProperties, setLikedProperties] = useState<Set<string>>(new Set());

  const toggleLike = (propertyId: string) => {
    const newLiked = new Set(likedProperties);
    if (newLiked.has(propertyId)) {
      newLiked.delete(propertyId);
    } else {
      newLiked.add(propertyId);
    }
    setLikedProperties(newLiked);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
          Featured Properties
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Handpicked premium properties in Bihar's most sought-after locations with verified details and competitive pricing.
        </p>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {featuredProperties.map((property) => (
          <div
            key={property.id}
            className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Featured Badge */}
              {property.featured && (
                <div className="absolute top-3 left-3 bg-secondary-500 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}
              
              {/* Heart Icon */}
              <button
                onClick={() => toggleLike(property.id)}
                className="absolute top-3 right-3 p-2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full transition-all duration-200 group/heart"
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-200 ${
                    likedProperties.has(property.id)
                      ? 'text-red-500 fill-red-500'
                      : 'text-gray-600 group-hover/heart:text-red-500'
                  }`}
                />
              </button>

              {/* Price Overlay */}
              <div className="absolute bottom-3 left-3 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg px-3 py-1">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">{property.price}</span>
                  {property.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{property.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Title and Location */}
              <div className="mb-3">
                <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>{property.location}</span>
                </div>
              </div>

              {/* Property Details */}
              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                {property.type !== 'Plot' ? (
                  <>
                    <div className="flex items-center space-x-1">
                      <Bed className="w-3 h-3" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bath className="w-3 h-3" />
                      <span>{property.bathrooms}</span>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center space-x-1">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {property.type}
                    </span>
                  </div>
                )}
                <div className="flex items-center space-x-1">
                  <Square className="w-3 h-3" />
                  <span>{property.area}</span>
                </div>
              </div>

              {/* Rating and Reviews */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">{property.rating}</span>
                  <span className="text-xs text-gray-500">({property.reviews} reviews)</span>
                </div>
                {property.agent.verified && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    Verified Agent
                  </span>
                )}
              </div>

              {/* Agent Info */}
              <div className="text-xs text-gray-500 mb-3">
                Agent: {property.agent.name}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Link
                  href={`/properties/${property.id}`}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 text-center"
                >
                  View Details
                </Link>
                <button className="px-3 py-2 border border-gray-300 hover:border-primary-300 hover:text-primary-600 text-gray-600 rounded-lg text-sm transition-colors duration-200">
                  Contact
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Link
          href="/properties"
          className="inline-flex items-center space-x-2 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 group"
        >
          <span>View All Properties</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}