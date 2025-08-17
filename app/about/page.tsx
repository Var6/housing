'use client';

import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  Shield, 
  Clock,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Star,
  CheckCircle,
  Building2,
  TrendingUp,
  Handshake,
  Globe
} from 'lucide-react';

export default function AboutUsPage() {
  const stats = [
    { number: "5+", label: "Years of Excellence", icon: Award },
    { number: "1000+", label: "Happy Families", icon: Users },
    { number: "500+", label: "Properties Listed", icon: Building2 },
    { number: "50+", label: "Cities Covered", icon: MapPin },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We believe in complete transparency in all our dealings. Every property is thoroughly verified and all information is authentic.",
      color: "bg-blue-600"
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Our customers are at the heart of everything we do. We go above and beyond to ensure their satisfaction and success.",
      color: "bg-red-600"
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously innovate our processes and technology to provide the best real estate experience to our customers.",
      color: "bg-green-600"
    },
    {
      icon: Handshake,
      title: "Integrity",
      description: "We maintain the highest standards of integrity in all our business practices and client relationships.",
      color: "bg-purple-600"
    }
  ];

  const team = [
    {
      name: "Rajesh Gupta",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
      bio: "15+ years in real estate, passionate about helping families find their perfect homes.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Priya Sharma",
      position: "Head of Operations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300",
      bio: "Expert in streamlining operations and ensuring customer satisfaction across all touchpoints.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Amit Kumar",
      position: "Technology Head",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
      bio: "Leading our digital transformation to create seamless property search experiences.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sneha Patel",
      position: "Customer Relations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
      bio: "Dedicated to ensuring every customer has an exceptional experience with our services.",
      linkedin: "#",
      twitter: "#"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to transform the real estate experience in India"
    },
    {
      year: "2020",
      title: "100 Properties",
      description: "Reached our first milestone of 100 verified property listings"
    },
    {
      year: "2021",
      title: "Digital Platform Launch",
      description: "Launched our comprehensive digital platform for seamless property search"
    },
    {
      year: "2022",
      title: "500+ Happy Customers",
      description: "Helped over 500 families find their dream homes across major cities"
    },
    {
      year: "2023",
      title: "Multi-City Expansion",
      description: "Expanded operations to 25+ cities with verified property networks"
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Received 'Best Real Estate Platform' award and 1000+ customer milestone"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Citizen Grih Nirman
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              We're more than just a real estate platform. We're your trusted partner in finding the perfect home, 
              committed to making property dreams come true across India.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300">
                    <stat.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-200 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2019, Citizen Grih Nirman began with a simple yet powerful vision: to transform 
                  the way people buy, sell, and rent properties in India. We recognized that finding the 
                  perfect home shouldn't be a stressful, complicated process.
                </p>
                <p>
                  Starting from a small office with just 3 team members, we've grown into a trusted platform 
                  serving thousands of customers across 50+ cities. Our journey has been driven by one core 
                  principle: putting our customers first in everything we do.
                </p>
                <p>
                  Today, we're proud to be recognized as one of India's most trusted real estate platforms, 
                  with over 1000 happy families who found their dream homes through our services. But our 
                  story is far from over – we're just getting started.
                </p>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                  Join Our Journey
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                  View Properties
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Our Mission</h3>
                      <p className="text-blue-100">To make property transactions transparent, efficient, and stress-free for every customer.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Our Vision</h3>
                      <p className="text-blue-100">To be India's most trusted real estate platform, connecting millions with their perfect homes.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our relationships with customers, partners, and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className={`w-20 h-20 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a trusted real estate platform - here are the key milestones in our journey.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Behind every great service is a great team. Meet the people who make Citizen Grih Nirman special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-white group-hover:ring-blue-200 transition-all duration-300"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 mx-auto"></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 text-sm mb-6">{member.bio}</p>
                
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're committed to providing exceptional service and value to every customer who trusts us with their property needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "100% Verified Properties",
                description: "Every property goes through rigorous verification to ensure authenticity and legal compliance."
              },
              {
                icon: Clock,
                title: "24/7 Customer Support",
                description: "Our dedicated support team is available round-the-clock to assist with any queries or concerns."
              },
              {
                icon: TrendingUp,
                title: "Market Insights",
                description: "Get access to latest market trends, price analysis, and investment advice from our experts."
              },
              {
                icon: Shield,
                title: "Secure Transactions",
                description: "All transactions are secured with bank-level encryption and legal documentation support."
              },
              {
                icon: Users,
                title: "Expert Guidance",
                description: "Our experienced team provides personalized guidance throughout your property journey."
              },
              {
                icon: Award,
                title: "Award-Winning Service",
                description: "Recognized for excellence in customer service and innovative real estate solutions."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect properties with our help. 
            Let's make your property dreams come true.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-blue-600" />
              <span className="text-lg text-gray-700">+91 98765-43210</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-blue-600" />
              <span className="text-lg text-gray-700">info@citizengrih.com</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-lg">
              Start Property Search
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}