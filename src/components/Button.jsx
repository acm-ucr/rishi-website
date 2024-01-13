import React from "react";
import "tailwindcss/tailwind.css";

const Button = () => {
  return (
    <button
      className="bg-rishi-white border border-rishi-orange text-rishi-black font-urbanist py-2 px-4 rounded"
      style={{
        width: "238px",
        height: "46px",
        borderRadius: "7px",
      }}
    >
      Back to Home
    </button>
  );
};

export default Button;
