
import { useContext, useEffect, useRef } from 'react';
import { UserContext } from '../../context/userContext';
import PersonalInfo from '../profile artist/PersonalInfo';

function ProfileImgBgSection({ user }) {
    const { updateProfileImage, updateProfileBackground, user: loggedInUser } = useContext(UserContext);
    const inputFileRef = useRef(null);

    useEffect(() => {
        if (inputFileRef.current) {
            inputFileRef.current.value = "";
        }
    }, [user]);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;


    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      await updateProfileImage(user._id, formData);
      console.log("Profile image updated!");
    } catch (error) {
      console.error("Error updating the profile pic", error);
    }
  };

  const handleBackgroundImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profileBackground", file);

    try {
      await updateProfileBackground(user._id, formData);
      console.log("Profile background updated!");
    } catch (error) {
      console.error("Error updating the profile background", error);
    }
  };

  const handleClick = () => {
    inputFileRef.current.click();
  };


    return (
        <div className="relative">

            <div
                className={`bg-${user.profileBackground ? 'cover' : 'white'} mr-[10px] ml-[10px] h-[200px] rounded-bl-[30px] rounded-br-[30px] relative border border-2 border-black`}
                style={user.profileBackground ? { backgroundImage: `url(${user.profileBackground})` } : null}
            >
                {loggedInUser && loggedInUser._id === user._id && (
                    <input
                        ref={inputFileRef}
                        type="file"
                        id="backgroundImageInput"
                        className="absolute inset-0 opacity-0 cursor-pointer w-full"
                        accept="image/*"
                        onChange={handleBackgroundImageUpload}
                    />
                )}
            </div>

            <div className="flex items-center absolute top-[65%] left-[8%] lg:left-[15%] lg:left-60 lg:ml-10">
                <div className="bg-white w-[180px] h-[125px] rounded-full mx-auto mb-4 relative overflow-hidden border-2 border-black">
                    <input
                        ref={inputFileRef}
                        type="file"
                        id="profilePictureInput"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                    {loggedInUser && loggedInUser._id === user._id && (
                        <label htmlFor="profilePictureInput" className="absolute inset-0 cursor-pointer">
                            <span className="sr-only">Upload Profile Picture</span>
                        </label>
                    )}
                    {user.profileImage && (
                        <img src={user.profileImage} alt="Profile" className="w-full h-full object-cover" />
                    )}
                </div>
                <div className="flex gap-4 ml-4 w-full">
                    <PersonalInfo userEmail={user?.email} />
                </div>
            </div>
        </div>
     
    
  );
}

export default ProfileImgBgSection;

