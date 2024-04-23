const AlertMessageSuccess = ({ text }) => {
  return (
    <div className="bg-green-50 border border-green-400 rounded text-green-800 text-sm p-4 flex fixed  items-start  top-0  left-1/2 transform -translate-x-1/2 -z-50">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="w-full">
        <p>
          <span className="font-bold">Success: </span>
          {text}
        </p>
      </div>
    </div>
  );
};

export default AlertMessageSuccess;