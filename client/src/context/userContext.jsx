import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "../config/axios.js";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState();
  const [validationErrors, setValidationErrors] = useState(null);
  const [response, setResponse] = useState(true);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(true);
  const [forgotPassword, setForgotPasswsord] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [newUser, setNewUser] = useState();
  const [users, setUsers] = useState([]);
  const [connections, setConnections] = useState([])
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
    setResponse(false)
    try {
      const response = await axios.post(baseURL + "/users/signin", body);

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      }

      localStorage.setItem("token", response.data.token);
      const userRole = response.data.user.role;
      
      if(response.data.success){
        setResponse(true);
        if (userRole === "artist") {
          navigate("/homeArtist");
      } else {
          navigate("/E");
        
      }
      e.target.reset();
      setEmail("");
      setPassword("");
      setUser(response.data.user);
      setValidationErrors(null);
      console.log(response.data.success)

      };

     
   
    } catch (error) {
      setResponse(true)
      if (Array.isArray(error.response?.data?.message)) {
        setValidationErrors(error.response?.data?.message);
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

  //fetching all userszzzz

  const fetchUsers = async () => {
    try {
      const response = await axios.get(baseURL + "/users/all-the-users");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  //Send-cancel connection request
  const sendOrCancelRequest = async (senderId, receiverId) => {
    const body = {
      senderId,
      receiverId,
    };
    setResponse(false);
    try {
      const response = await axios.post(
        baseURL + `/users/send-connection-request`,
        body
      );

      if (response.data.success) {
        setResponse(true);
        setUser(response.data.sender);
      }

      console.log("===> add connetion", response.data);
    } catch (error) {
      setResponse(true);
      console.log(error);
    }
  };

  //Accept connection request
  const acceptRequest = async (receiverId, senderId) => {
    const body = {
      receiverId,
      senderId,
    };
    setResponse(false);
    try {
      const response = await axios.post(
        baseURL + `/users/accept-connection-request`,
        body
      );

      if (response.data.success) {
        setResponse(true);
        setUser(response.data.receiver);
      }

      console.log("===> accept connetion", response.data);
    } catch (error) {
      setResponse(true);

      console.log(error);
    }
  };

  //Reject connection request
  const rejectRequest = async (receiverId, senderId) => {
    const body = {
      receiverId,
      senderId,
    };
    setResponse(false);
    try {
      const response = await axios.post(
        baseURL + `/users/reject-connection-request`,
        body
      );
      if (response.data.success) {
        setResponse(true);
        setUser(response.data.receiver);
      }

      console.log("===> reject connetion", response.data);
    } catch (error) {
      setResponse(true);
      console.log(error);
    }
  };

  //Delete connection
  const deleteConnection = async (userId, connectionId) => {
    const body = {
      userId,
      connectionId,
    };
    setResponse(false);
    try {
      const response = await axios.post(
        baseURL + `/users/delete-connection`,
        body
      );
      if (response.data.success) {
        setResponse(true);
        setUser(response.data.user);
      }

      console.log("===> delete connetion", response.data);
    } catch (error) {
      setResponse(true);
      console.log(error);
    }
  };


////log out
const logout = () => {
  localStorage.removeItem("token");
  setUser(null)
  navigate("/");
};

  return (
    <UserContext.Provider
      value={{
        users,
        userRole,
        validationErrors,
        response,
        rememberMe,
        email,
        password,
        loading,
        showPassword,
        forgotPassword,
        newUser,
        user,
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
        sendOrCancelRequest,
        acceptRequest,
        rejectRequest,
        deleteConnection,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
