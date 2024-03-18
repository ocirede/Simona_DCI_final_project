import { createContext, useState, useContext } from "react";

const FormVisibilityContext = createContext();

export const FormVisibilityProvider = ({ children }) => {
  const [formVisibility, setFormVisibility] = useState({
    name: false,
    about: false,
    offer: false,
    tags: false,
  });

  const toggleFormVisibility = (formName) => {
    setFormVisibility({
      ...formVisibility,
      [formName]: !formVisibility[formName],
    });
  };

  return (
    <FormVisibilityContext.Provider value={{ formVisibility, toggleFormVisibility }}>
      {children}
    </FormVisibilityContext.Provider>
  );
};

export const useFormVisibility = () => {
  return useContext(FormVisibilityContext);
};
