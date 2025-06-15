'use client';

import Link from 'next/link';
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  trending: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Bihar Real Estate Market Trends 2024: What Buyers Should Know',
    excerpt: 'Comprehensive analysis of property prices, demand patterns, and investment opportunities across major Bihar districts.',
    image: '/api/placeholder/400/250',
    category: 'Market Analysis',
    date: 'March 15, 2024',
    readTime: '5 min read',
    author: 'Property Expert Team',
    trending: true
  },
  {
    id: '2',
    title: 'Complete Guide to Property Registration in Bihar',
    excerpt: 'Step-by-step process for property registration, required documents, stamp duty rates, and legal formalities in Bihar.',
    image: '/api/placeholder/400/250',
    category: 'Legal Guide',
    date: 'March 12, 2024',
    readTime: '8 min read',
    author: 'Legal Team',
    trending: false
  },
  {
    id: '3',
    title: 'Top 10 Emerging Localities in Patna for Property Investment',
    excerpt: 'Discover the most promising residential and commercial areas in Patna with high growth potential and connectivity.',
    image: '/api/placeholder/400/250',
    category: 'Investment Tips',
    date: 'March 10, 2024',
    readTime: '6 min read',
    author: 'Investment Advisor',
    trending: true
  },
  {
    id: '4',
    title: 'Home Loan Process Simplified: A Bihar Buyer\'s Guide',
    excerpt: 'Everything you need to know about home loans, eligibility criteria, documentation, and best practices for Bihar residents.',
    image: '/api/placeholder/400/250',
    category: 'Finance',
    date: 'March 8, 2024',
    readTime: '7 min read',
    author: 'Finance Expert',
    trending: false
  }
];

const categories = [
  'All Posts',
  'Market Analysis',
  'Investment Tips',
  'Legal Guide',
  'Finance',
  'Property News'
];

export default function BlogSection() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
            Latest Property Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, legal updates, and expert advice on Bihar real estate market.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                category === 'All Posts'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post + Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Post */}
          <div className="lg:row-span-2">
            {featuredPost && (
              <Link
                href={`/blog/${featuredPost.id}`}
                className="group block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Trending Badge */}
                  {featuredPost.trending && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>Trending</span>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <span className="text-primary-600 font-medium">Read More →</span>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Other Posts */}
          <div className="space-y-6">
            {otherPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group flex bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200"
              >
                {/* Image */}
                <div className="relative w-32 flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {post.trending && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white p-1 rounded-full">
                      <TrendingUp className="w-3 h-3" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-4">
                  {/* Category */}
                  <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium mb-2">
                    {post.category}
                  </span>

                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Posts Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 group"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}