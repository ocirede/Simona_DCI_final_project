import Button from "./Button";
import { NavLink } from "react-router-dom";

function DropMenuIntro() {
  return (
    <div className="origin-top-right absolute right-0 mt-[100px] w-full h-40 bg-white border-b-4 border-black md:hidden z-[100]">
      <div
        className="flex justify-center items-end pb-8 flex-grow h-full p-3  gap-4"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <NavLink to="/register">
          <Button name="Register" />
        </NavLink>
        <NavLink to="/sign-in">
          <Button name="Log-in" />
        </NavLink>
      </div>
    </div>
  );
}

export default DropMenuIntro;
