import { useForm } from "react-hook-form";
import LoginIcon from "@mui/icons-material/Login";
import TextField from "@mui/material/TextField";
import { Box, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/userApi";
import { useState, useEffect } from "react";
import { storageSave } from "../../utils/storage";
import { useUser } from "../../context/UserContext";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { TextFields } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import { NavLink } from "react-router-dom";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import "../../styles/styles.css";
import { styled } from "@mui/material/styles";
import LogoPng2 from "../../images/catLogInPic.png";
import Paper from "@mui/material";
import Divider from "@mui/material/Divider";
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
        <Box sx={{ padding: 3, background: "#dbbbf5" }}>
          <img src={LogoPng2} height={"80%"} width={"80%"} />
        </Box>

        <Box
          sx={{
            width: "60%",
            height: 170,
            bgcolor: "background.paper",
            borderBottom: 10,
            borderColor: "#f4a261",
            backgroundColor: "white",
            position: "fixed",
            mt: "-4%",
            ml: "25%",
            borderRadius: 4,
            boxShadow: 3,
          }}
        >
          <TextField
            id="usernameInput"
            type="text"
            required
            variant="outlined"
            placeholder="Enter Username"
            className="inputRounded"
            {...register("username", usernameConfig)}
            sx={{
              position: "fixed",
              mt: "4%",
              width: "40%",
              ml: "-20%",
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
                  <SendIcon sx={{ color: "#f4a261" }} />
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
