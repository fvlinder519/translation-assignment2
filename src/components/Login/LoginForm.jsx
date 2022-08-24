import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Box, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/userApi";
import { useState, useEffect } from "react";
import { storageSave } from "../../utils/storage";
import { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import "../../styles/styles.css";
import LogoPng3 from "../../images/open-book.png";
import Divider from "@mui/material/Divider";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
let theme = createTheme();
theme = responsiveFontSizes(theme);

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};
theme.typography.h4 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};
const usernameConfig = {
  required: true,
  minLength: 2,
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user, setUser } = useUser();
  const navigate = useNavigate();
  //Local state
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  //Side effects
  useEffect(() => {
    //redirect should not be a childs job, We should move this up to Login.jsx
    //redirect to Profile
    if (user !== null) {
      navigate("translation"); // home here
    }
  }, [user, navigate]); //empty deps, only run once

  //Event handelra
  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, userResponse] = await loginUser(username);

    if (error !== null) {
      setApiError(error);
    }
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse);
      setUser(userResponse);
    }
    setLoading(false);
  };

  console.log(errors);

  //Error functions
  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }
    if (errors.username.type === "required") {
      return <span>Required</span>;
    }
    if (errors.username.type === "minLength") {
      return <span>Username is too short </span>;
    }
  })();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ padding: 3, background: "#acedff" }}>
          <Grid container spacing={2} columns={14}>
            <Grid item xs={7}>
              <Box
                component="img"
                src={LogoPng3}
                sx={{
                  position: "flex",
                  marginRight: "-50%",
                  height: "100%",
                  width: "55%",
                }}
              />
            </Grid>

            <Grid item xs={4}>
              <Grid container rowSpacing={1}>
                <Grid item xs={10}>
                  <ThemeProvider theme={theme}>
                    <Typography
                      variant="h3"
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
                  </ThemeProvider>
                </Grid>
                <ThemeProvider theme={theme}>
                  <Grid item xs={6}>
                    <Typography
                      variant="h4"
                      sx={{
                        position: "absolute",
                        marginBottom: "3%",
                        marginTop: "14%",
                        fontFamily: "Love Ya Like A Sister",
                        color: "white",
                      }}
                    >
                      Get started<br></br>
                    </Typography>
                  </Grid>
                </ThemeProvider>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            width: "60%",
            height: 200,
            bgcolor: "background.paper",
            borderBottom: 15,
            borderColor: "#f4a261",
            backgroundColor: "white",
            position: "flex",
            alignContent: "center",
            justifyContent: "center",
            align: "center",
            mt: "-4%",
            ml: "20%",
            borderRadius: 4,
            boxShadow: 3,
          }}
        >
          <TextField
            id="usernameInput"
            type="text"
            required
            variant="outlined"
            placeholder="Username"
            className="inputRounded"
            {...register("username", usernameConfig)}
            sx={{
              mt: "5%",
              width: "40%",
              alignContent: "center",
              justifyContent: "center",
              align: "center",
              position: "flex",
              fontFamily: "Love Ya Like A Sister",
            }}
            InputProps={{
              startAdornment: (
                <KeyboardIcon sx={{ marginRight: 3 }}>
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                </KeyboardIcon>
              ),

              endAdornment: (
                <IconButton
                  variant="contained"
                  type="submit"
                  disabled={loading}
                >
                  <ArrowCircleRightIcon
                    sx={{ color: "#f4a261", fontSize: "50px" }}
                  />
                </IconButton>
              ),
            }}
          />
          {loading && <p>Loading in...</p>}
          {apiError && <p>{apiError}</p>}

          <Box sx={{ color: "red" }}> {errorMessage}</Box>
        </Box>
      </form>
    </>
  );
};
export default LoginForm;
