import { createContext, useState, useEffect } from "react";
import axios from "../config/axios.js";

export const RatingContext = createContext();

const RatingContextProvider = ({ children }) => {
  const [ratings, setRatings] = useState([]);
  const [bestRatedComments, setBestRatedComments] = useState([]);

  const baseURL = import.meta.env.VITE_BASE_URL;

  //Add new rating
  const addNewRating = async (userId, ratedUserId, ratingNumber, comment) => {
    const body = {
      userId,
      ratedUserId,
      ratingNumber,
      comment,
    };

    try {
      const response = await axios.post(
        baseURL + `/ratings/add-new-rating`,
        body
      );
      if (response.data.success) {
        setRatings(
          ratings
            ? [...ratings, response.data.newRating]
            : [response.data.newRating]
        );
      }

      console.log("===>updated ratings for this user", ratings);
    } catch (error) {
      console.log("Error submitting the new comment", error);
    }
  };

  //get the ratings for a specific user
  const getRatingsForUer = async (userId) => {
    try {
      const response = await axios.get(
        baseURL + `/ratings/get-for-user/${userId}`
      );
      if (response.data.success) {
        setRatings(response.data.ratings);
      }

      console.log("===>ratings for this user", ratings);
    } catch (error) {
      console.log("Error geting ratings for the user", error);
    }
  };

  //get best rated comments
  const getBestRatedComments = async (role = "") => {
    try {
      const response = await axios.get(
        baseURL + `/ratings/get-best-ratings/?role=${role}`
      );
      if (response.data.success) {
        setBestRatedComments(response.data.bestComments);
      }
    } catch (error) {
      console.log("Error getting the best rated comments", error);
    }
  };

  return (
    <RatingContext.Provider
      value={{
        bestRatedComments,
        addNewRating,
        getRatingsForUer,
        getBestRatedComments,
      }}
    >
      {children}
    </RatingContext.Provider>
  );
};
export default RatingContextProvider;
