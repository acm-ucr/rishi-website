import React from "react";
import Button from "../Button";
const Options = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="mb-2">
        <Button
          text="INDIA TRIP 2014"
          href={"https://www.google.com/"}
          color="orange"
        />
      </div>

      <div className="mb-2">
        <Button
          text="INDIA TRIP 2016"
          href={"https://www.google.com/"}
          color="green"
        />
      </div>

      <div className="mb-2">
        <Button
          text="INDIA TRIP 2019"
          href={"https://www.google.com/"}
          color="orange"
        />
      </div>

      <div className="mb-2">
        <Button
          text="PAD SHIPMENT 2022"
          href={"https://www.google.com/"}
          color="green"
        />
      </div>
    </div>
  );
};

export default Options;
