import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useFormVisibility } from "./customHook/FormVisibility";

export default function TitleNameSection({ user }) {
  const { updateUser } = useContext(UserContext);
  const { formVisibility, toggleFormVisibility } = useFormVisibility();
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  const firstName = user?.address?.firstname;
  const lastName = user?.address?.lastname;

  const rating = user?.averageRating;

  const handleNameUpdate = () => {
    if (newFirstName.trim() === "" && newLastName.trim() === "") {
      alert("Please provide at least one name to update.");
      return;
    }
    const updatedData = {
      address: {
        firstname: newFirstName.trim() !== "" ? newFirstName.trim() : firstName,
        lastname: newLastName.trim() !== "" ? newLastName.trim() : lastName,
      },
    };

    updateUser(user._id, updatedData);
    setNewFirstName("");
    setNewLastName("");
    toggleFormVisibility("name");
  };

  return (
    <div className="text-center mb-4 lg:text-left lg:mt-10 mt-10 ">
      {formVisibility.name ? (
        <div>
          <form className="h-[90px] bg-white rounded-[15px] w-1/2 text-[12px] pt-4 pr-4 pl-4 shadow-lg border-b-8 border border-black ">
            <input
              type="text"
              className="mt-2 bg-transparent border-b border-gray-300 focus:outline-none w-full "
              placeholder="Write a new name"
              value={newFirstName !== "" || newLastName !== "" ? newFirstName + " " + newLastName : ""}
              onChange={(e) => {
                const value = e.target.value;
                const lastSpaceIndex = value.lastIndexOf(" ");
                setNewFirstName(value.slice(0, lastSpaceIndex).trim());
                setNewLastName(value.slice(lastSpaceIndex + 1).trim());
              }}
            />
            <div className="flex mt-2">
              <button className="mr-2 bg-retroRed text-white rounded-md py-1 px-4" onClick={handleNameUpdate}>Save</button>
              <button className="bg-retroBlue text-white rounded-md py-1 px-4" onClick={() => toggleFormVisibility("name")}>Delete</button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <div className="h-[90px] w-full bg-white shadow-lg rounded-[15px]  text-[12px] border-b-8 border border-black flex items-center justify-between pr-10 pl-5">
            <h1
              className="text-[20px] font-bold cursor-pointer"
              onClick={() => toggleFormVisibility("name")}
            >
              {firstName} {lastName}
            </h1> 
            
            <div className="text-[18px] font-semibold flex items-center gap-2">
              <img src="/rating_star.png" alt="rating-star" className="w-[30px]"></img>
              <p>Rating:</p>
              <p className="pt-[2px]">{rating}</p>
            </div>
          </div>
        </div>
      )}
     
    </div>
  );
}



