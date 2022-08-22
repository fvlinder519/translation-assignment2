import { addTranslation } from "../api/translateApi";
import TranslationForm from "../components/Translations/TranslationForm";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";

const Translation = () => {
  const { user } = useUser();
  const handleTranslateClicked = async (translateText) => {
    console.log(translateText);
    const [error, result] = await addTranslation(user, translateText);
    console.log(error);
    console.log(result);
  };
  return (
    <>
      <h1>Translation</h1>

      <TranslationForm onTranslate={handleTranslateClicked} />
    </>
  );
};
export default withAuth(Translation); //Protecting route
