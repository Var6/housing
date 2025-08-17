'use client';

import Link from 'next/link';
import { 
  Home, 
  CheckCircle, 
  Key, 
  FileText, 
  Shield, 
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Search,
  Building,
  Car,
  Wifi,
  Droplets,
  Zap,
  Star,
  Calendar,
  CreditCard,
  Camera,
  UserCheck,
  ClipboardCheck
} from 'lucide-react';

export default function RentalServices() {
  type RentalTypeColor = 'blue' | 'green';

  interface RentalType {
    title: string;
    subtitle: string;
    icon: React.ElementType;
    color: RentalTypeColor;
    services: string[];
  }

  const rentalTypes: RentalType[] = [
    {
      title: "For Tenants",
      subtitle: "Find Your Perfect Rental Home",
      icon: Search,
      color: "blue",
      services: [
        "Property search & shortlisting",
        "Virtual & physical property tours",
        "Rent negotiation support",
        "Agreement drafting & legal review",
        "Background verification assistance",
        "Move-in coordination"
      ]
    },
    {
      title: "For Landlords",
      subtitle: "Rent Out Your Property Hassle-Free",
      icon: Building,
      color: "green",
      services: [
        "Tenant verification & screening",
        "Professional property photography",
        "Rent price optimization",
        "Legal agreement preparation",
        "Rent collection management",
        "Property maintenance coordination"
      ]
    }
  ];

  const process = {
    tenant: [
      {
        id: 1,
        title: "Property Search",
        description: "Browse verified rental properties matching your requirements",
        icon: Search,
        details: ["Filter by location, budget, amenities", "View detailed photos & videos", "Check availability status", "Compare multiple options"]
      },
      {
        id: 2,
        title: "Property Visits",
        description: "Schedule and attend property viewings with our experts",
        icon: Calendar,
        details: ["Flexible viewing schedules", "Expert guidance during visits", "Property condition assessment", "Neighborhood insights"]
      },
      {
        id: 3,
        title: "Application & Verification",
        description: "Submit rental application with required documentation",
        icon: FileText,
        details: ["Document submission", "Background verification", "Reference checks", "Income verification"]
      },
      {
        id: 4,
        title: "Agreement & Move-in",
        description: "Finalize rental agreement and complete move-in process",
        icon: Key,
        details: ["Legal agreement review", "Security deposit", "Key handover", "Move-in inspection"]
      }
    ],
    landlord: [
      {
        id: 1,
        title: "Property Listing",
        description: "Create attractive listing with professional photography",
        icon: Camera,
        details: ["Professional photography", "Compelling property description", "Multi-platform listing", "Competitive rent pricing"]
      },
      {
        id: 2,
        title: "Tenant Screening",
        description: "Thorough verification of potential tenants",
        icon: UserCheck,
        details: ["Background checks", "Income verification", "Reference validation", "Credit assessment"]
      },
      {
        id: 3,
        title: "Agreement Preparation",
        description: "Legal rental agreement drafting and execution",
        icon: ClipboardCheck,
        details: ["Legal compliance", "Terms negotiation", "Security deposit collection", "Agreement execution"]
      },
      {
        id: 4,
        title: "Ongoing Management",
        description: "Continuous rental management and support",
        icon: Shield,
        details: ["Rent collection", "Maintenance coordination", "Dispute resolution", "Legal compliance"]
      }
    ]
  };

  const amenities = [
    { icon: Wifi, name: "High-Speed Internet" },
    { icon: Car, name: "Parking Space" },
    { icon: Droplets, name: "Water Supply" },
    { icon: Zap, name: "Power Backup" },
    { icon: Shield, name: "Security" },
    { icon: Users, name: "Gym/Clubhouse" }
  ];

  type PricingPlanColor = 'blue' | 'green' | 'purple';

  interface PricingPlan {
    type: string;
    target: string;
    price: string;
    period: string;
    features: string[];
    color: PricingPlanColor;
    popular?: boolean;
  }

  const pricingPlans: PricingPlan[] = [
    {
      type: "Basic Plan",
      target: "For Individual Tenants",
      price: "₹999",
      period: "one-time",
      features: [
        "Property search assistance",
        "Up to 5 property visits",
        "Basic documentation support",
        "Agreement template",
        "Move-in checklist"
      ],
      color: "blue"
    },
    {
      type: "Premium Plan",
      target: "For Serious Home Seekers",
      price: "₹2,499",
      period: "one-time",
      features: [
        "Unlimited property visits",
        "Dedicated relationship manager",
        "Rent negotiation support",
        "Legal agreement review",
        "Complete documentation support",
        "3-month post-move support"
      ],
      color: "green",
      popular: true
    },
    {
      type: "Landlord Package",
      target: "For Property Owners",
      price: "1 Month",
      period: "rent as fee",
      features: [
        "Professional photography",
        "Multi-platform listing",
        "Tenant verification",
        "Legal agreement",
        "6-month rent guarantee",
        "Property management"
      ],
      color: "purple"
    }
  ];

  const testimonials = [
    {
      name: "Sneha Gupta",
      type: "Tenant",
      location: "Bangalore",
      rating: 5,
      comment: "Found my dream apartment in just 1 week! The team was very professional and helpful.",
      rent: "₹25,000/month"
    },
    {
      name: "Vikram Singh",
      type: "Landlord",
      location: "Gurgaon",
      rating: 5,
      comment: "Rented out my property within 15 days with verified tenants. Excellent service!",
      rent: "₹45,000/month"
    },
    {
      name: "Meera Patel",
      type: "Tenant",
      location: "Pune",
      rating: 5,
      comment: "Hassle-free rental experience. They handled everything from search to agreement.",
      rent: "₹18,000/month"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rental Services
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Whether you're looking for a rental home or want to rent out your property, 
              we provide end-to-end rental services with complete peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                <Search className="h-5 w-5 mr-2" />
                Find Rental Property
              </button>
              <button className="bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 transition-colors inline-flex items-center justify-center">
                <Building className="h-5 w-5 mr-2" />
                List My Property
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Types */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {rentalTypes.map((service, index) => {
            const IconComponent = service.icon;
            const colorClasses = {
              blue: "from-blue-600 to-blue-700 bg-blue-100 text-blue-600",
              green: "from-green-600 to-green-700 bg-green-100 text-green-600"
            };
            
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${colorClasses[service.color].split(' ')[0]} ${colorClasses[service.color].split(' ')[1]} p-8 text-white text-center`}>
                  <div className="bg-white bg-opacity-20 rounded-full p-4 w-fit mx-auto mb-4">
                    <IconComponent className="h-10 w-10" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                  <p className="text-opacity-90">{service.subtitle}</p>
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">What We Offer:</h3>
                  <ul className="space-y-3">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-6 ${service.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'} text-white py-3 rounded-lg font-semibold transition-colors`}>
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Process Tabs */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, transparent process for both tenants and landlords
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button className="px-6 py-2 rounded-lg bg-purple-600 text-white font-medium">
                For Tenants
              </button>
              <button className="px-6 py-2 rounded-lg text-gray-600 font-medium hover:text-gray-900">
                For Landlords
              </button>
            </div>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {process.tenant.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className="bg-gray-50 rounded-xl shadow-sm overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 bg-gradient-to-br from-purple-600 to-indigo-700 p-8 text-white">
                      <div className="flex items-center mb-4">
                        <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div className="text-2xl font-bold">Step {step.id}</div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-purple-100">{step.description}</p>
                    </div>
                    <div className="lg:w-2/3 p-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                      {index < process.tenant.length - 1 && (
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
      </div>

      {/* Popular Amenities */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Amenities</h2>
            <p className="text-gray-600">Properties with these amenities are in high demand</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {amenities.map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-purple-100 rounded-full p-4 w-fit mx-auto mb-3">
                    <IconComponent className="h-8 w-8 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{amenity.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Pricing Plans Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Pricing Plans</h2>
            <p className="text-gray-600">Choose the plan that fits your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => {
              const colorClasses: Record<PricingPlanColor, string> = {
                blue: "border-blue-200 bg-blue-50 text-blue-600 bg-blue-600 hover:bg-blue-700",
                green: "border-green-200 bg-green-50 text-green-600 bg-green-600 hover:bg-green-700",
                purple: "border-purple-200 bg-purple-50 text-purple-600 bg-purple-600 hover:bg-purple-700"
              };
              return (
                <div key={index} className={`relative bg-white rounded-xl border-2 ${colorClasses[plan.color].split(' ')[0]} p-8 ${plan.popular ? 'shadow-xl' : 'shadow-lg'}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className={`${colorClasses[plan.color].split(' ')[1]} rounded-lg p-4 text-center mb-6`}>
                    <div className={`text-2xl font-bold ${colorClasses[plan.color].split(' ')[2]} mb-2`}>{plan.price}</div>
                    <div className="text-sm opacity-80">{plan.period}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.type}</h3>
                  <p className="text-gray-600 mb-6">{plan.target}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className={`h-4 w-4 ${colorClasses[plan.color].split(' ')[2]} mr-3`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full ${colorClasses[plan.color].split(' ')[3]} ${colorClasses[plan.color].split(' ')[4]} text-white py-3 rounded-lg font-semibold transition-colors`}>
                    Choose Plan
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600">Real experiences from our satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    testimonial.type === 'Tenant' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                  }`}>
                    {testimonial.type}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-sm font-medium text-purple-600">{testimonial.rent}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ready to Find Your Next Home?</h2>
              <p className="text-purple-100 mb-8">
                Join thousands of satisfied customers who found their perfect rental through our platform.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-300 mr-3" />
                  <span>Verified properties only</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-300 mr-3" />
                  <span>Zero brokerage for many properties</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-300 mr-3" />
                  <span>24/7 customer support</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">I am looking to</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>Rent a property</option>
                    <option>List my property for rent</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>Select property type</option>
                    <option>1 BHK Apartment</option>
                    <option>2 BHK Apartment</option>
                    <option>3 BHK Apartment</option>
                    <option>Villa/Independent House</option>
                    <option>Commercial Space</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter preferred location"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Get Started
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
            <h2 className="text-2xl font-bold mb-8">Need Help with Rental Services?</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 98765-43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>rentals@citizenhomes.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>Mon-Sun: 9 AM - 9 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}