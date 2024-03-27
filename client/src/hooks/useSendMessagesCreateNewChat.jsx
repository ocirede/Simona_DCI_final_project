import { useEffect, useState } from "react";
import axios from "../config/axios.js";

const baseURL = import.meta.env.VITE_BASE_URL;

export function useSendMessage(connection) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Function to send a message
  const sendMessage = async (connectionId) => {
    const body = {
      message: newMessage,
    };
    try {
      const response = await axios.post(
        `${baseURL}/messages/send/${connectionId}`,
        body
      );
      setMessages((prev) => [...prev, response.data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return { messages, sendMessage, newMessage, setNewMessage};
}

export function useFetchMessages(connection) {
  const [messages, setMessages] = useState([]);

  // Function to get messages of a specific chat
  const getMessages = async (contactId) => {
    try {
      const response = await axios.get(`${baseURL}/messages/get/${contactId}`);
      setMessages(response.data);
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

  return { messages };
}
