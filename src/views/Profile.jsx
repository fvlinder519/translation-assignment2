import { useEffect } from "react";
import { findUserById } from "../api/userApi";
import ProfileActions from "../components/Profile/ProfileActions";
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { storageRemove, storageSave } from "../utils/storage";
import Navbar from "../components/Navbar/Navbar";
const Profile = () => {
  //Parent of ProfileHeader and passing down information to child
  const { user, setUser } = useUser();

  useEffect(() => {
    const findUser = async () => {
      const [error, latestUser] = await findUserById(user.id);
      if (error === null) {
        storageSave(STORAGE_KEY_USER, latestUser);
        setUser(latestUser);
      }
    };
  }, [setUser, user.id]);

  const logout = () => {
    storageRemove(STORAGE_KEY_USER);
    setUser(null);
  };

  return (
    <>
      <Navbar />
      <h1
        style={{
          color: "#f4a261",
          fontFamily: "Love Ya Like A Sister",
          fontWeight: "bold",
          fontSize: 60,
        }}
      >
        Profile
      </h1>
      <ProfileActions />
      {user.translation !== undefined && (
        <ProfileTranslationHistory translations={user.translations} />
      )}
    </>
  );
};
export default withAuth(Profile); //Protecting route
