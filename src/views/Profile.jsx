import ProfileActions from "../components/Profile/ProfileActions";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { storageRemove } from "../utils/storage";

const Profile = () => {
  //Praent of ProfileHeader and passing down information to child
  const { user, setUser } = useUser();

  const logout = () => {
    storageRemove(STORAGE_KEY_USER);
    setUser(null);
  };
  return (
    <>
      <h1>Profile</h1>
      <ProfileActions logout={logout} />
      {user.translation !== undefined && (
        <ProfileTranslationHistory translations={user.translations} />
      )}
    </>
  );
};
export default withAuth(Profile); //Protecting route
