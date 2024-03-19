import React from "react";
import FakeLogo from "../components/navbar intro/FakeLogo";
import SignInForm from "../components/login/SignInForm";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <div className=" w-full h-16 p-4">
        <Link to="/">
          <FakeLogo />
        </Link>
      </div>
      <SignInForm />
    </>
  );
}

export default SignIn;
