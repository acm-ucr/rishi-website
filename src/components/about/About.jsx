import React from "react";
import Image from "next/image";
import aboutImage from "@/public/about.webp";

const About = () => {
  return (
    // parent div with flex column
    <div className="flex justify-center">
      <div className="w-11/12 flex gap-5 text-rishi-black justify-center flex-col">
        {/* First container */}
        <p className="font-Urbanist  text-xl font-normal leading-7 tracking-normal text-center">
          Project RISHI is a nonprofit organization with the mission of
          promoting the sustainable growth and development of the Indian village
          of Ghangar.
        </p>
        {/* Second container with image */}
        <div className="flex justify-center">
          <Image src={aboutImage} alt="" className="rounded-3xl w-1/2" />
        </div>

        {/* Third container with paragraph */}

        <p className="font-Urbanist text-xl font-normal leading-7 tracking-normal text-center">
          We partner with local communities and other social enterprises to
          identify issues central to the villages we support and provide them
          resources to implement solutions. In order to do this, we fundraise
          throughout the year and take trips as a group during the summers to
          offer first-hand help, deliver supplies, and implement new, helpful
          systems.
        </p>

        {}
      </div>
    </div>
  );
};

export default About;
