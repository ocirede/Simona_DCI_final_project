import NavBar from "../components/profile artist/ArtistNavBar";
import PersonalInfo from "../components/profile artist/PersonalInfo";
import NameTitle from "../components/profile artist/NameTitle";
import CardSection from "../components/profile artist/CardSection";
import EditorModal from "../components/profile artist/EditorModal";
import ShareLinkCard from "../components/profile artist/ShareLinkCard";
import Sidebar from "../components/chatBox/SideBar";
import CommentSection from "../components/reviews/CommentSection";
import { useFormVisibility } from "../components/profilePageEntrepreneur/customHook/FormVisibility";



function ProfileArtist() {

  const { formVisibility, toggleFormVisibility } = useFormVisibility();
  const openShareCard = () => toggleFormVisibility("shareLink");

  return (
    <>
      <NavBar />
      <main className="mb-10">
        {/* personal info section*/}
        <section>
          <PersonalInfo onClick={openShareCard} />
          <NameTitle />
        </section>
        <section className="xs:grid grid-rows-1 grid-cols-2">
          {/* About-me/ education  section*/}
          <CardSection
            onClick={() => toggleFormVisibility("about")}
            section=" About me - education"
          />
          {/* Skills interest personality  section*/}
          <CardSection section="Skills interests personality" />
        </section>
        <section>
          {/* Portfolio  section*/}
          <CardSection section="Portfolio" />
        </section>
        <section className="xs:grid grid-rows-1 grid-cols-2">
          {/* Languages  section*/}
          <CardSection section="Language" />
          {/* Review  section*/}
          <section className="">
            <CommentSection />
          </section>
        </section>

        {/* Render the modal if formVisibility.about is true */}
        {formVisibility.about && <EditorModal onClose={() => toggleFormVisibility("about")} />}
        
        {/* Render the shareLink card if formVisibility.shareLink is true */}
        {formVisibility.shareLink && <ShareLinkCard onClose={openShareCard} />}
        <Sidebar/>
      </main>
    </>
  );
}

export default ProfileArtist;

