'use client';
import React, { useState } from 'react';
import { Building2, MapPin, Home, Maximize, IndianRupee, Calendar, Layers, FileText, Phone, Mail, Check, ArrowLeft, Share2, Heart, Download, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { projects } from '@/data/project';
import { notFound } from 'next/navigation';

// Types
type Unit = {
  bhk: string;
  sqft: number;
  price: string;
};

type Project = {
  id: string;
  name: string;
  developer: string;
  location: string;
  city: string;
  state: string;
  region: string;
  units: Unit[];
  possession: string;
  structure: string;
  reraId?: string;
};

// Sample project data - in real app, this would come from your data file
const project: Project = {
  id: 'piramal-mahalaxmi',
  name: 'Piramal Mahalaxmi',
  developer: 'Piramal Realty',
  location: 'Jacob Circle',
  city: 'Mumbai',
  state: 'Maharashtra',
  region: 'CST to Mulund',
  units: [
    { bhk: '2 BHK', sqft: 762, price: '5.60 Cr' },
    { bhk: '3 BHK', sqft: 1066, price: '7.99 Cr' },
    { bhk: '4 BHK', sqft: 1850, price: '16.50 Cr' }
  ],
  possession: 'December 2025',
  structure: 'G + 73',
  reraId: 'P51900015854'
};

// Sample images - in real app, these would come from your data
const projectImages = [
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80'
];

export default function PropertySlugPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
    const project = projects.find(p => p.id === slug);
    if (!project) {
    notFound();
  }
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    setSelectedUnit(null);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const minPrice = project.units.reduce((min, unit) => {
    const price = parseFloat(unit.price.replace(/[^0-9.]/g, ''));
    return price < min ? price : min;
  }, Infinity);

  const ImageGallery = () => (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
      <button 
        onClick={() => setShowGallery(false)}
        className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition z-10"
      >
        <X className="w-6 h-6 text-gray-900" />
      </button>
      
      <button 
        onClick={prevImage}
        className="absolute left-4 bg-white rounded-full p-3 hover:bg-gray-100 transition z-10"
      >
        <ChevronLeft className="w-6 h-6 text-gray-900" />
      </button>
      
      <button 
        onClick={nextImage}
        className="absolute right-4 bg-white rounded-full p-3 hover:bg-gray-100 transition z-10"
      >
        <ChevronRight className="w-6 h-6 text-gray-900" />
      </button>

      <div className="max-w-5xl w-full px-4">
        <img 
          src={projectImages[currentImageIndex]} 
          alt={`${project.name} - ${currentImageIndex + 1}`}
          className="w-full h-auto rounded-lg"
        />
        <div className="text-white text-center mt-4">
          {currentImageIndex + 1} / {projectImages.length}
        </div>
      </div>
    </div>
  );

  const EnquiryModal = ({ unit }: { unit: Unit | null }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
          <button 
            onClick={() => setSelectedUnit(null)}
            className="float-right text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Enquire Now</h3>
          {unit && (
            <div className="bg-gradient-to-r from-orange-50 to-green-50 p-4 rounded-lg mb-6">
              <p className="font-semibold text-gray-900">{project.name}</p>
              <p className="text-gray-600">{unit.bhk} - {unit.sqft} sq.ft</p>
              <p className="text-green-600 font-bold">₹{unit.price}</p>
            </div>
          )}
          
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              name="message"
              placeholder="Your Message (Optional)"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition"
            >
              Submit Enquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <div className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Properties</span>
            </button>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-2 rounded-full transition ${isWishlisted ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition">
                <Download className="w-4 h-4" />
                Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Gallery Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-4 gap-2 h-96">
            <div 
              className="col-span-2 row-span-2 relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setShowGallery(true)}
            >
              <img 
                src={projectImages[0]} 
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            {projectImages.slice(1, 5).map((img, idx) => (
              <div 
                key={idx}
                className="relative overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => {
                  setCurrentImageIndex(idx + 1);
                  setShowGallery(true);
                }}
              >
                <img 
                  src={img} 
                  alt={`${project.name} - ${idx + 2}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {idx === 3 && (
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">+{projectImages.length - 4} Photos</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Header */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{project.name}</h1>
                  <p className="text-xl text-gray-600 mb-3">by {project.developer}</p>
                  <div className="flex items-center gap-2 text-orange-600">
                    <MapPin className="w-5 h-5" />
                    <span className="font-medium">{project.location}, {project.city}, {project.state}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Starting from</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
                    ₹{minPrice.toFixed(2)} Cr
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
                <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                  <Calendar className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600 mb-1">Possession</p>
                  <p className="font-bold text-gray-900">{project.possession}</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <Layers className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600 mb-1">Structure</p>
                  <p className="font-bold text-gray-900">{project.structure}</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-green-100 rounded-lg">
                  <FileText className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600 mb-1">RERA ID</p>
                  <p className="font-bold text-gray-900 text-xs">{project.reraId}</p>
                </div>
              </div>
            </div>

            {/* About Project */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About {project.name}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {project.name} by {project.developer} is a prestigious residential project located in the prime location of {project.location}, {project.city}. This architectural marvel offers world-class amenities and modern living spaces designed for comfort and luxury.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With its strategic location in the {project.region} area, residents enjoy excellent connectivity to key business districts, educational institutions, healthcare facilities, and entertainment hubs. The project features {project.structure} structure with possession scheduled for {project.possession}.
              </p>
            </div>

            {/* Unit Configurations */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Unit Configurations</h2>
              <div className="space-y-4">
                {project.units.map((unit, idx) => (
                  <div 
                    key={idx}
                    className="border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{unit.bhk}</h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Maximize className="w-4 h-4" />
                          <span>{unit.sqft} sq.ft carpet area</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500 mb-1">Price</p>
                        <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                          ₹{unit.price}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedUnit(unit)}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition"
                    >
                      Enquire About This Unit
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Premium location with excellent connectivity',
                  'World-class amenities and facilities',
                  'Spacious and well-ventilated apartments',
                  'Earthquake resistant RCC framed structure',
                  'High-speed elevators in each tower',
                  '24/7 security with CCTV surveillance',
                  'Landscaped gardens and green spaces',
                  'Reserved parking for residents',
                  'Power backup for common areas',
                  'Rainwater harvesting system',
                  'Modern clubhouse with gym',
                  'Children\'s play area'
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Advantages */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Location Advantages</h2>
              <div className="space-y-3">
                {[
                  { place: 'Railway Station', distance: '2 km' },
                  { place: 'International Airport', distance: '12 km' },
                  { place: 'Business District', distance: '5 km' },
                  { place: 'Shopping Mall', distance: '1.5 km' },
                  { place: 'Hospitals', distance: '3 km' },
                  { place: 'Schools & Colleges', distance: '2 km' }
                ].map((location, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-orange-600" />
                      <span className="font-medium text-gray-900">{location.place}</span>
                    </div>
                    <span className="text-green-700 font-semibold">{location.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact Card */}
              <div className="bg-gradient-to-br from-orange-500 to-green-600 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Interested?</h3>
                <p className="mb-6 opacity-90">Get in touch with us for site visits and more details</p>
                
                <div className="space-y-3 mb-6">
                  <a 
                    href="tel:+919031007097"
                    className="flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                  >
                    <Phone className="w-5 h-5 text-orange-600" />
                    <span>+91 9031007097</span>
                  </a>
                  <a 
                    href="mailto:citizen.housing@citizencooperative.in"
                    className="flex items-center gap-3 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                  >
                    <Mail className="w-5 h-5 text-orange-600" />
                    <span>Email Us</span>
                  </a>
                </div>

                <button 
                  onClick={() => setSelectedUnit(project.units[0])}
                  className="w-full bg-white text-orange-600 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
                >
                  Schedule Site Visit
                </button>
              </div>

              {/* Quick Info Card */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Project Type</span>
                    <span className="font-semibold text-gray-900">Residential</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Total Units</span>
                    <span className="font-semibold text-gray-900">{project.units.length} Configurations</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Developer</span>
                    <span className="font-semibold text-gray-900">{project.developer}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Status</span>
                    <span className="font-semibold text-green-600">Available</span>
                  </div>
                </div>
              </div>

              {/* EMI Calculator Teaser */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-md p-6 border-2 border-green-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">EMI Calculator</h3>
                <p className="text-gray-600 text-sm mb-4">Calculate your monthly EMI and plan your finances</p>
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition">
                  Calculate EMI
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      {showGallery && <ImageGallery />}

      {/* Enquiry Modal */}
      {selectedUnit && <EnquiryModal unit={selectedUnit} />}
    </div>
  );
}