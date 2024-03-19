import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoadingButton from "./LoadingButton";
import { UserContext } from "../../context/userContext";

function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    authenticationHandler,
    errors,
    rememberMe,
    handleRememberMeChange,
    setEmail,
    email,
    setPassword,
    password,
    loading,
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
          <label>Email</label>
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
            Password
            <Link to="">
              <span className="underline text-blue-500">Forgot password</span>
            </Link>
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
    </div>
  );
}

export default SignInForm;
