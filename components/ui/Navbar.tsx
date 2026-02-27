'use client';

import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  Users,
  Phone,
  Heart,
  Building
} from 'lucide-react';
import Image from 'next/image';
import LocationRibbon from './ribbion';
import TopRibbon from './TopRibbon';
import Link from 'next/link';

// Main Navbar Component
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/', icon: <Home className="h-4 w-4" /> },
    { name: 'About', href: '/about', icon: <Users className="h-4 w-4" /> },
    { name: 'Properties', href: '/properties', icon: <Building className="h-4 w-4" /> },
    { name: 'Contact', href: '/Contact', icon: <Phone className="h-4 w-4" /> }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <TopRibbon />
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-2xl' 
          : 'bg-white shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center min-w-0 flex-shrink">
              <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
                <div className="relative flex-shrink-0">     
                  <Image src="/logo2.png" alt="CitizenHousing Logo" width={36} height={36} className="sm:w-10 sm:h-10" />
                </div>           
                <div className="min-w-0">
                  <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent truncate">
                    CitizenHousing
                  </h1>
                  <p className="text-[8px] sm:text-[10px] text-gray-500 -mt-0.5 truncate hidden xs:block">CITIZEN LAND PROPERTY & CONSTRUCTION</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-base lg:text-lg font-medium text-orange-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200 whitespace-nowrap"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-1 flex-shrink-0">
              <Link href="/properties/saved" className="p-2 rounded-lg text-gray-600 hover:text-green-600" aria-label="Saved properties">
                <Heart className="h-5 w-5" />
              </Link>
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg text-gray-700 hover:bg-gray-50" aria-label={isOpen ? "Close menu" : "Open menu"}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white animate-in slide-in-from-top-2 duration-200">
            <div className="px-3 py-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-green-50 hover:text-green-600 active:bg-green-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Location Ribbon - Now a separate component */}
      <LocationRibbon />
    </>
  );
}