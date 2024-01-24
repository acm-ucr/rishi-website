"use client";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./rbc.css";
import ToolBar from "./ToolBar";
import Modal from "./modal";

const localizer = momentLocalizer(moment);

const Mycalendar = () => {
  const formats = {
    monthHeaderFormat: (date, culture, localizer) =>
      localizer.format(date, "MMM YYYY", culture),
  };
  const Myevents = [
    {
      title: "12pm Meeting",
      start: moment().toDate(),
      end: moment().add(0, "day").toDate(),
    },
    {
      title: "test",
      start: moment("2024-02-13T00:00").toDate(),
      end: moment("2024-02-13T00:00").toDate(),
    },
    {
      title: "rose hack",
      start: moment("2024-01-22T00:00").toDate(),
      end: moment("2024-01-22T00:00").toDate(),
    },
  ];
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
  const handleSelect = (e) => {
    setSelectedEvent(e);
  };

  const renderModal = () => {
    if (!selectedEvent) return null;

    return (
      <Modal isOpen={!!selectedEvent} onClose={() => setSelectedEvent(null)}>
        <div>title: {selectedEvent.title}</div>
      </Modal>
    );
  };

  // - - - - - - - - ------------------------------ - - -
  return (
    <div className="w-full px-10">
      <Calendar
        localizer={localizer}
        date={date}
        onSelectEvent={handleSelect}
        events={Myevents}
        views={["month"]}
        defaultView="month"
        style={{ height: "90vh" }}
        formats={formats}
        onNavigate={handleDate}
        components={{
          toolbar: (props) => <ToolBar {...props} handleDate={handleDate} />,
        }}
      />
      {renderModal()}
    </div>
  );
};

export default Mycalendar;
