'use client';

import { Shield, Search, Users, FileCheck, Phone, TrendingUp } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const features: Feature[] = [
  {
    id: 'verified',
    title: 'Verified Properties',
    description: 'Every property is thoroughly verified with legal documents and site visits before listing.',
    icon: <Shield className="w-6 h-6" />,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 'search',
    title: 'Smart Search',
    description: 'Advanced filters and AI-powered recommendations to find your perfect property quickly.',
    icon: <Search className="w-6 h-6" />,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'experts',
    title: 'Property Experts',
    description: 'Dedicated property consultants with deep knowledge of Bihar real estate market.',
    icon: <Users className="w-6 h-6" />,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 'documentation',
    title: 'Legal Support',
    description: 'Complete assistance with documentation, registration, and legal formalities.',
    icon: <FileCheck className="w-6 h-6" />,
    color: 'bg-orange-100 text-orange-600'
  },
  {
    id: 'support',
    title: '24/7 Support',
    description: 'Round-the-clock customer support in Hindi and English for all your queries.',
    icon: <Phone className="w-6 h-6" />,
    color: 'bg-red-100 text-red-600'
  },
  {
    id: 'investment',
    title: 'Investment Guidance',
    description: 'Expert advice on property investment opportunities and market trends in Bihar.',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'bg-yellow-100 text-yellow-600'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
            Why Choose Citizen Housing?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to making your property journey in Bihar smooth, transparent, and successful with our comprehensive services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Find Your Dream Property?
            </h3>
            <p className="text-lg opacity-90 mb-8">
              Join thousands of satisfied customers who found their perfect home through Citizen Housing. 
              Start your property journey today with Bihar's most trusted platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-colors duration-200">
                Start Property Search
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-xl font-semibold transition-colors duration-200">
                Speak to Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}