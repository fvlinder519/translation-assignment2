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
import { useTheme } from "@emotion/react";
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
  const getFirstChar = () => {
    let charArray = user.username.split("");
    return charArray[0];
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" color="neutral">
          <Toolbar>
            <div
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <NavLink to="/translation">
                <IconButton>
                  <img src={LogoPng2} height={120} width={380} />
                </IconButton>
              </NavLink>
            </div>
            <Typography sx={{ flexGrow: 1 }}>
              {user !== null && (
                <>
                  <IconButton
                    edge="end"
                    sx={{ alignContent: borderRight, marginLeft: 40 }}
                  >
                    <NavLink to="/profile">
                      <Avatar
                        sx={{
                          flexGrow: 1,
                          bgcolor: "#f4a261",
                          width: 65,
                          height: 65,
                          border: 4,
                          boxShadow: 2,
                        }}
                      >
                        {getFirstChar()}
                      </Avatar>
                    </NavLink>
                  </IconButton>
                  <Button
                    variant="outlined"
                    onClick={handleLogoutClick}
                    sx={{
                      alignContent: borderRight,
                      marginLeft: 4,
                      borderRadius: "20px",
                      borderColor: "white",
                      color: "white",
                      font: 2,
                      border: 2,
                    }}
                    edge="end"
                  >
                    <Link to="/"></Link>
                    Log Out
                  </Button>
                </>
              )}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
export default Navbar;
