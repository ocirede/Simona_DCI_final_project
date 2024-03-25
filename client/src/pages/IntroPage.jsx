import CardCarousel from "../components/CardCarousel";
import MeetOurTeam from "../components/introPage/MeetOurTeam";
import TopReviews from "../components/introPage/TopReviews";
import DragComponent from "../components/framerMotionAnimations/DragNDrop";

export default function IntroPage() {
    // to define constrains of the draggable component
    const constraints = { left: 0, right: 500, top: 0, bottom: 300 }; 

    return (
        <div className="">
            <div className="lg:pl-40 lg:pt-40 lg:flex">
                <div className="m-10">   
                 {/* an example for draggable for now  */}
                    <DragComponent constraints={constraints}>
                        <h1 className="uppercase text-[90px] font-custom">Simona</h1>
                    </DragComponent>
                    <h3 className="text-[48px]">Your next fateful connection</h3>
                    <div className="mt-8">
                        <p className="pb-4">Do you remember the last time you had to search through dozen of websites just to find that one <span className="uppercase text-[25px]">right</span> person?</p>
                        <p>With Simona you don't have to feel lost anymore, start searching for your next gig, exhibition or a business partner <span className="uppercase text-[25px]">now</span> within our cool scene and connect with various funky folks out there!</p>
                       <button className="bg-gray-300 rounded-lg p-2 mt-4">Join us</button>
                    </div>
                </div>
                <div className="lg:m-10 lg:mr-40">
                    <h2 className="uppercase text-[38px] pb-5 text-center">Our groovy Artists</h2>
                    <CardCarousel role="artist" />
                </div>
            </div>
            <div className="bg-gray-600 mt-4 mb-4 pb-14 lg:flex lg:justify-center">
                <div className="lg:order-2 lg:mr-40">
                    <h3 className="text-[52px] text-center pt-10 lg:pl-40 lg:text-right">What do we do?</h3>
                    <p className="text-center pt-10 pb-10 lg:pl-20 lg:text-right">Add here description</p>
                </div>
                <div className="lg:order-1">
                    <h2 className="uppercase text-[38px] mb-5 text-center">Our radical Entrepreneurs</h2>
                    <CardCarousel role="entrepreneur" />
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
