import { Input, Link } from "@mui/material";
import Button from "@mui/material/Button";
import Navbar from "../Navbar/Navbar";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  width: "45rem",
  height: "15rem",
};

const TranslationForm = ({ translations }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="outlined-basic"
        label="Translation text"
        variant="outlined"
        {...register("OrderNotes")}
      ></TextField>

      <Button variant="contained" sx={{ marginLeft: 4, marginTop: 1 }}>
        Translate
      </Button>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ ...commonStyles, borderRadius: 1 }} />
      </Box>
    </form>
  );
};
export default TranslationForm;
