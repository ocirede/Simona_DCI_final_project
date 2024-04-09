import React, { useContext, useEffect, useState } from "react";
import axios from "../config/axios.js";
import { UserContext } from "../context/userContext.jsx";
const baseURL = import.meta.env.VITE_BASE_URL;

export default function UseGetConnections() {
  const [connections, setConnections] = useState([]);
  const { user } = useContext(UserContext);

  // fetching the connections of the specific user
  useEffect(()=>{
    const getConnections = async () => {
      try {
        const response = await axios.get(baseURL + `/chats/finduserconnections/`);
        setConnections(response.data);
      } catch (error) {
        console.log(error);
      }
    };
 
    getConnections()
  },[user])
  

  
  return { connections, setConnections };
}
