import Carousel from "@/components/UI/crousel";
import FAQSection from "@/components/UI/FAQs";
import { MovingOffer } from "@/components/UI/movingcard";
import { InfiniteMovingCards } from "@/components/UI/movingribbion";
import VerticalProcess3D from "@/components/UI/steps";
import { housingTestimonials, imageshome, cardItems, offerImages } from "@/data";

export default function Home() {

  return (
    <div className="w-full ">
      <Carousel  images={imageshome} className={"rounded-md h-fit"}/>
      <InfiniteMovingCards items={housingTestimonials} direction="left" speed="normal" className="my-6"/>
      <MovingOffer   items={cardItems} direction="right" speed="normal" pauseOnHover={true}/>
      <VerticalProcess3D/>
      <Carousel  images={offerImages} className={"rounded-md h-fit my-3"}/>
      <FAQSection/>
    </div>
  );
}
