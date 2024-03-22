import { createContext, useEffect, useState } from "react";

import axios from "../config/axios.js";

const baseURL = import.meta.env.VITE_BASE_URL;

export const EntrepreneurContext = createContext();

const EntrepreneurProvider = ({ children }) => {
  const [entrepreneurs, setEntrepreneurs] = useState([]);

  const fetchEntrepreneurs = async (role = "entrepreneur") => {
    try {
      const response = await axios.get(
        baseURL + `/users/get-entrepreneurs/?role=${role}`
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
  }, []);

  return (
    <EntrepreneurContext.Provider value={{ entrepreneurs }}>
      {children}
    </EntrepreneurContext.Provider>
  );
};
export default EntrepreneurProvider;







