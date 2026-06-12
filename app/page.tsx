import CTASection from "@/components/Call";
import FeaturedProperties from "@/components/FeaturedProp";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/Servicesec";
import TestimonialsSection from "@/components/Testimonial";
import HeroCarousel from "@/components/UX/HeroCarousel";
import SlidePartners from "@/components/UX/SlidePartners";
import WhyChooseUs from "@/components/Whychooseus";
import { getAllProperties } from "@/lib/property-service";
import { sortListingsByPriority } from "@/lib/listing-priority";

export const dynamic = 'force-dynamic'

export default async function Home() {
  const allProperties = await getAllProperties();
  const sortedProperties = sortListingsByPriority(allProperties);

  const featured = sortedProperties.slice(0, 12).map((item) => {
    const firstUnit = item.units[0];
    const bedrooms = firstUnit ? Number.parseInt(firstUnit.bhk, 10) || undefined : undefined;
    const image = item.images[0] || "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400";

    return {
      id: item.id,
      title: item.name,
      location: [item.location, item.city].filter(Boolean).join(', '),
      price: item.priceVisible && firstUnit?.price ? `₹${firstUnit.price}` : 'Contact for Price',
      type: item.type || (item.kind === 'farmhouse' ? 'Farmhouse' : 'Property'),
      bedrooms,
      bathrooms: bedrooms,
      area: firstUnit?.sqft ? `${firstUnit.sqft} sq ft` : item.farmhouseDetails?.area || 'On Request',
      image,
      kind: item.kind,
      rating: 4.8,
      reviews: 20,
      association: item.association,
    };
  });

  return (
    <div>    
    <HeroCarousel
      interval={9000000}
      slides={[
        <SlidePartners key="partners" />,
       // <HeroSection key="hero main" />,
      ]}/>

      <FeaturedProperties properties={featured}/>
      <WhyChooseUs/>
      <ServicesSection/>
      <TestimonialsSection/>
      <CTASection/>
    </div>
  );
}
