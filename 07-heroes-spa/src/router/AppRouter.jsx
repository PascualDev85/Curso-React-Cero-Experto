import { Routes, Route } from "react-router-dom";

import { Login } from "../auth/";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRouter>
              <Login />
            </PublicRouter>
          }
        />

        <Route
          path="*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
        {/* <Route path="login" element={<Login />} />
        <Route path="/*" element={<HeroesRoutes />} /> */}
      </Routes>
    </>
  );
};
