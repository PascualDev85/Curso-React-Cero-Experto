import { useState } from "react";
import { useEffect } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // console.log("Mensaje montado");

    const onMouseMove = ({ x, y }) => {
      //   const coords = { x, y };
      //   console.log(coords);
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);

    // window.addEventListener("mousemove", (e) => {
    //   console.log(e.x, e.y);
    // });

    return () => {
      // console.log("Mensaje desmontado");

      // si no removemos al intentar hacer un cambio de un componente que no existe da un error.
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coords)}
    </>
  );
};
