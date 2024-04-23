import { Camera } from 'lucide-react';
import { useContext, useState, useEffect, useRef } from 'react';
import { UserContext } from '../../context/userContext';

function NavBar() {
  const { user, updateProfileImage } = useContext(UserContext);
  const [profileImage, setProfileImage] = useState(user?.profileImage);
  const [hasProfileImage, setHasProfileImage] = useState(!!user?.profileImage);
  const inputFileRef = useRef(null);

  useEffect(() => {
    setProfileImage(user?.profileImage);
    setHasProfileImage(!!user?.profileImage);
  }, [user]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      await updateProfileImage(user._id, formData); 
      setProfileImage(URL.createObjectURL(file));
      setHasProfileImage(true);
      console.log("Profile image updated!");
    } catch (error) {
      console.error("Error updating the profile pic", error);
    }
  };

  const handleClick = () => {
    inputFileRef.current.click();
  };

  return (
    <nav className="bg-gray-400 shadow-xl h-[200px] rounded-bl-[30px] rounded-br-[30px] relative flex justify-center items-center">
      <input
        ref={inputFileRef}
        type="file"
        id="profileImageInput"
        className="hidden"
        accept="image/*"
        onChange={handleImageUpload}
      />
      <div
        className="cursor-pointer"
        onClick={handleClick}
      >
        {hasProfileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="w-[140px] h-[140px] rounded-full z-50"
          />
        ) : (
          <div className="w-[140px] h-[140px] rounded-full bg-gray-200 flex justify-center items-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
        <label
          htmlFor="ImageInput"
          className="py-2 px-4 cursor-pointer absolute top-0 right-0 text-[22px]"
        >
          <Camera className="absolute inset-y-1 right-2 w-8 h-8" />
        </label>
      </div>
    </nav>
  );
}

export default NavBar;



