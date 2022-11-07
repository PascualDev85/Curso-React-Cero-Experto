import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    // tiene sentido porque la URL cambiará el useEffect se activará y volverá a renderizar el componente
    setState({
      ...state,
      isLoading: true,
    });

    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  // useEffect no funciona como promesa
  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    // parece redundante pero es mejor a la hora de leer el código y por si en un futuro se implementa algo.
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
