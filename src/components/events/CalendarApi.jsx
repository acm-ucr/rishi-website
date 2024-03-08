"use client";
import React, { useEffect } from "react";
import Mycalendar from "./Calendar";

const CalendarApi = () => {
  // make all Google Calendar API calls here and pass events into Mycalendar as props

  useEffect(() => {
    const fetchData = async () => {
      try {
        const calendarEmail = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL;
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;

        const fetchUrl = `https://www.googleapis.com/calendar/v3/calendars/${calendarEmail}/events?key=${apiKey}`;
        const response = await fetch(fetchUrl);
        const { items } = await response.json();
        console.log(items);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Mycalendar />
    </div>
  );
};

export default CalendarApi;
