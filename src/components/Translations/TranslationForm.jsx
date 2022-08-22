import { Input, Link } from "@mui/material";
import Button from "@mui/material/Button";
import Navbar from "../Navbar/Navbar";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  width: "45rem",
  height: "15rem",
};

const TranslationForm = ({ translations }) => {
  return (
    <>
      <div>
        <TextField
          id="outlined-basic"
          label="Translation text"
          variant="outlined"
        />
      </div>
      <Button variant="contained" sx={{ margin: 4 }}>
        Translate
      </Button>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ ...commonStyles, borderRadius: 1 }} />
      </Box>
    </>
  );
};
export default TranslationForm;
