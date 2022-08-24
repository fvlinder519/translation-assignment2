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
import "../../styles/styles.css";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material";
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
  const [formInputValue, setFormInputValue] = useState("");

  const { user, setUser } = useUser();
  const onSubmit = async ({ translateText }) => {
    console.log(translateText);

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
    //saving data in storage
    storageSave(STORAGE_KEY_USER, updatedUser);
    setUser(updatedUser);
    console.log(error);
    console.log(updatedUser);

    setFormInputValue("");
    translateText = translateText.toLowerCase();
    let translationArray = translateText.split("");

    //setting translation text to emojies by looping through the decostructed array and reputting emojies
    setTranslaionText(
      translationArray.map((letter, idx) => {
        if (!letter.match(/^[a-zA-Z\s]*$/)) {
          alert(
            "Invalid character! Only English alphabet letters and spaces are allowed!"
          );
        } else {
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
        }
      })
    );
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
          fontStyle: "Love Ya Like A Sister",
          width: "30%",

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
                sx={{ color: "#0096c7", fontSize: "50px" }}
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
            borderColor: "#0096c7",
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
