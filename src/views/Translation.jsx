import TranslationForm from "../components/Translations/TranslationForm";
import withAuth from "../hoc/withAuth";
const TRANSLATIONSIGNS = [{}];

const Translation = () => {
  const handleTranslateClicked = (translateText) => {
    console.log(translateText);
  };
  return (
    <>
      <h1>Translation</h1>

      <TranslationForm onTranslate={handleTranslateClicked} />
    </>
  );
};
export default withAuth(Translation); //Protecting route
