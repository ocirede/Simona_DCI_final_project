import { useState } from "react";
import FakeLogo from "./FakeLogo";
import Button from "./Button";
import LanguageChoice from "./LanguageChoice";
import { Menu } from "lucide-react";
import DropMenu from "./DropMenu";

function NavBar() {
  const [display, setDisplay] = useState(false);
  console.log(display);
  return (
    <nav className=" w-full h-20 flex  items-center rounded-lg shadow-lg border border-gray ">
      <ul className=" p-3 w-full flex items-center justify-between  ">
        <FakeLogo />
        <div className="hidden xs:flex justify-end items-center flex-grow p-3 gap-5">
          <Button name="Register" />
          <Button name="Sign-in" />
          <LanguageChoice />
        </div>
        <div className=" flex gap-6 xs:hidden">
          <LanguageChoice />
          <Menu
            onClick={() => setDisplay(!display)}
            className=" w-10 h-10 xs:hidden"
          />
          {display && <DropMenu />}
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
