import { createContext, useContext, useState } from "react";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { storageRead } from "../utils/storage";
//Context - User
//ContextProvider - PRovide to components
//      -value: State

//Context -> exposing context
const UserContext = createContext();
export const useUser = () => {
  return useContext(UserContext); //{user, setUser}
};

//provider  -> managing state
const UserProvider = (props) => {
  //magic string/numbers
  const [user, setUser] = useState(storageRead(STORAGE_KEY_USER));

  const state = {
    user,
    setUser,
  };
  return (
    <UserContext.Provider value={state}>{props.children}</UserContext.Provider>
  );
};
export default UserProvider;
