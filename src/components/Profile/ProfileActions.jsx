import { Input, Link } from "@mui/material";
import Button from "@mui/material/Button";
import Navbar from "../Navbar/Navbar";

import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ProfileTranslationHistory from "./ProfileTranslationHistory";

import { useUser } from "../../context/UserContext";
import { translationHistoryDelete } from "../../api/translateApi";
import { storageSave } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  width: "45rem",
  height: "15rem",
};

const ProfileActions = ({ logout }) => {
  const { user, setUser } = useUser();

  const handleLogoutClick = () => {
    //Send event to parent (child should not handle events)
    logout();
  };

  const handleClearHistoryClick = async () => {
    const [clearError] = await translationHistoryDelete(user.id);
    if (clearError !== null) {
      return;
    }
    const updatedUSer = {
      ...user,
      translations: [],
    };
    storageSave(STORAGE_KEY_USER, updatedUSer);
    setUser(updatedUSer);
  };

  return (
    <Box>
      <ProfileTranslationHistory translations={user.translations} />
      <div>
        <Button
          variant="outlined"
          onClick={handleClearHistoryClick}
          sx={{
            marginTop: -2,
            borderRadius: "20px",
            color: "#adb5bd",
            font: 2,
            border: 2,
          }}
          startIcon={<DeleteIcon />}
        >
          Delete Translations
        </Button>
      </div>
    </Box>
  );
};
export default ProfileActions;
