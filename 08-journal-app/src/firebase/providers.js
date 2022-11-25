import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

// crear una nueva instancia de esta funcion
const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    // página firebase
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    // vereficar las credenciales de google a través de un token
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    // console.log(credentials);

    const { displayName, email, photoURL, uid } = result.user;
    // console.log(user);

    return {
      ok: true,
      //user info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    console.log({ email, password, displayName });
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { photoURL, uid } = resp.user;
    // console.log(resp);

    // actualizar el displayName en Firebase
    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      displayName,
      email,
      photoURL,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};
