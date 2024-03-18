import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormSubmitButton from "../components/FormSubmitButton";
import { UserContext } from "../context/userContext";

const RegisterUserRoleForm = () => {
  const { userRoleChoice } = useContext(UserContext);
  const [selectedRole, setSelectedRole] = useState("artist");
  const navigate = useNavigate();

  //we fetch the user role that was selected from local storage
  //and we store it again to the selectedRole to keep the background
  //and the choice when we refresh the page if there is already a role stored
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userRegisterData"));
    if (storedUserData && storedUserData.role) {
      setSelectedRole(storedUserData.role);
    }
  }, []);

  //function that is used to bring the role from the Outlet form and
  //use it for the dynamic background change
  useEffect(() => {
    userRoleChoice(selectedRole);
  }, [selectedRole]);

  //it stores the choosen role in local storage and navigates
  //to the next page to choose categories, by clicking the Button
  const handleRoleChoice = (e) => {
    e.preventDefault();
    const userRegisterData = { role: selectedRole };
    localStorage.setItem("userRegisterData", JSON.stringify(userRegisterData));
    navigate("/register-questions/category");
    //console.log("selected user role form==>", selectedRole);
  };
  return (
    <>
      <h2 className="text-2xl text-center mb-6">Tell us who you are!</h2>
      {/* Role selection form */}
      <form onSubmit={handleRoleChoice}>
        <div className="mb-4">
          <div className="border rounded p-4 bg-gray-500">
            <input
              type="radio"
              name="userRole"
              value="artist"
              onChange={(e) => {
                setSelectedRole(e.target.value);
              }}
              checked={selectedRole === "artist"}
              className="mr-2"
            />
            <label htmlFor="artist" className="inline-block">
              Artist
            </label>
          </div>
        </div>
        <div className="mb-4">
          <div className="border rounded p-4 bg-gray-500">
            <input
              type="radio"
              name="userRole"
              value="entrepreneur"
              onChange={(e) => {
                setSelectedRole(e.target.value);
              }}
              checked={selectedRole === "entrepreneur"}
              className="mr-2"
            />
            <label htmlFor="entrepreneur" className="inline-block">
              Entrepreneur
            </label>
          </div>
        </div>
        <div className="text-center">
          <FormSubmitButton name="Next" />
        </div>
      </form>
    </>
  );
};

export default RegisterUserRoleForm;
