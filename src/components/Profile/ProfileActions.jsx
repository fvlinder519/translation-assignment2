import Button from "@mui/material/Button";

import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import ProfileTranslationHistory from "./ProfileTranslationHistory";

import { useUser } from "../../context/UserContext";
import { translationHistoryDelete } from "../../api/translateApi";
import { storageSave } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKeys";

const ProfileActions = ({ logout }) => {
  const { user, setUser } = useUser();

  const handleLogoutClick = () => {
    //Send event to parent (child should not handle events)
    logout();
  };

  //Deleting the translations and posting back to API
  const handleClearHistoryClick = async () => {
    const [clearError] = await translationHistoryDelete(user.id);
    if (clearError !== null) {
      return;
    }
    const updatedUSer = {
      ...user,
      translations: [],
    };
    //Updating and saving storage
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
            color: "#0096c7",
            font: 2,
            border: 2,
            fontFamily: "Sanchez",
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
