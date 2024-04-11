import  { useRef, useState } from "react";
import { X } from "lucide-react";
import { Copy } from "lucide-react";
import { useLocation } from "react-router-dom";

function ShareLinkCard({ onClose }) {
  const [copySuccess, setCopySuccess] = useState(false);
  const inputRef = useRef(null);
  const location = useLocation();
  const pathname = location.pathname;
  const mailtoLink =
    "mailto:?subject=Some%20text%20here%20as%20a%20subject.&body=http://localhost:5173" +
    pathname;
  const facebookLink =
    "https://www.facebook.com/sharer/sharer.php?u=http://localhost:5173" +
    pathname;
  const linkedinLink =
    "https://www.linkedin.com/sharing/share-offsite/?url=http://localhost:5173" +
    pathname;
  const twitterLink = ` https://twitter.com/intent/tweet?url=http://localhost:5173${pathname}&text=Check%20out%20my%20profile`;
  
  const handleCopy = () => {
    inputRef.current.select();
    document.execCommand("copy");
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };
  {
    /*(to add) extracting dynamic routes with UseParams()*/
  }

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[430px] h-[225px]  rounded-xl p-3 bg-slate-100 border-black  z-50 transition-transform duration-800">
      <div className=" flex justify-between">
        <h3 className=" text-xl font-bold">Profile sharing </h3>
        <X className=" cursor-pointer" onClick={onClose} />
      </div>
      <div className=" flex justify-between mt-5">
        <div className=" flex flex-col items-center">
          <a href={facebookLink} target="_blank">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="bg-blue-600 cursor-pointer rounded-full mr-2"
            >
              <path
                d="M30.1222 20.0611C30.1222 14.5045 25.6177 10 20.0611 10C14.5045 10 10 14.5045 10 20.0611C10 25.0829 13.6792 29.2452 18.4891 30V22.9694H15.9345V20.0611H18.4891V17.8445C18.4891 15.323 19.9911 13.9301 22.2893 13.9301C23.3901 13.9301 24.5415 14.1266 24.5415 14.1266V16.6026H23.2728C22.0229 16.6026 21.6332 17.3782 21.6332 18.1738V20.0611H24.4236L23.9775 22.9694H21.6332V30C26.443 29.2452 30.1222 25.0829 30.1222 20.0611"
                fill="white"
              ></path>
            </svg>
          </a>
          <span>Facebook</span>
        </div>
        <div className=" flex flex-col items-center">
          <a href={linkedinLink} target="_blank">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="bg-blue-600 cursor-pointer rounded-full mr-2"
            >
              <path
                d="M26.3369 26.3372H23.6698V22.1604C23.6698 21.1644 23.652 19.8822 22.2827 19.8822C20.8936 19.8822 20.6811 20.9674 20.6811 22.0879V26.3369H18.014V17.7477H20.5744V18.9215H20.6102C20.8665 18.4834 21.2367 18.1229 21.6816 17.8786C22.1264 17.6343 22.6292 17.5152 23.1364 17.534C25.8396 17.534 26.338 19.3121 26.338 21.6253L26.3369 26.3372ZM15.0047 16.5736C14.6986 16.5736 14.3994 16.4829 14.1448 16.3129C13.8903 16.1429 13.6918 15.9012 13.5746 15.6184C13.4575 15.3356 13.4267 15.0244 13.4864 14.7241C13.5461 14.4239 13.6934 14.1481 13.9098 13.9316C14.1263 13.7151 14.402 13.5676 14.7022 13.5078C15.0024 13.4481 15.3136 13.4787 15.5965 13.5958C15.8793 13.7129 16.1211 13.9112 16.2912 14.1657C16.4613 14.4202 16.5521 14.7194 16.5522 15.0255C16.5522 15.2288 16.5122 15.4301 16.4345 15.6179C16.3567 15.8057 16.2427 15.9763 16.099 16.1201C15.9553 16.2638 15.7847 16.3778 15.597 16.4557C15.4092 16.5335 15.208 16.5735 15.0047 16.5736ZM16.3382 26.3372H13.6684V17.7477H16.3382V26.3372ZM27.6665 11.0012H12.3282C11.9801 10.9973 11.6447 11.1317 11.3956 11.375C11.1465 11.6183 11.0042 11.9505 11 12.2987V27.7011C11.0041 28.0494 11.1463 28.3818 11.3953 28.6254C11.6444 28.8689 11.9799 29.0036 12.3282 28.9999H27.6665C28.0155 29.0043 28.3519 28.8699 28.602 28.6264C28.852 28.3829 28.9952 28.0501 29 27.7011V12.2976C28.995 11.9487 28.8518 11.6161 28.6017 11.3729C28.3517 11.1296 28.0153 10.9955 27.6665 11.0001"
                fill="white"
              ></path>
            </svg>
          </a>
          <span>Linkedin</span>
        </div>
        <div className=" flex flex-col items-center">
          <a href={twitterLink} target="_blank">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="bg-blue-400 cursor-pointer rounded-full mr-2"
            >
              <path
                d="M16.2898 28.2541C23.8373 28.2541 27.9648 22.0013 27.9648 16.5791C27.9648 16.4016 27.9612 16.2248 27.9532 16.0487C28.7562 15.4677 29.4493 14.7481 30 13.9239C29.2648 14.2508 28.4736 14.4708 27.6437 14.57C28.4908 14.0619 29.1412 13.2584 29.448 12.3004C28.6425 12.7783 27.7613 13.1151 26.8424 13.2964C26.0936 12.4989 25.0277 12 23.8472 12C21.5812 12 19.7436 13.8376 19.7436 16.1028C19.7436 16.4248 19.7797 16.738 19.8501 17.0384C16.4397 16.8668 13.4157 15.234 11.3918 12.7512C11.0273 13.3774 10.8355 14.0891 10.8362 14.8136C10.8362 16.2372 11.5606 17.494 12.6622 18.2292C12.0106 18.2093 11.3733 18.0333 10.8038 17.716C10.8032 17.7332 10.8032 17.75 10.8032 17.7684C10.8032 19.7556 12.2176 21.4148 14.0952 21.7907C13.7425 21.8868 13.3787 21.9354 13.0132 21.9352C12.7543 21.935 12.4961 21.9102 12.242 21.8611C12.7644 23.4915 14.2792 24.6779 16.0752 24.7111C14.6707 25.8119 12.9016 26.4675 10.9788 26.4675C10.648 26.4675 10.3212 26.4487 10 26.4107C11.816 27.5748 13.9724 28.2539 16.29 28.2539"
                fill="white"
              ></path>
            </svg>
          </a>
          <span>Twitter</span>
        </div>
        <div className=" flex flex-col items-center">
          <a href={mailtoLink}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="bg-purple-600 cursor-pointer rounded-full mr-2"
            >
              <path
                d="M20 24C22.2091 24 24 22.2091 24 20C24 17.7909 22.2091 16 20 16C17.7909 16 16 17.7909 16 20C16 22.2091 17.7909 24 20 24Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M24 16V21C24 21.7956 24.3161 22.5587 24.8787 23.1213C25.4413 23.6839 26.2044 24 27 24C27.7956 24 28.5587 23.6839 29.1213 23.1213C29.6839 22.5587 30 21.7956 30 21V20C29.9999 17.743 29.2362 15.5525 27.8333 13.7845C26.4303 12.0165 24.4706 10.7751 22.2726 10.2622C20.0747 9.74925 17.7679 9.99492 15.7274 10.9592C13.6868 11.9236 12.0324 13.5498 11.0333 15.5736C10.0341 17.5973 9.74898 19.8995 10.2242 22.1059C10.6994 24.3123 11.907 26.293 13.6506 27.726C15.3943 29.1591 17.5714 29.9601 19.8281 29.9989C22.0847 30.0377 24.2881 29.312 26.08 27.9398"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
          <span>E-mail</span>
        </div>
      </div>
      <hr className=" mt-3" />

      <form className="w-full mt-5">
        <label className="cursor-pointe flex items-center">
          <span>Link</span>
          {copySuccess && (
            <div className="absolute  right-8 transform -translate-y-1/2">
              <p className="text-green-500">Copied</p>
            </div>
          )}
        </label>
        <div className="flex justify-between mt-1 relative">
          {/* :userId to be added*/}

          <input
            type="text"
            defaultValue={`http://localhost:5173${pathname}`}
            className="border w-full h-7 pl-2 max-w-[calc(100%-3rem)] h-7 pl-2 overflow-hidden overflow-ellipsis"
            ref={inputRef}
          />

          <Copy
            onClick={handleCopy}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer w-5 h-5"
          />
        </div>
      </form>
    </div>
  );
}

export default ShareLinkCard;
