import { useState, useContext, useEffect } from "react";
import ProfileImgBgSection from "../components/profilePageEntrepreneur/ProfileImgBgSection";
import CommentSection from "../components/reviews/CommentSection";

import { UserContext } from "../context/userContext";
import TagsSection from "../components/profilePageEntrepreneur/TagsSection";
import AboutSection from "../components/profilePageEntrepreneur/AboutSection";
import { useParams } from "react-router-dom";
import TitleNameSection from "../components/profilePageEntrepreneur/TitleNameSection";
import Sidebar from "../components/chatBox/SideBar";
import PortfolioSection from "../components/profile artist/PortfolioSection";
import LanguageSection from "../components/language-section/LanguageSection";
import NavBarHomepage from "../components/navBarHomepage";
import CreateOffer from "../components/profile artist/CreateOfferButton";


function ProfileArtist() {
  const { getUserById, user } = useContext(UserContext);
  const { userId } = useParams();
  const [profileUser, setProfileUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userFound = await getUserById(userId);
        setProfileUser(userFound);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [getUserById, userId]);

  if (profileUser) {
    return (
      <>
        <ProfileImgBgSection user={profileUser} />
        <main className="mx-auto p-6 relative lg:ml-[230px] lg:mr-[230px] md:ml-[50px] md:mr-[50px]">
          <div>
            <TitleNameSection user={profileUser} />
            <div className="lg:flex gap-4">
              <AboutSection user={profileUser} />
              <div className="lg:w-1/2">
                <TagsSection user={profileUser} />
              </div>
            </div>
            {/* Language Section */}
            <LanguageSection user={profileUser} loggeduser={user} />
            {/* Portfolio Section */}
            <PortfolioSection user={profileUser} loggeduser={user} />
            {/* Comment Section */}
            <CommentSection user={profileUser} loggeduser={user} />
          </div>

          <CreateOffer />


          <Sidebar />
        </main>
      </>
    );
  } else {
    return <p>Loading user profile...</p>;
  }
}

export default ProfileArtist;
