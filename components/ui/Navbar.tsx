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
  Package
} from 'lucide-react';

// Types
interface City {
  _id: string;
  name: string;
  propertyCount?: number;
}

interface State {
  _id: string;
  name: string;
  cities?: City[];
}

interface Session {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

// Mock data - replace with your API calls
const mockStates: State[] = [
  {
    _id: '1',
    name: 'Bihar',
    cities: [
      { _id: '1-1', name: 'Patna', propertyCount: 245 },
      { _id: '1-2', name: 'Gaya', propertyCount: 132 },
      { _id: '1-3', name: 'Bhagalpur', propertyCount: 98 },
      { _id: '1-4', name: 'Muzaffarpur', propertyCount: 167 }
    ]
  },
  {
    _id: '2',
    name: 'Maharashtra',
    cities: [
      { _id: '2-1', name: 'Mumbai', propertyCount: 1250 },
      { _id: '2-2', name: 'Pune', propertyCount: 890 },
      { _id: '2-3', name: 'Nagpur', propertyCount: 456 }
    ]
  },
  {
    _id: '3',
    name: 'Karnataka',
    cities: [
      { _id: '3-1', name: 'Bangalore', propertyCount: 1520 },
      { _id: '3-2', name: 'Mysore', propertyCount: 234 },
      { _id: '3-3', name: 'Mangalore', propertyCount: 178 }
    ]
  },
  {
    _id: '4',
    name: 'Delhi',
    cities: [
      { _id: '4-1', name: 'New Delhi', propertyCount: 980 },
      { _id: '4-2', name: 'Dwarka', propertyCount: 456 },
      { _id: '4-3', name: 'Rohini', propertyCount: 567 }
    ]
  },
  {
    _id: '5',
    name: 'Uttar Pradesh',
    cities: [
      { _id: '5-1', name: 'Lucknow', propertyCount: 678 },
      { _id: '5-2', name: 'Noida', propertyCount: 890 },
      { _id: '5-3', name: 'Varanasi', propertyCount: 234 }
    ]
  }
];

// Avatar Component
const Avatar = ({ src, name, size = 'sm' }: { src?: string | null; name?: string | null; size?: 'sm' | 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base'
  };

  const getInitials = (name: string | null | undefined): string => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  if (src) {
    return <img src={src} alt={name || 'User'} className={`${sizeClasses[size]} rounded-full object-cover ring-2 ring-green-100`} />;
  }

  return (
    <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center font-semibold ring-2 ring-green-100`}>
      {getInitials(name)}
    </div>
  );
};

// Location Ribbon Component
const LocationRibbon = () => {
  const [states, setStates] = useState<State[]>([]);
  const [activeState, setActiveState] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{ left: number; stateId: string } | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Replace with your API call
    // fetch('/api/states').then(res => res.json()).then(data => setStates(data));
    setStates(mockStates);
  }, []);

  const handleNavigation = (stateName: string, cityName?: string) => {
    const params = new URLSearchParams();
    params.set('state', stateName);
    if (cityName) params.set('city', cityName);
    window.location.href = `/properties?${params.toString()}`;
    setActiveState(null);
  };

  const handleStateHover = (stateId: string, event: React.MouseEvent<HTMLButtonElement>) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    
    const button = event.currentTarget;
    const ribbonContainer = button.closest('.overflow-x-auto');
    if (ribbonContainer) {
      const buttonRect = button.getBoundingClientRect();
      const containerRect = ribbonContainer.getBoundingClientRect();
      const leftPosition = buttonRect.left - containerRect.left + ribbonContainer.scrollLeft;
      setDropdownPosition({ left: leftPosition, stateId });
    }
    
    setActiveState(stateId);
  };

  const handleStateLeave = () => {
    const timeout = setTimeout(() => {
      setActiveState(null);
      setDropdownPosition(null);
    }, 300);
    setHoverTimeout(timeout);
  };

  const getActiveStateData = () => states.find(s => s._id === activeState);

  return (
    <div className="relative w-full bg-gradient-to-r from-green-600 via-green-500 to-indigo-600 shadow-lg">
      <div className="overflow-x-auto py-2 px-4">
        <div className="flex flex-nowrap gap-2 md:gap-4 w-max">
          {states.map((state) => {
            const hasCities = state.cities && state.cities.length > 0;
            
            return (
              <button
                key={state._id}
                className={`flex items-center text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-200 whitespace-nowrap ${
                  activeState === state._id ? 'bg-lue-700 shadow-lg' : ''
                }`}
                onMouseEnter={(e) => !isMobile && hasCities && handleStateHover(state._id, e)}
                onMouseLeave={!isMobile ? handleStateLeave : undefined}
                onClick={(e) => {
                  if (isMobile && hasCities) {
                    if (activeState === state._id) {
                      setActiveState(null);
                      setDropdownPosition(null);
                    } else {
                      handleStateHover(state._id, e);
                    }
                  } else if (!hasCities) {
                    handleNavigation(state.name);
                  }
                }}
              >
                <MapPin className="h-4 w-4 mr-2" />
                <span>{state.name}</span>
                {hasCities && (
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${
                    activeState === state._id ? 'rotate-180' : ''
                  }`} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dropdown for cities */}
      {activeState && dropdownPosition && getActiveStateData()?.cities && (
        <div
          className="absolute bg-white shadow-2xl rounded-xl border-2 border-green-200/30 backdrop-blur-sm py-3 min-w-[240px] max-w-[300px] z-[99999]"
          style={{
            top: '100%',
            left: `${dropdownPosition.left}px`,
            marginTop: '0.5rem',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
          onMouseEnter={!isMobile ? () => { if (hoverTimeout) clearTimeout(hoverTimeout); } : undefined}
          onMouseLeave={!isMobile ? handleStateLeave : undefined}
        >
          <div className="absolute -top-3 w-6 h-6 bg-white border-l-2 border-t-2 border-green-200/30 transform rotate-45 shadow-lg" style={{ left: '20px' }}></div>
          
          <div className="px-4 pb-2 mb-2 border-b border-green-100">
            <h3 className="text-sm font-bold text-green-800 uppercase tracking-wide flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {getActiveStateData()?.name}
            </h3>
          </div>
          
          <div className="space-y-2">
            {getActiveStateData()?.cities?.map((city, index) => (
              <button
                key={city._id}
                className="group block w-full px-4 py-3 text-left bg-gradient-to-r from-white/80 to-green-50/60 hover:from-green-100 hover:to-green-200 text-gray-700 hover:text-green-900 transition-all duration-300 text-sm font-medium rounded-lg mx-2 relative overflow-hidden shadow-sm hover:shadow-md border border-green-100/50 hover:border-green-300/70"
                onClick={() => handleNavigation(getActiveStateData()!.name, city.name)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between gap-3 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 group-hover:scale-125 transition-transform"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium">
                      {city.name}
                    </span>
                  </div>
                  {city.propertyCount && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                      {city.propertyCount}
                    </span>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            ))}
          </div>
        </div>
      )}

      {isMobile && activeState && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[99998]"
          onClick={() => {
            setActiveState(null);
            setDropdownPosition(null);
          }}
        />
      )}
    </div>
  );
};

// Main Navbar Component
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const navigationItems = [
    { name: 'Home', href: '/', icon: <Home className="h-4 w-4" /> },
    { name: 'Properties', href: '/properties', icon: <Building className="h-4 w-4" /> },
    { name: 'Search', href: '/search', icon: <Search className="h-4 w-4" /> },
    { name: 'About', href: '/about', icon: <Users className="h-4 w-4" /> },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-2xl">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
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
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
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

      {/* Location Ribbon */}
      <LocationRibbon />
    </>
  );
}