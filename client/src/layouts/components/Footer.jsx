import { Link } from "react-router-dom";
import BackToTop from "../../components/footer/BackToTopButton";
import FooterContactForm from "../../components/footer/FooterContactForm";

export default function Footer() {
  return (
    <footer className="bg-gray-600 w-full p-10 relative">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between">
        <div className="md:mr-8 mb-4 md:mb-0">  
            <Link
              className="text-3xl font-bold text-gray-400 cursor-pointer hover:text-gray-700 transition-colors"
              to="/QA"
            >
              Q&A
            </Link>
        </div>
        <div className="md:mr-8 mb-4 md:mb-0 flex flex-col gap-2">
          <h3 className="text-3xl mb-6 font-bold uppercase">
            Hey we don&#39;t bite, so let&#39;s get in touch!
          </h3>
          <FooterContactForm />
        </div>
        <div className="flex justify-between items-start mt-10 lg:m-0 md:m-0">
          <div className="md:mr-8 mb-4 md:mb-0">
            <h3 className="text-[20px] mb-1 uppercase">Company</h3>
              <Link to="/QA" className="hover:text-gray-500 transition-colors">
              <h3>Terms & Conditions</h3>
              </Link>
              <Link to="/QA" className="hover:text-gray-500 transition-colors">
              <h3>Privacy Policy</h3>
              </Link>
          </div>
          <div className="md:mr-8 mb-4 md:mb-0 lg:flex items-center gap-2 text-[20px] mt-[20px] md:mt-[210px] lg:mt-[210px]">
            <div className="flex gap-2 mb-4 lg:mb-0">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github-alt hover:text-gray-700 transition-colors cursor-pointer"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram hover:text-gray-700 transition-colors cursor-pointer"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook hover:text-gray-700 transition-colors cursor-pointer"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter hover:text-gray-700 transition-colors cursor-pointer"></i>
                </a>
            </div>
            <div>
              <h3 className="text-[18px] uppercase">
              Made by <span className="font-bold">1973</span> team{" "}
              </h3>
            </div>
          </div>
        </div> 
      </div>
      <BackToTop />
    </footer>
  );
}
