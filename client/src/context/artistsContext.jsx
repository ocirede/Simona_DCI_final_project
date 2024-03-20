import { createContext, useEffect, useState } from "react";
import axios from "../config/axios.js";
export const ArtistsContext = createContext();
const baseURL = import.meta.env.VITE_BASE_URL;
const ArtistsProvider = ({ children }) => {
  const [artists, setArtists] = useState([]);
  const fetchArtists = async (role = "artist") => {
    try {
      const response = await axios.get(
        baseURL + `/users/get-artists/?role=${role}`
      );
      if (response.data.success) {
        setArtists(response.data.artists);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchArtists();
  }, []);
  return (
    <ArtistsContext.Provider value={{ artists }}>
      {children}
    </ArtistsContext.Provider>
  );
};
export default ArtistsProvider;
