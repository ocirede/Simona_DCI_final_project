import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }
  }, [user, navigate]);

  return user ? children : null;
};

export default RequireAuth;
