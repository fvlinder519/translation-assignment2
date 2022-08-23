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
            marginTop: "3%",
            font: 2,
            border: 2,
            borderBottom: 10,
            borderColor: "#f4a261",
            backgroundColor: "white",
            position: "fixed",
            borderRadius: 4,
            boxShadow: 2,
            paddingBottom: 60,
            marginBottom: 15,
          }}
        >
          {translationList}
        </Box>
      </Box>
    </div>
  );
};
export default ProfileTranslationHistory;
