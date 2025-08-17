'use client';
import React, { useState } from 'react';
import { Home, Star, Quote, ChevronLeft, ChevronRight, Play, MapPin, Calendar, CheckCircle, TrendingUp, Users, Award, Heart, Filter, Search } from 'lucide-react';

const TestimonialsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'all', label: 'All Stories', count: 24 },
    { id: 'buyers', label: 'Buyers', count: 12 },
    { id: 'sellers', label: 'Sellers', count: 8 },
    { id: 'renters', label: 'Renters', count: 4 }
  ];

  const videoTestimonials = [
    {
      id: 'v1',
      name: 'Rajesh & Priya Sharma',
      location: 'Mumbai',
      thumbnail: '/api/placeholder/400/300',
      duration: '2:45',
      title: 'Found our dream home in just 2 weeks!'
    },
    {
      id: 'v2',
      name: 'Amit Kumar',
      location: 'Bangalore',
      thumbnail: '/api/placeholder/400/300',
      duration: '3:12',
      title: 'Sold my property 20% above market rate'
    },
    {
      id: 'v3',
      name: 'Sneha Patel',
      location: 'Delhi',
      thumbnail: '/api/placeholder/400/300',
      duration: '2:28',
      title: 'Seamless rental experience for my startup'
    }
  ];

  const testimonials = [
    {
      id: 't1',
      name: 'Arjun Mehta',
      role: 'Software Engineer',
      location: 'Pune',
      category: 'buyers',
      rating: 5,
      date: '2024-12-15',
      image: '/api/placeholder/80/80',
      title: 'Exceptional Service & Transparency',
      content: 'CitizenHousing made buying my first home incredibly smooth. The verified listings saved me from fraud attempts, and their legal assistance team helped me navigate all the paperwork. What impressed me most was the transparency - no hidden fees, no surprises. I found the perfect 2BHK in Koregaon Park within my budget.',
      propertyDetails: '2BHK Apartment • ₹85 Lakhs • Koregaon Park',
      verified: true,
      featured: true
    },
    {
      id: 't2',
      name: 'Kavita Singh',
      role: 'Marketing Manager',
      location: 'Gurgaon',
      category: 'sellers',
      rating: 5,
      date: '2024-11-28',
      image: '/api/placeholder/80/80',
      title: 'Sold 15% Above Market Price',
      content: 'I was skeptical about online platforms, but CitizenHousing exceeded my expectations. Their premium listing service got me quality inquiries, and the photography service made my property look stunning. The best part? I sold my flat 15% above the market rate within 3 weeks. Their support team was available 24/7.',
      propertyDetails: '3BHK Villa • ₹1.2 Crores • Sector 56',
      verified: true,
      featured: true
    },
    {
      id: 't3',
      name: 'Rohit Agarwal',
      role: 'Business Owner',
      location: 'Chennai',
      category: 'buyers',
      rating: 5,
      date: '2024-12-08',
      image: '/api/placeholder/80/80',
      title: 'Found Investment Property Easily',
      content: 'As an investor, I needed accurate market data and genuine sellers. CitizenHousing\'s analytics helped me identify undervalued properties, and their verification process ensured I dealt only with serious sellers. Closed 2 deals in 6 months with excellent ROI potential.',
      propertyDetails: '1BHK Apartments • ₹45 Lakhs each • OMR',
      verified: true,
      featured: false
    },
    {
      id: 't4',
      name: 'Neha Gupta',
      role: 'Doctor',
      location: 'Hyderabad',
      category: 'renters',
      rating: 5,
      date: '2024-11-20',
      image: '/api/placeholder/80/80',
      title: 'Perfect Rental for Medical Practice',
      content: 'Relocating for my residency was stressful, but CitizenHousing made finding accommodation easy. Their rental verification process and direct owner contact saved me from broker hassles. Found a furnished flat near my hospital with all amenities. The virtual tour feature was a lifesaver!',
      propertyDetails: '1BHK Furnished • ₹25,000/month • Banjara Hills',
      verified: true,
      featured: false
    },
    {
      id: 't5',
      name: 'Vikram Reddy',
      role: 'Entrepreneur',
      location: 'Bangalore',
      category: 'buyers',
      rating: 5,
      date: '2024-12-01',
      image: '/api/placeholder/80/80',
      title: 'Tech-Savvy Platform for Modern Buyers',
      content: 'Being in tech, I appreciate good UX/UI. CitizenHousing\'s platform is intuitive, fast, and feature-rich. The AI-powered recommendations matched my exact requirements. The digital documentation process was seamless. This is how property buying should be in 2025!',
      propertyDetails: '4BHK Penthouse • ₹2.8 Crores • Whitefield',
      verified: true,
      featured: true
    },
    {
      id: 't6',
      name: 'Sunita Sharma',
      role: 'Teacher',
      location: 'Jaipur',
      category: 'sellers',
      rating: 4,
      date: '2024-10-15',
      image: '/api/placeholder/80/80',
      title: 'Hassle-Free Property Sale',
      content: 'After my husband\'s transfer, we needed to sell our Jaipur home quickly. CitizenHousing\'s team handled everything - from photography to legal paperwork. Their honest market evaluation helped us price correctly. Sold within a month at fair value.',
      propertyDetails: '2BHK Independent House • ₹65 Lakhs • Malviya Nagar',
      verified: true,
      featured: false
    },
    {
      id: 't7',
      name: 'Aditya Chopra',
      role: 'CA',
      location: 'Mumbai',
      category: 'buyers',
      rating: 5,
      date: '2024-12-10',
      image: '/api/placeholder/80/80',
      title: 'Financial Transparency at Its Best',
      content: 'As a chartered accountant, I scrutinize every financial detail. CitizenHousing\'s transparent fee structure, detailed property reports, and tax guidance impressed me. No hidden costs, clear contracts, and excellent post-sale support. Highly recommended for informed buyers.',
      propertyDetails: '3BHK Apartment • ₹1.8 Crores • Bandra West',
      verified: true,
      featured: true
    },
    {
      id: 't8',
      name: 'Ritu Malik',
      role: 'Interior Designer',
      location: 'Delhi',
      category: 'sellers',
      rating: 5,
      date: '2024-11-05',
      image: '/api/placeholder/80/80',
      title: 'Premium Service Worth Every Penny',
      content: 'The premium listing package was worth every rupee. Professional photography showcased my designed interiors beautifully. The 3D virtual tour feature attracted serious buyers. Sold my designer apartment to the right buyer who appreciated the craftsmanship.',
      propertyDetails: '3BHK Designer Apartment • ₹2.2 Crores • Vasant Vihar',
      verified: true,
      featured: false
    }
  ];

  const stats = [
    { label: 'Happy Customers', value: '50,000+', icon: <Users className="w-8 h-8" /> },
    { label: 'Properties Sold', value: '25,000+', icon: <Home className="w-8 h-8" /> },
    { label: 'Average Rating', value: '4.8/5', icon: <Star className="w-8 h-8" /> },
    { label: 'Cities Covered', value: '50+', icon: <MapPin className="w-8 h-8" /> }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesFilter = activeFilter === 'all' || testimonial.category === activeFilter;
    const matchesSearch = testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         testimonial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         testimonial.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         testimonial.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
      testimonial.featured ? 'ring-2 ring-blue-200 border-blue-100' : 'border border-gray-100'
    }`}>
      {testimonial.featured && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-medium flex items-center">
          <Award className="w-4 h-4 mr-2" />
          Featured Success Story
        </div>
      )}
      
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h3>
                {testimonial.verified && (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                )}
              </div>
              <p className="text-gray-600 text-sm">{testimonial.role}</p>
              <div className="flex items-center space-x-2 mt-1">
                <MapPin className="w-3 h-3 text-gray-400" />
                <span className="text-gray-500 text-xs">{testimonial.location}</span>
                <Calendar className="w-3 h-3 text-gray-400 ml-2" />
                <span className="text-gray-500 text-xs">
                  {new Date(testimonial.date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative mb-4">
          <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
          <h4 className="font-semibold text-gray-900 mb-2 pl-6">{testimonial.title}</h4>
          <p className="text-gray-600 leading-relaxed pl-6">{testimonial.content}</p>
        </div>

        {/* Property Details */}
        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <p className="text-sm font-medium text-gray-700">{testimonial.propertyDetails}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Helpful</span>
          </button>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full capitalize">
              {testimonial.category.slice(0, -1)}
            </span>
            {testimonial.verified && (
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                Verified
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const VideoTestimonialCard = ({ video, index }: { video: typeof videoTestimonials[0]; index: number }) => (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300">
            <Play className="w-6 h-6 text-blue-600 ml-1" />
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
          {video.duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
        <div className="flex items-center space-x-2">
          <span className="font-medium text-gray-700">{video.name}</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-500 text-sm">{video.location}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CitizenHousing</h1>
              <p className="text-gray-600">Customer Testimonials</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-6">
            <Star className="w-10 h-10 text-yellow-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands of Happy Customers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real stories from real people who found their dream homes, sold their properties, and achieved their real estate goals with CitizenHousing.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="flex justify-center mb-3 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Watch Their Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <VideoTestimonialCard key={video.id} video={video} index={index} />
            ))}
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              {/* Filters */}
              <div className="flex items-center space-x-4">
                <Filter className="w-5 h-5 text-gray-500" />
                <div className="flex space-x-2">
                  {filters.map(filter => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeFilter === filter.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {filter.label} ({filter.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search testimonials..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full lg:w-80"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-16">
          {filteredTestimonials.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredTestimonials.map(testimonial => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No Testimonials Found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or search terms.
              </p>
              <button
                onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have achieved their real estate dreams with CitizenHousing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Journey
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
              Share Your Story
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Customers Trust Us</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Verified Listings</h4>
              <p className="text-gray-600 text-sm">
                Every property is verified to ensure authenticity and prevent fraud
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Transparent Process</h4>
              <p className="text-gray-600 text-sm">
                Clear pricing, no hidden fees, and complete transparency in all dealings
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Support</h4>
              <p className="text-gray-600 text-sm">
                Dedicated support team and legal assistance throughout your journey
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mr-3">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">CitizenHousing</h2>
            </div>
            <p className="text-gray-600 mb-6">
              These testimonials represent real experiences from our verified customers. Join our community of successful property buyers, sellers, and renters.
            </p>
            
            {/* Footer Bottom */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-sm text-gray-500">
                  © 2025 CitizenHousing Private Limited. All rights reserved.
                </div>
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <span>24 Featured Stories</span>
                  <div className="w-px h-3 bg-gray-300"></div>
                  <span>4.8/5 Average Rating</span>
                  <div className="w-px h-3 bg-gray-300"></div>
                  <span>Updated Monthly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;