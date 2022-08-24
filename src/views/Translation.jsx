import TranslationForm from "../components/Translations/TranslationForm";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import Navbar from "../components/Navbar/Navbar";
const Translation = () => {
  const handleTranslateClicked = (translateText) => {
    console.log(translateText);
  };
  return (
    <>
      <Navbar />
      <h1
        style={{
          color: "#0096c7",
          fontFamily: "Love Ya Like A Sister",
          fontWeight: "bold",
          fontSize: 60,
        }}
      >
        Translation
      </h1>
      <TranslationForm onTranslate={handleTranslateClicked} />
    </>
  );
};
export default withAuth(Translation); //Protecting route
