import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset, incrementBy, decrementBy } =
    useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />
      <button
        className="btn btn-primary"
        // onClick={increment}>
        // Increment by 5
        onClick={() => incrementBy(5)}
      >
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button
        className="btn btn-primary"
        // onClick={decrement}>
        // Decrement by 5
        onClick={() => decrementBy(5)}
      >
        -1
      </button>
    </>
  );
};
