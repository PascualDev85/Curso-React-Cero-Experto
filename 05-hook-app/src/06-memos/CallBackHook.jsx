import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  // memorizar funciones. Los objetos ocupan cada vez espacios en memoria distintos
  const incrementFather = useCallback(
    // definir los argumentos
    (value) => {
      setCounter((c) => c + value);
    },
    []
  );

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement incrementBy={incrementFather} />
    </>
  );
};
