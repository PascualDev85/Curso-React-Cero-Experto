import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar, SideBar } from "../components/";

// Menú lateral
const drawerWidth = 280;

export const HomeLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar drawerWidth*/}
      <NavBar drawerWidth={drawerWidth} />

      {/* Sidebar drawerWidth */}
      <SideBar drawerWidth={drawerWidth} />
      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};
