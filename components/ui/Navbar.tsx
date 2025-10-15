'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  Menu, 
  X, 
  Home, 
  Search, 
  Calculator, 
  Shield, 
  Award, 
  Users,
  Phone,
  ChevronDown,
  LogIn,
  UserPlus,
  MapPin,
  Building,
  Briefcase,
  FileText,
  HelpCircle,
  Star,
  Gavel,
  Eye,
  Settings,
  TrendingUp,
  Heart,
  Bell
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigationItems = [
    {
      title: 'Properties',
      icon: <Building2 className="h-4 w-4" />,
      color: 'blue',
      items: [
        { name: 'All Properties', href: '/properties', icon: <Building className="h-4 w-4" />, desc: 'Browse all available properties' },
        { name: 'Featured Listings', href: '/properties/featured', icon: <Star className="h-4 w-4" />, desc: 'Premium and highlighted properties' },
        { name: 'Advanced Search', href: '/search', icon: <Search className="h-4 w-4" />, desc: 'Find properties with detailed filters' },
        { name: 'Property Comparison', href: '/properties/compare', icon: <TrendingUp className="h-4 w-4" />, desc: 'Compare multiple properties' },
        { name: 'Saved Properties', href: '/properties/saved', icon: <Heart className="h-4 w-4" />, desc: 'Your bookmarked properties' },
      ]
    },
    {
      title: 'Services',
      icon: <Briefcase className="h-4 w-4" />,
      color: 'green',
      items: [
        { name: 'Buy Property', href: '/services/buying', icon: <Home className="h-4 w-4" />, desc: 'Complete buying assistance' },
        { name: 'Sell Property', href: '/services/selling', icon: <Building className="h-4 w-4" />, desc: 'List and sell your property' },
        { name: 'Rental Services', href: '/services/rental', icon: <MapPin className="h-4 w-4" />, desc: 'Rent or lease properties' },
        { name: 'Legal Support', href: '/services/legal', icon: <Gavel className="h-4 w-4" />, desc: 'Legal documentation help' },
        { name: 'Home Loans', href: '/services/finance', icon: <Calculator className="h-4 w-4" />, desc: 'Financing and loan assistance' },
        { name: 'Property Inspection', href: '/services/inspection', icon: <Shield className="h-4 w-4" />, desc: 'Professional property inspection' },
      ]
    },
    {
      title: 'Support',
      icon: <HelpCircle className="h-4 w-4" />,
      color: 'orange',
      items: [
        { name: 'Contact Us', href: '/Contact', icon: <Phone className="h-4 w-4" />, desc: 'Get in touch with our team' },
        { name: 'Help Center', href: '/faq', icon: <HelpCircle className="h-4 w-4" />, desc: 'Frequently asked questions' },
        { name: 'About Us', href: '/about', icon: <Users className="h-4 w-4" />, desc: 'Learn about our company' },
        { name: 'Testimonials', href: '/testimonials', icon: <Award className="h-4 w-4" />, desc: 'What our customers say' },
        { name: 'Careers', href: '/careers', icon: <Briefcase className="h-4 w-4" />, desc: 'Join our growing team' },
      ]
    }
  ];

  const getColorClasses = (color: string, isActive: boolean = false) => {
    const colors = {
      blue: isActive ? 'bg-blue-50 text-blue-600 border-blue-200' : 'hover:bg-blue-50 hover:text-blue-600',
      green: isActive ? 'bg-green-50 text-green-600 border-green-200' : 'hover:bg-green-50 hover:text-green-600',
      purple: isActive ? 'bg-purple-50 text-purple-600 border-purple-200' : 'hover:bg-purple-50 hover:text-purple-600',
      orange: isActive ? 'bg-orange-50 text-orange-600 border-orange-200' : 'hover:bg-orange-50 hover:text-orange-600',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const handleDropdownToggle = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' 
          : 'bg-white shadow-lg border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center group">
              <Link href="/" className="flex items-center space-x-3">
     
                    <Image 
                      src="/logo.png" 
                      alt="CitizenHousing Logo" 
                      width={85} 
                      height={85}
                      className="rounded-3xl  "
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <Building2 className="h-7 w-7 text-white hidden" />
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-blue-600 transition-all duration-300">
                    CitizenHousing
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1 group-hover:text-gray-600 transition-colors">Find Your Dream Home</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2" ref={dropdownRef}>
              {navigationItems.map((item, index) => (
                <div key={item.title} className="relative">
                  <button
                    onClick={(e) => handleDropdownToggle(item.title, e)}
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 border border-transparent ${
                      activeDropdown === item.title
                        ? getColorClasses(item.color, true) + ' shadow-md'
                        : 'text-gray-700 ' + getColorClasses(item.color)
                    }`}
                  >
                    <div className="transition-transform duration-300 hover:scale-110">
                      {item.icon}
                    </div>
                    <span>{item.title}</span>
                    <ChevronDown className={`h-4 w-4 transition-all duration-300 ${
                      activeDropdown === item.title ? 'rotate-180' : 'group-hover:rotate-180'
                    }`} />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.title && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in slide-in-from-top-2 duration-200"
                      onMouseLeave={() => setActiveDropdown(null)}
                      style={{
                        animation: 'dropdownSlide 0.3s ease-out forwards',
                        transformOrigin: 'top center'
                      }}
                    >
                      <div className="p-4">
                        <div className="space-y-1">
                          {item.items.map((subItem, subIndex) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-start space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group transform hover:scale-[1.02]"
                              onClick={() => setActiveDropdown(null)}
                              style={{
                                animation: `itemSlide 0.3s ease-out ${subIndex * 0.05}s both`
                              }}
                            >
                              <div className={`p-2 rounded-lg transition-all duration-200 group-hover:scale-110 ${
                                item.color === 'blue' ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-200' :
                                item.color === 'green' ? 'bg-green-100 text-green-600 group-hover:bg-green-200' :
                                item.color === 'purple' ? 'bg-purple-100 text-purple-600 group-hover:bg-purple-200' :
                                'bg-orange-100 text-orange-600 group-hover:bg-orange-200'
                              }`}>
                                {subItem.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                                  {subItem.name}
                                </h4>
                                <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors mt-1">
                                  {subItem.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Legal Links - Simple */}

              {/* Auth Buttons */}
              
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gray-50 focus:outline-none transition-all duration-200 transform hover:scale-110"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}></span>
                  <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 px-4 py-6">
            {/* Mobile Auth Buttons */}
            <div className="flex space-x-3 mb-6">
              <Link
                href="/auth/register"
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() => setIsOpen(false)}
              >
                <UserPlus className="h-4 w-4" />
                <span className="font-medium">Sign Up</span>
              </Link>
              <Link
                href="/auth/login"
                className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg transform hover:scale-[1.02]"
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="h-4 w-4" />
                <span className="font-medium">Login</span>
              </Link>
            </div>

            {/* Mobile Navigation Sections */}
            <div className="space-y-6">
              {navigationItems.map((section, sectionIndex) => (
                <div key={section.title} className="space-y-3">
                  <div className={`flex items-center space-x-3 px-4 py-2 rounded-xl ${
                    section.color === 'blue' ? 'bg-blue-50 border border-blue-200' :
                    section.color === 'green' ? 'bg-green-50 border border-green-200' :
                    section.color === 'purple' ? 'bg-purple-50 border border-purple-200' :
                    'bg-orange-50 border border-orange-200'
                  }`}>
                    <div className={`${
                      section.color === 'blue' ? 'text-blue-600' :
                      section.color === 'green' ? 'text-green-600' :
                      section.color === 'purple' ? 'text-purple-600' :
                      'text-orange-600'
                    }`}>
                      {section.icon}
                    </div>
                    <h3 className="font-bold text-gray-900">{section.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-2 pl-4">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-white rounded-xl transition-all duration-200 group shadow-sm hover:shadow-md transform hover:scale-[1.02]"
                        onClick={() => setIsOpen(false)}
                        style={{
                          animationDelay: `${(sectionIndex * 100) + (itemIndex * 50)}ms`
                        }}
                      >
                        <div className="text-gray-400 group-hover:text-blue-500 transition-colors duration-200 transform group-hover:scale-110">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-medium group-hover:text-blue-600 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500 group-hover:text-gray-600">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Mobile Legal Links */}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <Link
                  href="/PrivacyPolicy"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  <Eye className="h-4 w-4 text-gray-400" />
                  <span>Privacy Policy</span>
                </Link>
                <Link
                  href="/terms"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  <FileText className="h-4 w-4 text-gray-400" />
                  <span>Terms of Service</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={() => setIsOpen(false)}
          style={{
            animation: 'fadeIn 0.3s ease-out forwards'
          }}
        />
      )}

      <style jsx>{`
        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes itemSlide {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-in {
          animation-fill-mode: both;
        }

        .slide-in-from-top-2 {
          animation-name: dropdownSlide;
        }
      `}</style>
    </>
  );
}