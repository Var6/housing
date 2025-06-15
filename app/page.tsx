'use client';

import BlogSection from "components/Blogsection";
import CTASection from "components/CTAsection";
import FeaturedProperties from "components/FeaturedProperties";
import HeroSection from "components/HeroSection";
import PopularLocations from "components/Propertylocation";
import PropertyTypes from "components/Propertytypes";
import SearchForm from "components/SearchForm";
import StatsSection from "components/StateSelection";
import TestimonialsSection from "components/testimonialsection";
import WhyChooseUs from "components/WhyChooseus";


export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Search */}
      <section className="relative">
        <HeroSection />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl px-4">
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="space-y-16 py-16">
        {/* Stats Section */}
        <StatsSection />

        {/* Featured Properties */}
        <FeaturedProperties />

        {/* Property Types */}
        <PropertyTypes />

        {/* Popular Locations */}
        <PopularLocations />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Blog Section */}
        <BlogSection />

        {/* CTA Section */}
        <CTASection />
      </main>
    </div>
  );
}