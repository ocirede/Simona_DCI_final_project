import express from "express";
import {
  profileBackroundUpload,
  profileImageUpload,
} from "../middleware/multerCloudinary.js";

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
  updateProfileImage,
  updateProfileBackground,
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
userRoutes.post("/changepassword", changePasswordEmail);
userRoutes.put("/updatepassword/:token", updatePassword);
userRoutes.get("/get-artists", getArtists);
userRoutes.post("/changepassword", changePasswordEmail);
userRoutes.put("/update/:userId", updateUser);
userRoutes.get("/loggeduser", auth, loggedUser);
userRoutes.get("/all-the-users", getAllUsers);
userRoutes.put(
  "/update-profile-pic/:userId",
  profileImageUpload.single("profileImage"),
  updateProfileImage
);
userRoutes.put(
  "/update-profile-back/:userId",
  profileBackroundUpload.single("profileBackground"),
  updateProfileBackground
);

export default userRoutes;
