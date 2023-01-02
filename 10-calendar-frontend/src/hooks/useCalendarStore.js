import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import calendarApi from "../api/calendarApi";
import { convertEventsToDateEvents } from "../helpers";
import {
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  // slice de calendar
  const { events, activeEvent } = useSelector((state) => state.calendar);
  // slice de auth
  const { user } = useSelector((state) => state.auth);

  // activar evento
  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  // guardar evento
  const startSavingEvent = async (calendarEvent) => {
    //Todo sale bien

    try {
      if (calendarEvent.id) {
        // actualizar evento ennviar el evento al backend
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
        // actualizar evento haciendo un dispatch
        dispatch(onUpdateEvent({ ...calendarEvent, user }));
        return;
      }
      //Creando un nuevo evento
      // aqui se hace la petición al backend que está en el body
      await calendarApi.post("/events", calendarEvent);
      // console.log({ data });

      dispatch(
        onAddNewEvent({
          //Creando un nuevo evento
          ...calendarEvent,
          // _id: new Date().getTime(), // se elimina porque ya se genera en el backend
          id: data.evento.id,
          user,
        })
      );
      // Si hay un error
    } catch (error) {
      console.log("Error al guardar el evento", error);
      Swal.fire("Error al guardar", error.response.data.msg, "error");
    }
  };

  // eliminar evento
  const startDeletingEvent = async () => {
    // Todo: Llegar al backend
    try {
      // llamar al backend para eliminar el evento
      await calendarApi.delete(`/events/${activeEvent.id}`);
      // llamar al dispatch para eliminar el evento
      dispatch(onDeleteEvent());
    } catch (error) {
      console.log("Error al eliminar el evento", error);
      Swal.fire("Error al eliminar", error.response.data.msg, "error");
    }
  };

  // cargar eventos del backend
  const startLoadingEvents = async () => {
    try {
      // llamar al backend para obtener los eventos
      const { data } = await calendarApi.get("/events");
      // console.log({ data });
      // convertir la fecha de los eventos
      const events = convertEventsToDateEvents(data.eventos);
      // console.log({ events });
      // cargar los eventos  que se obtienen del backend
      dispatch(onLoadEvents(events));
    } catch (error) {
      console.log("Error al cargar los eventos", error);
    }
  };

  return {
    //* Propiedades
    events,
    activeEvent,
    // nueva propiedad para saber si hay un evento activo
    hasEventSelected: !!activeEvent,
    // doble negacion para convertir a boolean, si no hay evento, devuelve false y si hay, devuelve true. De esta ocultaremos el boton de eliminar evento

    //* Metodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    startLoadingEvents,
  };
};
