import express from "express";
import { deleteInterests, deletePersonality, handleInterests, handlePersonality, handleUpdateAbout } from "../controllers/profileController.js";

const profileRoutes = express.Router();

profileRoutes.post(`/user/:userId/about`, handleUpdateAbout);
profileRoutes.post("/interests/:userId", handleInterests);
profileRoutes.delete("/delete-interests/:userId", deleteInterests);
profileRoutes.post("/personality/:userId", handlePersonality);
profileRoutes.delete("/delete-personality/:userId", deletePersonality);

export default profileRoutes;