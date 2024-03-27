import Button from "./Button";
import { NavLink } from "react-router-dom";

function DropMenuIntro() {
  return (
    <div className="origin-top-right absolute right-0 mt-[100px] w-full h-40 bg-white border-b-4 border-black xs:hidden">
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

export default DropMenuIntro;