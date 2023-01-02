import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";
import { useAuthStore } from "../hooks";

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  // const authStatus = "not-authenticated"; //"authenticated";

  // controlo el estado de la autenticación
  useEffect(() => {
    checkAuthToken();
  }, []);

  // TODO: Crear un spinner de carga
  if (status === "checking") {
    return <h2>Cargando...</h2>;
  }

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          {/* si no estoy autenticado, muestro el login */}
          <Route path="/auth/*" element={<LoginPage />} />
          {/* si intento acceder a cualquier otra ruta, redirecciono al login */}
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          {/* si estoy autenticado, muestro el calendario */}
          <Route path="/" element={<CalendarPage />} />
          {/* si intento acceder a cualquier otra ruta, redirecciono al calendario */}
          {/* con esto limpiamos todo y no aparece en el navegador la ruta */}
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
