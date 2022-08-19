import { useForm } from "react-hook-form";
import LoginIcon from "@mui/icons-material/Login";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../api/userApi";
import { useState, useEffect } from "react";
import { storageSave } from "../../utils/storage";

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

  //Local state
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  //Side effects
  useEffect(() => {
    if (user) {
      //redirect to Profile
    }
  }, []); //empty deps, only run once

  //Event handelra
  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, user] = await loginUser(username);
    if (error !== null) {
      setApiError(error);
    }
    if (user !== null) {
      storageSave("translations-user", user);
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
      <h2>Whats your name?</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="username"
            {...register("username", usernameConfig)}
          />
          {errorMessage}
        </fieldset>

        <Button variant="contained" type="submit" disabled={loading}>
          Continue
          <LoginIcon sx={{ paddingLeft: 2 }} />
        </Button>
        {loading && <p>Loading in...</p>}
        {apiError && <p>{apiError}</p>}
      </form>
    </>
  );
};
export default LoginForm;
