import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
      <div className="border border-black rounded-2xl p-7 bg-white">
        <h2 className="text-2xl text-center mb-9 font-semibold">
          Tell us who you are{":)"}
        </h2>
        {/* Role selection form */}
        <form onSubmit={handleRoleChoice}>
          <div className="mb-8 ">
            <label htmlFor="artist" className="cursor-pointer">
              <div
                className=" rounded-xl p-2 bg-retroRed text-center"
                style={{
                  boxShadow:
                    selectedRole === "artist" ? "0 0px 15px #DF3C5F" : "none",
                }}
              >
                <input
                  type="radio"
                  id="artist"
                  name="userRole"
                  value="artist"
                  onChange={(e) => {
                    setSelectedRole(e.target.value);
                  }}
                  checked={selectedRole === "artist"}
                  className="appearance-none opacity-0 mr-2"
                />
                <span className="inline-block text-white text-2xl">Artist</span>
              </div>
            </label>
          </div>
          <div className="mb-8">
            <label htmlFor="entrepreneur" className="cursor-pointer">
              <div
                className="rounded-xl p-2 bg-retroBlue text-center"
                style={{
                  boxShadow:
                    selectedRole === "entrepreneur"
                      ? "0 0px 15px #6F9BD1"
                      : "none",
                }}
              >
                <input
                  type="radio"
                  id="entrepreneur"
                  name="userRole"
                  value="entrepreneur"
                  onChange={(e) => {
                    setSelectedRole(e.target.value);
                  }}
                  checked={selectedRole === "entrepreneur"}
                  className="appearance-none opacity-0 mr-2 cursor-none"
                />
                <span className="inline-block text-white text-2xl">
                  Entrepreneur
                </span>
              </div>
            </label>
          </div>
          <div className="text-center">
            <FormSubmitButton name="NEXT" />
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Already have an account?{" "}
            <NavLink
              to="/sign-in"
              className="font-medium text-primary-600 hover:underline"
            >
              Login here
            </NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default RegisterUserRoleForm;
