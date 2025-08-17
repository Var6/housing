'use client'
'use client';

import Link from 'next/link';
import { 
  Home, 
  CheckCircle, 
  Users, 
  FileText, 
  Calculator, 
  Shield,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Banknote,
  Search
} from 'lucide-react';

export default function PropertyBuyingGuide() {
  const steps = [
    {
      id: 1,
      title: "Define Your Requirements",
      description: "Identify your budget, preferred location, property type, and must-have features.",
      icon: Search,
      details: ["Budget planning", "Location research", "Property type selection", "Feature prioritization"]
    },
    {
      id: 2,
      title: "Get Pre-approved",
      description: "Secure financing pre-approval to understand your purchasing power and strengthen offers.",
      icon: Banknote,
      details: ["Credit score check", "Income verification", "Down payment calculation", "Loan pre-approval"]
    },
    {
      id: 3,
      title: "Property Search",
      description: "Browse listings, attend viewings, and shortlist properties that meet your criteria.",
      icon: Home,
      details: ["Online browsing", "Property viewings", "Neighborhood analysis", "Shortlisting"]
    },
    {
      id: 4,
      title: "Legal Verification",
      description: "Verify property documents, clear titles, and ensure all legal aspects are in order.",
      icon: Shield,
      details: ["Title verification", "Document check", "Legal clearance", "Encumbrance certificate"]
    },
    {
      id: 5,
      title: "Negotiate & Finalize",
      description: "Negotiate price, finalize terms, complete documentation, and close the deal.",
      icon: FileText,
      details: ["Price negotiation", "Agreement drafting", "Documentation", "Registration"]
    }
  ];

  const services = [
    {
      title: "Property Consultation",
      description: "Expert advice on property selection and market trends",
      icon: Users,
      features: ["Market analysis", "Property evaluation", "Investment advice", "Risk assessment"]
    },
    {
      title: "Legal Support",
      description: "Complete legal assistance from verification to registration",
      icon: Shield,
      features: ["Document verification", "Title clearance", "Legal compliance", "Registration support"]
    },
    {
      title: "Financial Guidance",
      description: "Home loan assistance and financial planning",
      icon: Calculator,
      features: ["Loan processing", "EMI calculation", "Financial planning", "Tax benefits"]
    }
  ];

  const benefits = [
    "Expert guidance throughout the buying process",
    "Access to verified properties with clear titles",
    "Competitive pricing and negotiation support",
    "Complete legal and financial assistance",
    "Post-purchase support and services",
    "Transparent dealing with no hidden costs"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Property Buying Guide
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Your comprehensive guide to buying property in India. From initial search to final registration, 
              we'll guide you through every step of the home buying process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/Properties"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Search className="h-5 w-5 mr-2" />
                Browse Properties
              </Link>
              <Link 
                href="/calculator"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors inline-flex items-center justify-center"
              >
                <Calculator className="h-5 w-5 mr-2" />
                EMI Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Buying Process Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Property Buying Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow our proven 5-step process to make your property purchase smooth and hassle-free
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
                    <div className="flex items-center mb-4">
                      <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="text-2xl font-bold">Step {step.id}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-blue-100">{step.description}</p>
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h4>
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

      {/* Our Services */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive support services to make your property buying journey smooth and successful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="bg-blue-600 rounded-lg p-4 w-fit mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose CitizenHomes?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select budget range</option>
                    <option>₹10L - ₹25L</option>
                    <option>₹25L - ₹50L</option>
                    <option>₹50L - ₹1Cr</option>
                    <option>₹1Cr - ₹2Cr</option>
                    <option>₹2Cr+</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8">Need Immediate Assistance?</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 98765-43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@citizenhomes.com</span>
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