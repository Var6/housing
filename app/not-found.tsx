'use client';

import { Home, ArrowLeft, Search, MapPin } from 'lucide-react';

export default function NotFound() {
  return (
    <div className=" pt-9 min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center">
            <div className="relative">
              {/* Large 404 Text */}
              <h1 className="text-9xl md:text-[200px] font-bold text-white/10 select-none">
                404
              </h1>
              
              {/* Floating House Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full p-8 animate-bounce">
                  <Home className="h-16 w-16 text-blue-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-blue-200">
              Looks like this property doesn't exist in our listings
            </p>
          </div>
          
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            The page you're looking for might have been removed, had its name changed, or is temporarily unavailable. Let's help you find your way back home.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Home className="h-5 w-5" />
            <span>Back to Home</span>
          </a>
          
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-900 transition-all duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Quick Links */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-6">
            Quick Links to Popular Pages
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href="/properties/farmhouse"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl p-4 transition-all duration-300 group"
            >
              <div className="bg-green-500/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <Home className="h-5 w-5 text-green-300" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">Farmhouses</div>
                <div className="text-sm text-blue-200">Luxury countryside living</div>
              </div>
            </a>

            <a 
              href="/properties/villa"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl p-4 transition-all duration-300 group"
            >
              <div className="bg-purple-500/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <Home className="h-5 w-5 text-purple-300" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">Villas</div>
                <div className="text-sm text-blue-200">Modern premium homes</div>
              </div>
            </a>

            <a 
              href="/properties/plot"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl p-4 transition-all duration-300 group"
            >
              <div className="bg-blue-500/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <MapPin className="h-5 w-5 text-blue-300" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">Plots</div>
                <div className="text-sm text-blue-200">Build your dream home</div>
              </div>
            </a>

            <a 
              href="/properties/commercial"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl p-4 transition-all duration-300 group"
            >
              <div className="bg-orange-500/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <Search className="h-5 w-5 text-orange-300" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">Commercial</div>
                <div className="text-sm text-blue-200">Business properties</div>
              </div>
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-sm text-blue-300">
          Need help? Contact us at{' '}
          <a href="mailto:citizen.housing@citizencooperative.in" className="underline hover:text-white transition-colors">
            citizen.housing@citizencooperative.in
          </a>
        </p>
      </div>
    </div>
  );
}