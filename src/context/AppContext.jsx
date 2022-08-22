import UserProvider from "./UserContext";

const AppConext = (props) => {
  return <UserProvider>{props.children}</UserProvider>;
};

export default AppConext;
