
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoadingButton from "./LoadingButton";
import { UserContext } from "../../context/userContext";
import AlertArrayOfErrors from "../alerts/AlertArrayOfErrors";
import { X } from "lucide-react";
function SignInForm() {
  const {
    showPassword,
    setShowPassword,
    authenticationHandler,
    rememberMe,
    handleRememberMeChange,
    setEmail,
    email,
    setPassword,
    password,
    loading,
    validationErrors,
    forgotPassword,
    setForgotPasswsord,
    requestForgotPasswordEmail
  } = useContext(UserContext);
  {
    /* form container */
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <br />
      <div className="w-2/3 max-w-[440px] h-[390px]  p-3 rounded-lg shadow-lg border border-gray">
        <form
          onSubmit={authenticationHandler}
          className="flex flex-col justify-center gap-2 mt-4"
        >
          <div className=" flex justify-center">
            <h1 className="text-5xl">Login</h1>
          </div>
          <label>
            <span>Email</span>
          </label>
          <div className=" relative">
            <input
              className="p-2  border relative w-full h-9 "
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type your email"
              required
            />
          </div>

          <label className="flex justify-between">
            <span>Password</span>
            <span
              onClick={() => setForgotPasswsord(!forgotPassword)}
              className="underline text-blue-500 cursor-pointer"
            >
              Forgot password
            </span>
          </label>
          <div className="relative">
            <input
              className="p-2  border relative w-full h-9 "
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            {loading ? (
              <button
                type="submit"
                className="w-32 h-8 rounded-xl bg-blue-500 text-white font-bold"
                disabled={false}
              >
                Sign In
              </button>
            ) : (
              <LoadingButton name="Signing in..." />
            )}
          </div>

          <div className=" flex gap-2 h-12 items-end justify-between ">
            <label className=" flex items-center gap-2">
              <input
                checked={rememberMe}
                onChange={handleRememberMeChange}
                type="checkbox"
              />
              <span>Remember me</span>
            </label>
            <span>
              Not a member ?&nbsp;
              <Link to="/register" className="underline text-blue-500">
                <span>Sign-up</span>
              </Link>
            </span>
          </div>
        </form>
      </div>
      {/* Error hadling/mapping */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2">
        {validationErrors ? (
          <ul className="text-red-500 list-none list-inside text-left">
            {validationErrors.map((err, i) => (
              <li className="py-1 text-sm" key={i}>
                <AlertArrayOfErrors text={err?.message} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      {forgotPassword ? (
        <div>
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <X
              onClick={() => setForgotPasswsord(!forgotPassword)}
              className="absolute top-2 right-1 cursor-pointer"
            />
            <div className="flex flex-col items-center justify-center w-[430px] h-[430px] rounded-xl p-6 bg-slate-100 border-black transition-transform duration-800">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Forgot Your Password?
              </h2>
              <p className="text-sm text-center mb-6">
                Enter your email address below, and we'll send you a link to
                reset your password.
              </p>
              <form onSubmit={requestForgotPasswordEmail} className="w-full">
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={email}
                    className="p-2 w-full border rounded-md"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md transition duration-300 hover:bg-blue-600"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SignInForm;
