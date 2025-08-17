'use client';

import { 
  Home, 
  Search, 
  Calculator, 
  FileText, 
  CreditCard, 
  CheckCircle,
  ArrowRight,
  Users,
  MapPin,
  Shield
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "Property Search",
      description: "Advanced search filters to help you find properties that match your exact requirements and budget.",
      features: ["Location-based search", "Price range filters", "Property type selection"],
      color: "bg-blue-600"
    },
    {
      icon: Home,
      title: "Buy & Sell",
      description: "Complete assistance for buying and selling properties with legal verification and documentation.",
      features: ["Property valuation", "Legal verification", "Documentation support"],
      color: "bg-green-600"
    },
    {
      icon: Calculator,
      title: "EMI Calculator",
      description: "Calculate your home loan EMI, compare different loan options, and plan your finances effectively.",
      features: ["EMI calculation", "Loan comparison", "Financial planning"],
      color: "bg-purple-600"
    },
    {
      icon: FileText,
      title: "Legal Services",
      description: "Complete legal assistance including property verification, title checks, and documentation.",
      features: ["Title verification", "Legal documentation", "Registration support"],
      color: "bg-orange-600"
    },
    {
      icon: CreditCard,
      title: "Home Loans",
      description: "Get the best home loan deals from top banks and financial institutions with competitive rates.",
      features: ["Loan assistance", "Best rates", "Quick approval"],
      color: "bg-red-600"
    },
    {
      icon: Users,
      title: "Consultation",
      description: "Expert consultation from experienced real estate professionals to guide you through your journey.",
      features: ["Expert advice", "Market insights", "Personalized guidance"],
      color: "bg-indigo-600"
    }
  ];

  const stats = [
    { number: "500+", label: "Properties Listed", icon: Home },
    { number: "1000+", label: "Happy Customers", icon: Users },
    { number: "50+", label: "Cities Covered", icon: MapPin },
    { number: "100%", label: "Verified Properties", icon: Shield }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From property search to final documentation, we provide end-to-end real estate services to make your property journey smooth and hassle-free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden"
            >
              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself. Join thousands of satisfied customers who found their dream properties with us.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our experts help you find the perfect property or assist you with any real estate needs you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Browse Properties
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}