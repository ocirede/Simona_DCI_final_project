import React from "react";
import FakeLogo from "../components/navbar intro-page/FakeLogo";
import SignInForm from "../components/login/SignInForm";

function SignIn() {
  return (
    <>
      <div className=" w-full h-16 p-4">
        <FakeLogo />
      </div>
      <SignInForm />
    </>
  );
}

export default SignIn;
