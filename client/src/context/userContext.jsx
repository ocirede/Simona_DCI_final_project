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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(true);
  const [forgotPassword, setForgotPasswsord] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [newUser, setNewUser] = useState();

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
    setValidationErrors(null);
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
      e.target.reset();
      setEmail("");
      setPassword("");
      setLoading(false);
      setUser(response.data.user);
      setValidationErrors(null);
    } catch (error) {
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

  // set true or false the checkbox
  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  //send a request to reset the password

  const requestForgotPasswordEmail = async (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.defaultValue,
    };
    try {
      const response = await axios.post(
        baseURL + "/users/changepassword",
        body
      );
      if (response.data.success) {
        console.log("we have sent you an email to reset you password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // reset-update password

  const resetPassword = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const reType = e.target.retype.value;

    if (reType !== password) {
      alert("password are not matching");
      return;
    }

    const body = {
      password: e.target.password.value,
    };

    console.log(body);
  };

  //Register backround handling
  const userRoleChoice = (role) => {
    setUserRole(role);
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
        localStorage.removeItem("userRegisterData");
        setNewUser(response.data.newUser);

        //console.log("New User==>>", response.data.newUser);
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

  //logged user
  const loggedUser = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const response = await axios.get(baseURL + `/users/loggeduser`);
        setUser(response.data.user);
        console.log("Logged user:", response.data.user);
      } catch (error) {
        console.error(error);
        localStorage.removeItem("token");
        setUser(null);
      }
    }
  };
  useEffect(() => {
    loggedUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userRole,
        validationErrors,
        response,
        responseSuccsess,
        rememberMe,
        email,
        password,
        loading,
        showPassword,
        forgotPassword,
        newUser,
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
        setShowPassword,
        setForgotPasswsord,
        requestForgotPasswordEmail,
        resetPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
