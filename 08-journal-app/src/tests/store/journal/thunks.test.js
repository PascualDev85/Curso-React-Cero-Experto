import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../firebase/config";
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
} from "../../../store/journal/journalSlice";
import { startNewNote } from "../../../store/journal/thunks";

describe("Pruebas en JOurnal Thunks", () => {
  const dispatch = jest.fn();

  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("startNewNote debe creaer una nueva nota en blanco ", async () => {
    const uid = "TEST-UID";

    getState.mockReturnValue({ auth: { uid } });
    await startNewNote()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(savingNewNote());
    expect(dispatch).toHaveBeenCalledWith(
      addNewEmptyNote({
        title: "",
        body: "",
        id: expect.any(String),
        date: expect.any(Number),
        imageUrls: [],
      })
    );
    expect(dispatch).toHaveBeenCalledWith(
      setActiveNote({
        title: "",
        body: "",
        id: expect.any(String),
        date: expect.any(Number),
        imageUrls: [],
      })
    );

    // borrar las notas de Firebase
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);
    // console.log(docs);

    const deletePromises = [];
    docs.forEach((doc) => {
      deletePromises.push(deleteDoc(doc.ref));
    });
    await Promise.all(deletePromises);
  });
});
