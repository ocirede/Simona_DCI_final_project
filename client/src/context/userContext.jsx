import { createContext, useEffect, useState } from "react";
import axios from "../config/axios.js";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState();
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberme, setRememberMe] = useState(false);

  const baseURL = import.meta.env.VITE_BASE_URL;

  // fetching email-remember checkbox
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

      if (rememberme) {
        localStorage.setItem("rememberedEmail", email);
      }

      localStorage.setItem("token", response.data.token);
      e.target.reset();
      setEmail("");
      setPassword("");
      setUser(response.data.user);
      setErrors(null);
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

  return (
    <UserContext.Provider
      value={{
        userRole,
        rememberme,
        errors,
        email,
        password,
        setUserRole,
        userRoleChoice,
        authenticationHandler,
        handleRememberMeChange,
        setPassword,
        setEmail,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
