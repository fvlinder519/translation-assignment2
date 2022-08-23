import { IconButton, Input, Link } from "@mui/material";
import Button from "@mui/material/Button";
import Navbar from "../Navbar/Navbar";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { useUser } from "../../context/UserContext";
import { useState } from "react";
import { addTranslation } from "../../api/translateApi";
import { storageSave } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import SendIcon from "@mui/icons-material/Send";
import InputAdornment from "@mui/material/InputAdornment";
import KeyboardIcon from "@mui/icons-material/Keyboard";

import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material";
<Button variant="contained" sx={{ marginLeft: 4, marginTop: 1 }} type="submit">
  Translate
</Button>;

const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  width: "45rem",
  height: "15rem",
};

const TranslationForm = ({ onTranslate }) => {
  const { register, handleSubmit } = useForm();

  const [translationText, setTranslaionText] = useState("");
  const [formInputValue, setFormInputValue] = useState("");

  const { user, setUser } = useUser();
  const onSubmit = async ({ translateText }) => {
    console.log(translateText);

    if (!translateText) {
      alert("Write a text first");
    } else {
      onTranslate(translateText);
    }

    const [error, updatedUser] = await addTranslation(user, translateText);
    if (error !== null) {
      return;
    }

    storageSave(STORAGE_KEY_USER, updatedUser);
    setUser(updatedUser);
    console.log(error);
    console.log(updatedUser);

    setFormInputValue("");

    let translationArray = translateText.split("");

    setTranslaionText(
      translationArray.map((letter, idx) => {
        if (letter === " ") {
          return (
            <img
              src={require(`../../assets/individial_signs/empty.png`)}
              alt={letter}
              width="45px"
              height="45px"
              key={idx}
            ></img>
          );
        } else {
          return (
            <img
              src={require(`../../assets/individial_signs/${letter}.png`)}
              alt={letter}
              width="45px"
              height="45px"
              key={idx}
            ></img>
          );
        }
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="outlined-basic"
        label="Translation text"
        variant="outlined"
        {...register("translateText")}
        sx={{ borderRadius: 4, marginBottom: 4, marginTop: 4 }}
        InputProps={{
          startAdornment: (
            <KeyboardIcon sx={{ marginRight: 3 }}>
              {" "}
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </KeyboardIcon>
          ),

          endAdornment: (
            <IconButton variant="contained" type="submit" position="start">
              <SendIcon />
            </IconButton>
          ),
        }}
      ></TextField>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ ...commonStyles, borderRadius: 1 }}>
          <Box sx={{ width: 1 }}>{translationText}</Box>
        </Box>
      </Box>
    </form>
  );
};
export default TranslationForm;
