import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const RegisterUserForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userRole = queryParams.get("userRole");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("userRole==>", userRole);
    console.log("email==>", email);
    console.log("password==>", password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Create your account
          </h1>
          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                placeholder="example@email.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="relative">
              {" "}
              {/* Set the parent div to have position: relative */}
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="********"
                className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <button
                className="absolute top-1/2 transform -translate-y-0.5 right-0 flex items-center px-3 pt-2 text-gray-500 focus:outline-none"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? (
                  <i className="fa-solid fa-eye"></i>
                ) : (
                  <i className="fa-solid fa-eye-slash"></i>
                )}
              </button>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-100 focus:ring-3 focus:ring-primary-300"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-light text-gray-600">
                  I accept the{" "}
                  <NavLink
                    href="#"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Terms and Conditions
                  </NavLink>
                </label>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
              >
                Register
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <NavLink
                to="#"
                className="font-medium text-primary-600 hover:underline"
              >
                Login here
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterUserForm;
