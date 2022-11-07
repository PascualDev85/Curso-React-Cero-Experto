import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Prueba en 06-deses-obj", () => {
  test("usContext debe retornar un objeto", () => {
    const clave = "Pascu";
    const edad = 36;

    const user = usContext({ clave, edad });
    // console.log(user);
    expect(user).toEqual({
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
