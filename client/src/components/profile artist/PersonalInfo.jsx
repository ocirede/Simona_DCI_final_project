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
    <section className="flex gap-8 ml-2 items-center">
      <div className="">
        <button
          onClick={handleContactMeClick}
          className="bg-white border border-black border-2 rounded-full p-2"
        >
          <span className="text-black uppercase">Contact me</span>
        </button>
      </div>

      <div className="bg-white border border-black border-2  rounded-full p-2">
        <button onClick={() => toggleFormVisibility("shareLink")} className="">
          <span className="text-black uppercase">Share Link</span>
        </button>
      </div>

      {formVisibility.shareLink && (
        <ShareLinkCard onClose={() => toggleFormVisibility("shareLink")} />
      )}
    </section>
  );
}

export default PersonalInfo;
