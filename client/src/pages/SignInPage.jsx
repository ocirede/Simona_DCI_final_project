import FakeLogo from "../components/navbar intro/FakeLogo";
import SignInForm from "../components/login/SignInForm";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <div>
        <Link to="/">
          <FakeLogo />
        </Link>
      </div>
      <div className="w-full h-screen flex justify-center p-2">
      <SignInForm  />
      </div>
    </>
  );
}

export default SignIn;
