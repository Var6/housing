'use client';

import { Shield, Users, Award, Headphones, Clock, ThumbsUp } from 'lucide-react';

export default function WhychooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Trusted & Verified",
      description: "All properties are thoroughly verified and legally checked before listing to ensure complete transparency and security."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team of experienced real estate professionals provides personalized guidance throughout your property journey."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized as one of the most trusted real estate platforms with numerous industry awards and certifications."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you with any queries or concerns about your property needs."
    },
    {
      icon: Clock,
      title: "Quick Process",
      description: "Streamlined processes and digital documentation to ensure faster property transactions and reduced paperwork."
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      description: "Over 98% customer satisfaction rate with thousands of happy families finding their dream homes through us."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Why Choose <span className="text-blue-600">Citizen Grih Nirman</span>?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're not just another real estate platform. We're your trusted partner in making one of life's most important decisions - finding your perfect home.
              </p>
            </div>

            <div className="space-y-6">
              {features.slice(0, 3).map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                Learn More About Us
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                Contact Our Team
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {features.slice(3).map((feature, index) => (
              <div
                key={index + 3}
                className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 group transform hover:scale-105"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white group-hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md">
                    <feature.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Image/Visual Element */}
            <div className="mt-8">
              <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="text-3xl font-bold mb-2">1000+</div>
                  <div className="text-blue-100 mb-4">Happy Families</div>
                  <div className="text-sm text-blue-100">
                    "Citizen Grih Nirman helped us find our dream home in just 2 weeks. Highly recommended!"
                  </div>
                  <div className="text-sm font-medium mt-2">- Satisfied Customer</div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}