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
import LogoPng3 from "../../images/catFly.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { borderRight, color, style } from "@mui/system";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ProfileActions from "../../components/Profile/ProfileActions";
import { storageRemove } from "../../utils/storage";
import { Link } from "@mui/material";
const Navbar = () => {
  const { user, setUser } = useUser();
  const [value, setValue] = React.useState(0);
  const handleLogoutClick = () => {
    storageRemove(STORAGE_KEY_USER);
    setUser(null);
  };

  const theme = createTheme({
    palette: {
      neutral: {
        main: "#dbbbf5",
        contrastText: "#fff",
      },
    },
  });

  function randomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <AppBar position="static" color="neutral">
          <Toolbar
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <NavLink to="/translation">
              <IconButton>
                <img src={LogoPng3} height={120} width={380} />
              </IconButton>
            </NavLink>

            {user !== null && (
              <>
                <IconButton sx={{ alignContent: borderRight, marginLeft: 40 }}>
                  {user !== null && (
                    <Typography sx={{ margin: 3 }}>{user.username}</Typography>
                  )}

                  <NavLink to="/profile">
                    <Avatar
                      sx={{ bgcolor: randomColor(), flexGrow: 1 }}
                    ></Avatar>
                  </NavLink>
                </IconButton>
                <Button variant="contained" onClick={handleLogoutClick}>
                  <Link to="/"> </Link>
                  Log Out
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
export default Navbar;
