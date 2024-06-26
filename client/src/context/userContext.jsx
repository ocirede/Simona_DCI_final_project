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
  const [resetPassword, setResetPassword] = useState(false);
  const [newUser, setNewUser] = useState();
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  const [aboutText, setAboutText] = useState("");

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
    setResponse(false);
    try {
      const response = await axios.post(baseURL + "/users/signin", body);

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      }

      localStorage.setItem("token", response.data.token);
      const userRole = response.data.user.role;

      if (response.data.success) {
        setResponse(true);
        if (userRole === "artist") {
          window.location.replace("/homeArtist");
        } else {
          window.location.replace("/E");
        }
        e.target.reset();
        setEmail("");
        setPassword("");
        setUser(response.data.user);
        setValidationErrors(null);
      }
    } catch (error) {
      setResponse(true);
      if (Array.isArray(error.response?.data?.message)) {
        setValidationErrors(error.response?.data?.message);
      } else {
        const error = [
          {
            message: error.response?.data?.message,
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

        setResetPassword(true);
        setTimeout(() => {
          setResetPassword(false);
        }, 2000);
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

    try {
      const response = await axios.post(
        baseURL + `/users/send-connection-request`,
        body
      );

      if (response.data.success) {
        setUser(response.data.sender);
      }

      //console.log("===> add connetion", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Accept connection request
  const acceptRequest = async (receiverId, senderId) => {
    const body = {
      receiverId,
      senderId,
    };

    try {
      const response = await axios.post(
        baseURL + `/users/accept-connection-request`,
        body
      );

      if (response.data.success) {
        setUser(response.data.receiver);
      }

      console.log("===> accept connetion", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Reject connection request
  const rejectRequest = async (receiverId, senderId) => {
    const body = {
      receiverId,
      senderId,
    };

    try {
      const response = await axios.post(
        baseURL + `/users/reject-connection-request`,
        body
      );
      if (response.data.success) {
        setUser(response.data.receiver);
      }

      console.log("===> reject connetion", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Delete connection
  const deleteConnection = async (userId, connectionId) => {
    const body = {
      userId,
      connectionId,
    };

    try {
      const response = await axios.post(
        baseURL + `/users/delete-connection`,
        body
      );
      if (response.data.success) {
        setUser(response.data.user);
      }

      console.log("===> delete connetion", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  ////log out
  const logout = () => {
    localStorage.removeItem("token");

    setUser(null);
    navigate("/");
  };

  //Update user(everything except profile image and background)
  const updateUser = async (userId, updatedData) => {
    try {
      const response = await axios.put(
        baseURL + `/users/update/${userId}`,
        updatedData
      );
      if (response.data.success) {
        setUser(response.data.user);
        console.log("User updated!");
      }
    } catch (error) {
      console.error("Error updating the user", error);
    }
  };

  //Update profile pic
  const updateProfileImage = async (userId, formData) => {
    /* Note ==> The formData should have this structure:
    const formData = new FormData();
    formData.append("profileImage", profileImageFile);
    
    and the input:
     <input
          type="file"
          onChange={(e) => {
            setProfileImageFile(e.target.files[0]);
          }}
        />
    
    */
    try {
      const response = await axios.put(
        baseURL + `/users/update-profile-pic/${userId}`,
        formData
      );
      if (response.data.success) {
        setUser(response.data.user);
        console.log("Profile image updated!");
      }
    } catch (error) {
      console.error("Error updating the profile pic", error);
    }
  };

  //Update profile background
  const updateProfileBackground = async (userId, formData) => {
    /* Note ==> The formData should have this structure:
    const formData = new FormData();
    formData.append("profileBackground", backgroundImageFile);;
    
    and the input:
     <input
          type="file"
          onChange={(e) => {
            setBackgroundImageFile(e.target.files[0]);
          }}
        />
    
    */
    try {
      const response = await axios.put(
        baseURL + `/users/update-profile-back/${userId}`,
        formData
      );
      if (response.data.success) {
        setUser(response.data.user);
        console.log("Profile background updated!");
      }
    } catch (error) {
      console.error("Error updating the profile back", error);
    }
  };

  // Profile Page functions
  const saveAboutText = async () => {
    try {
      await axios.post(baseURL + `/profile/user/${user.id}/about`, {
        about: aboutText,
      });
    } catch (error) {
      console.error("Error saving about text:", error);
    }
  };

  const addFavOffer = async (offerId, userId) => {
    try {
      const response = await axios.post(
        baseURL + `/users/add-fav-offer/${offerId}`,
        { userId }
      );
      if (response.data.success) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error("Error adding to fav offers", error);
    }
  };

  // Find user by ID
  const getUserById = async (userId) => {
    try {
      const response = await axios.get(
        baseURL + `/users/single-user/${userId}`
      );
      const userFound = response.data.user;
      return userFound;
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      return null;
    }
  };

  //upload Portfolio Image
  const uploadPortfolioImage = async (userId, fileData) => {
    try {
      const response = await axios.post(
        baseURL + `/users/upload-port-img/${userId}`,
        fileData
      );
      if (response.data.success) {
        setUser(response.data.user);
        // console.log("Upload image user", response.data.user);
      }
    } catch (error) {
      console.error("Error upploading the image", error);
    }
  };

  //delete Portfolio Image
  const deletePortfolioImage = async (userId, imageId) => {
    try {
      const response = await axios.delete(
        baseURL + `/users/delete-port-img/${userId}`,
        { data: { imageId } }
      );
      if (response.data.success) {
        setUser(response.data.user);
        //console.log("delete image user", response.data.user);
      }
    } catch (error) {
      console.error("Error deleting the image", error);
    }
  };

  //Add new language
  //Language levels should be stricted to:
  //Beginner
  //Elementary
  //Intermediate
  //Advanced
  //Fluent
  const addNewLanguage = async (userId, language, level) => {
    const body = { language, level };
    try {
      const response = await axios.post(
        baseURL + `/users/add-language/${userId}`,
        body
      );
      if (response.data.success) {
        setUser(response.data.user);
        // console.log("Upload image user", response.data.user);
      }
    } catch (error) {
      console.error("Error adding the new language", error);
    }
  };

  //delete language
  const deleteLanguage = async (userId, languageId) => {
    try {
      const response = await axios.delete(
        baseURL + `/users/delete-language/${userId}`,
        { data: { languageId } }
      );
      if (response.data.success) {
        setUser(response.data.user);
        //console.log("delete image user", response.data.user);
      }
    } catch (error) {
      console.error("Error deleting the language", error);
    }
  };

  // Add Interests
  const addInterest = async (userId, interest) => {
    const body = { interest };
    try {
      const response = await axios.post(
        baseURL + `/profile/interests/${userId}`,
        body
      );
      if (response.data.success) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error("Error adding interest:", error);
      setMessage("Failed to add interest. Please try again.");
    }
  };
  // Delete Interests
  const deleteInterest = async (userId, interestId) => {
    try {
      const response = await axios.delete(
        baseURL + `/profile/delete-interests/${userId}`,
        { data: { interestId } }
      );
      if (response.data.success) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error("Error deleting the interest", error);
    }
  };

  // Add Personality
  const addPersonality = async (userId, personality) => {
    const body = { personality };
    try {
      const response = await axios.post(
        baseURL + `/profile/personality/${userId}`,
        body
      );
      if (response.data.success) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error("Error adding personality:", error);
      setMessage("Failed to add personality. Please try again.");
    }
  };
  // Delete Personality
  const deletePersonality = async (userId, personalityId) => {
    try {
      const response = await axios.delete(
        baseURL + `/profile/delete-personality/${userId}`,
        { data: { personalityId } }
      );
      if (response.data.success) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error("Error deleting the personality", error);
    }
  };

  /**
   * For the brave souls who get this far: You are the chosen ones,
   * the valiant knights of programming, without rest,
   * writing our most amazing code. To you, true saviors, kings and heroes,
   * I say this: never gonna give you up, never gonna let you down,
   * Never gonna make you cry, never gonna say goodbye.
   * Never gonna hurt you.
   */

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
        resetPassword,
        setUser,
        setUserRole,
        userRoleChoice,
        registerUser,
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
        updateUser,
        updateProfileImage,
        updateProfileBackground,
        saveAboutText,
        addFavOffer,
        getUserById,
        loggedUser,
        uploadPortfolioImage,
        deletePortfolioImage,
        addNewLanguage,
        deleteLanguage,
        addInterest,
        deleteInterest,
        addPersonality,
        deletePersonality,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
