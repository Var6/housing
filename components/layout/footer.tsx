'use client';

import Link from 'next/link';
import { Building, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Buy Property', href: '/properties' },
  { name: 'Rent Property', href: '/properties?type=rent' },
  { name: 'Sell Property', href: '/sell' },
  { name: 'Property Search', href: '/properties/search' },
  { name: 'Property Valuation', href: '/valuation' }
];

const biharDistricts = [
  { name: 'Patna', href: '/locations/patna' },
  { name: 'Gaya', href: '/locations/gaya' },
  { name: 'Muzaffarpur', href: '/locations/muzaffarpur' },
  { name: 'Bhagalpur', href: '/locations/bhagalpur' },
  { name: 'Darbhanga', href: '/locations/darbhanga' },
  { name: 'Bihar Sharif', href: '/locations/bihar-sharif' }
];

const resources = [
  { name: 'Property Laws', href: '/resources/laws' },
  { name: 'Stamp Duty Calculator', href: '/tools/stamp-duty' },
  { name: 'EMI Calculator', href: '/tools/emi-calculator' },
  { name: 'Government Schemes', href: '/resources/schemes' },
  { name: 'Legal Documents', href: '/resources/documents' },
  { name: 'Property Guide', href: '/resources/guide' }
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-heading">
                  Citizen Housing
                </span>
                <span className="text-sm text-gray-400">Bihar Property Portal</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Bihar's trusted real estate platform connecting buyers, sellers, and renters. 
              Find your dream property in Bihar with verified listings and transparent pricing.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Fraser Road, Patna, Bihar 800001, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  +91 9876543210
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  contact@citizenhousing.in
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-300 mb-3">Follow Us</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bihar Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Popular Cities</h3>
            <ul className="space-y-2">
              {biharDistricts.map((district) => (
                <li key={district.name}>
                  <Link
                    href={district.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {district.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-2">
                Stay Updated with Property News
              </h3>
              <p className="text-gray-300 text-sm">
                Get the latest property updates, market trends, and exclusive deals in Bihar.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                />
                <button className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-r-lg transition-colors duration-200 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>
                © {currentYear} Citizen Housing. All rights reserved. |{' '}
                <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
                {' '} | {' '}
                <Link href="/terms" className="hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
              </p>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for Bihar</span>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center">
              All property information is provided by third parties and is believed to be accurate. 
              However, Citizen Housing makes no warranties regarding the accuracy of this information. 
              All buyers should verify property details independently before making any decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}