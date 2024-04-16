import { useState, useEffect, useContext } from "react";
import "react-quill/dist/quill.snow.css";
import { useFormVisibility } from "./customHook/FormVisibility";
import { UserContext } from "../../context/userContext";
import EditorModal from "../profile artist/EditorModal";

export default function AboutSection({user}) {
  const { formVisibility, toggleFormVisibility } = useFormVisibility();
  const { user: loggedInUser } = useContext(UserContext);
  const { updateUser } = useContext(UserContext);
  const [aboutContent, setAboutContent] = useState(user?.about || "");

  useEffect(() => {
    setAboutContent(user?.about || "");
  }, [user]);

  const openEditorModal = () => toggleFormVisibility("about");

  const updateAboutContent = async (newContent) => {
    try {
      if (!user) return;
      const updatedUser = { ...user, about: newContent };
      await updateUser(updatedUser._id, { about: newContent });
      setAboutContent(newContent);
      console.log("User about section updated!");
    } catch (error) {
      console.error("Error updating user about section", error);
    }
  };

  return (
    <div className="mb-4 lg:w-1/2 order-1">
      <div className="pb-10 bg-white border-black  border-b-8 border  shadow-md rounded-[20px] flex justify-between">
        <div>
          <h2
            className="text-[28px] uppercase font-semibold cursor-pointer pl-4 pt-2"
          >
            About
          </h2>
          <div className="pl-4 pt-2"> {aboutContent && <div dangerouslySetInnerHTML={{ __html: aboutContent }} />}</div>
        </div>
        {loggedInUser && loggedInUser._id === user._id && ( 
          <i
            className="fa-solid fa-pen-to-square text-[28px] pr-4 pt-3 cursor-pointer"
            onClick={openEditorModal}
          ></i>
        )}
      </div>

      {formVisibility.about && (
        <EditorModal
          onClose={() => toggleFormVisibility("about")}
          onSave={updateAboutContent}
          initialContent={aboutContent}
        />
      )}
    </div>
  );
}





