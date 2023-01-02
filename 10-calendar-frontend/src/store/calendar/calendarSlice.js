import { createSlice } from "@reduxjs/toolkit";
// import { addHours } from "date-fns";

//* Vendrá del backend
// const tempEvent = {
//   _id: new Date().getTime(),
//   title: "Cumple de David",
//   notes: "Comprar la tarta",
//   start: new Date(),
//   end: addHours(new Date(), 2),
//   bgColor: "#fafafa",
//   user: {
//     _id: "123",
//     name: "David",
//   },
// };

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    isLoadingEvent: true,
    events: [
      // tempEvent,
    ],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      // Inserto el nuevo evento en el array de eventos
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      // Si hay un evento activo, lo actualizo
      state.events = state.events.map((event) =>
        event.id === payload.id ? payload : event
      );
    },
    onDeleteEvent: (state) => {
      // Si hay un evento activo, lo borro. En caso contrario, no hago nada
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event.id !== state.activeEvent.id
        );
        state.activeEvent = null;
      }
    },
    onLoadEvents: (state, { payload = [] }) => {
      state.isLoadingEvent = false;
      // state.events = payload;
      // llamar varias veces esta instrucción sin que tenga impacto
      payload.forEach((event) => {
        // compruebo si el evento ya existe en el array de eventos
        const eventExists = state.events.some(
          (dbEvent) => dbEvent.id === event.id
        );
        // si no existe, lo inserto
        if (!eventExists) {
          state.events.push(event);
        }
      });
    },
    onLogoutCalendar: (state) => {
      state.isLoadingEvent = true;
      state.events = [];
      state.activeEvent = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  onLoadEvents,
  onLogoutCalendar,
} = calendarSlice.actions;
