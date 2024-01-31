import Image from "next/image";
import { carousel } from "@/data/carousel";

const Carousel = () => {
  return (
    <div className="relative flex overflow-hidden">
      <div className="flex animate-marquee object-cover">
        {carousel.map((image, index) => (
          <div key={index} className="w-2/4 mx-4">
            <Image src={image} alt="carousel" className="w-full" />
          </div>
        ))}
      </div>
      <div className="flex absolute animate-marquee-continuation object-cover">
        {carousel.map((image, index) => (
          <div key={index} className="w-2/4 mx-4">
            <Image src={image} alt="carousel" className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
