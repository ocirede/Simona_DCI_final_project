import { Menu, X } from "lucide-react";
import LanguageChoice from "../navbar intro/LanguageChoice";
import DropMenuIntro from "../navbar intro/DropMenuIntro";
import { Link, NavLink } from "react-router-dom";
import Button from "../navbar intro/Button";
import { useRef, useState } from "react";
import HeartSVG from "../draggableElementsSVG/Heart";
import DragComponent from "../framerMotionAnimations/DragNDrop";
import CrescentShapeSVG from "../draggableElementsSVG/CrescentMoons";
import TwoCirclesAskew from "../draggableElementsSVG/StarAskew";
import StarSVG from "../draggableElementsSVG/StarFive";

const SimonaIntroSection = () => {
  const divRef = useRef(null);
  const [display, setDisplay] = useState(false);

  return (
    <div
      className="mb-2 mt-4 border-black border border-1 shadow-md rounded-[30px] bg-white border-b-[20px] h-[300px] md:h-[500px] relative flex items-start md:justify-between  mr-[10px] ml-[10px]"
      ref={divRef}
    >
      <div className="absolute top-[55%] left-[11%] md:left-[6%] lg:top-[45%] rotate-[345deg]">
        <DragComponent>
          <HeartSVG className="w-[50px] md:w-[100px] lg:w-[150px]" />
        </DragComponent>
      </div>

      <h3 className="text-[28px] text-[#1E1E1E] font-bold p-8 md:text-[40px] lg:text-[52px] lg:p-[70px]">
        Your next fateful connection
      </h3>
      <div className="flex gap-3 justify-end items-center m-10 md:mt-0 md:mr-auto sm:hidden">
        <LanguageChoice/>
        {display ? (
          <X
            className="w-8 h-8 md:hidden cursor-pointer absolute right-10 top-10 z-[120]"
            onClick={() => setDisplay(!display)}
          />
        ) : (
          <Menu
            onClick={() => setDisplay(!display)}
            className="w-8 h-8 md:hidden cursor-pointer"
          />
        )}
      </div>

      {display && <DropMenuIntro />}
      <div className="hidden  sm:flex justify-end items-center p-6 gap-6">
        <NavLink to="/register-questions">
          <Button name="Register" className="z-[300]" />
        </NavLink>
        <NavLink to="/sign-in">
          <Button name="Log-in" />
        </NavLink>
        <LanguageChoice />
      </div>

      <Link
        to="/"
        className="uppercase text-[71px] md:text-[150px] lg:text-[170px] xl:text-[200px] text-[#1E1E1E] absolute top-[72%] md:top-[66%] left-[7%] md:left-[4%] lg:top-[61%] xl:top-[54%] simona"
      >
        Simona
      </Link>
      <div className="absolute right-[3%] top-[40%] md:top-[50%] md:right-[-2%] lg:right-[5%] lg:top-[32%]">
        <DragComponent>
          <CrescentShapeSVG className="w-[100px] md:w-[300px] md:h-[200px] lg:w-[250px] lg:h-[300px]" />
        </DragComponent>
      </div>
      <div className="absolute right-[37%] top-[40%] md:top-[20%] md:right-[50%] lg:w-[150px] lg:right-[56%] lg:top-[10%]">
        <DragComponent>
          <TwoCirclesAskew className="w-[120px] md:w-[250px] h-24 md:h-[200px]" />
        </DragComponent>
      </div>
      <div className="absolute top-[15%] right-[30%] md:right-[17%] md:top-[15%] lg:right-[20%] lg:top-[10%]">
        <DragComponent>
          <StarSVG className="w-[120px] md:w-[300px] lg:w-[320px]" />
        </DragComponent>
      </div>
    </div>
  );
};

export default SimonaIntroSection;
