import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotes = async (uid = "") => {
  if (!uid) throw new Error("User uid doesn't exist");

  // apuntar a la colección en FireBase
  const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);

  // obtener las notas
  const docs = await getDocs(collectionRef);
  //   console.log(docs);

  // obtenemos los datos de una fución data de los prototypes de los docs
  const notes = [];
  docs.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    notes.push({ id: doc.id, ...doc.data() });
  });
  //   console.log(notes);
  return notes;
};
