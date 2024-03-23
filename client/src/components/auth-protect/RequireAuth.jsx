import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  console.log("protected", user);

  return user ? (
    children
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} replace />
  );
};

export default RequireAuth;

/* 
When you are reading this comment you are trying to fix this piece of shit
and you will realized what a terrible mistake that was,
please increment the following counter
to the next friend that will try to fix it:

hours wasted = 3
*/
