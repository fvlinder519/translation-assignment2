import ProfileActions from "../components/Profile/ProfileActions";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";

const Profile = () => {
  //Praent of ProfileHeader and passing down information to child
  const { user } = useUser();

  return (
    <>
      <h1>Profile</h1>
      <ProfileHeader username={user.username} />
      <ProfileActions />
      <ProfileTranslationHistory translations={user.translations} />
    </>
  );
};
export default withAuth(Profile); //Protecting route
