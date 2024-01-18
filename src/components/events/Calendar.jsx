"use client";
import React, { useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./rbc.css";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
const localizer = momentLocalizer(moment);
const CustomToolbar = ({ label }) => {
  return (
    <div>
      <span className="flex flex-row h-full  w-1/6  justify-around">
        <button className="   w-auto ">
          <GoArrowLeft className=" rishi-black  w-full h-full" />
        </button>
        <div className="  items-center  flex flex-row justify-center h-full text-2xl font-bold text-rishi-orange">
          {label}
        </div>
        <button className="   w-auto">
          <GoArrowRight className="rishi-black  w-full h-full" />
        </button>
      </span>
    </div>
  );
};

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
      start: moment("2024-01-12T00:00").toDate(),
      end: moment("2024-01-13T00:00").toDate(),
    },
    {
      title: "rose hack",
      start: moment("2024-01-22T00:00").toDate(),
      end: moment("2024-01-22T00:00").toDate(),
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const offRangeDays = document.querySelectorAll(
        ".rbc-day-bg.rbc-off-range-bg"
      );

      offRangeDays.forEach((day) => {
        day.classList.remove("rbc-off-range-bg");
      });
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={Myevents}
        views={["month"]}
        defaultView="month"
        style={{ height: "90vh" }}
        formats={formats}
        components={{
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default Mycalendar;
