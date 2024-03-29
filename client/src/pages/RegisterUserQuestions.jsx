import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import LogoImageRegistration from "../components/LogoImageRegistration";
import { UserContext } from "../context/userContext";

const RegisterUserQuestions = () => {
  const { userRole, setUserRole } = useContext(UserContext);

  //we fetch the user role that was previously selected from local storage
  //and we store it again to the userRole to use it in order
  //to keep the same background related to the role when refreshing the page
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userRegisterData"));
    if (storedUserData && storedUserData.role) {
      setUserRole(storedUserData.role);
    } else setUserRole("artist");
  }, []);

  return (
    <div className="flex h-screen relative">
      {/* Logo image - it is a random image to be replaced with our logo */}
      <LogoImageRegistration />

      {/* Form container */}
      <div className="w-full my-auto max-w-screen-sm mx-auto md:w-1/2 md:max-w-480px">
        <div className="px-8 pt-6 pb-8">
          <Outlet />
        </div>
      </div>

      {/* Background image container to the right side*/}
      <div
        className="hidden sm:block sm:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            userRole === "artist"
              ? `url(https://img.freepik.com/free-vector/watercolor-oil-painting-background_52683-106321.jpg?w=826&t=st=1710163982~exp=1710164582~hmac=7ca60786b1f393a30f31512d2b809f19afa1b6f304093897799e923e83ebd665)`
              : `url(https://img.freepik.com/free-photo/orange-bright-powder-table_23-2147964258.jpg?w=996&t=st=1710165712~exp=1710166312~hmac=19e86e143c95fd08de46d5244a57decdeaa8a0583161ba8f3918bbc466e76198)`,
        }}
      ></div>
    </div>
  );
};

export default RegisterUserQuestions;
