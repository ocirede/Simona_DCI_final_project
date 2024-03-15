import React, { useState } from "react";
import NavBar from "../components/profile artist/ArtistNavBar";
import PersonalInfo from "../components/profile artist/PersonalInfo";
import NameTitle from "../components/profile artist/NameTitle";
import CardSection from "../components/profile artist/CardSection";
import EditorModal from "../components/profile artist/EditorModal";

function ProfileArtist() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <NavBar />
      <main>
        {/* personal info section*/}
        <section>
          <PersonalInfo />
          <NameTitle />
        </section>
        <section className="xs:grid grid-rows-1 grid-cols-2">
          {/* About-me/ education  section*/}
          <CardSection onClick={openModal} section=" About me - education" />
          {/* Skills interest personality  section*/}
          <CardSection section="Skill interest personality" />
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
        {/* footer to be replaced with the footer from Tyhe */}
        <footer className="bg-gray-400 shadow-xl h-[200px] mt-10 rounded-t-[30px] relative flex justify-center items-center">
          Footer
        </footer>
      </main>
    </>
  );
}

export default ProfileArtist;
