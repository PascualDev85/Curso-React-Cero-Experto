// acciones que puedo hacer dispatch que son funciones asincronas

import { singInWithGoogle } from "../../firebase/providers";
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
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};
