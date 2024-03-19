import express from "express";
import { profileImageUpload } from "../middleware/multerCloudinary.js";
import { getAllUsers, getArtists, getEntrepreneurs } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get("/get-users", getAllUsers); 
userRoutes.get("/get-artists", getArtists)
userRoutes.get("/get-entrepreneurs", getEntrepreneurs)


//Here will be the usersRoutes
//As we have one userSchema i believe it is better to have one userRoutes and one userController

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
