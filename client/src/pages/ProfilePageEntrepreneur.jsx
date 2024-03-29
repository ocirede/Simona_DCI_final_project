import TitleNameSection from "../components/profilePageEntrepreneur/TitleNameSection";
import AboutSection from "../components/profilePageEntrepreneur/AboutSection";
import OffersSection from "../components/profilePageEntrepreneur/OffersSection";
import TagsSection from "../components/profilePageEntrepreneur/TagsSection";
import CommentSection from "../components/reviews/CommentSection";
import ProfileImgBgSection from "../components/profilePageEntrepreneur/ProfileImgBgSection";

export default function ProfilePageEntrepreneur() {
  return (
    <>
      <ProfileImgBgSection />
      <section className="mx-auto p-6 relative lg:ml-[230px] lg:mr-[230px] md:ml-[50px] md:mr-[50px]">
        <div>
          <TitleNameSection />
          <div className="lg:flex gap-4">
            <AboutSection />
            <div className="lg:w-1/2">
              <OffersSection />
              <TagsSection />
            </div>
          </div>
          <CommentSection />
        </div>
      </section>
    </>
  );
}
