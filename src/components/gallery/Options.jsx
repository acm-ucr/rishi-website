import React from "react";

const Options = ({ tripClick }) => {
  return (
    <div className="flex flex-col items-center py-20 gap-y-2">
      <div className="mb-2">
        <button
          onClick={tripClick("2014")}
          className="bg-rishi-orange text-rishi-white text-3xl font-medium w-[600px] h-[100px] no-underline"
        >
          INDIA TRIP 2014
        </button>
      </div>

      <div className="mb-2">
        <button className="bg-rishi-green text-rishi-white text-3xl font-medium w-[600px] h-[100px] no-underline">
          INDIA TRIP 2016
        </button>
      </div>

      <div className="mb-2">
        <button className="bg-rishi-orange text-rishi-white text-3xl font-medium w-[600px] h-[100px] no-underline">
          INDIA TRIP 2019
        </button>
      </div>

      <div className="mb-2">
        <button className="bg-rishi-green text-rishi-white text-3xl font-medium w-[600px] h-[100px] no-underline">
          PAD SHIPMENT 2022
        </button>
      </div>
    </div>
  );
};

export default Options;
