import { AddOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { HomeLayout } from "../layout/HomeLayout";
import { NoteView, NothingSelectedView } from "../views";

export const HomePage = () => {
  return (
    <HomeLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, repellat
        aliquam. Quia totam rerum obcaecati tenetur mollitia quasi aperiam
        ratione, ut placeat! Alias, unde eum nostrum ipsum rerum illum nemo!
      </Typography> */}

      {/* NothingSelected */}
      <NothingSelectedView />

      {/* NoteView */}
      {/* <NoteView /> */}

      <IconButton
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
