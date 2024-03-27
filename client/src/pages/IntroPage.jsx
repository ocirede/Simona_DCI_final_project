import CardCarousel from "../components/CardCarousel";
import MeetOurTeam from "../components/introPage/MeetOurTeam";
import TopReviews from "../components/introPage/TopReviews";
import { useEffect, useRef, useState } from "react";
import LanguageChoice from "../components/navbar intro/LanguageChoice";
import { Menu, X } from "lucide-react";
import MovingText from "../components/framerMotionAnimations/MovingText";
import DropMenuIntro from "../components/navbar intro/DropMenuIntro";
import { NavLink } from "react-router-dom";
import Button from "../components/navbar intro/Button";

export default function IntroPage() { 
    const divRef = useRef(null);
    const [display, setDisplay] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 400) {
          setShowMenu(true);
        } else {
          setShowMenu(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
      return (
          <div>
              <div className="lg:p-20">
                  <div className="m-2 mt-4 border-black border border-1 shadow-md rounded-[30px] bg-white border-b-[20px] h-[300px] md:h-[500px] relative flex items-start md:justify-between" ref={divRef}>  
                      <h3 className="text-[28px] text-[#1E1E1E] font-bold p-10 md:text-[40px] lg:text-[52px] lg:p-[70px]">Your next fateful connection</h3>
                      <div className="flex gap-3 items-center m-10 mt-11 md:mt-[21px]">
                          <LanguageChoice /> 
                          {display ? (
                              <X className="w-8 h-8 cursor-pointer absolute right-10 top-10 z-10" onClick={() => setDisplay(!display)} />
                          ) : (
                              <Menu
                              onClick={() => setDisplay(!display)}
                              className="w-8 h-8 xs:hidden cursor-pointer"
                              />
                          )}
                          {display && <DropMenuIntro />}
                      </div>
                      <div className="hidden xs:flex justify-end items-center flex-grow p-6 gap-5">
                        <NavLink to="/register-questions">
                            <Button name="Register" />
                        </NavLink>
                        <NavLink to="/sign-in">
                            <Button name="Sign-in" />
                        </NavLink>
                      </div>
                      <h1 className="uppercase text-[80px] md:text-[150px] lg:text-[200px] text-[#1E1E1E] absolute top-[69%] md:top-[66%] left-[7%] md:left-[4%] lg:top-[54%] simona">Simona</h1>
                </div>
                <div className="m-2 mt-4 border border-1 border-black rounded-[30px] bg-white h-[650px] md:h-fit shadow-md">
                    <div className="bg-cobaltBlue rounded-tl-[30px] rounded-tr-[30px] flex p-6 justify-between items-center pr-8 pl-8 md:pr-24 md:pl-24">
                        <img src="/smiley.svg" alt="smiley" className="w-[70px]"></img>
                        <h2 className="text-[26px] md:text-[38px] text-center text-white">Our groovy Artists</h2>
                    </div>
                    <div className="md:flex">
                        <div className="md:w-[540px] lg:w-[970px] order-1">
                            <CardCarousel role="artist"/>
                        </div>
                        <div className="md:w-[300px] lg:w-[600px] flex items-center justify-center pt-8 bg-[url('/mash.svg')] bg-cover bg-center rounded-bl-[30px] rounded-br-[30px] mt-2 md:mt-0 md:rounded-br-none">
                            <img src="/circles_three.svg" alt="lines" className="w-[240px] lg:w-[380px] pb-9"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <MovingText text="What do we do What do we do What do we do What do we do What do we do What do we do "/>
                <div className="m-2 lg:order-2 lg:mr-40 border border-1 border-black rounded-[30px] bg-white p-10 shadow-md md:text-[20px]">
                    <p className="pb-4">Do you remember the last time you had to search through dozen of websites just to find that one <span className="uppercase text-[25px]">right</span> person?</p>
                    <p>With Simona you don't have to feel lost anymore, start searching for your next gig, exhibition or a business partner <span className="uppercase text-[25px]">now</span> within our cool scene and connect with various funky folks out there!</p>
                </div>
                <div className="m-2 lg:order-1 bg-white border border-1 border-black rounded-[30px] mt-4 shadow-md">
                    <div className="bg-retroRed rounded-tl-[30px] rounded-tr-[30px] flex p-6 justify-between items-center pr-6 pl-6 md:pr-24 md:pl-24">
                        <h2 className="text-[24px] md:text-[38px] text-white text-center">Our radical Entrepreneurs</h2> 
                        <img src="/circles_two.svg" alt="two_circles" className="w-[80px]"></img>
                    </div>
                    <div className="md:flex">
                    <div className="md:w-[540px]">
                       <CardCarousel role="entrepreneur"/> 
                    </div>
                    <div className="md:w-[300px] flex items-center justify-center pt-8 bg-cover bg-center rounded-bl-[30px] rounded-br-[30px] mt-2 border-t border-black md:border-none">
                            <img src="/flower_two.svg" alt="lines" className="w-[150px] md:w-[200px] pb-9"></img>
                            <img src="/star_one.svg" alt="lines" className="w-[150px] md:w-[200px] pb-9 absolute rotate-[deg]"></img>
                    </div>
                    </div>
                </div>
            </div>
            <div className="m-2 bg-white border border-1 border-black rounded-[30px] shadow-md p-8 md:text-[20px]"> 
                <div className="flex gap-2 pb-4">
                    <img src="/heart_three.svg" alt="heart" className="w-[50px]"></img>
                    <p>Join a vast pool of talented force that enriches our community and become a valuable member.</p>
                </div>
                <div className="flex gap-2 pb-4"> 
                    <img src="/flower_three.svg" alt="heart" className="w-[50px]"></img>
                    <p>Connect and share your work with those that might find your potential unequaled.</p>
                </div>
                <div className="flex gap-2 pb-4">
                    <img src="/cyberpunk_eye.svg" alt="heart" className="w-[50px]"></img>
                    <p>Create your own network circle and enjoy the process of making friendships along the while.</p>
                </div>
            </div>
            <div>
                <MovingText text="Top Reviews Top Reviews Top Reviews Top Reviews Top Reviews Top Reviews Top Reviews Top Reviews "/>
                <TopReviews />
            </div>
            <div className="m-2 bg-white border border-1 border-black rounded-[30px] shadow-md">
                <div className="bg-retroRed rounded-tr-[30px] rounded-tl-[30px] p-6 relative border-t-[10px] border-black md:pb-10">
                    <h2 className="uppercase text-[50px] md:text-[90px] text-[#1E1E1E] font-bold absolute top-[-11.5%] md:top-[-21%]">Our Team</h2>
                    <div className="flex gap-6">
                        <h4 className="text-[21px] text-white pt-8 md:pt-16 md:text-[28px]">Meet the stellar quartet of chaotic good</h4>
                        <img src="/heart_mash.svg" alt="mash_heart" className="w-32 md:absolute md:right-20 md:w-40 md:top-0"></img>
                    </div>
                </div>
                <MeetOurTeam />
            </div>
        </div>
    );
}
