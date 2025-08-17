import CTASection from "@/components/Call";
import FeaturedProperties from "@/components/FeaturedProp";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/Servicesec";
import TestimonialsSection from "@/components/Testimonial";
import WhychooseUs from "@/components/Whychooseus";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedProperties/>
      <WhychooseUs/>
      <ServicesSection/>
      <TestimonialsSection/>
      <CTASection/>
    </div>
  );
}
