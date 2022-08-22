import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";

import Box from "@mui/material/Box";
const commonStyles = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  width: "45rem",
  height: "15rem",
};
const ProfileTranslationHistory = ({ translations }) => {
  const translationList = translations.map((translation, idx) => (
    <ProfileTranslationHistoryItem
      key={idx + "-Xz"}
      translation={translation}
    />
  ));
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ ...commonStyles, borderRadius: 1 }}>{translationList}</Box>
      </Box>
    </div>
  );
};
export default ProfileTranslationHistory;
