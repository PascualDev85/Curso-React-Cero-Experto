import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  // slice de calendar
  const { events, activeEvent } = useSelector((state) => state.calendar);

  // activar evento
  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  // guardar evento
  const startSavingEvent = async (calendarEvent) => {
    //TODO: llegar al backend

    //Todo sale bien
    if (calendarEvent._id) {
      // actualizar evento
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      // crear evento
      dispatch(
        onAddNewEvent({
          //Ahora mismo no hay backend, por lo que genero un id
          ...calendarEvent,
          _id: new Date().getTime(),
        })
      );
    }
  };

  // eliminar evento
  const startDeletingEvent = async () => {
    // Todo: Llegar al backend

    dispatch(onDeleteEvent());
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
  };
};
