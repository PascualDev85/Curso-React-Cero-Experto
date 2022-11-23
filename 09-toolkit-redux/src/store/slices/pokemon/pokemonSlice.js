import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state /* action */) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      //   console.log(action);
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
      // Ej de lo anterior:
      // {
      //     page: 1,
      //     pokemons: [],
      // }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPokemons, startLoadingPokemons } = pokemonSlice.actions;
