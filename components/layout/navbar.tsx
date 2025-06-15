'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Building, Search, User, Heart, Phone, MapPin } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4" />
  },
  {
    name: 'Properties',
    href: '/properties',
    icon: <Building className="w-4 h-4" />
  },
  {
    name: 'Search',
    href: '/properties/search',
    icon: <Search className="w-4 h-4" />
  },
  {
    name: 'Locations',
    href: '/locations',
    icon: <MapPin className="w-4 h-4" />
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <Phone className="w-4 h-4" />
  }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 font-heading">
                  Citizen Housing
                </span>
                <span className="text-xs text-gray-500 -mt-1">Bihar Property Portal</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'bg-primary-100 text-primary-700 border-b-2 border-primary-600'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/dashboard/favorites"
              className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              <Heart className="w-4 h-4" />
              <span className="text-sm">Favorites</span>
            </Link>
            
            <Link
              href="/auth/login"
              className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors duration-200"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </Link>
            
            <Link
              href="/auth/register"
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Register
            </Link>
            
            <div className="flex items-center space-x-2 pl-4 border-l border-gray-200">
              <button className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                हिन्दी
              </button>
              <span className="text-gray-400">|</span>
              <button className="text-sm text-primary-600 font-medium">
                English
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
              aria-expanded="false"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Mobile Auth Section */}
            <div className="pt-4 pb-2 border-t border-gray-200 mt-4">
              <Link
                href="/dashboard/favorites"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition-colors duration-200"
              >
                <Heart className="w-4 h-4" />
                <span>Favorites</span>
              </Link>
              
              <Link
                href="/auth/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition-colors duration-200"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </Link>
              
              <Link
                href="/auth/register"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200 mt-2"
              >
                Register
              </Link>
              
              {/* Language Toggle Mobile */}
              <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-gray-200">
                <button className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  हिन्दी
                </button>
                <span className="text-gray-400">|</span>
                <button className="text-sm text-primary-600 font-medium">
                  English
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}