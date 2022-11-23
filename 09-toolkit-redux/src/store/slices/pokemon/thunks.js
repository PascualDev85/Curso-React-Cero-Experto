// Petciones http,

import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  // getState es una función que nos permite obtener el estado actual del store
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // petición http con fetch
    // const response = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // );
    // const data = await response.json();
    // console.log(data);

    // petición http con axios
    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );
    // console.log(resp);

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
