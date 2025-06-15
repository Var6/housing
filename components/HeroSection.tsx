'use client';

import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz4KPHN2Zz4=')] opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-heading leading-tight">
              Find Your Perfect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-accent-400">
                Home in Bihar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover premium properties across Bihar with verified listings, 
              transparent pricing, and trusted sellers on Bihar's #1 property platform.
            </p>
          </div>

          {/* Features Badge */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-2 border border-white border-opacity-20">
              <span className="text-white font-medium">✓ 10,000+ Properties</span>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-2 border border-white border-opacity-20">
              <span className="text-white font-medium">✓ Verified Listings</span>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-2 border border-white border-opacity-20">
              <span className="text-white font-medium">✓ All 38 Districts</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/properties"
              className="group bg-secondary-500 hover:bg-secondary-600 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2 min-w-[200px] justify-center"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/sell"
              className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2 min-w-[200px] justify-center"
            >
              <span>List Your Property</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Video/Demo Section */}
          <div className="flex justify-center">
            <button className="group flex items-center space-x-3 text-white hover:text-secondary-400 transition-colors duration-300">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 group-hover:bg-opacity-30 transition-all duration-300">
                <Play className="w-6 h-6 ml-1" />
              </div>
              <span className="text-lg font-medium">Watch How It Works</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
          <div className="text-white text-sm font-medium">New Listing</div>
          <div className="text-secondary-400 font-bold">₹45 Lakh</div>
        </div>
      </div>
      
      <div className="absolute top-32 right-10 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
          <div className="text-white text-sm font-medium">Sold Today</div>
          <div className="text-accent-400 font-bold">Patna Villa</div>
        </div>
      </div>

      <div className="absolute bottom-32 left-20 animate-bounce" style={{ animationDelay: '2s' }}>
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
          <div className="text-white text-sm font-medium">Hot Location</div>
          <div className="text-secondary-400 font-bold">Boring Road</div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
}