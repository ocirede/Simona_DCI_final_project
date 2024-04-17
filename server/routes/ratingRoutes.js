import express from "express";
import {
  addNewRating,
  getBestRatedComments,
  getRatingsForUser,
} from "../controllers/ratingController.js";

const ratingRoutes = express.Router();

ratingRoutes.post("/add-new-rating", addNewRating);

ratingRoutes.get("/get-for-user/:userId", getRatingsForUser);

ratingRoutes.get("/get-best-ratings", getBestRatedComments);

export default ratingRoutes;
