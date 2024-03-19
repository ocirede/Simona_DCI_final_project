import { NavLink } from "react-router-dom";

const ConfirmedUserPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg  dark:bg-gray-800">
        <svg
          viewBox="0 0 24 24"
          className="text-green-600 w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="text-2xl text-green-600 font-semibold">
            Confirmation Done!
          </h3>
          <p className="text-gray-300 my-2">
            Thank you for completing your email verification.
          </p>
          <p className="text-gray-300 mb-10">Have a great day!</p>
          <p className="text-gray-300 font-semibold">
            Your email is successfully confirmed! Click{" "}
            <NavLink to="/sign-in" className="text-blue-600 font-semibold">
              here
            </NavLink>{" "}
            to sign in!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedUserPage;
