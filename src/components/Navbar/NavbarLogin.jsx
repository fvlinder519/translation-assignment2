import { useUser } from "../../context/UserContext";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { storageRemove } from "../../utils/storage";

const NavbarLogin = () => {
  const { user, setUser } = useUser();

  const handleLogoutClick = () => {
    storageRemove(STORAGE_KEY_USER);
    setUser(null);
  };

  const theme = createTheme({
    palette: {
      neutral: {
        main: "white",
        contrastText: "#fff",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" color="neutral">
          <Toolbar>
            <Typography
              sx={{
                position: "flex",
                marginBottom: "1%",
                marginTop: "1%",
                fontFamily: "Love Ya Like A Sister",
                fontSize: "200%",
                color: "white",
                color: "#f4a261",
              }}
            >
              Lost in Translation
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
export default NavbarLogin;
