import express from "express";
import { handleUpdateAbout } from "../controllers/profileController.js";

const profileRoutes = express.Router();

profileRoutes.post(`/user/:userId/about`, handleUpdateAbout);

export default profileRoutes;