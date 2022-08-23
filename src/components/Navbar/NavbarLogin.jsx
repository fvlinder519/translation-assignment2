import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import Logo from "../../images/watermelon-_1_.svg";
import LogoPng from "../../images/watermelon.png";
import LogoPng2 from "../../images/catPencil.png";
import LogoPng3 from "../../images/catPencilText.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { borderRight, color, style } from "@mui/system";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ProfileActions from "../../components/Profile/ProfileActions";
import { storageRemove } from "../../utils/storage";
import { Link } from "@mui/material";
import { useTheme } from "@emotion/react";

const NavbarLogin = () => {
  const { user, setUser } = useUser();
  const [value, setValue] = React.useState(0);
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
            <IconButton sx={{ paddingTop: 2, paddingBottom: 2.5 }}>
              <img src={LogoPng3} height={"40%"} width={"40%"} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
export default NavbarLogin;
