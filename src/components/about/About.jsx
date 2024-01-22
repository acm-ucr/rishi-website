import React from "react";
import Image from "next/image";

const About = () => {
  return (
    // parent div with flex column
    <div className="flex flex-col">
      {/* First container */}
      <div className="border p-4 w-1082 h-331 top-433 left-226"> </div>
      <p className="font-Urbanist text-xl font-normal leading-7 tracking-normal text-center">
        Project RISHI is a nonprofit organization with the mission of promoting
        the sustainable growth and development of the Indian village of Ghangar.
      </p>
      {/* Second container with image */}
      <div className="border p-4">
        <Image
          src="/about.webp" // Replace with the actual path to your image in the 'public' folder
          alt=""
          width={997} // Set the width of the image
          height={569} // Set the height of the image
          layout="responsive"
          objectFit="cover" // Choose the appropriate object fit property
          className="rounded-md" // Add any additional styling classes
        />
      </div>

      {/* Third container with paragraph */}
      <div
        className="border p-4"
      >
        <p className="font-Urbanist text-xl font-normal leading-7 tracking-normal text-center">
        We partner with local communities and other social enterprises to identify issues central to the villages we support and provide them resources to implement solutions. In order to do this, we fundraise throughout the year and take trips as a group during the summers to offer first-hand help, deliver supplies, and implement new, helpful systems.
        </p>
      </div>

      {/* Additional content (if needed) */}
    </div>
  );
};

export default About;
