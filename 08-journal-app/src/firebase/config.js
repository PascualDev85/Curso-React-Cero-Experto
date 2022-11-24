// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkrWrhABzRPE-8JgeXVLoqqfs-6881B7U",
  authDomain: "react-journal-72584.firebaseapp.com",
  projectId: "react-journal-72584",
  storageBucket: "react-journal-72584.appspot.com",
  messagingSenderId: "647754553932",
  appId: "1:647754553932:web:570ae8b8632b83a6f7b2e9",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

// Auth
export const FirebaseAuth = getAuth(FirebaseApp);

// base de datos
export const FirebaseDB = getFirestore(FirebaseApp);
