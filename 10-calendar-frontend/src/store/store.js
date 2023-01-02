import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice, uiSlice, authSlice } from "./";
// import { authSlice } from "./auth/authSlice";
// import { calendarSlice } from "./calendar/calendarSlice";
// import { uiSlice } from "./ui/uiSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    calendar: calendarSlice.reducer,
    ui: uiSlice.reducer,
  },
  // esto es para que no nos de el warning al guardar el activeEvent en el localStorage
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
