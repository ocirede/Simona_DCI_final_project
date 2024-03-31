import Button from "./Button";
import { NavLink } from "react-router-dom";

function DropMenu() {
  return (
    <div className="z-10 origin-top-right absolute right-0 mt-14 w-full h-40 shadow-lg bg-white border-1 border border-black xs:hidden">
      <div
        className="flex flex-col justify-center flex-grow h-full p-3  gap-4"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <NavLink to="/register">
          <Button name="Register" />
        </NavLink>
        <NavLink to="/sign-in">
          <Button name="Sign-in" />
        </NavLink>


      </div>
    </div>
  );
}

export default DropMenu;
