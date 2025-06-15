'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Home, Building, Star, CheckCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz4KPHN2Zz4=')] opacity-20"></div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 animate-bounce">
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3 border border-white border-opacity-20">
          <Home className="w-6 h-6 text-secondary-400" />
        </div>
      </div>
      
      <div className="absolute top-20 right-20 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3 border border-white border-opacity-20">
          <Building className="w-6 h-6 text-accent-400" />
        </div>
      </div>

      <div className="absolute bottom-20 left-20 animate-bounce" style={{ animationDelay: '2s' }}>
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3 border border-white border-opacity-20">
          <Star className="w-6 h-6 text-secondary-400" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
            Ready to Find Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-accent-400">
              Dream Property?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join thousands of satisfied customers who found their perfect home in Bihar. 
            Start your property journey today with India's most trusted platform.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 border border-white border-opacity-20">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-white font-medium">100% Verified Properties</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 border border-white border-opacity-20">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-white font-medium">Expert Legal Support</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 border border-white border-opacity-20">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-white font-medium">Best Market Prices</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link
              href="/properties"
              className="group bg-secondary-500 hover:bg-secondary-600 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 min-w-[250px] justify-center"
            >
              <Home className="w-6 h-6" />
              <span>Browse Properties</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/sell"
              className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 min-w-[250px] justify-center"
            >
              <Building className="w-6 h-6" />
              <span>List Your Property</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property Search Help */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 text-center">
            <div className="bg-secondary-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Need Help Finding Property?
            </h3>
            <p className="text-gray-200 mb-4">
              Our property experts will help you find the perfect match based on your requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 text-secondary-400 hover:text-secondary-300 font-medium transition-colors duration-200"
            >
              <span>Get Expert Help</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Instant Support */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 text-center">
            <div className="bg-accent-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Instant Support Available
            </h3>
            <p className="text-gray-200 mb-4">
              Call our support team for immediate assistance with any property-related queries.
            </p>
            <Link
              href="tel:+919876543210"
              className="inline-flex items-center space-x-2 text-accent-400 hover:text-accent-300 font-medium transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </Link>
          </div>

          {/* Sell Property */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 text-center md:col-span-2 lg:col-span-1">
            <div className="bg-primary-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Want to Sell Property?
            </h3>
            <p className="text-gray-200 mb-4">
              List your property for free and reach thousands of verified buyers across Bihar.
            </p>
            <Link
              href="/sell"
              className="inline-flex items-center space-x-2 text-primary-300 hover:text-primary-200 font-medium transition-colors duration-200"
            >
              <span>List Property Free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">Trusted by 10,000+ customers across Bihar</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-white">
              <div className="text-2xl font-bold">4.9/5</div>
              <div className="text-sm">Customer Rating</div>
            </div>
            <div className="w-px h-8 bg-white bg-opacity-30"></div>
            <div className="text-white">
              <div className="text-2xl font-bold">99.5%</div>
              <div className="text-sm">Satisfaction Rate</div>
            </div>
            <div className="w-px h-8 bg-white bg-opacity-30"></div>
            <div className="text-white">
              <div className="text-2xl font-bold">5000+</div>
              <div className="text-sm">Properties Sold</div>
            </div>
            <div className="w-px h-8 bg-white bg-opacity-30"></div>
            <div className="text-white">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}