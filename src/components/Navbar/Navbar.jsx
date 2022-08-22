import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
const Navbar = () => {
  const { user } = useUser();

  return (
    <nav>
      <ul>
        <div>Translations</div>
      </ul>
      {user !== null && (
        <ul>
          <div>
            <NavLink to="/translation">Translation</NavLink>
          </div>
          <div>
            <NavLink to="/profile">Profile</NavLink>
          </div>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
