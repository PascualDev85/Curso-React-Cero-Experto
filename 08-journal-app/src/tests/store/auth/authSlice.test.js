import {
  authSlice,
  checkingCredentials,
  login,
  logout,
} from "../../../store/auth/authSlice";
import {
  authenticatedState,
  demoUser,
  initialState,
} from "../../fixtures/authFixtures";

describe("Pruebas en el authSlice", () => {
  test('debe regresar el estado inicial y llamarse "auth"', () => {
    // console.log(authSlice);
    expect(authSlice.name).toBe("auth");

    const state = authSlice.reducer(initialState, {});
    // console.log(state);
    expect(state).toEqual(initialState);
  });

  test("debe realizar la autenticación", () => {
    // console.log(login(demoUser));
    const state = authSlice.reducer(initialState, login(demoUser));
    // console.log(state);
    expect(state).toEqual({
      status: "authenticated",
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null,
    });
  });

  test("debe realizar el logout sin argumentos", () => {
    // console.log(login(demoUser));
    const state = authSlice.reducer(authenticatedState, logout());
    // console.log(state);
    expect(state).toEqual({
      status: "not-authenticated",
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    });
  });

  test("debe de realizar el logout y mostrar un mensaje de error", () => {
    const errorMessage = "Credential is not valid";
    const state = authSlice.reducer(
      authenticatedState,
      logout({ errorMessage })
    );
    // console.log(state);
    expect(state).toEqual({
      status: "not-authenticated",
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: errorMessage,
    });
  });

  test("debe de cambiar el estado a checking", () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials());

    expect(state.status).toBe("checking");
  });
});
