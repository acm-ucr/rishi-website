// Modal.jsx
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Modal = ({ selectedEvent, onClose }) => {
  if (!selectedEvent) return null;

  return (
    <div className="font-playfair fixed top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] md:w-[50vw] bg-hlg-white z-10 drop-shadow-lg pb-16">
      <div
        className={`flex overflow-wrap break-words justify-between items-center ${selectedEvent.color}`}
      >
        <p
          className={`text-hlg-white m-0 py-2 md:py-3 px-3 md:px-4 text-lg md:text-3xl text-white`}
        >
          {selectedEvent.title}
        </p>
        <div className=" p-3  h-full text-white">
          <AiOutlinePlus
            onClick={onClose}
            className="text-hlg-white rotate-45 p-0 hover:scale-[1.5] duration-300 hover:cursor-pointer  m-2"
          />
        </div>
      </div>
      <div className=" bg-white  ">
        <p className="m-0 pl-3 text-2xl pt-3">{selectedEvent.location}</p>
        {selectedEvent.allDay ? (
          <p>{selectedEvent.start.toLocaleDateString()}</p>
        ) : (
          <p className="m-0 pl-3 text text-2xl">
            {selectedEvent.start.toLocaleTimeString().split(":")[0]}
            &nbsp;to&nbsp;
            {selectedEvent.end.toLocaleTimeString().split(":")[0]}&nbsp;
            {selectedEvent.end.toLocaleTimeString().split(":")[2].split(" ")[1]}
          </p>
        )}
        <div className="   py-4 overflow-wrap break-words ">
          {selectedEvent.description?.replace(
            selectedEvent.description.split(" ")[0],
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
