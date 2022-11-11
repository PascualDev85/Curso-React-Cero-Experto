import { render, screen } from "@testing-library/react";
import { UserContext } from "../../../09-useContext/context/UserContex";
import { HomePage } from "../../../09-useContext/pages/HomePage";

describe("Pruebas en <HomePage/>", () => {
  const user = {
    id: 1,
    name: "David",
  };

  test("debe de mostrar el compononenten sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    // screen.debug();

    const preTag = screen.getByLabelText("pre");
    // console.log(preTag.textContent);
    expect(preTag.innerHTML).toBe("null");
  });

  test("debe de mostrar el compononenten con el usuario", () => {
    render(
      <UserContext.Provider value={{ user: user }}>
        <HomePage />
      </UserContext.Provider>
    );
    // screen.debug();

    const preTag = screen.getByLabelText("pre");
    console.log(preTag.innerHTML);
    expect(preTag.innerHTML).toContain(user.name);
    // lo estamos mandando como un string y no como numero
    expect(preTag.innerHTML).toContain(user.id.toString());
    // otra manera
    expect(preTag.innerHTML).toContain(`${user.id}`);
  });
});
