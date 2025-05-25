import Carousel from "@/components/UI/crousel";
import { MovingOffer } from "@/components/UI/movingcard";
import { InfiniteMovingCards } from "@/components/UI/movingribbion";
import VerticalProcess from "@/components/UI/steps";
import { housingTestimonials, imageshome, cardItems, offerImages } from "@/data";

export default function Home() {

  return (
    <main>
      <Carousel  images={imageshome} className={"rounded-md h-fit"}/>
      <InfiniteMovingCards items={housingTestimonials} direction="left" speed="normal" className="my-6"/>
      <MovingOffer   items={cardItems} direction="right" speed="normal" pauseOnHover={true}/>
      <VerticalProcess/>
      <Carousel  images={offerImages} className={"rounded-md h-fit my-3"}/>
    </main>
  );
}
