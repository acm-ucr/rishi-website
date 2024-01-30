import React from "react";
import Image from "next/image";
import aboutImage from "@/public/about.webp";

const About = () => {
  return (
    // parent div with flex column
    <div className="font-bold font-urbanist flex items-center justify-center">
      <div className="flex gap-6 text-rishi-black items-center flex-col p-2 justify-center">
        <div className="w-7/12 px-2 font-Urbanist  text-2xl font-normal leading-7 tracking-normal text-center">
          Project RISHI is a nonprofit organization with the mission of
          promoting the sustainable growth and development of the Indian village
          of Ghangar.
        </div>
        <div className="flex justify-center ">
          <Image
            src={aboutImage}
            width={500}
            alt=""
            className="rounded-l-full rounded-r-full "
          />
        </div>

        <div className="w-7/12 font-Urbanist text-2xl font-normal leading-7 tracking-normal text-center px-2">
          We partner with local communities and other social enterprises to
          identify issues central to the villages we support and provide them
          resources to implement solutions. In order to do this, we fundraise
          throughout the year and take trips as a group during the summers to
          offer first-hand help, deliver supplies, and implement new, helpful
          systems.
        </div>
      </div>
    </div>
  );
};

export default About;
