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

const ProfileActions = ({ logout }) => {
  const handleLogoutClick = () => {
    //Send event to parent (child should not handle events)
    logout();
  };
  return (
    <ul>
      <div>
        <Link to="/translations">Translations</Link>
      </div>

      <div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ ...commonStyles, borderRadius: 1 }} />
        </Box>
      </div>

      <div>
        <Button variant="contained">Clear History</Button>
      </div>
    </ul>
  );
};
export default ProfileActions;
