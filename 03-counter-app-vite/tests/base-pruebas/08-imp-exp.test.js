import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Prueba en 08-imp-exp", () => {
  test("Debe de retornar un héroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);
    // console.log(hero);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("Debe de retornar undefined si no existe héroe", () => {
    const id = 100;
    const hero = getHeroeById(id);
    // console.log(hero);

    // expect(hero).toEqual(undefined);
    expect(hero).toBeFalsy();

    //Tarea
    //getHeroesByOwner
  });

  test("Debe retornar un arreglo con los héroes de DC", () => {
    const owner = "DC";

    const hero = getHeroesByOwner(owner);
    // console.log(hero);

    expect(hero).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);

    expect(hero.length).toBe(3);

    //método correcto
    expect(hero).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });

  test("Debe retornar un arreglo con los héroes de Marvel", () => {
    const owner = "Marvel";

    const hero = getHeroesByOwner(owner);
    // console.log(hero);

    expect(hero.length).toBe(2);

    //método correcto
    expect(hero).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
});
