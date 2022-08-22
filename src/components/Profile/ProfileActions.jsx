import { Link } from "@mui/material";
import Button from "@mui/material/Button";
import Navbar from "../Navbar/Navbar";
const ProfileActions = ({ logout }) => {
  const handleLogoutClick = () => {
    //Send event to parent (child should not handle events)
    logout();
  };
  return (
    <ul>
      <div>
        <Link to="/translations">Translations</Link>
      </div>
      <div>
        <Button variant="contained">Clear History</Button>
      </div>
      <div>
        {/* <Button variant="contained" onClick={handleLogoutClick}>
          Log Out
        </Button> */}
      </div>
    </ul>
  );
};
export default ProfileActions;
