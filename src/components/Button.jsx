import React from "react";
import "tailwindcss/tailwind.css";

const Button = () => {
  return (
    <button
      className="bg-rishi-white border border-rishi-orange text-rishi-black font-urbanist border-2 px-6 rounded-md px-4 rounded hover:bg-rishi-orange"
      // style={{
      //   width: "238px",
      //   height: "46px",
      //   borderRadius: "7px",
      // }}
    >
      Back to Home
    </button>
  );
};

export default Button;
