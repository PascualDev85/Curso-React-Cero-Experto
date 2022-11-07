import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, incrementBy } = useCounter(5);

  const [Show, setShow] = useState(true);

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
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
