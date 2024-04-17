import { Menu, X } from "lucide-react";
import LanguageChoice from "../navbar intro/LanguageChoice";
import DropMenuIntro from "../navbar intro/DropMenuIntro";
import { Link, NavLink } from "react-router-dom";
import Button from "../navbar intro/Button";
import { useRef, useState } from "react";

const SimonaIntroSection = () => {


    const divRef = useRef(null);
    const [display, setDisplay] = useState(false);
  
    return (
        <div className="mb-2 mt-4 border-black border border-1 shadow-md rounded-[30px] bg-white border-b-[20px] h-[300px] md:h-[500px] relative flex items-start md:justify-between mr-[10px] ml-[10px]" ref={divRef}>  
            <h3 className="text-[28px] text-[#1E1E1E] font-bold p-10 md:text-[40px] lg:text-[52px] lg:p-[70px]">Your next fateful connection</h3>
            <div className="flex gap-3 items-center m-10 mt-11 md:mt-[21px]">
                <LanguageChoice /> 
                {display ? (
                    <X className="w-8 h-8 md:hidden cursor-pointer absolute right-10 top-10 z-10" onClick={() => setDisplay(!display)} />
                ) : (
                    <Menu
                    onClick={() => setDisplay(!display)}
                    className="w-8 h-8 md:hidden cursor-pointer"
                    />
                )}
                {display && <DropMenuIntro />}
            </div>
            <div className="hidden md:flex justify-end items-center flex-grow p-6 gap-5">
            <NavLink to="/register-questions">
                <Button name="Register" />
            </NavLink>
            <NavLink to="/sign-in"> 
                <Button name="Log-in" />
            </NavLink>
            </div>
            <Link to="/" className="uppercase text-[80px] md:text-[150px] lg:text-[170px] xl:text-[200px] text-[#1E1E1E] absolute top-[69%] md:top-[66%] left-[7%] md:left-[4%] lg:top-[61%] xl:top-[54%] simona">Simona</Link>
        </div>
      

      
   
  );
};

export default SimonaIntroSection;
