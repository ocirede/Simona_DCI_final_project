import { useState, useEffect } from "react";
import FakeLogo from "./FakeLogo";
import Button from "./Button";
import LanguageChoice from "./LanguageChoice";
import { Menu, X } from "lucide-react";
import DropMenu from "./DropMenu";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [display, setDisplay] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
    <nav
      className={`w-full h-20 flex bg-white items-center shadow-md ${
        showMenu ? "sticky top-0 transition-all duration-300 z-50" : "hidden"
      }`}
    >
      <ul className="p-3 w-full flex items-center justify-between">
        <FakeLogo />
        <div className="hidden xs:flex justify-end items-center flex-grow p-3 gap-5">
          <NavLink to="/register-questions">
            <Button name="Register" />
          </NavLink>
          <NavLink to="/sign-in">
            <Button name="Log-in" />
          </NavLink>
          <LanguageChoice />
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
          {display && <DropMenu />}
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;

