import { useState, useEffect, useContext } from "react";
import FakeLogo from "../../components/navbar intro/FakeLogo";
import LanguageChoice from "../../components/navbar intro//LanguageChoice";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import DropMenuLayout from "./DropMenuLayout";
import { UserContext } from "../../context/userContext";

function NavBar() {
  const [display, setDisplay] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const {logout} = useContext(UserContext);

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
    <nav
      className={`w-full h-20 flex bg-white items-center shadow-md ${
        showMenu ? "sticky top-0 transition-all duration-300 z-[100]" : "hidden"
      }`}
    >
      <ul className="p-3 w-full flex items-center justify-between">
        <div>
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
        <div className="flex gap-6 xs:hidden">
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

export default NavBar;

