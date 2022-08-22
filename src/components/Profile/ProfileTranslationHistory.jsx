import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";

const ProfileTranslationHistory = ({ translations }) => {
  const translationList = translations.map((translation, idx) => (
    <ProfileTranslationHistoryItem
      key={idx + "-Xz"}
      translation={translation}
    />
  ));
  return (
    <section>
      <h5>Your Translations:</h5>
      <ul>{translationList} </ul>
    </section>
  );
};
export default ProfileTranslationHistory;
