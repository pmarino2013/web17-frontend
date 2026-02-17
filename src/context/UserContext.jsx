import { createContext } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const user = {
    name: "Pablo",
    email: " ",
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
