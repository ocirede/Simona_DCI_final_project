import { useState } from 'react';
import { Link } from 'react-router-dom';
import FakeLogo from "./fakeLogo.jsx"
import { Menu, X } from 'lucide-react';

export default function NavBarHomepage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" h-20 z-50 p-3  bg-white-400 flex flex-wrap items-center justify-between md:flex-row   relative rounded-lg shadow-lg border border-gray">
       <Link to="/"><FakeLogo className=""/></Link>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div className={`${isOpen ? "flex" : "hidden"} flex-col w-full md:flex md:flex-row md:items-center md:justify-end md:w-auto absolute top-full left-0 bg-gray-100 w-screen z-40 p-4 rounded-lg shadow-lg border border-gray`}>
        <Link to="/offers" className="mt-4 md:mt-0 md:ml-4">Offers</Link>
        <Link to="/artists" className="mt-4 md:mt-0 md:ml-4">Artists</Link>
        <Link to="/Network" className="mt-4 md:mt-0 md:ml-4">Network</Link>
        <Link to="/chatbox" className="mt-4 md:mt-0 md:ml-4">Chatbox</Link>
        <Link to="/logout" className="mt-4 md:mt-0 md:ml-4">Logout</Link>
      </div>
    </nav>
  );
}

