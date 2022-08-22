import { createContext, useContext, useState } from "react";

//Context -> exposing context
const UserContext = createContext();
export const useUSer = () => {
  return useContext(UserContext); //{user, setUser}
};

//provider  -> managing state
const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const state = {
    user,
    setUser,
  };
  return (
    <UserContext.Provider value={state}>{props.children}</UserContext.Provider>
  );
};
export default UserProvider;
