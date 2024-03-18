import { useState } from "react";
import QASection from "../components/q&aPage/Q&ASection";
import PrivacyPolicy from "../components/q&aPage/PrivacyPolicy";
import TermsAndConditions from "../components/q&aPage/TermsAndConditions";

export default function QA() {
    const [currentSection, setCurrentSection] = useState(1);

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
        <div className="min-h-screen bg-gray-100 flex flex-col sm:flex-row">
            <div className="bg-gray-800 text-gray-100 w-full sm:w-1/4 p-4">
                <button onClick={() => setCurrentSection(1)} className="block py-2 px-4 my-2 rounded-md bg-gray-700 hover:bg-gray-900 focus:outline-none focus:bg-gray-900 w-full text-left">Q&A</button>
                <button onClick={() => setCurrentSection(2)} className="block py-2 px-4 my-2 rounded-md bg-gray-700 hover:bg-gray-900 focus:outline-none focus:bg-gray-900 w-full text-left">Privacy Policy</button>
                <button onClick={() => setCurrentSection(3)} className="block py-2 px-4 my-2 rounded-md bg-gray-700 hover:bg-gray-900 focus:outline-none focus:bg-gray-900 w-full text-left">Terms and Conditions</button>
            </div>
            <div className="bg-white p-4 flex-grow">
                {renderSection()}
            </div>
        </div>
    );
}
