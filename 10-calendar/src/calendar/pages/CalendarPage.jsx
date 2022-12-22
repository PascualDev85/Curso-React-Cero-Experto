import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

// import { addHours } from "date-fns";
import {
  CalendarEventBox,
  CalendarModal,
  FabAddNew,
  FabDelete,
  Navbar,
} from "../";

import { localizer, getMessagesES } from "../../helpers";
import {
  useCalendarStore,
  useEventStyleCalendar,
  useUiStore,
} from "../../hooks";
import { useState } from "react";

//* El evento creado por el usuario se guarda en el store
// const myEventsList = [
//   {
//     title: "Cumple de David",
//     notes: "Comprar la tarta",
//     start: new Date(),
//     end: addHours(new Date(), 2),
//     bgColor: "#fafafa",
//     user: {
//       _id: "123",
//       name: "David",
//     },
//   },
// ];

export const CalendarPage = () => {
  // Importaciones de los customs hooks
  const eventStyleGetter = () => useEventStyleCalendar();
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent } = useCalendarStore();

  // obtener el ultimo view del localstorage
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );

  const onDoubleClick = (e) => {
    // console.log({ doubleClick: e });
    openDateModal();
  };

  const onSelect = (e) => {
    // console.log({ click: e });
    setActiveEvent(e);
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
        events={events}
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

      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  );
};
