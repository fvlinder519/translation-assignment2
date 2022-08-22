import TranslationForm from "../components/Translations/TranslationForm";
import withAuth from "../hoc/withAuth";
const TRANSLATIONSIGNS = [{}];

const Translation = () => {
  return (
    <>
      <h1>Translation</h1>
      <TranslationForm />
    </>
  );
};
export default withAuth(Translation); //Protecting route
