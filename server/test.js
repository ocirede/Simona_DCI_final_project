import cloudinary from "cloudinary";
import "dotenv/config";

const cloudinaryV2 = cloudinary.v2;

cloudinaryV2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
  secure: true,
});

// Specify the image URL and public_id
const imageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg";
const publicId = Date.now() + "-" + Math.round(Math.random() * 1e9); // The public_id you want to assign to the image

// Upload the image to Cloudinary
cloudinaryV2.uploader.upload(
  imageUrl,
  {
    folder: "Simona_Final_Project/profile_images",
    public_id: publicId,
  },
  (error, result) => {
    if (error) {
      console.error("Error uploading the image:", error);
    } else {
      console.log("Image uploaded successfully:", result);
    }
  }
);
