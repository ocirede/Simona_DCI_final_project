import { Link } from "react-router-dom";
import BackToTop from "../../components/BackToTopButton";
import FooterContactForm from "../../components/FooterContactForm";

export function Footer() {
    return (
        <footer className="bg-gray-600 w-full p-10 relative">
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between">
                <div className="md:mr-8 mb-4 md:mb-0">
                    <div className="">
                        <h4></h4>
                        <Link className="text-3xl font-bold text-gray-400 cursor-pointer hover:text-gray-700 transition-colors" to="/QA">Q&A</Link>
                    </div>
                </div>
                <div className="md:mr-8 mb-4 md:mb-0 flex flex-col gap-2">
                    <h3 className="text-3xl mb-6 font-bold uppercase">Hey we don&#39;t bite, so let&#39;s get in touch!</h3>
                    <FooterContactForm />
                </div> 
                <hr className="border-gray-400"></hr>
                <div className="flex justify-between mt-10 lg:m-0 md:m-0">
                <div className="md:mr-8 mb-4 md:mb-0">
                    <h3 className="text-[20px] mb-1 uppercase">Company</h3>
                    <a href="#" className="hover:text-gray-500 transition-colors"><h3>Terms & Conditions</h3></a>
                    <a href="#" className="hover:text-gray-500 transition-colors"><h3>Privacy Policy</h3></a>
                </div>
                
                <div className="md:mr-8 mb-4 md:mb-0 flex items-center gap-2 text-[20px] lg:mt-[200px]">
                    <i className="fa-brands fa-github-alt hover:text-gray-700 transition-colors cursor-pointer"></i>
                    <i className="fa-brands fa-instagram hover:text-gray-700 transition-colors cursor-pointer"></i>
                    <i className="fa-brands fa-facebook hover:text-gray-700 transition-colors cursor-pointer"></i>
                    <i className="fa-brands fa-twitter hover:text-gray-700 transition-colors cursor-pointer"></i>
                </div>
                </div>
                
                <h3 className="text-[18px] uppercase lg:mt-[212px]">Made by <span className="font-bold">1973</span> team </h3>
            </div>
            <BackToTop />
        </footer>
    );
}

