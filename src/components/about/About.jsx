import React from "react";
import Image from "next/image";
import aboutImage from "@/public/about.webp";

const About = () => {
  return (
    // parent div with flex column
    <div className="flex justify-center">
      <div className="w-11/12 flex gap-2 text-rishi-black justify-center flex-col p-2">
        {/* First container */}
        <div className="font-Urbanist  text-xl font-normal leading-7 tracking-normal text-center p-4">
          Project RISHI is a nonprofit organization with the mission of <br />
          promoting the sustainable growth and development of the Indian village
          <br />
          of Ghangar.
        </div>
        {/* Second container with image */}
        <div className="flex justify-center m-0 p-0">
          <Image
            src={aboutImage}
            alt=""
            className="rounded-full w-3.5/4 h-1/2 p-0 m-0"
          />
        </div>

        <div className="font-Urbanist text-xl font-normal leading-7 tracking-normal text-center p-4">
          We partner with local communities and other social enterprises to{" "}
          <br />
          identify issues central to the villages we support and provide them{" "}
          <br />
          resources to implement solutions. In order to do this, we fundraise{" "}
          <br />
          throughout the year and take trips as a group during the summers to{" "}
          <br />
          offer first-hand help, deliver supplies, and implement new, helpful{" "}
          <br />
          systems.
        </div>
      </div>
    </div>
  );
};

export default About;
