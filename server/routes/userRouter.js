import express from "express";
import { profileImageUpload } from "../middleware/multerCloudinary.js";

import {
  emailConfirmation,
  handleRegister,
  sendConnectionRequest,
  acceptConnectionRequest,
  rejectConnectionRequest,
  deleteConnection,
  getEntrepreneurs,
  getArtists,
  getAllUsers,

} from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/register", handleRegister);
userRoutes.post("/emailconfirm/:token", emailConfirmation);
userRoutes.post("/send-connection-request", sendConnectionRequest);
userRoutes.post("/accept-connection-request", acceptConnectionRequest);
userRoutes.post("/reject-connection-request", rejectConnectionRequest);
userRoutes.post("/delete-connection", deleteConnection);
userRoutes.get("/get-users", getAllUsers); 
userRoutes.get("/get-artists", getArtists)
userRoutes.get("/get-entrepreneurs", getEntrepreneurs)


//The following route is an example to test the image upload, it can be deleted
userRoutes.post(
  "/image",
  profileImageUpload.single("profileImage"),

  (req, res) => {
    res
      .status(200)
      .json({ message: "Image uploaded successfully", file: req.file });
  }
);

export default userRoutes;
