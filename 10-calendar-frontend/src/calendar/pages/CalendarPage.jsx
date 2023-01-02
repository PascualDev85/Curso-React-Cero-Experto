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
  useAuthStore,
  useCalendarStore,
  useEventStyleCalendar,
  useUiStore,
} from "../../hooks";
import { useEffect, useState } from "react";

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
  const { user } = useAuthStore();
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();

  // obtener el ultimo view del localstorage
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );

  const eventStyleGetter = (event, start, end, isSelect) => {
    console.log(event);
    // variable para saber si el evento es mio booleana
    const isMyEvent =
      user.uid === event.user._id || user.uid === event.user.uid;

    const style = {
      backgroundColor: isMyEvent ? "#367CF7" : "#465660",
      borderRadius: "0px",
      opacity: 0.9,
      display: "block",
      color: "white",
    };

    return {
      style,
    };
  };

  const onDoubleClick = (e) => {
    // console.log({ doubleClick: e });
    openDateModal();
  };

  const onSelect = (e) => {
    // console.log({ select: e });
    setActiveEvent(e);
  };

  const onViewChanged = (e) => {
    // console.log({ view: e });
    localStorage.setItem("lastView", e);
    setLastView(e);
  };

  // controlar el evento de carga de la pagina de los eventos
  useEffect(() => {
    startLoadingEvents();
  }, []);

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
