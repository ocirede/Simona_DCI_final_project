import React, { useState } from "react";
import NavBar from "../components/profile artist/ArtistNavBar";
import PersonalInfo from "../components/profile artist/PersonalInfo";
import NameTitle from "../components/profile artist/NameTitle";
import CardSection from "../components/profile artist/CardSection";
import EditorModal from "../components/profile artist/EditorModal";
import ShareLinkCard from "../components/profile artist/ShareLinkCard";

function ProfileArtist() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(!isModalOpen);
  const [shareLnk, setShareLink] = useState(false);
  const openShareCard = () => setShareLink(!shareLnk);
  return (
    <>
      <NavBar />
      <main>
        {/* personal info section*/}
        <section>
          <PersonalInfo onClick={openShareCard} />
          <NameTitle />
        </section>
        <section className="xs:grid grid-rows-1 grid-cols-2">
          {/* About-me/ education  section*/}
          <CardSection onClick={openModal} section=" About me - education" />
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
          <CardSection section="Review" />
        </section>
        {/* Render the modal if isModalOpen is true */}
        {isModalOpen && <EditorModal onClose={openModal} />}
        {shareLnk && <ShareLinkCard onClose={openShareCard} />}

        {/* footer to be replaced with the footer from Tyhe */}
      </main>
    </>
  );
}

export default ProfileArtist;
