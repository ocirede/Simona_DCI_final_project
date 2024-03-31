import { useState } from "react";

export const useFormVisibility = () => {
  const [formVisibility, setFormVisibility] = useState({
    name: false,
    about: false,
    offer: false,
    tags: false,
  });

  const toggleFormVisibility = (formName) => {
    setFormVisibility((prevVisibility) => ({
      ...prevVisibility,
      [formName]: !prevVisibility[formName],
    }));
  };

  return { formVisibility, toggleFormVisibility };
};

