import React from "react";

import NavBar from "../components/profile artist/ArtistNavBar";
import PersonalInfo from "../components/profile artist/PersonalInfo";
import NameTitle from "../components/profile artist/NameTitle";

import CardSection from "../components/profile artist/CardSection";

function ProfileArtist() {
  return (
    <>
      <NavBar />
      <main>
        {/* personal info section*/}
        <PersonalInfo />
        <NameTitle />
        {/* About-me/ education  section*/}
        <CardSection section=" About me" />
        {/* Portfolio  section*/}
        <CardSection section="Portfolio" />
        {/* Skills intrest personality  section*/}
        <CardSection section="Skill interest" />
        {/*langauges  section*/}
        <CardSection section="Language" />
        {/*review  section*/}
        <CardSection section="Review"/>
      </main>
    </>
  );
}

export default ProfileArtist;
