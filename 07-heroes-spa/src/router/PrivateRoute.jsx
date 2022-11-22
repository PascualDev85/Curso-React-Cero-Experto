import { useContext, useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRoute = ({ children }) => {
  // destructuramos del contexto para saber si está logueado
  const { logged } = useContext(AuthContext);
  // console.log(useLocation());

  // destructuramos useLocation para cuando user se logue de nuevo vuelva al mismo lugar
  const { pathname, search } = useLocation();

  const lastPath = useMemo(() => pathname + search, [pathname, search]);

  // seteamos el lastPath en el localstorage para que cuando se loguee vuelva al mismo lugar
  localStorage.setItem("lastPath", lastPath);

  // si no esta logueado lo redirigimos a login
  return logged ? children : <Navigate to="/login" />;
};
