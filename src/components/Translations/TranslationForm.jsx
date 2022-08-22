import { Input, Link } from "@mui/material";
import Button from "@mui/material/Button";
import Navbar from "../Navbar/Navbar";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { useUser } from "../../context/UserContext";
import { useState } from "react";
const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  width: "45rem",
  height: "15rem",
};

const TranslationForm = ({ onTranslate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [translationText, setTranslaionText] = useState("");

  const { user } = useUser();

  const onSubmit = ({ translateText }) => {
    console.log(translateText);
    if (!translateText) {
      alert("Write a text first");
    } else {
      onTranslate(translateText);
    }
    setTranslaionText(translateText);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="outlined-basic"
        label="Translation text"
        variant="outlined"
        {...register("translateText")}
      ></TextField>

      <Button
        variant="contained"
        sx={{ marginLeft: 4, marginTop: 1 }}
        type="submit"
      >
        Translate
      </Button>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ ...commonStyles, borderRadius: 1 }}> {translationText}</Box>
        //change to emoji afterwards
      </Box>
    </form>
  );
};
export default TranslationForm;
