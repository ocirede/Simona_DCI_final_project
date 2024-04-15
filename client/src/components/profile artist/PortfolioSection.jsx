import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import Spinner from "../loading/LoadingSpinner";

export default function PortfolioSection({ user, loggeduser }) {
  const { uploadPortfolioImage, deletePortfolioImage } =
    useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [portfolioImage, setPortfolioImage] = useState();
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDeleteImage = (imageId) => {
    deletePortfolioImage(loggeduser._id, imageId);
  };

  const handleUploadImage = async () => {
    const fileData = new FormData();
    fileData.append("portfolioImage", portfolioImage);
    try {
      setIsLoading(true);
      await uploadPortfolioImage(loggeduser._id, fileData);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsLoading(false);
      setPreviewImage(null);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPortfolioImage(file);
      // Display image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPortfolioImage(null);
      setPreviewImage(null);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="mb-4 ">
      <div className="bg-white rounded-[20px] pr-4 pl-4 pt-4 border border-black text-black">
        <div className="mb-8 flex justify-between items-center">
          <h3 className="text-[28px] uppercase font-semibold">Portfolio</h3>
          {loggeduser && loggeduser._id === user._id && (
            <>
              {/* Toggle editing mode */}
              <i
                className="fa-solid fa-pen-to-square text-[28px] cursor-pointer mr-4"
                onClick={() => setIsEditing(!isEditing)}
              ></i>
            </>
          )}
        </div>

        <div
          style={{ maxHeight: "20rem", overflowY: "auto" }}
          className="flex flex-wrap gap-4 mb-4"
        >
          {/* Map through the portfolioImages array and render each image */}
          {user?.portfolioImages?.map((image) => (
            <div key={image._id} className="relative">
              {/* Image */}
              <img
                src={image.path}
                alt={`Portfolio Image ${image._id}`}
                onClick={() => handleImageClick(image)}
                className="w-48 h-48 object-cover rounded-lg border border-gray-300 cursor-pointer"
              />
              {/* Delete button */}
              {isEditing && (
                <button
                  onClick={() => handleDeleteImage(image._id)}
                  className="absolute top-2 right-2 bg-retroRed text-white rounded-md p-1 text-xs"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
          {/* Input for uploading images */}
          {isEditing && (
            <div className="relative w-48 h-48 border border-gray-300 rounded-lg overflow-hidden">
              {/* Plus icon */}
              <label
                htmlFor="fileInput"
                className="absolute inset-0 flex justify-center items-center cursor-pointer"
              >
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-4xl">+</span>
                )}
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  onChange={handleImageChange}
                />
              </label>
              {/* Upload button */}
              <button
                className={`absolute bottom-0 left-0 w-full bg-cobaltBlue text-white px-3 py-1 rounded-b-md ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleUploadImage}
                disabled={isLoading || !portfolioImage}
              >
                {isLoading ? (
                  <>
                    <Spinner /> Uploading...
                  </>
                ) : (
                  "Upload"
                )}
              </button>
            </div>
          )}
          {/* Image preview modal */}
          {selectedImage && (
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-50">
              <div className="relative max-w-lg max-h-full overflow-hidden">
                <img
                  src={selectedImage.path}
                  alt={`Portfolio Image ${selectedImage._id}`}
                  className="w-full h-auto max-h-[80vh]"
                />
                <button
                  className="absolute top-2 right-2 text-white"
                  onClick={() => {
                    setSelectedImage(null);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
