import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function NameTitle() {
  const { user, updateUser } = useContext(UserContext);
  const [editing, setEditing] = useState(false); 
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState(""); 

  const firstName = user?.address?.firstname;
  const lastName = user?.address?.lastname;

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
    setEditing(false);
  };

  return (
    <section className="flex flex-col justify-center items-center relative  ">
      <div className="absolute flex justify-center w-full h-[50px] rounded-xl ">
        {editing ? ( 
          <>
            <input
              type="text"
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
              placeholder="New First Name"
            />
            <input
              type="text"
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
              placeholder="New Last Name"
            />
            <button onClick={handleNameUpdate}>Update</button>
          </>
        ) : ( 
          <span className="text-black text-xl">
            {firstName} {lastName}{" "}
            <i
              className="fa-solid fa-pen-to-square cursor-pointer"
              onClick={() => setEditing(true)} 
            ></i>
          </span>
        )}
      </div>
      <div className="absolute top-[320px] flex items-end">
        <button className="w-[100px] h-[40px] rounded-xl bg-slate-500">
          <span className="text-white">Add me</span>
        </button>
      </div>
    </section>
  );
}

export default NameTitle;


