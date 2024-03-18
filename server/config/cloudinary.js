import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const cloudinaryV2 = cloudinary.v2;

cloudinaryV2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

export default cloudinaryV2;
