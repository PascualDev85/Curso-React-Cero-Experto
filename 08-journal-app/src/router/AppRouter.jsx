import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui/";
import { useCheckAuth } from "../hooks";

export const AppRouter = () => {
  // custom Hooks autenticación
  // const { status } = useCheckAuth();
  const status = useCheckAuth();

  // si status es checking, mostramos el componente CheckingAuth
  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {/* No se realizará a través de Rutas públicas y privadas  */}

      {
        // Si el usuario está autenticado
        status === "authenticated" ? (
          <Route path="/*" element={<JournalRoutes />} />
        ) : (
          // Si el usuario no está autenticado
          <Route path="/auth/*" element={<AuthRoutes />} />
        )
      }

      <Route path="/*" element={<Navigate to="/auth/login" />} />

      {/* Login y Registro. Cualquier path que inicialce por "/auth/*" mostrará nuestro AppRoute */}
      {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}

      {/* JournalApp. Cualquier otra ruta que entre por auth, mostrará el HomePage */}
      {/* <Route path="/*" element={<JournalRoutes />} /> */}
    </Routes>
  );
};
