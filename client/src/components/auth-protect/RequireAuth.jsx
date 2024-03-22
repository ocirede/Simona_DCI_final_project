import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("sign-in");
  }

  return children;
};

export default RequireAuth;
