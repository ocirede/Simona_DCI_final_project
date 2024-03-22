import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import {X} from "lucide-react"
function DropMenu() {
  return (
    <div className=" z-10 origin-top-right absolute right-0 mt-16 w-full h-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 xs:hidden">
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
