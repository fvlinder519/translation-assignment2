import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";

import Box from "@mui/material/Box";

const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  border: 1,
  width: "45rem",
  height: "15rem",
};

const ProfileTranslationHistory = ({ translations }) => {
  const items = translations.slice(-10);

  const translationList = items.map((translation, idx) => (
    <ProfileTranslationHistoryItem
      key={idx + "-Xz"}
      translation={translation}
    />
  ));

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            ...commonStyles,
            borderRadius: 1,
            paddingBottom: 60,
            borderColor: "grey.500",
            boxShadow: 3,
          }}
        >
          {translationList}
        </Box>
      </Box>
    </div>
  );
};
export default ProfileTranslationHistory;
