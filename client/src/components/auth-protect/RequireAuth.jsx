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
