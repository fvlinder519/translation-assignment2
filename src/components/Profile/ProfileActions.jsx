import { Link } from "@mui/material";
import Button from "@mui/material/Button";

const ProfileActions = () => {
  return (
    <ul>
      <div>
        <Link to="/translations">Orders</Link>
      </div>
      <div>
        <Button variant="contained">Clear History</Button>
      </div>
      <div>
        <Button variant="contained">Log Out</Button>
      </div>
    </ul>
  );
};
export default ProfileActions;
