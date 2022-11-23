import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./apis";
import { counterSlice } from "./slices/counter";
import { pokemonSlice } from "./slices/pokemon";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,

    //   para usar la api de todos
    [todosApi.reducerPath]: todosApi.reducer,
  },
  //  configurar el middleware (funcíon que se ejecuta antes de que llegue al reducer)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
