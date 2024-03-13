import { useState } from "react";
import Button from "../navbar intro/Button";
import { Link } from "react-router-dom";
import LoadingButton from "./LoadingButton";

function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  {
    /* form container */
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-2/4 p-1 flex flex-col items-center">
        <h1 className="text-5xl">Login</h1>
      </div>
      <br />
      <div className="w-2/3 max-w-[400px] h-[325px] p-3 rounded-lg shadow-lg border border-gray">
        <form className="flex flex-col justify-center gap-2">
          <label>Email</label>
          <div className=" relative">
            <input
              className="p-2  border relative w-full "
              type="email"
              name="email"
              placeholder="Type your email"
              required
            />
          </div>

          <label className="flex justify-between">
            Password
            <Link to="">
              <span className="underline text-blue-500">Forgot password</span>
            </Link>
          </label>
          <div className="relative">
            <input
              className="p-2  border relative w-full "
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Type your password"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3 pt-2 text-gray-500 focus:outline-none"
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

          {/* submit section + loading */}

          <div className="flex flex-col items-center justify-center p-4">
            <Button name="Sign-in" disabled={false} />
            {/* <LoadingButton name="loading"/> */}
          </div>
          <div className=" flex flex-col  items-center gap-2 justify-between ">
            <label className=" flex items-center gap-2">
              <input type="checkbox" />
              <span>Remember me</span>
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
