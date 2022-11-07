import React from "react";
// import { memo } from "react";

export const Small = React.memo(({ value }) => {
  // cuando el componente es muy grande o cambie las props, sólo cuando es necesario usar el memo
  console.log("Me volví a dibujar", value);
  return <small>{value}</small>;
});
