import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "../config/axios.js";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState();
  const [validationErrors, setValidationErrors] = useState(null);
  const [response, setResponse] = useState(true);
  const [responseSuccsess, setResponseSuccsess] = useState();
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const baseURL = import.meta.env.VITE_BASE_URL;

  // fetching email-remember-checkbox
  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  //Sign-in function
  const authenticationHandler = async (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    try {
      const response = await axios.post(baseURL + "/users/signin", body);

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      }

      localStorage.setItem("token", response.data.token);
      e.target.reset();
      setEmail("");
      setPassword("");
      setLoading(false);
      setUser(response.data.user);
      setErrors(null);

      const userRole = response.data.user.role;

      if (userRole === "artist") {
        setTimeout(() => {
          navigate("/homeArtist");
        }, 1500);
      } else {
        setTimeout(() => {
          navigate("/E");
        }, 1500);
      }
    } catch (error) {
      setErrors(error.response.data?.message || "An error occurred");
    }
  };

  // set true or false the checkbox
  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

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
        setResponseSuccsess(response.data.success);
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
        responseSuccsess,
        rememberMe,
        errors,
        email,
        password,
        loading,
        setUserRole,
        userRoleChoice,
        registerUser,
        setUserRole,
        userRoleChoice,
        authenticationHandler,
        handleRememberMeChange,
        setPassword,
        setEmail,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
