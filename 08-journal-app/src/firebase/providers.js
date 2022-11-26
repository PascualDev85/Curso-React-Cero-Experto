import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

// crear una nueva instancia de esta funcion
const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    // página firebase
    const resp = await signInWithPopup(FirebaseAuth, googleProvider);

    // vereficar las credenciales de google a través de un token
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    // console.log(credentials);

    const { displayName, email, photoURL, uid } = resp.user;
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
    // console.log({ email, password, displayName });
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

    if (error.message.includes("email-already-in-use")) {
      return {
        ok: false,
        errorMessage: "The email address is already registered",
      };
    }
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    // console.log(result);

    const { uid, displayName, photoURL } = resp.user;

    return {
      ok: true,
      uid,
      displayName,
      email,
      photoURL,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: "Email or password incorrect",
    };
  }
};
