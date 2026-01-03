import CTASection from "@/components/Call";
import FeaturedProperties from "@/components/FeaturedProp";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/Servicesec";
import TestimonialsSection from "@/components/Testimonial";
import HeroCarousel from "@/components/UX/HeroCarousel";
import SlidePartners from "@/components/UX/SlidePartners";
import WhyChooseUs from "@/components/Whychooseus";


export default function Home() {
  return (
    <div>    
    <HeroCarousel
      interval={6000}
      slides={[
        <HeroSection key="hero main" />,
        <SlidePartners key="partners" />,
      ]}/>

      <FeaturedProperties/>
      <WhyChooseUs/>
      <ServicesSection/>
      <TestimonialsSection/>
      <CTASection/>
    </div>
  );
}
