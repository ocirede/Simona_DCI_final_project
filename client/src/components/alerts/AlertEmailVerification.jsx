const AlertEmailVerification = ({ text }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex bg-white dark:bg-gray-900 items-center px-6 py-4 text-sm border-t-2 rounded-b shadow-sm border-green-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-green-500 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <div className="ml-3">
          <div className="font-bold text-left text-black dark:text-gray-50">
            {text}
          </div>
          <div className="w-full text-gray-900 dark:text-gray-300 mt-1">
            Please check your email!
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertEmailVerification;
