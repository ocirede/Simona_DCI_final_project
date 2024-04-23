import Button from "./Button";
import { NavLink } from "react-router-dom";

function DropMenuIntro() {
  return (
    <div className="origin-top-right absolute right-0 mt-[30px] w-full h-64 bg-white border-b-4 border-black md:hidden z-[100] rounded-[30px]">
      <div
        className="flex justify-center items-end pb-8 flex-grow h-full p-3  gap-4"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <NavLink to="/register-questions">
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
