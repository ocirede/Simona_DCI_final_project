import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FakeLogo from "./fakeLogo.jsx";
import { Menu, X } from "lucide-react";
import { UserContext } from "../context/userContext.jsx";

export default function NavBarHomepage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);

  const handleLogoClick = () => {
    if (user.role === "artist") {
      navigate("/homeArtist");
    } else {
      navigate("/E");
    }
  };

  return (
    <nav className=" h-20 z-50 p-3  bg-white-400 flex flex-wrap items-center justify-between md:flex-row   relative rounded-lg shadow-lg border border-gray">
      <div onClick={handleLogoClick}>
        <FakeLogo />
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row w-full md:items-center md:justify-end md:w-auto absolute md:relative top-full md:top-0 left-0 bg-gray-100 md:bg-transparent w-screen md:w-auto z-40 p-4 md:p-0 rounded-lg md:rounded-none shadow-lg md:shadow-none border border-gray md:border-none`}
      >
        <Link to="/offers" className="mt-4 md:mt-0 md:ml-4">
          Offers
        </Link>
        <Link to="/artists" className="mt-4 md:mt-0 md:ml-4">
          Artists
        </Link>
        <Link to="/Network" className="mt-4 md:mt-0 md:ml-4">
          Network
        </Link>
        <Link to="/chatbox" className="mt-4 md:mt-0 md:ml-4">
          Chatbox
        </Link>
        <a className="mt-4 md:mt-0 md:ml-4" onClick={logout}>
          Logout
        </a>
      </div>
    </nav>
  );
}
