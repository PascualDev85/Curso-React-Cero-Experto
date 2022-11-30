import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {
  addNewEmptyNote,
  setActiveNote,
  savingNewNote,
  setNotes,
  setSaving,
  updateNote,
  setPhotosToActiveNote,
  deleteNoteById,
} from "./";
import { loadNotes, fileUpload } from "../../helpers/";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    // console.log("startNewNote");
    // console.log(getState());

    // dispatch para isSaving = false
    dispatch(savingNewNote());

    // grabar en Firebase
    // uid
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
      imageUrls: [],
    };

    // colección de notas en Firebase
    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));

    // insertar en Firebase el objeto newNote
    // const setDocResp = await setDoc(newDoc, newNote);
    // console.log({ newDoc, setDocResp });

    await setDoc(newDoc, newNote);

    // crear la id a la nota
    newNote.id = newDoc.id;

    //! dispatch de la nueva nota (playload = newNote)
    dispatch(addNewEmptyNote(newNote));
    // dispatch para activar la nota
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("User uid doesn't exist");
    // console.log({ uid });
    const notes = await loadNotes(uid);

    // dispatch de las notas
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    // activamos el isSaving
    dispatch(setSaving());

    const { uid } = getState().auth;
    const { activeNote } = getState().journal;

    const noteToFireStore = { ...activeNote };
    // eliminamos el id de la nota (...activeNote) para que no se guarde en FireBase
    delete noteToFireStore.id;
    // console.log(noteToFireStore);

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`);
    // el tercar valor es por si hay un campo con valor que se mantenga
    await setDoc(docRef, noteToFireStore, { merge: true });

    // actualizamos la note
    dispatch(updateNote(activeNote));
  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving());
    // console.log(files);

    // subir las imágenes a Cloudinary
    // await fileUpload(files[0]); esto subiría 1 img

    // disparar funciones que regresan promesas o no y cuando todas son resultas entonces tendré la resp
    const fileUploadPromises = [];
    for (const file of files) {
      // crear el arreglo de promesas
      fileUploadPromises.push(fileUpload(file));
    }
    // arreglo de promesas o callbacks
    const pohotosUrls = await Promise.all(fileUploadPromises);
    console.log(pohotosUrls);

    dispatch(setPhotosToActiveNote(pohotosUrls));
  };
};

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { activeNote } = getState().journal;
    console.log({ uid, activeNote });

    // borrar la nota de Firebase
    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`);
    await deleteDoc(docRef);

    // borrar la nota del state
    dispatch(deleteNoteById(activeNote.id));
  };
};
