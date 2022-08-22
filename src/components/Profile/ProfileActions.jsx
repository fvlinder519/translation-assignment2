import { Input, Link } from "@mui/material";
import Button from "@mui/material/Button";
import Navbar from "../Navbar/Navbar";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ProfileTranslationHistory from "./ProfileTranslationHistory";

import { useUser } from "../../context/UserContext";

const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  width: "45rem",
  height: "15rem",
};

const ProfileActions = ({ logout }) => {
  const { user } = useUser();
  const handleLogoutClick = () => {
    //Send event to parent (child should not handle events)
    logout();
  };

  return (
    <ul>
      <div>
        <Link to="/translations">Translations</Link>
      </div>
      <ProfileTranslationHistory translations={user.translations} />
      <div>
        <Button variant="contained">Clear History</Button>
      </div>
    </ul>
  );
};
export default ProfileActions;
