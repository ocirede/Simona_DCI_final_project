import CardCarousel from "../components/CardCarousel";
import HeartSVG from "../components/draggableElementsSVG/Heart";
import StarSVG from "../components/draggableElementsSVG/StarFive";
import MeetOurTeam from "../components/introPage/MeetOurTeam";
import TopReviews from "../components/introPage/TopReviews";
import { useEffect, useRef, useState } from "react";
import LanguageChoice from "../components/navbar intro/LanguageChoice";
import DropMenu from "../components/navbar intro/DropMenu";
import { Menu } from "lucide-react";
import MovingText from "../components/framerMotionAnimations/MovingText";

export default function IntroPage() { 
    const divRef = useRef(null);
    const [divWidth, setDivWidth] = useState(0);
    const [divHeight, setDivHeight] = useState(0);

    useEffect(() => {
        if (divRef.current) {
            setDivWidth(divRef.current.clientWidth);
            setDivHeight(divRef.current.clientHeight);
        }
    }, []);

    return (
        <div>
            <div>
                <div className="m-2 mt-4 border-black border border-1 shadow-md rounded-[30px] bg-white border-b-[20px] h-[300px] relative flex items-start" ref={divRef}>  
                    {/* {/* <HeartSVG className="absolute w-[150px] top-[-8%] left-[16%] transform" />
                    <StarSVG className="absolute w-[300px] top-[-50%] right-[20%] rotate-[145deg]" /> 
                    <img src="/two_circles_askew.svg" className="w-[300px] rotate-[140deg]"></img> */}
                    <h3 className="text-[28px] text-[#1E1E1E] font-bold p-10">Your next fateful connection</h3>
                    <div className="flex gap-3 items-center m-10 mt-11">
                        <LanguageChoice /> 
                        <Menu />
                    </div>
                    <h1 className="uppercase text-[60px] font-custom text-[#1E1E1E] absolute top-[78%] left-[5%]">Simona</h1>
                   
                </div>
                <div className="m-2 mt-4 lg:m-10 lg:mr-40 border border-1 border-black rounded-[30px] bg-white h-[622px] shadow-md">
                    <div className="bg-cobaltBlue rounded-tl-[30px] rounded-tr-[30px] flex p-6 justify-between items-center pr-8 pl-8">
                        <img src="/smiley.svg" alt="smiley" className="w-[70px]"></img>
                        <h2 className="text-[26px] text-center text-white">Our groovy Artists</h2>
                    </div>
                    <div className="">
                        <div className="lg:w-1/1">
                            <CardCarousel role="artist"/>
                        </div>
                        <div className="lg:w-1/3 flex items-center justify-center pt-8 bg-[url('/mash.svg')] bg-cover bg-center rounded-bl-[30px] rounded-br-[30px] mt-2">
                            <img src="/circles_three.svg" alt="lines" className="w-[240px] pb-9"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-4 pb-14 lg:flex lg:justify-center">
                <MovingText text="What do we do What do we do What do we do What do we do What do we do What do we do "/>
                <div className="m-2 lg:order-2 lg:mr-40 border border-1 border-black rounded-[30px] bg-white p-10 shadow-md">
                    
                    <p className="pb-4">Do you remember the last time you had to search through dozen of websites just to find that one <span className="uppercase text-[25px]">right</span> person?</p>
                    <p>With Simona you don't have to feel lost anymore, start searching for your next gig, exhibition or a business partner <span className="uppercase text-[25px]">now</span> within our cool scene and connect with various funky folks out there!</p>
                </div>
                <div className="m-2 lg:order-1 bg-white border border-1 border-black rounded-[30px] mt-4 shadow-md">
                    <div className="bg-retroRed rounded-tl-[30px] rounded-tr-[30px] flex p-6 justify-between items-center pr-6 pl-6">
                        <h2 className="text-[24px] text-white text-center">Our radical Entrepreneurs</h2> 
                        <img src="/circles_two.svg" alt="two_circles" className="w-[80px]"></img>
                    </div>
                    <div className="lg:w-1/1">
                       <CardCarousel role="entrepreneur" /> 
                    </div>
                    <div className="lg:w-1/3 flex items-center justify-center pt-8 bg-cover bg-center rounded-bl-[30px] rounded-br-[30px] mt-2">
                            <img src="/flower_two.svg" alt="lines" className="w-[240px] pb-9"></img>
                            <img src="/star_one.svg" alt="lines" className="w-[240px] pb-9 absolute rotate-[deg]"></img>
                    </div>
                </div>
            </div>
            <div> 
            </div>
            <div>
                <TopReviews />
            </div>
            <div className="w-full">
                <div className="m-10 lg:ml-40 lg:mt-10">
                    <h2 className="uppercase text-[50px] ">Our Team</h2>
                    <h4 className="text-[21px]">Meet the stellar quartet</h4>
                </div>
                <MeetOurTeam />
            </div>
        </div>
    );
}
