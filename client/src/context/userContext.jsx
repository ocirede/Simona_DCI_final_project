import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios.js";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState();
  const [validationErrors, setValidationErrors] = useState(null);
  const [response, setResponse] = useState(true);

  const navigate = useNavigate();

  const baseURL = import.meta.env.VITE_BASE_URL;

  //Register backround handling
  const userRoleChoice = (role) => {
    setUserRole(role);
    //console.log("User role from context=>>", userRole);
  };

  //Register user
  const registerUser = async (email, password, role, categories) => {
    setValidationErrors(null);
    setResponse(false);
    try {
      const response = await axios.post(baseURL + `/users/register`, {
        email,
        password,
        role,
        categories,
      });

      if (response.data.success) {
        setResponse(true);
        navigate("/sign-in");
        console.log("New User==>>", response.data.newUser);
      }
      setValidationErrors(null);
    } catch (error) {
      setResponse(true);
      console.error("Error", error);
      if (Array.isArray(error.response.data.message)) {
        setValidationErrors(error.response.data.message);
      } else {
        const error = [
          {
            message: error.response.data.message,
          },
        ];
        setValidationErrors(error);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        userRole,
        validationErrors,
        response,
        setUserRole,
        userRoleChoice,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
