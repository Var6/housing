import Carousel from "@/components/UI/crousel";
import { MovingOffer } from "@/components/UI/movingcard";
import { InfiniteMovingCards } from "@/components/UI/movingribbion";
import { housingTestimonials, imageshome, cardItems } from "@/data";

export default function Home() {

  return (
    <main>
      <Carousel  images={imageshome} className={"rounded-md h-fit"}/>
      <InfiniteMovingCards items={housingTestimonials} direction="left" speed="normal" className="my-6"/>
      <MovingOffer   items={cardItems}
        direction="left"
        speed="normal"
        pauseOnHover={true}/>
    </main>
  );
}
