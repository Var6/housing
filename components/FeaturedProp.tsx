'use client';

import { useState } from 'react';
import { MapPin, Bed, Bath, Square, Heart, Eye, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  originalPrice?: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  featured: boolean;
  rating: number;
  reviews: number;
  page: string;
}

export default function FeaturedProperties() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  const properties: Property[] = [
    {
      id: 91,
      title: "Centurion Luxury Farmhouse ",
      location: "Near Jewar Airport, Greater Noida",
      price: "Contact for Price",
      originalPrice: "",
      type: "Farmhouse",
      page:"properties/farmhouse",
      bedrooms: 1,
      bathrooms: 1,
      area: "1000* sq ft",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400",
      featured: true,
      rating: 4.8,
      reviews: 24
    },
    {
      id: 92,
      title: "Lotus Farmhouse ",
      location: "Noida ",
      price: "Contact for Price",
      type: "Farmhouse",
      bedrooms: 3,
      bathrooms: 2,
      page:"properties/farmhouse",
      area: "1500 sq ft",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400",
      featured: true,
      rating: 4.6,
      reviews: 18
    },
      {
      id: 1,
      title: "Piramal Mahalaxmi",
      location: "Jacob Circle, Mumbai",
      price: "₹5.60 Cr",
      originalPrice: "",
      type: "apartment",
      page: "properties/piramal-mahalaxmi",
      bedrooms: 2,
      bathrooms: 2,
      area: "762 sq ft",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400",
      featured: true,
      rating: 4.9,
      reviews: 45
    },
    {
      id: 2,
      title: "L&T Gateway",
      location: "Sewri, Mumbai",
      price: "₹6.52 Cr",
      type: "apartment",
      bedrooms: 3,
      bathrooms: 2,
      page: "properties/lt-gateway-sewri",
      area: "1258 sq ft",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400",
      featured: true,
      rating: 4.8,
      reviews: 38
    },
    {
      id: 3,
      title: "Piramal Aranya",
      location: "Rani Baug, Byculla, Mumbai",
      price: "₹6.10 Cr",
      type: "apartment",
      bedrooms: 3,
      bathrooms: 2,
      area: "1050 sq ft",
      page: "properties/details",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400",
      featured: true,
      rating: 4.9,
      reviews: 52
    },
    {
      id: 4,
      title: "Birla Niyaara",
      location: "Worli, Mumbai",
      price: "₹14.65 Cr",
      type: "apartment",
      bedrooms: 3,
      bathrooms: 3,
      area: "1151 sq ft",
      page: "properties/birla-niyaara-worli",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400",
      featured: true,
      rating: 4.9,
      reviews: 67
    },
    {
      id: 5,
      title: "L&T Island",
      location: "Mahim, Mumbai",
      price: "₹2.81 Cr",
      type: "apartment",
      bedrooms: 2,
      bathrooms: 2,
      area: "681 sq ft",
      page: "properties/details",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
      featured: true,
      rating: 4.7,
      reviews: 34
    },
    {
      id: 6,
      title: "Rustomjee Crown",
      location: "Prabhadevi, Mumbai",
      price: "₹18.90 Cr",
      type: "apartment",
      bedrooms: 4,
      bathrooms: 3,
      area: "2156 sq ft",
      page: "properties/details",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400",
      featured: true,
      rating: 4.9,
      reviews: 48
    },
    {
      id: 7,
      title: "180° Bay View",
      location: "Matunga, Mumbai",
      price: "₹4.15 Cr",
      type: "apartment",
      bedrooms: 2,
      bathrooms: 2,
      area: "824 sq ft",
      page: "properties/details",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400",
      featured: true,
      rating: 4.8,
      reviews: 29
    },
    {
      id: 8,
      title: "Godrej Horizon",
      location: "Wadala, Mumbai",
      price: "₹2.99 Cr",
      type: "apartment",
      bedrooms: 2,
      bathrooms: 2,
      area: "689 sq ft",
      page: "properties/details",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400",
      featured: true,
      rating: 4.7,
      reviews: 41
    },
    {
      id: 9,
      title: "L&T 77 Cross-Roads",
      location: "Ghatkopar, Mumbai",
      price: "₹1.17 Cr",
      type: "apartment",
      bedrooms: 1,
      bathrooms: 1,
      area: "413 sq ft",
      page: "properties/details",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400",
      featured: false,
      rating: 4.6,
      reviews: 25
    },
    {
      id: 10,
      title: "The Views by Adani",
      location: "Ghatkopar, Mumbai",
      price: "₹2.88 Cr",
      type: "apartment",
      bedrooms: 2,
      bathrooms: 2,
      area: "834 sq ft",
      page: "properties/details",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400",
      featured: true,
      rating: 4.8,
      reviews: 33
    },
    {
      id: 11,
      title: "Codename Triumph",
      location: "Kanjurmarg, Mumbai",
      price: "₹2.09 Cr",
      type: "apartment",
      bedrooms: 2,
      bathrooms: 2,
      area: "738 sq ft",
      page: "properties/details",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400",
      featured: false,
      rating: 4.7,
      reviews: 28
    },
    {
      id: 12,
      title: "Godrej Nurture",
      location: "LBS Marg, Bhandup, Mumbai",
      price: "₹1.65 Cr",
      type: "apartment",
      bedrooms: 2,
      bathrooms: 2,
      area: "655 sq ft",
      page: "properties/details",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400",
      featured: false,
      rating: 4.6,
      reviews: 22
    },
    {
      id: 13,
      title: "Piramal Revanta",
      location: "Mulund, Mumbai",
      price: "₹2.77 Cr",
      type: "apartment",
      bedrooms: 2,
      bathrooms: 2,
      area: "854 sq ft",
      page: "properties/details",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400",
      featured: true,
      rating: 4.8,
      reviews: 36
    },
    {
      id: 14,
      title: "Prestige City - Forest Hills",
      location: "Mulund, Mumbai",
      price: "₹2.89 Cr",
      type: "apartment",
      bedrooms: 3,
      bathrooms: 2,
      area: "1020 sq ft",
      page: "properties/details",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400",
      featured: true,
      rating: 4.9,
      reviews: 44
    },
    {
      id: 15,
      title: "Oberoi Enigma",
      location: "LBS Road, Mulund, Mumbai",
      price: "₹4.60 Cr",
      type: "apartment",
      bedrooms: 3,
      bathrooms: 3,
      area: "1127 sq ft",
      page: "properties/details",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400",
      featured: true,
      rating: 4.9,
      reviews: 51
    },
    {
      id: 16,
      title: "L&T Rejuve 360",
      location: "LBS Road, Mulund, Mumbai",
      price: "₹2.41 Cr",
      type: "apartment",
      bedrooms: 2,
      bathrooms: 2,
      area: "750 sq ft",
      page: "properties/details",
      image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?w=400",
      featured: false,
      rating: 4.7,
      reviews: 30
    },
    {
      id: 17,
      title: "Kalpataru Summit",
      location: "LBS Marg, Mulund, Mumbai",
      price: "₹1.76 Cr",
      type: "apartment",
      bedrooms: 0,
      bathrooms: 1,
      area: "454 sq ft",
      page: "properties/details",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
      featured: false,
      rating: 4.5,
      reviews: 18
    },
    {
      id: 18,
      title: "Puravankara Clermont",
      location: "Chembur, Mumbai",
      price: "₹2.45 Cr",
      type: "apartment",
      bedrooms: 2,
      bathrooms: 2,
      area: "533 sq ft",
      page: "properties/details",
      image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=400",
      featured: false,
      rating: 4.7,
      reviews: 26
    }
  ];

  const filters = [
    { key: 'all', label: 'All Properties' },
    { key: 'apartment', label: 'Apartments' },
    { key: 'house', label: 'Houses' },
    { key: 'villa', label: 'Villas' },
    { key: 'plot', label: 'Plots' }
  ];

  const filteredProperties = activeFilter === 'all' 
    ? properties 
    : properties.filter(p => p.type === activeFilter);

  const toggleFavorite = (id: number) => {
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
          {filteredProperties.map((property) => (
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
                {property.type !== 'plot' && (
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
                )}

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{property.price}</div>
                    {property.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">{property.originalPrice}</div>
                    )}
                  </div>
                  <Link href={`/${property.page}`}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1 group">
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
            <span>View All Properties</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}