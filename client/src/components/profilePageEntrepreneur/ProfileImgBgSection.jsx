import { useContext, useRef } from 'react';
import { UserContext } from '../../context/userContext';
import PersonalInfo from '../profile artist/PersonalInfo';

function ProfileImgBgSection({ user }) {
    const { updateProfileImage, updateProfileBackground } = useContext(UserContext);
    const inputFileRef = useRef(null);

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
            <div className={`bg-${user.profileBackground ? 'cover' : 'gray-400'} lg:mr-[250px] lg:ml-[250px] h-[200px] rounded-bl-[30px] rounded-br-[30px] relative`} style={user.profileBackground ? { backgroundImage: `url(${user.profileBackground})` } : null}>
                <input
                    ref={inputFileRef}
                    type="file"
                    id="backgroundImageInput"
                    className="hidden"
                    accept="image/*"
                    onChange={handleBackgroundImageUpload}
                />
                {user.profileBackground && (
                    <label htmlFor="backgroundImageInput" className="py-2 px-4 cursor-pointer absolute right-0 text-[22px]">
                        <i className="fa-solid fa-pen-to-square"></i>
                    </label>
                )}
            </div>
            <div className="flex items-center absolute top-[65%] left-[4%] lg:left-60 lg:ml-10">
                <div className="bg-gray-200 w-[180px] h-[125px] rounded-full mx-auto mb-4 relative overflow-hidden">
                    <input
                        ref={inputFileRef}
                        type="file"
                        id="profilePictureInput"
                        className="hidden absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept="image/*"
                        onChange={handleImageUpload}
                        onClick={handleClick}
                    />
                    <label htmlFor="profilePictureInput" className="absolute inset-0 flex items-center justify-center text-gray-600 cursor-pointer z-50">
                        {user.profileImage ? (
                            <img src={user.profileImage} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-center text-[22px]">
                                <i className="fa-solid fa-pen-to-square"></i>
                            </span>
                        )}
                    </label>
                </div>
                <div className="flex gap-4 ml-4 w-full">
                   <PersonalInfo />
                </div>
            </div>
        </div>
    );
}

export default ProfileImgBgSection;





