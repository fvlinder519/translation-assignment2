import LoginForm from "../components/Login/LoginForm";
import NavbarLogin from "../components/Navbar/NavbarLogin";
import * as React from "react";
import Box from "@mui/material/Box";
const Login = () => {
  return (
    <>
      <NavbarLogin />

      <LoginForm />
    </>
  );
};
export default Login;
