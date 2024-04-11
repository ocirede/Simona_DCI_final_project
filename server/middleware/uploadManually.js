import cloudinaryV2 from "../config/cloudinary.js";

cloudinaryV2.uploader.upload(
  //The exact path in hard drive
  "C:/Users/Kostas/Desktop/profile-background.jpg",

  {
    folder: "Simona_Final_Project/background_images",
    public_id: "profile-background", //A name for the image
  },
  function (error, result) {
    if (error) {
      console.error("Error uploading the image:", error);
    } else {
      console.log("Image uploaded successfully:", result);
    }
  }
);

/* This small function is created to upload our page backrounds to the cloudinary and use them as url, to avoid using external surces that in the future they may not work. */

//Instructions:

//1. Paste the exact path of the image located in your computer
//2. Including the extension(.jpg, .png ect)
//3. give a name for the image in the public_id string
//4. run the file in the terminal. type: node uploadManually.js
//5. copy the url path that will be printet in the tertminal to use the image.

//Done!!!
