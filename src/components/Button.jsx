import React from "react";

const Button = ({ buttonText }) => {
  return (
    <button className="bg-rishi-white border duration-300  border-rishi-orange text-rishi-black font-urbanist border-2 px-6 rounded-md px-4 rounded hover:bg-rishi-orange">
      {buttonText}
    </button>
  );
};

export default Button;
