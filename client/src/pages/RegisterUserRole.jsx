import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterUserRole = () => {
  const [selectedRole, setSelectedRole] = useState("artist");
  const navigate = useNavigate();

  const handleRoleChoice = (e) => {
    e.preventDefault();
    //navigate(`/register?userRole=${selectedRole}`);
    console.log("selected user role==>", selectedRole);
  };

  return (
    <div className="flex h-screen">
      {/* Form container */}
      <div className="w-full my-auto max-w-screen-sm mx-auto md:w-1/2 md:max-w-480px">
        <div className="px-8 pt-6 pb-8">
          <h2 className="text-2xl text-center mb-6">Tell us who you are!</h2>
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
                  defaultChecked
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
                  className="mr-2"
                />
                <label htmlFor="entrepreneur" className="inline-block">
                  Entrepreneur
                </label>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full "
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Background image to the right */}
      <div
        className="hidden sm:block sm:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            selectedRole === "artist"
              ? `url(https://img.freepik.com/free-vector/watercolor-oil-painting-background_52683-106321.jpg?w=826&t=st=1710163982~exp=1710164582~hmac=7ca60786b1f393a30f31512d2b809f19afa1b6f304093897799e923e83ebd665)`
              : `url(https://img.freepik.com/free-photo/orange-bright-powder-table_23-2147964258.jpg?w=996&t=st=1710165712~exp=1710166312~hmac=19e86e143c95fd08de46d5244a57decdeaa8a0583161ba8f3918bbc466e76198)`,
        }}
      ></div>
    </div>
  );
};

export default RegisterUserRole;
