// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log(process.env);
// console.log(import.meta.env);

// const env = getEnvironments();
// console.log(env);

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENERID,
  VITE_APPID,
} = getEnvironments();

// Your web app's Firebase configuration
//Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyAkrWrhABzRPE-8JgeXVLoqqfs-6881B7U",
//   authDomain: "react-journal-72584.firebaseapp.com",
//   projectId: "react-journal-72584",
//   storageBucket: "react-journal-72584.appspot.com",
//   messagingSenderId: "647754553932",
//   appId: "1:647754553932:web:570ae8b8632b83a6f7b2e9",
// };

//Testing

// const firebaseConfig = {
//   apiKey: "AIzaSyA63Kbfe3XzxjbvT5PIytaPXkhJ5oJ7W1o",
//   authDomain: "test-journal-cb6b1.firebaseapp.com",
//   projectId: "test-journal-cb6b1",
//   storageBucket: "test-journal-cb6b1.appspot.com",
//   messagingSenderId: "784085606170",
//   appId: "1:784085606170:web:73a012df0df4001668d6a3",
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENERID,
  appId: VITE_APPID,
};

console.log(firebaseConfig);

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

// Auth
export const FirebaseAuth = getAuth(FirebaseApp);

// base de datos
export const FirebaseDB = getFirestore(FirebaseApp);
