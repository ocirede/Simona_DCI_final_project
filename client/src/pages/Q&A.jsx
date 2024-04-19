import { useContext, useState } from "react";
import QASection from "../components/q&aPage/Q&ASection";
import PrivacyPolicy from "../components/q&aPage/PrivacyPolicy";
import TermsAndConditions from "../components/q&aPage/TermsAndConditions";
import SimonaIntroSection from "../components/introPage/SimonaIntroSection";
import NavBarHomepage from "../components/navBarHomepage";
import { UserContext } from "../context/userContext";

export default function QA() {
    const [currentSection, setCurrentSection] = useState(1);
    const { user: loggedInUser } = useContext(UserContext);

    const renderSection = () => {
        switch (currentSection) {
        case 1:
            return <QASection />;
        case 2:
            return <PrivacyPolicy />;
        case 3:
            return <TermsAndConditions />;
        default:
            return null;
        }
    };

    return ( 
        <div className="">
            {loggedInUser ? <NavBarHomepage /> : <SimonaIntroSection />}
            <div className="min-h-screen flex flex-col sm:flex-row ml-4 mr-4">
                <div className="bg-retroBlue text-gray-100 w-full sm:w-1/4 p-4 rounded-[30px] border border-1 border-black border-b-8">
                    <button onClick={() => setCurrentSection(1)} className="block py-2 px-4 my-2 rounded-full bg-white text-black hover:bg-retroRed transition duration-300 focus:outline-none focus:bg-retroRed w-full text-left">Q&A</button>
                    <button onClick={() => setCurrentSection(2)} className="block py-2 px-4 my-2 rounded-full bg-white text-black hover:bg-retroRed transition duration-300 focus:outline-none focus:bg-retroRed w-full text-left">Privacy Policy</button>
                    <button onClick={() => setCurrentSection(3)} className="block py-2 px-4 my-2 rounded-full bg-white text-black hover:bg-retroRed transition duration-300 focus:outline-none focus:bg-retroRed w-full text-left">Terms and Conditions</button>
                </div>
                <div className="bg-white p-4 flex-grow rounded-[30px] border border-1 border-black border-b-8">
                    {renderSection()}
                </div>
            </div>
        </div>
    );
}
