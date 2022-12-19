// MIDDLEWARE
// acciones que puedo hacer dispatch que son funciones asincronas

import {
  singInWithGoogle,
  registerUserWithEmailPassword,
  loginWithEmailPassword,
  logoutFireBase,
} from "../../firebase/providers";
import { clearNotesLogout } from "../journal";
import { checkingCredentials, logout, login } from "./";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    // checking
    dispatch(checkingCredentials());

    // login
    const result = await singInWithGoogle();
    console.log({ result });
    // dispatch del error
    if (!result.ok) return dispatch(logout(result.errorMessage));

    //dispatch del login
    dispatch(login(result));
  };
};

export const startCreatinUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    // checking
    dispatch(checkingCredentials());

    // register
    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });
    // console.log({ resp });
    // dispatch del error si la función falla (Ej: email ya registrado)
    if (!ok) return dispatch(logout({ errorMessage }));

    // login
    dispatch(login({ uid, displayName, ok, email, photoURL }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    // checking
    dispatch(checkingCredentials());

    // login
    const result = await loginWithEmailPassword({ email, password });
    // console.log(result);

    // dispatch del error
    if (!result.ok) return dispatch(logout(result));

    // //dispatch del login
    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    // logout
    await logoutFireBase();

    dispatch(clearNotesLogout());

    // dispatch del logout, mandamos un objeto vacío
    dispatch(logout());
  };
};
