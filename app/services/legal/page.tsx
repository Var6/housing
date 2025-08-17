'use client';

import Link from 'next/link';
import { 
  Scale, 
  CheckCircle, 
  Shield, 
  FileText, 
  AlertTriangle, 
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Search,
  Building,
  BookOpen,
  Gavel,
  Eye,
  Star,
  Calendar,
  CreditCard,
  Camera,
  UserCheck,
  ClipboardCheck,
  Home,
  ScrollText,
  BadgeCheck,
  AlertCircle,
  Briefcase
} from 'lucide-react';

export default function LegalAssistance() {
  const legalServices = [
    {
      title: "Property Documentation",
      description: "Complete verification and preparation of property documents",
      icon: FileText,
      color: "blue",
      services: [
        "Title deed verification",
        "Encumbrance certificate check",
        "Property tax verification",
        "Building approval validation",
        "NOC verification",
        "Chain of title analysis"
      ]
    },
    {
      title: "Agreement Drafting",
      description: "Professional legal agreements for all property transactions",
      icon: ScrollText,
      color: "green",
      services: [
        "Sale deed preparation",
        "Rental agreement drafting",
        "Power of attorney",
        "Joint development agreements",
        "Partnership deeds",
        "Lease agreements"
      ]
    },
    {
      title: "Legal Consultation",
      description: "Expert legal advice for property-related matters",
      icon: Scale,
      color: "purple",
      services: [
        "Property dispute resolution",
        "Legal compliance guidance",
        "Risk assessment",
        "Court representation",
        "Mediation services",
        "Legal opinion reports"
      ]
    },
    {
      title: "Registration Services",
      description: "End-to-end property registration assistance",
      icon: BadgeCheck,
      color: "orange",
      services: [
        "Document registration",
        "Stamp duty calculation",
        "Registration fee guidance",
        "Sub-registrar office liaison",
        "Post-registration support",
        "Mutation assistance"
      ]
    }
  ];

  const legalProcess = [
    {
      id: 1,
      title: "Document Review",
      description: "Comprehensive analysis of all property-related documents",
      icon: Eye,
      details: ["Title document verification", "Legal clearance check", "Encumbrance analysis", "Compliance validation"]
    },
    {
      id: 2,
      title: "Due Diligence",
      description: "Thorough legal investigation of property ownership and status",
      icon: Search,
      details: ["Ownership verification", "Litigation check", "Approval status", "Tax compliance"]
    },
    {
      id: 3,
      title: "Legal Opinion",
      description: "Expert legal assessment and recommendation report",
      icon: Gavel,
      details: ["Risk analysis", "Legal recommendations", "Compliance report", "Action plan"]
    },
    {
      id: 4,
      title: "Documentation",
      description: "Preparation and execution of all required legal documents",
      icon: ClipboardCheck,
      details: ["Agreement drafting", "Stamp duty payment", "Registration process", "Final documentation"]
    }
  ];

  const commonIssues = [
    {
      issue: "Property Title Disputes",
      description: "Conflicting ownership claims or unclear titles",
      solution: "Title verification, legal opinion, and dispute resolution",
      icon: AlertTriangle,
      color: "red"
    },
    {
      issue: "Pending Approvals",
      description: "Missing or incomplete building approvals",
      solution: "Approval status check and regularization assistance",
      icon: ClipboardCheck,
      color: "yellow"
    },
    {
      issue: "Tax Compliance Issues",
      description: "Property tax dues or compliance gaps",
      solution: "Tax verification and clearance assistance",
      icon: FileText,
      color: "blue"
    },
    {
      issue: "Documentation Errors",
      description: "Incorrect or incomplete property documents",
      solution: "Document rectification and legal correction",
      icon: AlertCircle,
      color: "orange"
    }
  ];

  type PricingPlanColor = "blue" | "green" | "purple";
  type PricingPlan = {
    type: string;
    target: string;
    price: string;
    period: string;
    features: string[];
    color: PricingPlanColor;
    popular?: boolean;
  };

  const pricingPlans: PricingPlan[] = [
    {
      type: "Basic Legal Check",
      target: "For Individual Buyers/Sellers",
      price: "₹5,999",
      period: "per property",
      features: [
        "Title verification",
        "Encumbrance check",
        "Basic legal opinion",
        "Document review",
        "Compliance report"
      ],
      color: "blue"
    },
    {
      type: "Complete Legal Package",
      target: "For Comprehensive Protection",
      price: "₹12,999",
      period: "per property",
      features: [
        "Complete due diligence",
        "Legal opinion report",
        "Agreement drafting",
        "Registration assistance",
        "6-month legal support",
        "Court representation (if needed)"
      ],
      color: "green",
      popular: true
    },
    {
      type: "Enterprise Legal Services",
      target: "For Developers/Investors",
      price: "Custom",
      period: "pricing",
      features: [
        "Bulk property verification",
        "Project legal audit",
        "Ongoing legal consultation",
        "Dedicated legal team",
        "Priority support",
        "Annual legal retainer"
      ],
      color: "purple"
    }
  ];

  const legalExperts = [
    {
      name: "Adv. Rajesh Kumar",
      specialization: "Property Law",
      experience: "15+ years",
      cases: "500+ cases handled",
      rating: 4.9
    },
    {
      name: "Adv. Priya Sharma",
      specialization: "Real Estate Documentation",
      experience: "12+ years",
      cases: "800+ properties verified",
      rating: 4.8
    },
    {
      name: "Adv. Vikram Singh",
      specialization: "Property Litigation",
      experience: "18+ years",
      cases: "300+ disputes resolved",
      rating: 4.9
    }
  ];

  const testimonials = [
    {
      name: "Amit Agarwal",
      location: "Mumbai",
      rating: 5,
      comment: "Saved me from a major property dispute. Their legal team caught title issues that others missed.",
      case: "Property Title Verification"
    },
    {
      name: "Sunita Mehta",
      location: "Delhi",
      rating: 5,
      comment: "Professional and thorough legal assistance. Made property registration completely hassle-free.",
      case: "Property Registration"
    },
    {
      name: "Rohan Gupta",
      location: "Bangalore",
      rating: 5,
      comment: "Expert legal advice helped us resolve a complex property dispute quickly and cost-effectively.",
      case: "Property Dispute Resolution"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Legal Assistance Services
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Comprehensive legal support for all your property transactions. 
              Protect your investments with expert legal guidance and documentation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                <Scale className="h-5 w-5 mr-2" />
                Get Legal Consultation
              </button>
              <button className="bg-indigo-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-400 transition-colors inline-flex items-center justify-center">
                <FileText className="h-5 w-5 mr-2" />
                Property Verification
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Legal Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete legal support for all aspects of property transactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {legalServices.map((service, index) => {
            const IconComponent = service.icon;
            const colorClasses = {
              blue: "from-blue-600 to-blue-700",
              green: "from-green-600 to-green-700",
              purple: "from-purple-600 to-purple-700",
              orange: "from-orange-600 to-orange-700"
            };
            
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-r ${colorClasses[service.color as keyof typeof colorClasses]} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3 mr-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-opacity-90">{service.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legal Process */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Legal Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Systematic approach to ensure comprehensive legal protection
            </p>
          </div>

          <div className="space-y-8">
            {legalProcess.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className="bg-gray-50 rounded-xl shadow-sm overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 bg-gradient-to-br from-indigo-600 to-blue-700 p-8 text-white">
                      <div className="flex items-center mb-4">
                        <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div className="text-2xl font-bold">Step {step.id}</div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-indigo-100">{step.description}</p>
                    </div>
                    <div className="lg:w-2/3 p-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Process Details:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-indigo-500 mr-3" />
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                      {index < legalProcess.length - 1 && (
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

      {/* Common Legal Issues */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Legal Issues We Resolve</h2>
            <p className="text-gray-600">Property-related legal problems and our expert solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonIssues.map((item, index) => {
              const IconComponent = item.icon;
              const colorClasses = {
                red: "bg-red-100 text-red-600 border-red-200",
                yellow: "bg-yellow-100 text-yellow-600 border-yellow-200",
                blue: "bg-blue-100 text-blue-600 border-blue-200",
                orange: "bg-orange-100 text-orange-600 border-orange-200"
              };
              
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start mb-4">
                    <div className={`${colorClasses[item.color as keyof typeof colorClasses]} rounded-lg p-3 mr-4`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.issue}</h3>
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-sm font-medium text-gray-900 mb-1">Our Solution:</div>
                        <div className="text-sm text-gray-700">{item.solution}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Legal Experts */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Legal Experts</h2>
            <p className="text-gray-600">Experienced lawyers specializing in property law</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {legalExperts.map((expert, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="bg-indigo-100 rounded-full p-4 w-fit mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{expert.name}</h3>
                <p className="text-indigo-600 font-medium mb-2">{expert.specialization}</p>
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <div>{expert.experience}</div>
                  <div>{expert.cases}</div>
                </div>
                <div className="flex items-center justify-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                  <span className="font-medium">{expert.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Legal Service Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent pricing for comprehensive legal protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => {
              const colorClasses = {
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
                    Choose Package
                  </button>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-gray-600">How our legal expertise protected our clients' interests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-sm font-medium text-indigo-600 mt-1">{testimonial.case}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Protect Your Property Investment</h2>
              <p className="text-indigo-100 mb-8">
                Don't take risks with property transactions. Get expert legal assistance 
                to ensure your investments are legally secure and compliant.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-indigo-300 mr-3" />
                  <span>Expert legal consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-indigo-300 mr-3" />
                  <span>Comprehensive document verification</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-indigo-300 mr-3" />
                  <span>Risk-free property transactions</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Get Legal Consultation</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Legal Service Required</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option>Select service type</option>
                    <option>Property Documentation</option>
                    <option>Agreement Drafting</option>
                    <option>Legal Consultation</option>
                    <option>Registration Services</option>
                    <option>Dispute Resolution</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option>Select property type</option>
                    <option>Residential Apartment</option>
                    <option>Villa/Independent House</option>
                    <option>Commercial Property</option>
                    <option>Plot/Land</option>
                    <option>Industrial Property</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Brief Description</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    rows={3}
                    placeholder="Describe your legal requirement"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Request Consultation
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
            <h2 className="text-2xl font-bold mb-8">Emergency Legal Support</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 98765-43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>legal@citizenhomes.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>24/7 Emergency Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}