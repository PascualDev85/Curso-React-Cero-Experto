import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

//* Vendrá del backend
const tempEvent = {
  _id: new Date().getTime(),
  title: "Cumple de David",
  notes: "Comprar la tarta",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "David",
  },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [tempEvent],
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
        event._id === payload._id ? payload : event
      );
    },
    onDeleteEvent: (state) => {
      // Si hay un evento activo, lo borro. En caso contrario, no hago nada
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event._id !== state.activeEvent._id
        );
        state.activeEvent = null;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } =
  calendarSlice.actions;
