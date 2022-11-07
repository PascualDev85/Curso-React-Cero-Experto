import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    // document.querySelector("input").select();
    // console.log(inputRef);
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Your name"
        className="form-control"
      />

      <button onClick={onClick} className="btn btn-outline-primary mt-2">
        Set Focus
      </button>
    </>
  );
};
