import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Clock, Menu, X } from "lucide-react";
import { UserContext } from "../context/userContext.jsx";
import CircleIcon from "./iconsComponents/circle.jsx";
import StarFiveIcon from "./iconsComponents/starFive.jsx";
import WelcomeUser from "./welcomeUser.jsx";

export default function NavBarHomepage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, setUser, logout } = useContext(UserContext);
  const handleLogoClick = () => {
    if (user.role === "artist") {
      navigate("/homeArtist");
    } else {
      navigate("/E");
    }
  };
  const handleUserClick = (userId) => {
    if (user.role === "artist") {
      navigate(`/profile-artist/${userId}`);
    } else {
      navigate(`/ProfilePageEntrepreneur/${userId}`);
    }
  };

  return (
    <nav className=" m-3 z-50 pt-3 pl-3 pr-3 bg-white-400 relative rounded-lg shadow-lg border border-b-4 border-black">
      <div className="flex flex-wrap items-center justify-between md:flex-row">
        <div className="cursor-pointer" onClick={()=>handleUserClick(user._id)}>
          <WelcomeUser />
        </div>
        <StarFiveIcon className="w-[200px] absolute right-[30%] top-[-25%] rotate-[25deg] z-50  " />
        <div className="flex items-center gap-2">
          <a className="mt-0 md:mt-0 md:ml-4 md:hidden cursor-pointer">EN-DE</a>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row w-full md:items-center md:justify-end md:w-auto absolute md:relative top-full md:top-0 left-0 bg-gray-100 md:bg-transparent  z-40 p-4 md:p-0 rounded-lg md:rounded-none shadow-lg md:shadow-none border border-gray md:border-none`}
        >
          <a className="mt-4 md:mt-0 md:ml-4 md: blockhidden cursor-pointer">
            EN-DE
          </a>
          <NavLink to="/offers" className="mt-4 md:mt-0 md:ml-4">
            Offers
          </NavLink>
          <NavLink to="/artists" className="mt-4 md:mt-0 md:ml-4">
            Artists/Entrepreneur
          </NavLink>
          <NavLink to="/Network" className="mt-4 md:mt-0 md:ml-4  ">
            Network
          </NavLink>
          <div className=" flex gap-2">
            <NavLink to="/chatbox" className="mt-4 md:mt-0 md:ml-4">
              Chatbox
            </NavLink>
            
          </div>
         
          <a className="mt-4 md:mt-0 md:ml-4 cursor-pointer" onClick={logout}>
            Logout
          </a>
        </div>
      </div>
      <div className="ml-5 mr-5 mt-5 flex items-end   justify-between ">

      <h1 className="uppercase simona   text-[60px]   md:text-[120px] cursor-pointer" onClick={handleLogoClick}>Simona</h1>

        <CircleIcon />
      </div>
    </nav>
  );
}