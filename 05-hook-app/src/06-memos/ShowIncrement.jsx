import React from "react";

export const ShowIncrement = React.memo(({ incrementBy }) => {
  console.log("Me volvi a generar :(");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        incrementBy(5);
      }}
    >
      Incrementar
    </button>
  );
});
