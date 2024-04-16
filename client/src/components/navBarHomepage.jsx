import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { UserContext } from "../context/userContext.jsx";
import WelcomeUser from "./welcomeUser.jsx";
import LanguageChoice from "./navbar intro/LanguageChoice.jsx";

export default function NavBarHomepage() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-white mt-3 mr-3 ml-3 z-50 pt-6 pl-6 pr-6 bg-white-400 relative rounded-[30px] shadow-lg border border-black border-b-[20px] h-[200px] md:h-[300px]">
      <div className="flex  items-center justify-between md:flex-row">
        <div
          className="cursor-pointer"
          onClick={() => handleUserClick(user._id)}
        >
          <WelcomeUser />
        </div>
        <div className="flex  items-center gap-2">
          <a className="mt-0 md:mt-0 md:ml-4 md:hidden cursor-pointer">
            {" "}
            <LanguageChoice />
          </a>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row w-full md:items-center md:justify-end md:w-auto absolute md:relative top-[36%] md:top-0 left-0 bg-white md:bg-transparent  z-40 p-4 md:p-0 rounded-lg md:rounded-none shadow-lg md:shadow-none border border-black md:border-none`}
          onClick={() => setIsOpen(!isOpen)}
        >

          <a className="mt-4 md:mt-0 md:ml-4 md: blockhidden cursor-pointer">
            EN-DE
          </a>
          {/* <NavLink to="/offers" className="mt-4 md:mt-0 md:ml-4">
            Offers
          </NavLink> */}
          {/* <NavLink to="/artists" className="mt-4 md:mt-0 md:ml-4">
            Artists/Entrepreneur
          </NavLink> */}
          {/* <NavLink to="/Network" className="mt-4 md:mt-0 md:ml-4  ">
            Network
          </NavLink> */}
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
      <div className="ml-5 mr-5 mt-10 flex items-end  justify-between ">
        <h1
          className="uppercase simona text-[80px] md:text-[120px] cursor-pointer absolute top-[54%]"
          onClick={handleLogoClick}
        >
          Simona
        </h1>
      </div>
    </nav>
  );
}
