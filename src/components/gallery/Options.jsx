"use client";
const Options = ({ tripClick }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="mb-2">
        <button
          onClick={() => tripClick("2014")}
          className="bg-rishi-orange text-rishi-white font-semibold py-2 w-60 no-underline"
        >
          INDIA TRIP 2014
        </button>
      </div>

      <div className="mb-2">
        <button
          onClick={() => tripClick("2016")}
          className="bg-rishi-green text-rishi-white font-semibold py-2 w-60 no-underline"
        >
          INDIA TRIP 2016
        </button>
      </div>

      <div className="mb-2">
        <button
          onClick={() => tripClick("2019")}
          className="bg-rishi-orange text-rishi-white font-semibold py-2 w-60 no-underline"
        >
          INDIA TRIP 2019
        </button>
      </div>

      <div className="mb-2">
        <button
          onClick={() => tripClick("2022")}
          className="bg-rishi-green text-rishi-white font-semibold py-2 w-60 no-underline"
        >
          PAD SHIPMENT 2022
        </button>
      </div>
    </div>
  );
};

export default Options;
