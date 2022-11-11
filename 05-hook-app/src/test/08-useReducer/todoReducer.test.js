import { todoReducer } from "../../08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      desc: "Aprender React",
      done: false,
    },
  ];

  test("debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});

    // al no estar destructurando el objeto el estado inicial puede ponerse el toBe. Es el mismo objeto, en el mismo espacio en memoria
    expect(newState).toBe(initialState);
  });

  test("debe de agregar un todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        desc: "Aprender Mongo",
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    // el arreglo debe tener el nuevo elemento
    expect(newState).toContain(action.payload);
  });

  test("debe de borrar un todo", () => {
    const action = {
      type: "[TODO] Delete Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });

  test("debe de hacer el toggle del todo", () => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
  });
});
