import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PublicRouter } from "../../src/router/PublicRouter";

describe("Pruebas en <PublicRoute />>", () => {
  test("debe de mostar el children si no está autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRouter>
          <h1>Ruta pública</h1>
        </PublicRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta pública")).toBeTruthy();

    // screen.debug();
  });

  test("debe de navegar si está autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "David",
        id: "123",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRouter>
                  <h1>Ruta pública</h1>
                </PublicRouter>
              }
            />
            <Route path="marvel" element={<h1>Página Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.queryByText("Página Marvel")).toBeTruthy();
  });
});
