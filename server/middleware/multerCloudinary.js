import cloudinary from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

const cloudinaryV2 = cloudinary.v2;

cloudinaryV2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

/* An updated function for the profile image with same functionality 
but slightly better error handling */
const profileImageStorage = new CloudinaryStorage({
  cloudinary: cloudinaryV2,
  params: {
    folder: "Simona_Final_Project/profile_images",
    format: async (req, file) => {
      try {
        if (file.mimetype.includes("image")) {
          const extension = file.mimetype.split("/")[1];
          return extension;
        } else {
          throw new Error("The file is not an image format");
        }
      } catch (error) {
        console.error("Error uploading the image", error);
      }
    },
  },
});

const profileImageUpload = multer({ storage: profileImageStorage });

export { profileImageUpload };
