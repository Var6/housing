'use client';

import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Github,
  Youtube,
  Home,
  Search,
  Calculator,
  Shield,
  Award,
  Users
} from 'lucide-react';
import Image from 'next/image';
import { contactInfo, socialLinks } from './TopRibbon';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
             <Image src="/logo2.png" alt="Citizen Housing Logo" width={50} height={50} />
              <span className="text-xl font-bold">Citizen Housing</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              <span className="text-l font-bold text-center">CITIZEN LAND PROPERTY & CONSTRUCTION PRIVATE LIMITED</span><br/>
              Your trusted partner in finding the perfect home. We connect citizens with quality housing solutions across the country.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span>1st floor Shanti Devi Nivas <br/> Near Sichai Bhavan, Patna</span>
              </div>
              <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>{contactInfo.phoneDisplay}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/properties" className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  <Building2 className="h-4 w-4" />
                  <span>All Properties</span>
                </Link>
              </li>
              <li>
                <Link  href="https://citizencooperative.in/housing-loan" rel="noopener noreferrer" target="_blank" className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  <Calculator className="h-4 w-4" />
                  <span>EMI Calculator</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  <Users className="h-4 w-4" />
                  <span>About Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/buying" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Property Buying Guide
                </Link>
              </li>
              <li>
                <Link href="/services/selling" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Property Selling
                </Link>
              </li>
              <li>
                <Link href="/services/rental" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Rental Services
                </Link>
              </li>
              <li>
                <Link href="/services/legal" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Legal Assistance
                </Link>
              </li>
              <li>
                <Link href="/https://citizencooperative.in/housing-loan" rel="noopener noreferrer" target="_blank" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Home Loan Support
                </Link>
              </li>
              </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Support & Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/Contact" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/PrivacyPolicy" className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  <Shield className="h-4 w-4" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                  <Award className="h-4 w-4" />
                  <span>Testimonials</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">Follow us:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Subscribe to newsletter"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 w-48"
                />
                <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-r-md text-sm transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 CITIZEN LAND PROPERTY & CONSTRUCTION PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Developed by</span>
              <a
                href="https://github.com/var6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>Rishabh Ranjan</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}