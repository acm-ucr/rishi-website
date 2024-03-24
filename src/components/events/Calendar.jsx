"use client";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import CustomEvent from "./CustomEvent";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./rbc.css";
import ToolBar from "./ToolBar";
import Modal from "./modal";

const localizer = momentLocalizer(moment);

const Mycalendar = ({ events }) => {
  const formats = {
    monthHeaderFormat: (date, culture, localizer) =>
      localizer.format(date, "MMM YYYY", culture),
  };

  // navigation - - - - - - - - - - - - - - - - - - - - - - - -
  const [date, setDate] = useState(new Date());
  const handleDate = (action) => {
    setDate((curr) => {
      const newDate = new Date(curr);
      if (action == "PREV") {
        newDate.setMonth(curr.getMonth() - 1);
      } else if (action == "NEXT") {
        newDate.setMonth(curr.getMonth() + 1);
      }
      return newDate;
    });
  };
  // - - - - - - - - - - - -event- - - - - - - - - - - - - - -- - -
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelect = (event) => {
    setSelectedEvent(event);
  };
  // - - - - - - - - ------------------------------ - - -
  return (
    <div className="w-full px-10 ">
      <Calendar
        localizer={localizer}
        date={date}
        onSelectEvent={handleSelect}
        events={events}
        views={["month"]}
        defaultView="month"
        style={{ height: "90vh" }}
        formats={formats}
        onNavigate={handleDate}
        components={{
          event: CustomEvent,
          toolbar: (props) => <ToolBar {...props} handleDate={handleDate} />,
        }}
      />
      {selectedEvent && (
        <Modal
          isOpen={!!selectedEvent}
          selectedEvent={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default Mycalendar;
