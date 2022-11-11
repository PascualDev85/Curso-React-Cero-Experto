import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  // icrementar el valor según que valor quiera pasaerle
  const incrementBy = (value = 1) => {
    setCounter((counter) => counter + value);
  };

  // decremetar el valor según que valor quiera pasaerle
  const decrementBy = (value = 1) => {
    // setCounter(counter - value);

    // para que pase el test
    setCounter((counter) => counter - value);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
    incrementBy,
    decrementBy,
  };
};
