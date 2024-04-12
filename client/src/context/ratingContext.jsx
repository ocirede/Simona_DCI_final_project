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
        setRatings((prevRatings) => {
          const newRating = response.data.newRating;
          return prevRatings ? [newRating, ...prevRatings] : [newRating];
        });
      }
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

    } catch (error) {
      console.log("Error geting ratings for the user", error);
    }
  };

  //get best rated comments
  //it gets the best rated comments by date
  //it means it will fetch the 4 best newest ratings
  //the number can be adjusted in backend controller
  //it can accept role or being empty will get the best ratings
  //from all users ignoring the role
  const getBestRatedComments = async (role = "") => {
    try {
      const response = await axios.get(
        baseURL + `/ratings/get-best-ratings/?role=${role}`
      );
      if (response.data.success) {
        setBestRatedComments(response.data.ratings);
        // console.log("==>best 3 ratings for role:", response.data.ratings);
      }
    } catch (error) {
      console.log("Error getting the best rated comments", error);
    }
  };

  return (
    <RatingContext.Provider
      value={{
        ratings,
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
