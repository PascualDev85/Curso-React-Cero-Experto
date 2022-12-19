import {
  loginWithEmailPassword,
  logoutFireBase,
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../../firebase/providers";
import { checkingCredentials, login, logout } from "../../../store/auth";
import {
  checkingAuthentication,
  startCreatinUserWithEmailPassword,
  startGoogleSignIn,
  startLoginWithEmailPassword,
  startLogout,
} from "../../../store/auth/thunks";
import { clearNotesLogout } from "../../../store/journal";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock("../../../firebase/providers");

describe("Pruebas en AuthThunks", () => {
  // mocking the dispatch function
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());
  test("debe de invocar el checkingCredentials", async () => {
    // const valor = checkingAuthentication();
    // console.log(valor);

    // esperamos que el dispatch se llame con el checkingCredentials
    await checkingAuthentication()(dispatch);

    // el dispatch se llama con el checkingCredentials
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test("startGoogleSingIn debe de llamar checkingCredentials y login -Éxito", async () => {
    const loginData = { ok: true, ...demoUser };
    // mock
    await singInWithGoogle.mockResolvedValue(loginData);

    //thunk a probar
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startGoogleSingIn debe de llamar checkingCredentials y login -Error", async () => {
    const loginData = { ok: false, errorMessage: "Error en google" };
    // mock
    await singInWithGoogle.mockResolvedValue(loginData);

    //thunk a probar
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });

  test("startLoginWithEmailPassword debe de llamar checkingCrendentials y login -Éxito", async () => {
    const logiData = { ok: true, ...demoUser };
    const formData = { email: demoUser.email, password: "123456" };

    // mock
    await loginWithEmailPassword.mockResolvedValue(logiData);

    // thunk a probar
    await startLoginWithEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(logiData));
  });

  test("startLoginWithEmailPassword debe de llamar checkingCrendentials y login -Error", async () => {
    const logiData = { ok: false, errorMessage: "Error en login" };
    const formData = { email: demoUser.email, password: "123456" };

    // mock
    await loginWithEmailPassword.mockResolvedValue(logiData);

    // thunk a probar
    await startLoginWithEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(logiData));
  });

  test("startCreatinUserWithEmailPassword debe de llamar checkingCrendentials y login -Éxito", async () => {
    const logiData = { ok: true, ...demoUser };
    const formData = {
      email: demoUser.email,
      password: "123456",
      displayName: demoUser.displayName,
    };

    // mock
    await registerUserWithEmailPassword.mockResolvedValue(logiData);

    // thunk a probar
    await startCreatinUserWithEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(logiData));
  });

  test("startLogout  debe de llamar logoutFirebase, clearNotes y logout", async () => {
    await startLogout()(dispatch);

    expect(logoutFireBase).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
    expect(dispatch).toHaveBeenCalledWith(logout());
  });
});
