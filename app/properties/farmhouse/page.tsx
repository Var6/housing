'use client';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Check, Home, Trees, Waves, Dumbbell, Users, GraduationCap, Car, Building2, Utensils, ShoppingBag, Mountain, Bed, Bath, Maximize, IndianRupee, Filter, Search, X } from 'lucide-react';
import LeadPopup from '@/components/UX/LeadPopup';
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface Amenity {
  icon: IconType;
  name: string;
}

interface Property {
  id: number;
  name: string;
  location: string;
  city: string;
  state: string;
  type: string;
  price: string;
  priceRange: string;
  area: string;
  bedrooms: string;
  bathrooms: string;
  description: string;
  image: string;
  images: string[];
  features: string[];
  amenities: Amenity[];
  highlights: string[];
  nearbyPlaces: string[];
  clubhouseFeatures?: string[];
  restaurantOptions?: string[];
  shoppingFacilities?: string[];
  investmentHighlights?: string[];
}



export default function PropertiesPage() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [locationFilter, setLocationFilter] = useState<string>('all');
    const [leadOpen, setLeadOpen] = useState(false);
    const [leadProperty, setLeadProperty] = useState<string | undefined>();
  const properties: Property[] = [
    {
      id: 1,
      name: "Centurion Farm House",
      location: "Jewar Airport, Delhi",
      city: "Noida",
      state: "Delhi",
      type: "Premium Farmhouse",
      price: "On Request",
      priceRange: "Premium Segment",
      area: "Contact for Details",
      bedrooms: "Multiple Configurations",
      bathrooms: "Modern Fittings",
      description: "Centurion Farm House in Noida offers an exceptional opportunity for those seeking premium farmhouse living in Delhi. Located in the peaceful area of Yamuna Highway, this property combines modern luxury with natural surroundings. The farmhouse is designed for families who value space, privacy, and quality construction. With its strategic location in Jewar, residents enjoy easy access to city amenities while living in a tranquil environment.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
      ],
      features: [
        "Spacious Layout with Modern Design",
        "Premium Quality Construction",
        "Peaceful & Serene Location",
        "Well-Connected to Delhi City",
        "Ample Parking Space",
        "Green Surroundings",
        "Security Features",
        "Power Backup Available"
      ],
      amenities: [
        { icon: Home, name: "Modern Architecture" },
        { icon: Trees, name: "Landscaped Gardens" },
        { icon: Car, name: "Parking Facility" },
        { icon: Building2, name: "Quality Build" }
      ],
      highlights: [
        "Prime location in New Delhi, near Jewar Airport",
        "Ideal for families seeking peaceful living",
        "Modern amenities in natural setting",
        "Easy access to schools and hospitals",
        "Well-connected road network"
      ],
      nearbyPlaces: [
        "Yamuna Highway - 2 minutes",
        "Hospitals and Healthcare Centers nearby",
        "Shopping Centers accessible",
        "Jewar Airport - 5 minutes drive",
      ]
    },
    {
      id: 2,
      name: "Lotus Farms House",
      location: "Techzone, Greater Noida",
      city: "Greater Noida",
      state: "Uttar Pradesh",
      type: "Luxury Farmhouse Community",
      price: "On Request",
      priceRange: "Luxury Segment",
      area: "Multiple Plot Sizes Available",
      bedrooms: "3-5 BHK Options",
      bathrooms: "Premium Fittings",
      description: "Lotus Farms House in Techzone, Greater Noida, is one of the most sought-after farmhouse communities in the region. Situated in a serene and peaceful location away from the hustle and bustle of the city, this property provides you with the opportunity to be closer to nature while enjoying the perks of world-class modern amenities. The farmhouse community offers a perfect blend of luxury living and natural beauty, with stunning mountain views and lush green surroundings that create an ideal escape from urban life.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      images: [
        "/layout.png",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80"
      ],
      features: [
        "Private Clubhouse with Exclusive Lounge",
        "Temperature Controlled Swimming Pool",
        "Fully-Equipped Modern Gymnasium",
        "Multi-Purpose Sports Complex",
        "Cricket & Football Grounds",
        "Shopping Arcade with Multiple Stores",
        "Multi-Cuisine Restaurant Options",
        "24/7 Security with CCTV Surveillance",
        "Landscaped Gardens & Green Spaces",
        "Children's Play Area",
        "Jogging & Cycling Tracks",
        "Power Backup for Common Areas",
        "Rainwater Harvesting System",
        "Ample Guest Parking"
      ],
      amenities: [
        { icon: Home, name: "Private Clubhouse" },
        { icon: Waves, name: "Swimming Pool" },
        { icon: Dumbbell, name: "Modern Gym" },
        { icon: Users, name: "Sports Complex" },
        { icon: Trees, name: "Lush Greenery" },
        { icon: ShoppingBag, name: "Shopping Arcade" },
        { icon: Utensils, name: "Restaurants" },
        { icon: Mountain, name: "Mountain Views" },
        { icon: GraduationCap, name: "Near Schools" },
        { icon: Car, name: "Expressway Access" }
      ],
      highlights: [
        "Stunning views of surrounding mountains",
        "Located away from city pollution and noise",
        "Perfect for weekend getaways and permanent residence",
        "Close proximity to top educational institutions",
        "Easy access via Noida-Greater Noida Expressway",
        "Quick connectivity to Delhi NCR (30-40 minutes)",
        "Nearby Metro connectivity for daily commute",
        "Surrounded by lush green forests and trees"
      ],
      clubhouseFeatures: [
        "Private Lounge for Family Gatherings",
        "Indoor Games Room",
        "Library and Reading Area",
        "Banquet Hall for Events",
        "Cafeteria with Seating"
      ],
      restaurantOptions: [
        "Traditional Indian Cuisine",
        "International Multi-Cuisine Options",
        "Fast Food and Snacks",
        "Café with Beverages",
        "Party and Catering Services"
      ],
      shoppingFacilities: [
        "Clothing and Fashion Stores",
        "Electronics and Gadgets",
        "Grocery and Daily Needs",
        "Sports Equipment",
        "Home Décor Items"
      ],
      nearbyPlaces: [
        "Gautam Buddha University - 10 minutes",
        "Shiv Nadar University - 15 minutes",
        "Greater Noida Institute of Technology - Nearby",
        "Noida-Greater Noida Expressway - Direct Access",
        "Pari Chowk - 15 minutes",
        "Knowledge Park - 20 minutes",
        "Delhi Border - 40 minutes"
      ],
      investmentHighlights: [
        "Rapidly developing area with high appreciation potential",
        "Excellent connectivity improving with new infrastructure",
        "Proximity to IT hubs and industrial areas",
        "Growing educational and healthcare facilities",
        "Government initiatives for smart city development"
      ]
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === 'all' || property.city.toLowerCase() === locationFilter.toLowerCase();
    return matchesSearch && matchesLocation;
  });

  const PropertyCard: React.FC<{ property: Property }> = ({ property }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
         onClick={() => setSelectedProperty(property)}>
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
          {property.type}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-blue-600 mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-semibold">{property.city}, {property.state}</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{property.name}</h3>
        <p className="text-slate-600 mb-4 line-clamp-2">{property.description}</p>
        
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <IndianRupee className="w-5 h-5 text-slate-600" />
            <span className="font-semibold text-slate-900">{property.priceRange}</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize className="w-5 h-5 text-slate-600" />
            <span className="text-sm text-slate-600">{property.area}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {property.amenities.slice(0, 3).map((amenity, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-2 bg-slate-50 rounded-lg">
              <amenity.icon className="w-5 h-5 text-blue-600 mb-1" />
              <span className="text-xs text-slate-600">{amenity.name}</span>
            </div>
          ))}
        </div>

<button
  onClick={() => {
    setLeadProperty(property.name);
    setLeadOpen(true);
  }}
  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
>
  Enquire Now
</button>
       
        </div>
    </div>
  );
 
  const PropertyModal: React.FC<{ property: Property; onClose: () => void }> = ({ property, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl">
          {/* Modal Header */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-2 h-96">
              <img src={property.images[0]} alt={property.name} className="w-full h-full object-cover rounded-tl-2xl" />
              <div className="grid grid-rows-2 gap-2">
                <img src={property.images[1]} alt={property.name} className="w-full h-full object-cover rounded-tr-2xl" />
                <img src={property.images[2] || property.images[0]} alt={property.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-slate-100 transition">
              <X className="w-6 h-6 text-slate-700" />
            
            </button>
              <LeadPopup
        open={leadOpen}
        onClose={() => setLeadOpen(false)}
        propertyName={leadProperty}
        />
          </div>

          <div className="p-8">
            {/* Property Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">{property.location}</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">{property.name}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Property Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-slate-50 rounded-xl">
              <div className="text-center">
                <IndianRupee className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm text-slate-600">Price</div>
                <div className="font-semibold text-slate-900">{property.price}</div>
              </div>
              <div className="text-center">
                <Maximize className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm text-slate-600">Area</div>
                <div className="font-semibold text-slate-900">{property.area}</div>
              </div>
              <div className="text-center">
                <Bed className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm text-slate-600">Bedrooms</div>
                <div className="font-semibold text-slate-900">{property.bedrooms}</div>
              </div>
              <div className="text-center">
                <Bath className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm text-slate-600">Bathrooms</div>
                <div className="font-semibold text-slate-900">{property.bathrooms}</div>
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Amenities & Facilities</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition">
                    <amenity.icon className="w-8 h-8 text-blue-600 mb-2" />
                    <span className="text-sm font-medium text-slate-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Property Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {property.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Sections for Lotus Farms */}
            {property.id === 2 && (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Clubhouse Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.clubhouseFeatures?.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <Home className="w-5 h-5 text-blue-600" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Dining & Shopping</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900 mb-3 flex items-center gap-2">
                        <Utensils className="w-5 h-5 text-blue-600" />
                        Restaurant Options
                      </h4>
                      <div className="space-y-2">
                        {property.restaurantOptions?.map((option, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-700">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            <span>{option}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900 mb-3 flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5 text-blue-600" />
                        Shopping Facilities
                      </h4>
                      <div className="space-y-2">
                        {property.shoppingFacilities?.map((facility, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-700">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            <span>{facility}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Investment Highlights</h3>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                    <div className="space-y-3">
                      {property.investmentHighlights?.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Nearby Places */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Nearby Locations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {property.nearbyPlaces.map((place, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{place}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Interested in this Property?</h3>
              <p className="mb-6">Contact Citizen Housing today for more information, site visits, and personalized assistance.</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+919031007097" className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a href="mailto:citizen.housing@citizencooperative.in" className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Properties</h1>
          <p className="text-xl text-blue-100 mb-8">Discover premium farmhouses in prime locations</p>
          
          {/* Search and Filter */}
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by property name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none bg-white">
                  <option value="all">All Locations</option>
                  <option value="patna">Patna</option>
                  <option value="greater noida">Greater Noida</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            {filteredProperties.length} {filteredProperties.length === 1 ? 'Property' : 'Properties'} Found
          </h2>
          <p className="text-slate-600">Premium farmhouse properties curated for you</p>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-slate-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">No Properties Found</h3>
            <p className="text-slate-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact Citizen Housing for personalized assistance, site visits, and expert guidance in your property search.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919031007097" className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition">
              <Phone className="w-5 h-5" />
              +91 9031007097
            </a>
            <a href="mailto:citizen.housing@citizencooperative.in" className="flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition">
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-slate-400">
            <MapPin className="w-5 h-5" />
            <span>Anisabad, Patna, Bihar</span>
          </div>
        </div>
      </div>

      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
        />
      )}
    </div>
  );
}