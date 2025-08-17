'use client';

import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Users } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  propertyType: string;
  date: string;
}

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      rating: 5,
      comment: "Citizen Grih Nirman made our home buying journey incredibly smooth. Their team was professional, responsive, and helped us find our dream apartment in Powai within our budget. The legal verification process was thorough and transparent.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      propertyType: "3BHK Apartment",
      date: "January 2025"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Bangalore, Karnataka",
      rating: 5,
      comment: "Outstanding service! The team helped us sell our old property and buy a new villa in just 3 weeks. Their market knowledge and negotiation skills saved us both time and money. Highly recommend their services.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
      propertyType: "4BHK Villa",
      date: "December 2024"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      comment: "The best real estate experience we've had! From property search to final registration, everything was handled professionally. The EMI calculator and loan assistance were particularly helpful for our financial planning.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      propertyType: "2BHK Flat",
      date: "November 2024"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      location: "Hyderabad, Telangana",
      rating: 5,
      comment: "Excellent service and support throughout the process. The team went above and beyond to ensure we got the best deal. Their 24/7 support was invaluable, especially during the documentation phase.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      propertyType: "Independent House",
      date: "October 2024"
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Delhi, NCR",
      rating: 4,
      comment: "Great platform for property search! Found multiple options in our preferred location. The property verification process gave us confidence in our purchase. Customer service was responsive and helpful.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      propertyType: "3BHK Builder Floor",
      date: "September 2024"
    },
    {
      id: 6,
      name: "Kavya Nair",
      location: "Kochi, Kerala",
      rating: 5,
      comment: "Impressed with their professionalism and transparency. They helped us navigate through the complex documentation process and ensured everything was legally sound. Would definitely recommend to others.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
      propertyType: "2BHK Apartment",
      date: "August 2024"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-blue-600 font-semibold text-lg">Testimonials</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Citizen Grih Nirman.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(currentSlide * 3, currentSlide * 3 + 3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group"
              >
                {/* Quote Icon */}
                <div className="text-blue-600 mb-4">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                  <span className="ml-2 text-sm text-gray-600 font-medium">
                    {testimonial.rating}.0
                  </span>
                </div>

                {/* Comment */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.comment}"
                </p>

                {/* Author Info */}
                <div className="flex items-start space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-blue-600 font-medium bg-blue-100 px-2 py-1 rounded-full">
                        {testimonial.propertyType}
                      </span>
                      <span className="text-xs text-gray-500">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === i ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Happy Families</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Customer Support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Join Our Happy Customers?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your property journey today and experience the same exceptional service that our customers rave about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Start Property Search
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}