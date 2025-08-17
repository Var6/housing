'use client';
import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  MapPin, 
  Clock, 
  DollarSign, 
  Briefcase, 
  Heart,
  Code,
  Palette,
  BarChart3,
  Headphones,
  Shield,
  Rocket,
  Coffee,
  Zap,
  Award,
  Globe,
  Calendar,
  ArrowRight,
  Search,
  Filter,
  Star,
  Building,
  GraduationCap
} from 'lucide-react';

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const departments = [
    { id: 'all', name: 'All Departments', icon: <Building className="w-4 h-4" /> },
    { id: 'engineering', name: 'Engineering', icon: <Code className="w-4 h-4" /> },
    { id: 'design', name: 'Design', icon: <Palette className="w-4 h-4" /> },
    { id: 'marketing', name: 'Marketing', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'support', name: 'Customer Support', icon: <Headphones className="w-4 h-4" /> },
    { id: 'sales', name: 'Sales', icon: <Users className="w-4 h-4" /> },
    { id: 'operations', name: 'Operations', icon: <Shield className="w-4 h-4" /> }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'delhi', name: 'New Delhi' },
    { id: 'mumbai', name: 'Mumbai' },
    { id: 'bangalore', name: 'Bangalore' },
    { id: 'remote', name: 'Remote' }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'engineering',
      location: 'bangalore',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹15-25 LPA',
      description: 'Build scalable web applications and APIs for our housing platform.',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'design',
      location: 'delhi',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹8-15 LPA',
      description: 'Design beautiful and intuitive user experiences for our platform.',
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      department: 'marketing',
      location: 'mumbai',
      type: 'Full-time',
      experience: '2-3 years',
      salary: '₹6-12 LPA',
      description: 'Drive growth through digital marketing campaigns and SEO strategies.',
      skills: ['Google Ads', 'SEO', 'Social Media', 'Analytics'],
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Customer Success Manager',
      department: 'support',
      location: 'remote',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹5-10 LPA',
      description: 'Help our users find their perfect homes and resolve their queries.',
      skills: ['Communication', 'CRM', 'Problem Solving', 'Empathy'],
      posted: '1 day ago'
    },
    {
      id: 5,
      title: 'Business Development Executive',
      department: 'sales',
      location: 'delhi',
      type: 'Full-time',
      experience: '1-2 years',
      salary: '₹4-8 LPA',
      description: 'Build relationships with property owners and real estate partners.',
      skills: ['Sales', 'Negotiation', 'Relationship Building', 'Market Research'],
      posted: '5 days ago'
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'bangalore',
      type: 'Full-time',
      experience: '3-6 years',
      salary: '₹12-20 LPA',
      description: 'Manage infrastructure, deployments, and ensure system reliability.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      posted: '1 week ago'
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote work options, and unlimited PTO policy.'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Learning & Development',
      description: 'Professional development budget, conferences, and skill-building workshops.'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries, equity options, and performance bonuses.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Great Team Culture',
      description: 'Collaborative environment, team outings, and inclusive workplace.'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Growth Opportunities',
      description: 'Clear career paths, mentorship programs, and leadership development.'
    }
  ];

  const values = [
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to customer service.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'We believe great things happen when talented people work together towards common goals.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to solve housing challenges.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Empathy',
      description: 'We understand that finding a home is deeply personal and treat every user with care.'
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CitizenHousing</h1>
              <p className="text-gray-600">Careers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Build the Future of Housing
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join our mission to make finding and listing homes simple, transparent, and accessible for everyone. 
              Work with passionate people solving real problems that matter.
            </p>
            <div className="flex items-center justify-center space-x-8 text-blue-100">
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Open Positions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.8★</div>
                <div className="text-sm">Employee Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
               {/* Job Search */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find your next opportunity and help us revolutionize the housing market.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Department Filter */}
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>{dept.name}</option>
                ))}
              </select>

              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>{location.name}</option>
                ))}
              </select>

              {/* Results Count */}
              <div className="flex items-center text-gray-600">
                <Filter className="w-5 h-5 mr-2" />
                <span>{filteredJobs.length} jobs found</span>
              </div>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid gap-6 mb-12">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                  <div className="flex items-center space-x-4 text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      <span className="capitalize">{job.department}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="capitalize">{job.location === 'remote' ? 'Remote' : job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Posted {job.posted} • {job.experience} experience
                    </div>
                    <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Jobs Found */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Jobs Found</h3>
            <p className="text-gray-600">
              Try adjusting your filters or search terms to find more opportunities.
            </p>
          </div>
        )}
               {/* Application Process */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our hiring process is designed to be transparent, fair, and efficient.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full mb-4 text-lg font-bold">1</div>
              <h4 className="font-semibold text-gray-900 mb-2">Apply Online</h4>
              <p className="text-gray-600 text-sm">Submit your application with resume and cover letter</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full mb-4 text-lg font-bold">2</div>
              <h4 className="font-semibold text-gray-900 mb-2">Phone Screening</h4>
              <p className="text-gray-600 text-sm">Brief call to discuss your background and interest</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full mb-4 text-lg font-bold">3</div>
              <h4 className="font-semibold text-gray-900 mb-2">Technical Interview</h4>
              <p className="text-gray-600 text-sm">Role-specific assessment and team interview</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full mb-4 text-lg font-bold">4</div>
              <h4 className="font-semibold text-gray-900 mb-2">Final Decision</h4>
              <p className="text-gray-600 text-sm">Reference check and offer discussion</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in taking care of our team so they can do their best work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

     

 
        {/* Join Us CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Don't see a perfect fit? We're always looking for talented individuals who share our passion for transforming the housing market.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Send Your Resume
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;