import CTASection from "@/components/Call";
import FeaturedProperties from "@/components/FeaturedProp";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/Servicesec";
import TestimonialsSection from "@/components/Testimonial";
import WhyChooseUs from "@/components/Whychooseus";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedProperties/>
      <WhyChooseUs/>
      <ServicesSection/>
      <TestimonialsSection/>
      <CTASection/>
    </div>
  );
}
