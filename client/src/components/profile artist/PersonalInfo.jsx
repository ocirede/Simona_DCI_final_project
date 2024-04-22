import { useContext } from "react";
import { UserContext } from "../../context/userContext";

import ShareLinkCard from "./ShareLinkCard";
import { useFormVisibility } from "../profilePageEntrepreneur/customHook/FormVisibility";

function PersonalInfo({ userEmail }) {
  const { user } = useContext(UserContext);
  const { formVisibility, toggleFormVisibility } = useFormVisibility();
  const generateMailToLink = () => {
    const email = userEmail || user?.email;

    return email ? `mailto:${email}` : null;
  };

  const handleContactMeClick = () => {
    const mailtoLink = generateMailToLink();
    if (mailtoLink) {
      window.location.href = mailtoLink;
    } else {
      console.error("User email not found");
    }
  };

  return (
    <section className="lg:flex lg:gap-6 lg:items-center ">
        <button
        role="button"
          onClick={handleContactMeClick}
          className="bg-white z-50 text-black uppercase border-black border-2 rounded-full p-1.5 mr-3"
        >
         Contact me
        </button>
      <button className="bg-white  border-black border-2  z-50  rounded-full p-1.5 ">
        <div onClick={() => toggleFormVisibility("shareLink")} className="">
          <span className="text-black uppercase">Share Link</span>
        </div>
      </button>

      {formVisibility.shareLink && (
        <ShareLinkCard onClose={() => toggleFormVisibility("shareLink")} />
      )}
    </section>
  );
}

export default PersonalInfo;
