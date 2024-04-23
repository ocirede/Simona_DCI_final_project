import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext";
import starFourSvg from "../assets/y2k_icons/star_four.svg";
import starTwoSvg from "../assets/y2k_icons/star_two.svg";
import artist from "../assets/y2k_icons/artist.svg";
import entrepreneur from "../assets/y2k_icons/entrepreneur.svg";
import FakeLogo from "../components/navbar intro/FakeLogo";

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
    <div className="flex h-screen relative z-[5]">
      {/* Logo image - it is a random image to be replaced with our logo */}
      <FakeLogo />
      {/* Form container */}
      <div className="w-full my-auto max-w-screen-sm mx-auto md:w-1/2 md:max-w-480px relative">
        <div className="px-8 pt-6 pb-8 relative">
          {/* Star with opposite position on small screens */}
          <div className="absolute sm:top-[-80px] sm:left-[20px] sm:bottom-auto sm:right-auto sm:h-[180px] sm:w-[180px] top-[-60px] right-2 z-[-1] h-[180px] w-[180px]">
            <img src={starFourSvg} alt="Star Four" />
          </div>
          {/* Star with opposite position on small screens */}
          <div className="absolute sm:bottom-[-80px] sm:right-[20px] sm:left-auto sm:top-auto sm:h-[200px] sm:w-[200px] bottom-[-50px] left-2 z-[-1] h-[220px] w-[220px]">
            <img src={starTwoSvg} alt="Star Two" />
          </div>
          <Outlet />
        </div>
      </div>

      {/* Background image container */}
      <div
        className="hidden sm:block sm:w-1/2 bg-repeat"
        style={{
          backgroundImage:
            userRole === "artist" ? `url(${artist})` : `url(${entrepreneur})`,
        }}
      ></div>
    </div>
  );
};

export default RegisterUserQuestions;
