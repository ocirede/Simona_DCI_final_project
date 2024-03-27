import React, { useContext, useEffect, useState } from "react";
import axios from "../config/axios.js";
import { UserContext } from "../context/userContext.jsx";
const baseURL = import.meta.env.VITE_BASE_URL;

export default function UseGetConnections(connection) {

  const [connections, setConnections] = useState([]);
  const { user } = useContext(UserContext);

  // fetching the connections of the specific user

  const getConnections = async () => {
    try {
      const response = await axios.get(baseURL + `/chats/finduserconnections/`);
      setConnections(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user?._id) {
      getConnections();
    }
  }, [user]);

  return { connections };
}
