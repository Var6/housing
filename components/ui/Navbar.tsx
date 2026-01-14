'use client';

import { useState, useEffect, useRef } from 'react';
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
  Bell,
  User,
  LogOut,
  Package,
  Mail,
  PhoneCall
} from 'lucide-react';
import Image from 'next/image';
import LocationRibbon from './ribbion'; // Import the separate component
import Link from 'next/link';

// Types
interface Session {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

// Main Navbar Component
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Mock session - replace with your auth logic
  useEffect(() => {
    // setSession({ user: { name: 'John Doe', email: 'john@example.com', image: null } });
  }, []);

  const handleLogout = () => {
    setSession(null);
    setShowUserMenu(false);
  };

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-2xl' 
          : 'bg-white shadow-lg'
      }`}>
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16">
            {/* Logo */}
            <div className="flex items-center mr-5">
              <a href="/" className="flex items-center space-x-3 group">
                <div className="relative">     
                  <Image src="/logo2.png" alt="CitizenHousing Logo" width={40} height={40} />
                </div>           
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent">
                    CitizenHousing
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">Find Your Dream Home</p>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 items-center space-x-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-2 py-2 rounded-lg text-lg font-medium text-orange-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
               <div className="ml-auto flex items-center space-x-4 text-sm font-medium text-orange-700">
                  <Link href="mailto:sales@citizenimf.com">
                  <span>
                    <Mail className="inline-block h-4 w-4 mr-1 text-orange-700" /> 
                    sales@citizenimf.com</span>
                  </Link>
                  <Link href="tel:+919876543210">
                  <span>
                    <PhoneCall className="inline-block h-4 w-4 mr-1 text-orange-700" />
                    +91 9031007097
                  </span>
                    </Link>
                </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <a href="/properties/saved" className="p-2 rounded-lg text-gray-600 hover:text-green-600">
                <Heart className="h-5 w-5" />
              </a>
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg text-gray-700 hover:bg-gray-50">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </a>
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