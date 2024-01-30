import React from "react";
import Image from "next/image";
import aboutImage from "@/public/about.webp";

const About = () => {
  return (
    // parent div with flex column
    <div className="flex justify-center">
      <div className="w-11/12 flex gap-2 text-rishi-black items-center flex-col p-2 justify-center">
        <div className="w-1/2 font-Urbanist  text-xl font-normal leading-7 tracking-normal text-center p-4">
          Project RISHI is a nonprofit organization with the mission of
          promoting the sustainable growth and development of the Indian village
          of Ghangar.
        </div>
        <div className="flex justify-center">
          <div className=" rounded-full overflow-hidden h-2/3 w-1/2 flex justify-center items-center">
            <Image src={aboutImage} alt="" className="" />
          </div>
        </div>

        <div className="w-1/2 font-Urbanist text-xl font-normal leading-7 tracking-normal text-center p-4">
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
