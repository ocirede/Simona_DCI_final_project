import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState();

  //Register backround handling
  const userRoleChoice = (role) => {
    setUserRole(role);
    //console.log("User role from context=>>", userRole);
  };

  return (
    <UserContext.Provider value={{ userRole, setUserRole, userRoleChoice }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
