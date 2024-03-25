import { useState } from "react";
import FakeLogo from "./FakeLogo";
import Button from "./Button";
import LanguageChoice from "./LanguageChoice";
import { Menu, X } from "lucide-react";
import DropMenu from "./DropMenu";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [display, setDisplay] = useState(false);
  return (
    <nav className=" w-full h-20 flex  items-center rounded-lg shadow-lg border border-gray ">
      <ul className=" p-3 w-full flex items-center justify-between  ">
        <FakeLogo />
        <div className="hidden xs:flex justify-end items-center flex-grow p-3 gap-5">
          <NavLink to="/register-questions">
            <Button name="Register" />
          </NavLink>
          <NavLink to="/sign-in">
            <Button name="Sign-in" />
          </NavLink>
          <LanguageChoice />
        </div>
        <div className=" flex gap-6 xs:hidden">
          <LanguageChoice />
          {display ? (
            <X className=" w-8 h-8" onClick={() => setDisplay(!display)} />
          ) : (
            <Menu
              onClick={() => setDisplay(!display)}
              className=" w-10 h-10 xs:hidden"
            />
          )}

          {display && <DropMenu />}
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
