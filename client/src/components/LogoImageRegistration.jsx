import React from "react";

const LogoImageRegistration = ({ imageUrl }) => {
  return (
    <img
      className="absolute top-0 left-0 mt-4 ml-4 h-16"
      src={imageUrl}
      alt="logo"
    />
  );
};

export default LogoImageRegistration;
