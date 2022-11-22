import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* No se realizará a través de Rutas públicas y privadas  */}
      {/* Login y Registro. Cualquier path que inicialce por "/auth/*" mostrará nuestro AppRoute */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* JournalApp. Cualquier otra ruta que entre por auth, mostrará el HomePage */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
