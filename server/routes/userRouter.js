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

userRoutes.post("/signin", signInHandling);
userRoutes.put("/updatepassword/:token", updatePassword);
userRoutes.post("/changepassword", changePasswordEmail);
userRoutes.put("/update/:userId", updateUser);
userRoutes.get("/loggeduser", auth, loggedUser);
userRoutes.get("/all-the-users", getAllUsers);
userRoutes.put(
  "/update-profile-pic/:userId",)
  
//The following route is an example to test the image upload, it can be deleted
userRoutes.post(
  "/image",
  profileImageUpload.single("profileImage"),
  updateProfileImage
);
userRoutes.put(
  "/update-profile-back/:userId",
  profileBackroundUpload.single("profileBackground"),
  updateProfileBackground
);

export default userRoutes;
