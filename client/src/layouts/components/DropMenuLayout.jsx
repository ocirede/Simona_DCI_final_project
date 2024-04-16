import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/userContext";

function DropMenuLayout() {
  const { logout } = useContext(UserContext);

  return (
    <div className="z-10 origin-top-right absolute right-0 mt-14 w-full h-40 shadow-lg bg-white border-1 border border-black xs:hidden">
      <div
        className="flex flex-col justify-center flex-grow h-full p-3  gap-4"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
      <div className="flex gap-2">
        <NavLink to="/chatbox" className="md:mt-0 md:ml-4">
          Chatbox
        </NavLink>
      </div>
      <a className="md:mt-0 md:ml-4 cursor-pointer" onClick={logout}>
        Logout
      </a>
      </div>
    </div>
  );
}

export default DropMenuLayout;
