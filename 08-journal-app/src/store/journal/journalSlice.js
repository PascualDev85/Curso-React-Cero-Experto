import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    activeNote: null,
    // como va lucir activeNote
    // activeNote: {
    //     id: '123',
    //     title: '',
    //     body: '',
    //     date: 1234567890,
    //     imageUrls: [], // http://foto1.jpg, http://foto2.jpg
    // }
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      // en el payload viene el objeto newNote
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
      state.messageSaved = "";
    },
    setSaving: (state, action) => {
      state.isSaving = true;
      // limpiamos el mensaje
      state.messageSaved = "";
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      // encontrar la nota a actualizar

      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
      //Mostrar mensaje de actualización (actualizar el título de la nota)
      state.messageSaved = `${action.payload.title} updated correctly`;
    },
    deleteNoteById: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  savingNewNote,
} = journalSlice.actions;
