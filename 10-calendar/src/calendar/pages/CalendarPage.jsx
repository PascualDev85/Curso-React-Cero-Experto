import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { addHours } from "date-fns";
import { CalendarEventBox, Navbar } from "../";

import { localizer, getMessagesES } from "../../helpers";
import { useEventStyleCalendar } from "../../hooks";
import { useState } from "react";

const myEventsList = [
  {
    title: "Cumple de David",
    notes: "Comprar la tarta",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "David",
    },
  },
];

export const CalendarPage = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );

  const eventStyleGetter = () => useEventStyleCalendar();

  const onDoubleClick = (e) => {
    console.log({ doubleClick: e });
  };

  const onSelect = (e) => {
    console.log({ click: e });
  };

  const onViewChanged = (e) => {
    localStorage.setItem("lastView", e);
    setLastView(e);
  };

  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={myEventsList}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEventBox,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
    </>
  );
};
