import { useEffect, useState } from "react";
import FakeLogo from "../../components/navbar intro/FakeLogo";
import LanguageChoice from "../../components/navbar intro//LanguageChoice";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import DropMenuLayout from "./DropMenuLayout";

function NavBarProfile() {
  const [display, setDisplay] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const {logout, user} = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (user.role === "artist") {
      navigate("/homeArtist");
    } else {
      navigate("/E");
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
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
    <nav className={`h-20 flex bg-white items-center shadow-md mr-[10px] ml-[10px] border border-black mt-2 rounded-tr-[30px] rounded-tl-[30px] ${
      showMenu ? "sticky top-0 transition-all duration-300 z-[100] rounded-tr-[0] rounded-tl-[0] w-full ml-auto mr-auto" : ""
    }`}>
      <ul className="p-3 w-full flex items-center justify-between">
        <div onClick={handleLogoClick} className="cursor-pointer">
          <FakeLogo />
        </div>
        <div className="hidden xs:flex justify-end items-center flex-grow p-3 gap-5">
          <LanguageChoice />
          <div className="flex gap-2">
            <NavLink to="/chatbox" className="md:mt-0 md:ml-4">
              Chatbox
            </NavLink>
          </div>
          <a className="md:mt-0 md:ml-4 cursor-pointer" onClick={logout}>
            Logout
          </a>
        </div>
        <div className="flex gap-6 xs:hidden z-[100]">
          <LanguageChoice />
          {display ? (
            <X className="w-10 h-10" onClick={() => setDisplay(!display)} />
          ) : (
            <Menu
              onClick={() => setDisplay(!display)}
              className="w-10 h-10 xs:hidden"
            />
          )}
          {display && <DropMenuLayout />}
        </div>
      </ul>
    </nav>
  );
}

export default NavBarProfile;

