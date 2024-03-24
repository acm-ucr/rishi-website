"use client";
import React, { useEffect, useState } from "react";
import Mycalendar from "./Calendar";
import axios from "axios";

const CalendarApi = () => {
  // make all Google Calendar API calls here and pass events into Mycalendar as props
  const [events, setEvents] = useState();

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL);
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events?key=${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY
        }&singleEvents=true&orderBy=starttime&timeMin=${new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          1
        ).toISOString()}&timeMax=${new Date(
          new Date().getMonth() === 11
            ? new Date().getFullYear() + 1
            : new Date().getFullYear(),
          new Date().getMonth() === 11 ? 0 : new Date().getMonth() + 1,
          1
        ).toISOString()}`
      )
      .then((result) => {
        setEvents(
          result.data.items.map((event) => ({
            ...event,
            title: event.summary,
            allDay: event.start.dateTime ? false : true,
            start: event.start.dateTime
              ? new Date(event.start.dateTime)
              : new Date(event.start.date + "T00:00:00-07:00"),
            end: new Date(event.end.dateTime || event.end.date),
            color: "bg-rishi-orange",
          }))
        );
      });
  }, []);

  return (
    <div>
      <Mycalendar events={events} />
    </div>
  );
};

export default CalendarApi;
