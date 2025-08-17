'use client';

import { ArrowRight, Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Find Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Perfect Home?
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Don't wait any longer. Let our expert team help you find the property of your dreams. 
            With thousands of verified listings and personalized support, your perfect home is just a click away.
          </p>
        </div>

        {/* Main CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Browse Properties */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-400 transition-colors">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Browse Properties</h3>
              <p className="text-blue-100 mb-6">
                Explore our extensive collection of verified properties across major cities in India.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 mx-auto group">
                <span>View All Properties</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Get Consultation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-400 transition-colors">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Free Consultation</h3>
              <p className="text-blue-100 mb-6">
                Get expert advice from our real estate professionals and make informed decisions.
              </p>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center space-x-2 mx-auto group">
                <span>Book Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Contact Us */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group md:col-span-2 lg:col-span-1">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-400 transition-colors">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
              <p className="text-blue-100 mb-6">
                Have questions? Our support team is available 24/7 to assist you with any queries.
              </p>
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 flex items-center space-x-2 mx-auto group">
                <span>Get In Touch</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-blue-400 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Call Us</h4>
              <p className="text-blue-100">+91 98765-43210</p>
              <p className="text-blue-100">Mon-Sat, 9 AM - 7 PM</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-blue-400 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Email Us</h4>
              <p className="text-blue-100">info@citizengrih.com</p>
              <p className="text-blue-100">We reply within 24 hours</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-blue-400 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Visit Us</h4>
              <p className="text-blue-100">123 Housing Street</p>
              <p className="text-blue-100">Real Estate City, India</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest property listings, market insights, and exclusive deals delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-blue-100 text-lg mb-8">
            Join thousands of happy families who found their perfect home with us
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Start Your Journey Today
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-400/10 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400/10 rounded-full animate-pulse"></div>
    </section>
  );
}