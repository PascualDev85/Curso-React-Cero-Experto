import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Heavy stuff");

    return `${iterationNumber} iterations done`;
  }
};

export const MemoHook = () => {
  const { counter, incrementBy } = useCounter(4000);

  const [Show, setShow] = useState(true);

  const memorizedValue = useMemo(() => {
    heavyStuff(counter);
  }, [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      <h4>{memorizedValue}</h4>
      <button
        className="btn btn-primary"
        onClick={() => {
          incrementBy();
        }}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!Show);
        }}
      >
        Show/Hide {JSON.stringify(Show)}
      </button>
    </>
  );
};
