'use client';
import Link from 'next/link';
import { 
  Home, 
  CheckCircle, 
  Camera, 
  FileText, 
  Calculator, 
  TrendingUp,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Banknote,
  Users,
  Star,
  Shield,
  Target,
  Eye,
  Handshake
} from 'lucide-react';

export default function PropertySelling() {
  const steps = [
    {
      id: 1,
      title: "Property Valuation",
      description: "Get accurate market valuation based on current trends and property condition.",
      icon: Calculator,
      details: ["Market analysis", "Comparative pricing", "Property assessment", "Value optimization tips"]
    },
    {
      id: 2,
      title: "Property Preparation",
      description: "Enhance your property's appeal with staging and necessary improvements.",
      icon: Home,
      details: ["Home staging advice", "Repair recommendations", "Photography setup", "Curb appeal enhancement"]
    },
    {
      id: 3,
      title: "Marketing & Listing",
      description: "Create compelling listings with professional photography and multi-channel marketing.",
      icon: Camera,
      details: ["Professional photography", "Listing creation", "Online marketing", "Social media promotion"]
    },
    {
      id: 4,
      title: "Buyer Management",
      description: "Handle inquiries, schedule viewings, and manage potential buyer interactions.",
      icon: Users,
      details: ["Inquiry handling", "Viewing coordination", "Buyer screening", "Negotiation support"]
    },
    {
      id: 5,
      title: "Deal Closure",
      description: "Negotiate best price, complete documentation, and ensure smooth transaction.",
      icon: Handshake,
      details: ["Price negotiation", "Agreement drafting", "Documentation", "Registration assistance"]
    }
  ];

  const services = [
    {
      title: "Property Valuation",
      description: "Accurate market-based property valuation",
      icon: TrendingUp,
      features: ["Market analysis", "Comparable sales", "Property inspection", "Valuation report"],
      price: "₹2,999"
    },
    {
      title: "Complete Selling Package",
      description: "End-to-end property selling service",
      icon: Shield,
      features: ["Professional photography", "Marketing campaign", "Buyer management", "Legal support"],
      price: "2% of sale value"
    },
    {
      title: "Quick Sale Program",
      description: "Fast-track selling for urgent requirements",
      icon: Target,
      features: ["Priority listing", "Investor network", "Quick buyer matching", "Express documentation"],
      price: "3% of sale value"
    }
  ];

  const whyChooseUs = [
    {
      icon: Eye,
      title: "Maximum Exposure",
      description: "Your property gets listed on 50+ portals and our extensive network"
    },
    {
      icon: TrendingUp,
      title: "Best Price Achievement",
      description: "Our expert negotiation skills ensure you get the best market price"
    },
    {
      icon: Clock,
      title: "Faster Sales",
      description: "Average 30% faster sales compared to individual selling"
    },
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Complete legal verification and documentation support"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Mumbai",
      rating: 5,
      comment: "Sold my apartment in just 45 days at 15% above market rate. Excellent service!"
    },
    {
      name: "Priya Patel",
      location: "Pune",
      rating: 5,
      comment: "Professional team handled everything smoothly. Got multiple genuine buyers quickly."
    },
    {
      name: "Amit Kumar",
      location: "Delhi",
      rating: 5,
      comment: "Best decision to choose CitizenHomes. They made selling hassle-free."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sell Your Property Fast
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Get the best price for your property with our proven selling strategy. 
              From valuation to deal closure, we handle everything for maximum returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                <Calculator className="h-5 w-5 mr-2" />
                Free Property Valuation
              </button>
              <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors inline-flex items-center justify-center">
                <Camera className="h-5 w-5 mr-2" />
                List My Property
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">2,500+</div>
              <div className="text-gray-600">Properties Sold</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">₹850Cr+</div>
              <div className="text-gray-600">Total Sales Value</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">45 Days</div>
              <div className="text-gray-600">Average Sale Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Selling Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Selling Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our proven 5-step process ensures maximum returns and hassle-free property selling
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-gradient-to-br from-green-600 to-emerald-700 p-8 text-white">
                    <div className="flex items-center mb-4">
                      <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="text-2xl font-bold">Step {step.id}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-green-100">{step.description}</p>
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What We Do:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="mt-6 flex justify-end">
                        <ArrowRight className="h-8 w-8 text-gray-300" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Services & Pricing */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services & Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the service package that best fits your property selling needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow relative">
                  {index === 1 && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="bg-green-600 rounded-lg p-4 w-fit mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-6">{service.price}</div>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Choose This Plan
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Sell With Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver results that matter - faster sales, better prices, and hassle-free experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-green-100 rounded-full p-6 w-fit mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Sellers Say</h2>
            <p className="text-gray-600">Real experiences from property owners who sold with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ready to Sell Your Property?</h2>
              <p className="text-green-100 mb-8">
                Get started with a free property valuation and discover how much your property is worth in today's market.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  <span>Free property valuation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  <span>No upfront costs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  <span>Expert market advice</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Get Free Valuation</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Select property type</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Plot</option>
                    <option>Commercial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter property location"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Get Free Valuation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8">Need to Speak with Our Selling Expert?</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 98765-43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>sell@citizenhomes.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>Mon-Sat: 9 AM - 7 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}