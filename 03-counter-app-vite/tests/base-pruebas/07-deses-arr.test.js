import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Prueba en 07-deses-arr", () => {
  test("Debe retornar un string y un número", () => {
    const [letters, numbers] = retornaArreglo();

    //si queremos regresar exactamente lo mismo
    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    console.log(typeof letters);
    console.log(typeof numbers);

    // decimos el tipo que es y puedo devovler cualquier string y number
    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    //puedo devovler cualquier string
    expect(letters).toEqual(expect.any(String));
  });
});
