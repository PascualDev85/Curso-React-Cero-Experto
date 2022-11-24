import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
