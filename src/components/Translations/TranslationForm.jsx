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

//array for translation characters. Maps 1:1 to image paths (e.g. for input b we want b.png)

const TranslationForm = ({ onTranslate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [translationText, setTranslaionText] = useState("");
  const [formInputValue, setFormInputValue] = useState("");

  const [imagePaths, setImagePaths] = useState([]);
  const { user, setUser } = useUser();
  let [letterArray, setLetterArray] = useState([]);
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
    setImagePaths([]);
    //setTranslaionText(translateText);
    let translationArray = translateText.split("");
    setTranslaionText(
      translationArray.map((letter) => (
        <img
          src={require(`../../assets/individial_signs/${letter}.png`)}
          alt={letter}
        />
      ))
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="outlined-basic"
        label="Translation text"
        variant="outlined"
        {...register("translateText")}
        InputProps={{
          startAdornment: <KeyboardIcon sx={{ marginRight: 3 }} />,
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
        {/* //change to emoji afterwards */}
      </Box>
    </form>
  );
};
export default TranslationForm;
