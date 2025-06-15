'use client';

import Link from 'next/link';
import { Building, Home, TreePine, Store, Factory, Mountain } from 'lucide-react';

interface PropertyType {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  count: number;
  startingPrice: string;
  image: string;
  popular: boolean;
}

const propertyTypes: PropertyType[] = [
  {
    id: 'apartment',
    name: 'Apartments',
    icon: <Building className="w-8 h-8" />,
    description: 'Modern apartments with premium amenities in prime locations',
    count: 1240,
    startingPrice: '₹25 Lakh',
    image: '/api/placeholder/300/200',
    popular: true
  },
  {
    id: 'villa',
    name: 'Villas & Houses',
    icon: <Home className="w-8 h-8" />,
    description: 'Independent houses and luxury villas with gardens',
    count: 856,
    startingPrice: '₹65 Lakh',
    image: '/api/placeholder/300/200',
    popular: true
  },
  {
    id: 'plot',
    name: 'Residential Plots',
    icon: <TreePine className="w-8 h-8" />,
    description: 'Ready-to-build residential plots in developing areas',
    count: 532,
    startingPrice: '₹15 Lakh',
    image: '/api/placeholder/300/200',
    popular: false
  },
  {
    id: 'commercial',
    name: 'Commercial',
    icon: <Store className="w-8 h-8" />,
    description: 'Office spaces, shops, and commercial properties',
    count: 298,
    startingPrice: '₹45 Lakh',
    image: '/api/placeholder/300/200',
    popular: false
  },
  {
    id: 'industrial',
    name: 'Industrial',
    icon: <Factory className="w-8 h-8" />,
    description: 'Warehouses, factories, and industrial land',
    count: 124,
    startingPrice: '₹80 Lakh',
    image: '/api/placeholder/300/200',
    popular: false
  },
  {
    id: 'agricultural',
    name: 'Agricultural Land',
    icon: <Mountain className="w-8 h-8" />,
    description: 'Fertile agricultural land for farming and investment',
    count: 189,
    startingPrice: '₹8 Lakh',
    image: '/api/placeholder/300/200',
    popular: true
  }
];

export default function PropertyTypes() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
            Explore Property Types
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect property type that matches your needs and budget across Bihar.
          </p>
        </div>

        {/* Property Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyTypes.map((type) => (
            <Link
              key={type.id}
              href={`/properties?type=${type.id}`}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200"
            >
              {/* Popular Badge */}
              {type.popular && (
                <div className="absolute top-4 left-4 z-10 bg-secondary-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}

              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={type.image}
                  alt={type.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm p-3 rounded-xl group-hover:bg-primary-100 transition-colors duration-300">
                  <div className="text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
                    {type.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                    {type.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Starting from</div>
                    <div className="font-bold text-primary-600">{type.startingPrice}</div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {type.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {type.count.toLocaleString()} Properties Available
                  </div>
                  <div className="text-primary-600 group-hover:text-primary-700 font-medium text-sm">
                    View Properties →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-600 mb-6">
              Our property experts can help you find the perfect property based on your specific requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Speak to Expert
              </Link>
              <Link
                href="/properties/search"
                className="border border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Advanced Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}