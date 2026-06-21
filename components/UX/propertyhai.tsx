'use client';
import React, { useState, useEffect } from 'react';
import { MapPin, Home, Maximize, IndianRupee, Calendar, Layers, FileText, Search, Filter, Phone, Mail, X, Check } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// Types from your data file
type Unit = {
  bhk: string;
  sqft: number;
  price: string;
};

type Project = {
  id: string;
  kind?: 'property' | 'farmhouse' | 'land';
  name: string;
  developer: string;
  location: string;
  city: string;
  images: string[];
  association?:string;
  state: string;
  region: string;
  type?:string;
  units: Unit[];
  possession: string;
  structure: string;
  reraId?: string;
  priceVisible?: boolean;
};

export default function Propertyhai({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('all');
  const [bhkFilter, setBhkFilter] = useState('all');
  const searchParams = useSearchParams();

  const stateParam = searchParams.get('state');
  const cityParam = searchParams.get('city');


  // Get unique regions for filter
  const regions = Array.from(new Set(projects.map(p => p.region)));

  // Filter projects
  const filteredProjects = projects.filter(project => {
  const matchesSearch =
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.developer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.city.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesRegion =
    regionFilter === 'all' || project.region === regionFilter;

  const matchesBHK =
    bhkFilter === 'all' ||
    project.units.some(unit => unit.bhk.includes(bhkFilter));

  // 🔥 NEW: URL-based filters
  const matchesState =
    !stateParam || project.state.toLowerCase() === stateParam.toLowerCase();

  const matchesCity =
    !cityParam || project.city.toLowerCase() === cityParam.toLowerCase();

  return (
    matchesSearch &&
    matchesRegion &&
    matchesBHK &&
    matchesState &&
    matchesCity
  );
});

    useEffect(() => {
  if (cityParam) setSearchTerm(cityParam);
  else if (stateParam) setSearchTerm(stateParam);
}, [cityParam, stateParam]);

  const ProjectCard = ({ project }: { project: Project }) => {
    const minPrice = project.units.reduce((min, unit) => {
      const price = parseFloat(unit.price.replace(/[^0-9.]/g, ''));
      return price < min ? price : min;
    }, Infinity);

    const priceLabel = minPrice < 1 ? 
      `₹${(minPrice * 100).toFixed(0)} Lacs+` : 
      `₹${minPrice.toFixed(2)} Cr+`;

    return (
      <div 
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
        onClick={() => setSelectedProject(project)}
      >
        <div className="relative h-48 overflow-hidden rounded-xl">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-slate-200 transition-transform duration-500 hover:scale-105"
    style={
      project.images?.[0]
        ? { backgroundImage: `url("${encodeURI(project.images[0])}")` }
        : undefined
    }
  />

  {/* Premium Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

  {/* Optional Icon */}
  
  {/* Text Content */}
  <div className="absolute bottom-4 left-4 right-4 z-10">
    <h3 className="text-2xl font-bold text-white leading-tight">
      {project.name}
    </h3>
    <p className="text-sm text-white/90">
      by {project.developer}
    </p>
  </div>
</div>


        <div className="p-6">
          <div className="flex items-center gap-2 text-emerald-600 mb-3">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-semibold">{project.location}, {project.city}</span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-slate-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <IndianRupee className="w-4 h-4 text-slate-600" />
                <span className="text-xs text-slate-600">Starting Price</span>
              </div>
              <p className="font-bold text-slate-900">
                 {project.city !== 'Greater Noida' ? (`${priceLabel}`):('Contact for Price')}
                </p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Home className="w-4 h-4 text-slate-600" />
                <span className="text-xs text-slate-600">Configurations</span>
              </div>
             <p className="font-bold text-slate-900">
  {project.type === 'Farmhouse' ? (
    'Independent Unit'
  ) : project.units && project.units.length > 0 ? (
    `${project.units[0].bhk} - ${project.units[project.units.length - 1].bhk}`
  ) : (
    'Configuration Available Soon'
  )}
</p>

            </div>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Calendar className="w-4 h-4" />
              <span>{project.possession}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Layers className="w-4 h-4" />
              <span>{project.structure}</span>
            </div>
          </div>
          <Link
            href={
              project.kind === 'farmhouse'
                ? `/properties/farmhouse/${project.id}`
                : project.kind === 'land'
                  ? `/properties/land/${project.id}`
                  : `/properties/${project.id}`
            }
            className="w-full px-5 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            View Details
          </Link>
          {project.association ?(

            <div className="text-red-600 pt-3 text-center">In Association with {project.association} </div>
          ):(<></>)}
        </div>
      </div>
    );
  };

  const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl">
          <div className="relative bg-gradient-to-br from-emerald-600 to-purple-700 p-8 rounded-t-2xl">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-slate-100 transition"
            >
              <X className="w-6 h-6 text-slate-700" />
            </button>
            
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-2">{project.name}</h2>
              <p className="text-xl opacity-90 mb-4">by {project.developer}</p>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{project.location}, {project.city}, {project.state}</span>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-50 p-6 rounded-xl text-center">
                <Calendar className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <div className="text-sm text-slate-600 mb-1">Possession</div>
                <div className="font-bold text-slate-900">{project.possession}</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl text-center">
                <Layers className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <div className="text-sm text-slate-600 mb-1">Structure</div>
                <div className="font-bold text-slate-900">{project.structure}</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl text-center">
                <FileText className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <div className="text-sm text-slate-600 mb-1">RERA ID</div>
                <div className="font-bold text-slate-900 text-xs">{project.reraId || 'N/A'}</div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Available Units</h3>
              <div className="space-y-4">
                {project.units.map((unit, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl p-6 hover:border-emerald-500 hover:shadow-md transition">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                      <div>
                        <div className="text-sm text-slate-600 mb-1">Configuration</div>
                        <div className="text-2xl font-bold text-slate-900">{unit.bhk}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-600 mb-1">Carpet Area</div>
                        <div className="flex items-center gap-2">
                          <Maximize className="w-5 h-5 text-emerald-600" />
                          <span className="text-xl font-bold text-slate-900">{unit.sqft} sq.ft</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-600 mb-1">Price</div>
                        <div className="flex items-center gap-2">
                          <IndianRupee className="w-5 h-5 text-green-600" />
                          <span className="text-xl font-bold text-green-600">₹{unit.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-600 to-purple-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Interested in {project.name}?</h3>
              <p className="mb-6 opacity-90">Contact us for site visits, detailed brochures, and personalized assistance.</p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:+919031007097" 
                  className="flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a 
                  href="mailto:citizen.housing@citizencooperative.in" 
                  className="flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition"
                >
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
      <div className="bg-gradient-to-r from-green-800 via-green-600 to-green-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h1 className="text-4xl md:text-5xl font-bold mb-4">
  Premium Properties
  {cityParam ? ` in ${cityParam}` : stateParam ? ` in ${stateParam}` : ''}
</h1>
          <p className="text-xl text-emerald-100 mb-8">Discover luxury residences from top developers</p>
          
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects, locations, or developers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <select
                  value={regionFilter}
                  onChange={(e) => setRegionFilter(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 appearance-none bg-white"
                >
                  <option value="all">All Regions</option>
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <Home className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <select
                  value={bhkFilter}
                  onChange={(e) => setBhkFilter(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 appearance-none bg-white"
                >
                  <option value="all">All BHK</option>
                  <option value="2">2 BHK</option>
                  <option value="3">3 BHK</option>
                  <option value="4">4 BHK</option>
                  <option value="6">6 BHK</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'} Found
          </h2>
          <p className="text-slate-600">Premium residential projects from trusted developers</p>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-slate-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">No Projects Found</h3>
            <p className="text-slate-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact Citizen Housing for expert guidance, site visits, and exclusive deals on premium properties.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919031007097" className="flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition">
              <Phone className="w-5 h-5" />
              +91 9031007097
            </a>
            <a href="mailto:citizen.housing@citizencooperative.in" className="flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition">
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}