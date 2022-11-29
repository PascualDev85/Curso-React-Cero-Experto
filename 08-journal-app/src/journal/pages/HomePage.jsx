import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";

import { startNewNote } from "../../store/journal";
import { HomeLayout } from "../layout/HomeLayout";
import { NoteView, NothingSelectedView } from "../views";

export const HomePage = () => {
  const { isSaving, activeNote: note } = useSelector((state) => state.journal);

  const dispatch = useDispatch();

  // const isSavingNewNote = useMemo

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <HomeLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, repellat
        aliquam. Quia totam rerum obcaecati tenetur mollitia quasi aperiam
        ratione, ut placeat! Alias, unde eum nostrum ipsum rerum illum nemo!
      </Typography> */}

      {/* al ser un objeto hay que preguntar para convertirlo en booleano  */}
      {!!note ? <NoteView /> : <NothingSelectedView />}

      {/* NothingSelected */}
      {/* <NothingSelectedView /> */}

      {/* NoteView */}
      {/* <NoteView /> */}

      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": {
            backgroundColor: "error.main",
            opacity: 0.9,
          },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined />
      </IconButton>
    </HomeLayout>
  );
};
