import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import AlertArrayOfErrors from "../alerts/AlertArrayOfErrors";
import { X } from "lucide-react";
import AlertMessageSuccess from "../alerts/AlertMessageSuccess";
import starFourSvg from "../../assets/y2k_icons/star_four.svg";
import starTwoSvg from "../../assets/y2k_icons/star_two.svg";
import RegisterFormButtonLoading from "../register/RegisterFormButtonLoading";
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
    // loading,
    validationErrors,
    forgotPassword,
    setForgotPasswsord,
    requestForgotPasswordEmail,
    response,
    success,
  } = useContext(UserContext);

  {
    /* form container */
  }
  return (
    <div className=" relative flex flex-col items-center justify-center w-[570px]">
      <br />
      <div className="lg:w-2/3 h-[420px] bg-white p-3 rounded-[15px] shadow-lg  border-gray border border-black">
        <form
          onSubmit={authenticationHandler}
          className="flex flex-col w-[350px] p-3 justify-center gap-2 mt-4"
        >
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold text-center mb-2">Log-in</h1>
          </div>
          <label>
            <span className="text-sm">Email</span>
          </label>
          <div className="relative">
            <input
              className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 focus:outline-none"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type your email"
              required
            />
          </div>

          <label className="flex justify-between">
            <span className="text-sm">Password</span>
            <span
              onClick={() => setForgotPasswsord(!forgotPassword)}
              className="underline text-blue-500 cursor-pointer"
            >
              Forgot password
            </span>
          </label>
          <div className="relative">
            <input
              className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 focus:outline-none"
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type your password"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 top-[-12%] flex items-center px-3 pt-2 text-gray-500 focus:outline-none"
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

          <div className="flex flex-col items-center justify-center pt-2">
            {response ? (
              <button
                type="submit"
                className="mt-2 x border bg-retroRed py-1 px-4 rounded-full w-full transition-transform duration-100  transform-gpu active:scale-95 text-white pt-1 pb-1 text-xl glow-border"
                disabled={false}
              >
                Log In
              </button>
            ) : (
              <RegisterFormButtonLoading name="Signing in..." />
            )}
          </div>

          <div className="flex flex-col items-center gap-2 xs:flex md:items-center justify-between h-12">
            <label className="flex items-center gap-2">
              <input
                checked={rememberMe}
                onChange={handleRememberMeChange}
                type="checkbox"
                className="checked:bg-white"
              />
              <span>remember me</span>
            </label>
            <span className="text-gray-500">
              Not a member?&nbsp;
              <Link to="/register-questions">
                <span className="font-medium hover:underline">Register</span>
              </Link>
            </span>
          </div>
        </form>
      </div>
      {/* Error handling/mapping */}
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
          <div className="fixed inset-0 bg-black opacity-50 z-40">
            {success && <AlertMessageSuccess text="Email sent successfully" />}
          </div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <X
              onClick={() => setForgotPasswsord(!forgotPassword)}
              className="absolute top-2 right-2 cursor-pointer"
            />
            <div className="flex flex-col items-center justify-center w-[430px] h-[430px] rounded-xl p-6 bg-slate-100 border-black transition-transform duration-800 border  border-1">
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
                    value={email}
                    readOnly
                    className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 focus:outline-none"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-retroRed text-white font-semibold py-2 rounded-md glow-border"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
      {/* Absolute positioned elements */}
      <div className="absolute top-[16%] right-[5%]  z-[-1] w-[35%]">
        <img
          src={starFourSvg}
          alt="Star Four"
          style={{
            position: "relative",
            zIndex: "-100",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </div>
      {/* Star with opposite position on small screens */}
      <div className="absolute bottom-[15%] left-[-3%] z-[-1] w-[45%] ">
        <img
          src={starTwoSvg}
          style={{
            position: "relative",
            zIndex: "-100",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          alt="Star Two"
        />
      </div>
    </div>
  );
}

export default SignInForm;
