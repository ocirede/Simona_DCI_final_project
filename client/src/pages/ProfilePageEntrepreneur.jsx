import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import TitleNameSection from "../components/profilePageEntrepreneur/TitleNameSection";
import AboutSection from "../components/profilePageEntrepreneur/AboutSection";
import OffersSection from "../components/profilePageEntrepreneur/OffersSection";
import TagsSection from "../components/profilePageEntrepreneur/TagsSection";
import CommentSection from "../components/reviews/CommentSection";
import ProfileImgBgSection from "../components/profilePageEntrepreneur/ProfileImgBgSection";
import { useParams } from "react-router-dom";

const ProfilePageEntrepreneur = () => {
  const { getUserById } = useContext(UserContext);
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
      <div>
        <ProfileImgBgSection user={profileUser} />
        <section className="mx-auto p-6 relative lg:ml-[230px] lg:mr-[230px] md:ml-[50px] md:mr-[50px]">
          <div>
            <TitleNameSection user={profileUser} />
            <div className="lg:flex gap-4">
              <AboutSection user={profileUser} />
              <div className="lg:w-1/2">
                <OffersSection user={profileUser} />
                <TagsSection user={profileUser} />
              </div>
            </div>
            <CommentSection user={profileUser} />
          </div>
        </section>
      </div>
    );
  } else {
    return <p>Loading user profile...</p>;
  }
};

export default ProfilePageEntrepreneur;




