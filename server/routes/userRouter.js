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
  signInHandling,
  changePasswordEmail,
  updateUser,
  updatePassword,
  loggedUser,
  getAllUsers,
} from "../controllers/userController.js";
import auth from "../middleware/user-auth.js";

const userRoutes = express.Router();

userRoutes.post("/register", handleRegister);
userRoutes.post("/emailconfirm/:token", emailConfirmation);
userRoutes.post("/send-connection-request", sendConnectionRequest);
userRoutes.post("/accept-connection-request", acceptConnectionRequest);
userRoutes.post("/reject-connection-request", rejectConnectionRequest);
userRoutes.post("/delete-connection", deleteConnection);
userRoutes.get("/get-entrepreneurs", getEntrepreneurs);
userRoutes.get("/get-artists", getArtists);
userRoutes.post("/signin", signInHandling);
userRoutes.put("/updatepassword/:token", updatePassword);
userRoutes.get("/get-artists", getArtists);
userRoutes.post("/changepassword", changePasswordEmail);
userRoutes.put("/update/:userId", updateUser);
userRoutes.get("/loggeduser", auth, loggedUser);
userRoutes.get("/all-the-users", getAllUsers);
userRoutes.get("/findconnections/:userId");




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
