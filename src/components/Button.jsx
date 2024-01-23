import React from "react";
import Link from "next/link";

const Button = ({ text, color, href }) => {
  const buttonColor = color == "green" ? "bg-rishi-green" : "bg-rishi-orange";
  return (
    <Link href={href} passHref>
      <div
        className={` flex items-center justify-center text-rishi-white ${buttonColor} font-semibold py-2 w-60 no-underline`}
      >
        {text}
      </div>
    </Link>
  );
};

export default Button;
