import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../../09-useContext/context/UserContex";
import { LoginPage } from "../../../09-useContext/pages/LoginPage";

describe("Pruebas en <LoginPage />", () => {
  const user = {
    id: 123,
    name: "David",
    email: "david@gmail.com",
  };

  test("debe de mostrar el componenente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("debe de mostrar el componenente con el usuario", () => {
    render(
      <UserContext.Provider value={{ user: user }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());
    expect(preTag.innerHTML).toContain(user.email);
  });

  test("debe de llamar el setUser cuando se hace click en el boton", () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const setButton = screen.getByLabelText("buttonSetUser");
    fireEvent.click(setButton);

    expect(setUserMock).toHaveBeenCalledWith(user);
  });
});
