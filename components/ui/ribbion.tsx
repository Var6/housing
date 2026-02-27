'use client';

import { useState, useEffect } from 'react';
import { MapPin, ChevronDown, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

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

export default function LocationRibbon() {
  const [states, setStates] = useState<State[]>([]);
  const [loading, setLoading] = useState(true);
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
    // Fetch locations from API
    fetch('/api/locations')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setStates(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch locations:', err);
        setLoading(false);
      });
  }, []);

const router = useRouter();

const handleNavigation = (stateName: string, cityName?: string) => {
  const params = new URLSearchParams();
  params.set('state', stateName);
  if (cityName) params.set('city', cityName);

  router.push(`/properties?${params.toString()}`);
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

  if (loading) {
    return (
      <div className="relative w-full bg-gradient-to-r from-green-800 via-green-500 to-green-300 shadow-lg">
        <div className="flex items-center justify-center py-3 px-4">
          <Loader2 className="h-5 w-5 text-white animate-spin mr-2" />
          <span className="text-white text-sm">Loading locations...</span>
        </div>
      </div>
    );
  }

  if (states.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full bg-gradient-to-r from-green-800 via-green-500 to-green-300 shadow-lg">
      <div className="overflow-x-auto py-2 px-4">
        <div className="flex flex-nowrap gap-2 md:gap-4 w-max">
          {states.map((state) => {
            const hasCities = state.cities && state.cities.length > 0;
            
            return (
              <button
                key={state._id}
                className={`flex items-center text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-200 whitespace-nowrap ${
                  activeState === state._id ? 'bg-green-700 shadow-lg' : ''
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
}