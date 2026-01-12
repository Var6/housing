'use client';
import Link from 'next/link';

import { Search, MapPin, Home, ArrowRight, Trees, Waves, Mountain, Award } from 'lucide-react';

export default function FarmhouseHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-800/90 to-transparent"></div>
      </div>

      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content Section */}
          <div className="text-white space-y-2 z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full text-sm font-semibold">
              <Trees className="h-4 w-4 text-green-300" />
              <span>Premium Farmhouse Collection</span>
            </div>
            
            <div className="space-y-1">
              <h1 className="text-3xl md:text-6xl lg:text-5xl font-bold leading-tight">
                Your Dream
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 mt-2">
                  Farmhouse
                </span>
                <span className="block mt-1">
                  Awaits You
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-green-50 leading-relaxed max-w-xl">
                Escape to tranquility with our handpicked collection of luxury farmhouses. Experience the perfect blend of modern comfort and natural serenity.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
                <Mountain className="h-4 w-4 text-green-300" />
                <span className="text-sm font-medium">Scenic Views</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
                <Waves className="h-4 w-4 text-green-300" />
                <span className="text-sm font-medium">Private Pools</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
                <Award className="h-4 w-4 text-green-300" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <Link href="/properties">
              <button className="group bg-white text-green-900 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2">
                <span>Explore Properties</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </Link>
              <Link href="/properties/farmhouse">
              <button className="border-2 border-white/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-green-900 transition-all duration-300 flex items-center justify-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>View Farmhouse</span>
              </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="text-4xl font-bold text-white">50+</div>
                <div className="text-sm text-green-200">Premium Farmhouses</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-bold text-white">15+</div>
                <div className="text-sm text-green-200">Prime Locations</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-bold text-white">500+</div>
                <div className="text-sm text-green-200">Happy Families</div>
              </div>
            </div>
          </div>

          {/* Right Content Section - Featured Property Card */}
          <div className="relative z-10 lg:justify-self-end w-full max-w-xl">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
              {/* Property Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Featured Farmhouse"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Featured
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-2xl font-bold mb-1">Lotus Farms House</h3>
                  <div className="flex items-center gap-2 text-green-200">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm font-medium">Greater Noida, UP</span>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6 space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Experience luxury countryside living with world-class amenities, private clubhouse, swimming pool, and stunning mountain views.
                </p>

                {/* Amenities Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-xl">
                    <Home className="h-6 w-6 text-green-600 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-gray-700">Clubhouse</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-xl">
                    <Waves className="h-6 w-6 text-green-600 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-gray-700">Pool</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-xl">
                    <Trees className="h-6 w-6 text-green-600 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-gray-700">Gardens</div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Starting from</div>
                    <div className="text-2xl font-bold text-green-700">₹ On Request</div>
                  </div>
                  <Link href="/properties/lotus-farms-house">
                  <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    View Details
                  </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-6 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-1 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}