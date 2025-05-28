import Background from "./background";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Slide() {
  return (
    <div className="mt-6">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <Background
              src="Feature.png"
              title="Wicked"
              description="Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. "
            />
          </CarouselItem>
          <CarouselItem>
            <Background
              src="Feature-1.png"
              title="Gladiator II"
              description="After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people. "
            />
          </CarouselItem>
          <CarouselItem>
            <Background
              src="Feature-2.png"
              title="Moana"
              description="After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced. "
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
