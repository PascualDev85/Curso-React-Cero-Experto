import { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

// const initialState = {
//   logged: false,
// };

// inicializar user
const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  // crear user y grabarlo en el localstorage
  const loginUser = (name = "") => {
    const user = { id: new Date().getTime(), name };

    const action = { type: types.login, payload: user };

    dispatch(action);

    localStorage.setItem("user", JSON.stringify(user));
  };

  const logoutUser = () => {
    localStorage.removeItem("user");

    const action = { type: types.logout };

    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        loginUser: loginUser,
        logoutUser: logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
