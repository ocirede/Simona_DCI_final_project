import cloudinaryV2 from "../config/cloudinary.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

//Profile image upload
/* An updated version of the function for the 
profile image upload with same functionality 
but slightly better error handling */
const profileImageStorage = new CloudinaryStorage({
  cloudinary: cloudinaryV2,
  params: {
    folder: "Simona_Final_Project/profile_images",
    format: async (req, file) => {
      try {
        if (!file.mimetype.startsWith("image")) {
          throw new Error("Only image files are allowed");
        }
        const extension = file.mimetype.split("/")[1];
        return extension;
      } catch (error) {
        console.error("Error uploading the image", error);
        throw error;
      }
    },
    public_id: (req, file) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      return uniqueSuffix;
    },
  },
});

const profileImageUpload = multer({ storage: profileImageStorage });

//Profile backround image upload
const profileBackgroundStorage = new CloudinaryStorage({
  cloudinary: cloudinaryV2,
  params: {
    folder: "Simona_Final_Project/background_images",
    format: async (req, file) => {
      try {
        if (!file.mimetype.startsWith("image")) {
          throw new Error("Only image files are allowed");
        }
        const extension = file.mimetype.split("/")[1];
        return extension;
      } catch (error) {
        console.error("Error uploading the image", error);
        throw error;
      }
    },
    public_id: (req, file) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      return uniqueSuffix;
    },
  },
});

const profileBackroundUpload = multer({ storage: profileBackgroundStorage });

//Post image upload
const postImageStorage = new CloudinaryStorage({
  cloudinary: cloudinaryV2,
  params: {
    folder: "Simona_Final_Project/post_images",
    format: async (req, file) => {
      try {
        if (!file.mimetype.startsWith("image")) {
          throw new Error("Only image files are allowed");
        }
        const extension = file.mimetype.split("/")[1];
        return extension;
      } catch (error) {
        console.error("Error uploading the image", error);
        throw error;
      }
    },
    public_id: (req, file) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      return uniqueSuffix;
    },
  },
});

const postImageUpload = multer({ storage: postImageStorage });

export { profileImageUpload, profileBackroundUpload, postImageUpload };
