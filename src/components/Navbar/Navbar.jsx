import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import LogoPng3 from "../../images/geography.png";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { borderRight } from "@mui/system";
import Grid from "@mui/material/Grid";
import { storageRemove } from "../../utils/storage";
import { Link } from "@mui/material";
const Navbar = () => {
  const { user, setUser } = useUser();
  const handleLogoutClick = () => {
    storageRemove(STORAGE_KEY_USER);
    setUser(null);
  };

  const theme = createTheme({
    palette: {
      neutral: {
        main: "#acedff",
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
                  <Grid container spacing={2} columns={14}>
                    <Grid item xs={7}>
                      <Box
                        component="img"
                        src={LogoPng3}
                        sx={{
                          position: "flex",
                          marginRight: "-50%",
                          height: "100%",
                          width: "50%",
                        }}
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <Grid container rowSpacing={1}>
                        <Grid item xs={10}>
                          <Typography
                            variant="h5"
                            sx={{
                              position: "absolute",
                              marginBottom: "3%",
                              marginTop: "10%",
                              fontFamily: "Love Ya Like A Sister",
                              color: "white",
                              paddingBottom: "1%",
                            }}
                          >
                            Lost in Translation <br></br>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </IconButton>
              </NavLink>
            </div>
            <Typography sx={{ flexGrow: 1 }}>
              {user !== null && (
                <>
                  <IconButton
                    edge="end"
                    sx={{ alignContent: borderRight, marginLeft: "20%" }}
                  >
                    <NavLink to="/profile">
                      <Avatar
                        sx={{
                          bgcolor: "#f4a261",
                          width: 65,
                          height: 65,
                          border: 4,
                          boxShadow: 2,
                          marginRight: "-3rem",
                          display: "flex",
                          alignContent: "center",
                          justifyContent: "center",
                          fontFamily: "Sanchez",
                          fontSize: "110%",
                        }}
                      >
                        {getFirstChar()}
                      </Avatar>
                      <Box
                        sx={{
                          borderRadius: 6,
                          bgcolor: "#f4a261",
                          display: "flex",
                          alignContent: "center",
                          justifyContent: "center",
                          paddingTop: 0.5,
                          paddingBottom: 0.5,
                          paddingLeft: 2,
                          paddingRight: 3,
                          marginTop: "-3rem",
                          marginLeft: "-6rem",
                          fontSize: "90%",
                          color: "white",
                          fontFamily: "Sanchez",
                        }}
                      >
                        {user.username}
                      </Box>
                    </NavLink>
                  </IconButton>
                  <Button
                    variant="outlined"
                    onClick={handleLogoutClick}
                    sx={{
                      alignContent: borderRight,
                      marginLeft: "10%",
                      borderRadius: "20px",
                      borderColor: "white",
                      color: "white",
                      font: 2,
                      border: 2,
                      marginTop: "1rem",
                      fontWeight: "bold",
                      bgcolor: "#0096c7",
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
