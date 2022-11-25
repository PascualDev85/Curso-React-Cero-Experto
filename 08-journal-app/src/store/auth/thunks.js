// acciones que puedo hacer dispatch que son funciones asincronas

import {
  singInWithGoogle,
  registerUserWithEmailPassword,
} from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./";

export const checkingAuthentication = (email, password) => {
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
    // console.log({result});
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
    // dispatch del error si la función falla
    if (!ok) return dispatch(logout(errorMessage));

    // login
    dispatch(login({ uid, displayName, email, photoURL }));
  };
};
