import { createContext, useEffect, useState } from "react";
import axios from "../config/axios.js";

const EntrepreneurProvider = ({ children }) => {
  const [entrepreneurs, setEntrepreneurs] = useState([]);
  const baseURL = import.meta.env.VITE_BASE_URL;

  const fetchEntrepreneurs = async (role = "entrepreneur") => {
    try {
      const response = await axios.get(
        `${baseURL}/users/get-entrepreneurs/?role=${role}`
      );

      if (response.data.success) {
        setEntrepreneurs(response.data.entrepreneurs);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEntrepreneurs();
  }, [baseURL]); // Added baseURL as a dependency for useEffect

  return (
    <EntrepreneurContext.Provider value={{ entrepreneurs }}>
      {children}
    </EntrepreneurContext.Provider>
  );
};

export const EntrepreneurContext = createContext();

export default EntrepreneurProvider;


