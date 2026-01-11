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
      interval={9000000}
      slides={[
        <SlidePartners key="partners" />,
       // <HeroSection key="hero main" />,
      ]}/>

      <FeaturedProperties/>
      <WhyChooseUs/>
      <ServicesSection/>
      <TestimonialsSection/>
      <CTASection/>
    </div>
  );
}
