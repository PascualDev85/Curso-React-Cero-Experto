import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingNotes } from "../store/journal";

export const useCheckAuth = () => {
  // mostrar un spinner cuando se está checking el status del usuario
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // estar pendiente de la autenticación
  useEffect(() => {
    // FirebaseAuth observardor (función que está emitiendo valores)
    onAuthStateChanged(FirebaseAuth, async (user) => {
      // console.log(user);

      // si no hay ningún usuario llamo al logout
      if (!user) return dispatch(logout());

      // si hay un usuario llamo al login
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
      // cargar una nota
      dispatch(startLoadingNotes());
    });
  }, []);

  //   return {
  //     status,
  //   };

  return status;
};
