'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Home, IndianRupee, Filter } from 'lucide-react';

interface SearchFormData {
  location: string;
  propertyType: string;
  priceRange: string;
  purpose: string;
}

const locations = [
  'Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Darbhanga', 
  'Bihar Sharif', 'Arrah', 'Begusarai', 'Katihar', 'Munger'
];

const propertyTypes = [
  'Apartment', 'Independent House', 'Villa', 'Plot/Land', 
  'Commercial', 'Agricultural Land', 'Penthouse'
];

const priceRanges = [
  'Under ₹10 Lakh', '₹10-25 Lakh', '₹25-50 Lakh', 
  '₹50 Lakh-1 Crore', '₹1-2 Crore', 'Above ₹2 Crore'
];

export default function SearchForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<SearchFormData>({
    location: '',
    propertyType: '',
    priceRange: '',
    purpose: 'buy'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build search query parameters
    const searchParams = new URLSearchParams();
    if (formData.location) searchParams.append('location', formData.location);
    if (formData.propertyType) searchParams.append('type', formData.propertyType);
    if (formData.priceRange) searchParams.append('price', formData.priceRange);
    if (formData.purpose) searchParams.append('purpose', formData.purpose);

    // Navigate to search results
    router.push(`/properties/search?${searchParams.toString()}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* Purpose Toggle */}
      <div className="bg-gray-50 p-2">
        <div className="flex rounded-lg bg-white p-1 max-w-md mx-auto">
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, purpose: 'buy' }))}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
              formData.purpose === 'buy'
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-primary-600'
            }`}
          >
            Buy
          </button>
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, purpose: 'rent' }))}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
              formData.purpose === 'rent'
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-primary-600'
            }`}
          >
            Rent
          </button>
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, purpose: 'sell' }))}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
              formData.purpose === 'sell'
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-primary-600'
            }`}
          >
            Sell
          </button>
        </div>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Location */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900"
              >
                <option value="">Select Location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Property Type */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property Type
            </label>
            <div className="relative">
              <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                value={formData.propertyType}
                onChange={(e) => setFormData(prev => ({ ...prev, propertyType: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900"
              >
                <option value="">Property Type</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Price Range */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range
            </label>
            <div className="relative">
              <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                value={formData.priceRange}
                onChange={(e) => setFormData(prev => ({ ...prev, priceRange: e.target.value }))}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-900"
              >
                <option value="">Price Range</option>
                {priceRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex flex-col justify-end">
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 group"
            >
              <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Quick Filters */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Quick Filters:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="px-3 py-1 text-xs bg-gray-100 hover:bg-primary-100 hover:text-primary-700 text-gray-600 rounded-full transition-colors duration-200"
                >
                  2 BHK
                </button>
                <button
                  type="button"
                  className="px-3 py-1 text-xs bg-gray-100 hover:bg-primary-100 hover:text-primary-700 text-gray-600 rounded-full transition-colors duration-200"
                >
                  3 BHK
                </button>
                <button
                  type="button"
                  className="px-3 py-1 text-xs bg-gray-100 hover:bg-primary-100 hover:text-primary-700 text-gray-600 rounded-full transition-colors duration-200"
                >
                  Ready to Move
                </button>
                <button
                  type="button"
                  className="px-3 py-1 text-xs bg-gray-100 hover:bg-primary-100 hover:text-primary-700 text-gray-600 rounded-full transition-colors duration-200"
                >
                  Under Construction
                </button>
              </div>
            </div>
            
            <button
              type="button"
              className="flex items-center space-x-1 text-sm text-primary-600 hover:text-primary-700 transition-colors duration-200"
            >
              <Filter className="w-4 h-4" />
              <span>Advanced Filters</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}