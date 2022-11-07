import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    // console.log(user);

    expect(testUser).toEqual(user);
    // para hacer test con objetos sería toStrictEqual o toEqual "te" o "tse"
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const name = "David";

    const user = getUsuarioActivo(name);
    // console.log(userActivo);

    expect(user).toEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
