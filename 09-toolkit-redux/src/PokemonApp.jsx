import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  console.log(pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <span>Loading: {!isLoading ? "True" : "False"}</span>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <p>{page}</p>
      <button
        disabled={isLoading || page === 1}
        onClick={() => dispatch(getPokemons(page - 2))}
      >
        Previous
      </button>
      <button
        disabled={isLoading || page === 1}
        onClick={() => dispatch(getPokemons(page - page))}
      >
        Home
      </button>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
