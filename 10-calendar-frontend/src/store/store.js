import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice } from "./calendar/calendarSlice";
// import { calendarSlice, uiSlice } from "./";
import { uiSlice } from "./ui/uiSlice";

export const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
    ui: uiSlice.reducer,
  },
  // esto es para que no nos de el warning al guardar el activeEvent en el localStorage
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
