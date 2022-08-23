import { addTranslation } from "../api/translateApi";
import TranslationForm from "../components/Translations/TranslationForm";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import Navbar from "../components/Navbar/Navbar";
const Translation = () => {
  const { user } = useUser();
  const handleTranslateClicked = (translateText) => {
    console.log(translateText);
  };
  return (
    <>
      {" "}
      <Navbar />
      <h1>Translation</h1>
      <TranslationForm onTranslate={handleTranslateClicked} />
    </>
  );
};
export default withAuth(Translation); //Protecting route
