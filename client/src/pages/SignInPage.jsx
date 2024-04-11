import FakeLogo from "../components/navbar intro/FakeLogo";
import SignInForm from "../components/login/SignInForm";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <div className=" w-1/2 h-16 p-4">
        <Link to="/">
          <FakeLogo />
        </Link>
      </div>
      <div className=" w-full h-screen flex justify-center p-2">
      <SignInForm  />
      <div className=" bg-white w-1/2"></div>
      </div>
      
    </>
  );
}

export default SignIn;
