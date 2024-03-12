import React from "react";

import NavBar from "../components/profile artist/ArtistNavBar";
import PersonalInfo from "../components/profile artist/PersonalInfo";
import NameTitle from "../components/profile artist/NameTitle";
import AboutMeEducation from "../components/profile artist/AboutMeEducation";
import Portfolio from "../components/profile artist/Portfolio";
import SkillsIntrestPersonality from "../components/profile artist/SkillsInterestPersonality";
import Language from "../components/profile artist/Language";
import Review from "../components/profile artist/Review";

function ProfileArtist() {
  return (
    <>
      <NavBar />
      <main>
        {/* personal info section*/}
        <PersonalInfo />
        <NameTitle />
        {/* About-me/ education  section*/}
        <AboutMeEducation />
        {/* Portfolio  section*/}
        <Portfolio />
        {/* Skills intrest personality  section*/}
        <SkillsIntrestPersonality />
        {/*langauges  section*/}
        <Language />
        {/*review  section*/}

        <Review/>
      </main>
    </>
  );
}

export default ProfileArtist;
