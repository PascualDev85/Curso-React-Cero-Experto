import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-Promesas", () => {
  test("getHeroeByIdAsync debe de retornar un héroe", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });

      // esperar la respuesta
      done();
    });
  });

  test("getHeroeByIdAsync debe de obtener un error no existe", (done) => {
    const id = 100;

    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch((err) => {
        expect(err).toBe(`No se pudo encontrar el héroe ${id}`);
        done();
      });
  });
});
