import { Link } from "@mui/material";
import Button from "@mui/material/Button";

const ProfileActions = () => {
  return (
    <ul>
      <li>
        <Link to="/translations">Orders</Link>
      </li>
      <li>
        <Button variant="contained">Clear History</Button>
      </li>
      <li>
        <Button variant="contained">Log Out</Button>
      </li>
    </ul>
  );
};
export default ProfileActions;
