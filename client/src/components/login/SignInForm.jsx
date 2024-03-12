import { useState } from "react";
import Button from "../navbar intro-page/Button";
import { Link } from "react-router-dom";
import LoadingButton from "./LoadingButton";

function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className=" w-2/4  p-1 flex flex-col  items-center ">
        <h1 className=" text-5xl">Login</h1>
      </div>
      <br />
      <div className="  w-2/3  h-88 p-3 rounded-lg shadow-lg border border-gray md:w-2/4 lg:w-2/5">
        <form className=" flex flex-col justify-center  gap-2  ">
          <lalbel>Email</lalbel>
          <input
            className="p-2 border"
            type="email"
            name="email"
            placeholder="Type your email"
            required
          />
          <label className="flex justify-between ">
            Password
            <Link to="">
              <span className=" underline text-blue-500">Forgot password</span>
            </Link>
          </label>
          <input
            className="p-2 border"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Type your password"
            required
          />
          {/* Show hide password button */}
          <button
            type="button"
            className="absolute right-24 px-3 pt-2 text-gray-500 focus:outline-none xs:right-28 sm:right-32 md:right-64 lg:right-1/3"
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

          <div className="flex flex-col items-center justify-center p-4">
            <Button name="Sign-in" />
            <LoadingButton name="loading"/>
          </div>
          <div className="flex justify-center sm:justify-between">
            <label className="hidden sm:flex items-center gap-2">
              <input type="checkbox" />
              remember me
            </label>
            <span>
              Not a member ?&nbsp;
              <Link to="" className="underline text-blue-500">
                <span>Sign-up</span>
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
