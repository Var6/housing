'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  property: string;
  avatar: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    location: 'Patna, Bihar',
    rating: 5,
    review: 'Citizen Housing made buying my first home in Boring Road so easy. The team was professional, the property was exactly as described, and the documentation process was smooth. Highly recommended!',
    property: '3BHK Apartment',
    avatar: '/api/placeholder/60/60',
    date: 'March 2024'
  },
  {
    id: '2',
    name: 'Priya Singh',
    location: 'Muzaffarpur, Bihar',
    rating: 5,
    review: 'I sold my property through Citizen Housing and got the best price in the market. Their marketing was excellent and they found serious buyers quickly. Great service!',
    property: 'Independent House',
    avatar: '/api/placeholder/60/60',
    date: 'February 2024'
  },
  {
    id: '3',
    name: 'Amit Sharma',
    location: 'Gaya, Bihar',
    rating: 5,
    review: 'The property experts at Citizen Housing helped me find the perfect investment opportunity. Their market knowledge of Bihar is exceptional. Very satisfied with my purchase.',
    property: 'Commercial Plot',
    avatar: '/api/placeholder/60/60',
    date: 'January 2024'
  },
  {
    id: '4',
    name: 'Sunita Devi',
    location: 'Darbhanga, Bihar',
    rating: 5,
    review: 'Excellent platform for property search in Bihar. The filters worked perfectly and I found exactly what I was looking for. The agent was very helpful throughout the process.',
    property: '2BHK Apartment',
    avatar: '/api/placeholder/60/60',
    date: 'March 2024'
  },
  {
    id: '5',
    name: 'Vikash Yadav',
    location: 'Bhagalpur, Bihar',
    rating: 5,
    review: 'I was impressed by the transparency and honesty of the Citizen Housing team. No hidden charges, all documents were verified, and the property handover was seamless.',
    property: 'Villa',
    avatar: '/api/placeholder/60/60',
    date: 'February 2024'
  }
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read testimonials from satisfied customers who found their dream properties through Citizen Housing across Bihar.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Testimonial */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-20 h-20 text-primary-600" />
            </div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center justify-center mb-6">
                <div className="flex space-x-1">
                  {testimonials[currentSlide] && renderStars(testimonials[currentSlide].rating)}
                </div>
              </div>

              {/* Review Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                "{testimonials[currentSlide]?.review}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentSlide]?.avatar}
                  alt={testimonials[currentSlide]?.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-gray-100"
                />
                <div className="text-center">
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentSlide]?.name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentSlide]?.location}
                  </div>
                  <div className="text-sm text-primary-600 font-medium">
                    Purchased: {testimonials[currentSlide]?.property}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-primary-50 p-3 rounded-full shadow-lg transition-colors duration-200 z-20"
          >
            <ChevronLeft className="w-6 h-6 text-primary-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-primary-50 p-3 rounded-full shadow-lg transition-colors duration-200 z-20"
          >
            <ChevronRight className="w-6 h-6 text-primary-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Review */}
              <p className="text-gray-700 mb-4 line-clamp-3">
                "{testimonial.review}"
              </p>

              {/* Customer */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}