import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import axios from "../config/axios.js";

const TestingPage = () => {
  const { user } = useContext(UserContext);
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [backgroundImageFile, setBackgroundImageFile] = useState(null);

  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    user && console.log("logged user test==>", user);
  }, [user]);

  const handleProfileImageUpload = async () => {
    if (!profileImageFile) {
      alert("Please select a profile image file.");
      return;
    }

    const formData = new FormData();
    formData.append("profileImage", profileImageFile);

    try {
      const response = await axios.put(
        `${baseURL}/users/update-profile-pic/${user._id}`,
        formData
      );
      console.log("Profile image uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading profile image:", error);
    }
  };

  const handleBackgroundImageUpload = async () => {
    if (!backgroundImageFile) {
      alert("Please select a background image file.");
      return;
    }

    const formData = new FormData();
    formData.append("profileBackground", backgroundImageFile);

    try {
      const response = await axios.put(
        `${baseURL}/users/update-profile-back/${user._id}`,
        formData
      );
      console.log("Profile image uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading profile image:", error);
    }
  };

  return (
    <>
      <div>
        <input
          type="file"
          onChange={(e) => {
            setProfileImageFile(e.target.files[0]);
          }}
        />
        <button onClick={handleProfileImageUpload}>Upload profile Image</button>
      </div>
      <div>
        <input
          type="file"
          onChange={(e) => {
            setBackgroundImageFile(e.target.files[0]);
          }}
        />
        <button onClick={handleBackgroundImageUpload}>
          Upload background Image
        </button>
      </div>
    </>
  );
};

export default TestingPage;
