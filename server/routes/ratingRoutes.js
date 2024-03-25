import express from "express";
import {
  addNewRating,
  getRatingsForUser,
} from "../controllers/ratingController.js";

const ratingRoutes = express.Router();

ratingRoutes.post("/add-new-rating", addNewRating);

ratingRoutes.get("/get-for-user/:userId", getRatingsForUser);

export default ratingRoutes;
