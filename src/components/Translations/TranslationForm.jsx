import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { useUser } from "../../context/UserContext";
import { useState } from "react";
import { addTranslation } from "../../api/translateApi";
import { storageSave } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import "../../styles/styles.css";
import Divider from "@mui/material/Divider";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

<Button variant="contained" sx={{ marginLeft: 4, marginTop: 1 }} type="submit">
  Translate
</Button>;

const commonStyles = {
  bgcolor: "background.paper",
  border: 1,
  width: "45rem",
  height: "15rem",
};

const TranslationForm = ({ onTranslate }) => {
  const { register, handleSubmit } = useForm();

  const [translationText, setTranslaionText] = useState("");
  const [setFormInputValue] = useState("");

  const { user, setUser } = useUser();
  const onSubmit = async ({ translateText }) => {
    if (!translateText) {
      alert("Write a text first");
    } else {
      onTranslate(translateText);
    }
    //posting//sending translationtext to API
    const [error, updatedUser] = await addTranslation(user, translateText);

    if (error !== null) {
      return;
    }

    //everythin gto lowercase
    translateText = translateText.toLowerCase();
    let translationArray = translateText.split("");

    if (!translateText.match(/^[a-zA-Z\s]*$/)) {
      setTranslaionText("");
      alert("Not allowed with spesial characters");
    } else {
      //saving data in storage after succsessfull inputs
      storageSave(STORAGE_KEY_USER, updatedUser);
      setUser(updatedUser);
      console.log(error);
      console.log(updatedUser);

      //setting translation text to emojies by looping through the decostructed array and reputting emojies
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
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        {...register("translateText")}
        className="inputRounded"
        placeholder="Translation text"
        sx={{
          borderRadius: 4,
          marginBottom: 4,
          marginTop: 4,
          font: 5,
          width: "30%",
          fontFamily: "Sanchez",

          "&:hover": {
            backgroundColor: "transparent",
            borderRadius: 8.5,
            borderColor: "#0096c7",
          },
        }}
        InputProps={{
          startAdornment: (
            <KeyboardIcon sx={{ marginRight: 3 }}>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </KeyboardIcon>
          ),

          endAdornment: (
            <IconButton variant="contained" type="submit" position="start">
              <ArrowCircleRightIcon
                sx={{
                  color: "#f4a261",
                  fontSize: "50px",
                  fontFamily: "Sanchez",
                }}
              />
            </IconButton>
          ),
        }}
      ></TextField>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            ...commonStyles,
            width: "60%",
            height: "30%",
            bgcolor: "background.paper",
            borderBottom: 10,
            borderColor: "#53a2be",
            backgroundColor: "white",
            position: "fixed",
            borderRadius: 4,
            boxShadow: 2,
          }}
        >
          <Box sx={{ width: 1, marginTop: 3 }}>{translationText}</Box>
        </Box>
      </Box>
    </form>
  );
};
export default TranslationForm;
