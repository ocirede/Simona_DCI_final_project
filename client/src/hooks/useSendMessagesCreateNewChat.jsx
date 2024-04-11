import { useContext, useEffect, useState } from "react";
import axios from "../config/axios.js";
import { UserContext } from "../context/userContext.jsx";
import { useSocketContext } from "../context/socketContext.jsx";

const baseURL = import.meta.env.VITE_BASE_URL;

export function useSendMessage(connection) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [uploadImage, setUploadImage] = useState();
  const [showAlert, setShowAlert] = useState(false);
  // Function to send a message
  const sendMessage = async (connectionId) => {
    const formData = new FormData();
    formData.append("message", newMessage);
    formData.append("chatimage", uploadImage);

    try {
      if (!newMessage.trim()) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2500);
        return;
      }
      const response = await axios.post(
        `${baseURL}/messages/send/${connectionId}`,
        formData
      );
      setMessages((prev) => [...prev, response.data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    messages,
    sendMessage,
    newMessage,
    setNewMessage,
    uploadImage,
    setUploadImage,
    showAlert,
  };
}

export function useFetchMessages(connection) {
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [notifications, setNotifications] = useState([]);
  // Function to get messages of a specific chat
  const getMessages = async (contactId) => {
    try {
      const response = await axios.get(`${baseURL}/messages/get/${contactId}`);
      if (response.data) {
        setMessages(response.data);
        const allNotifications = [];
        response.data.forEach((message) => {
          const userNotifications = message.notifications.filter(
            (notif) => notif.receiverId === user?._id
          );
          allNotifications.push(...userNotifications);
        });
        setNotifications(allNotifications);
      }
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    if (connection) {
      const contactId = connection._id;
      getMessages(contactId);
    }
  }, [connection]);

  return {
    messages,
    setMessages,
    getMessages,
    notifications,
    setNotifications,
  };
}
