import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormSubmitButton from "../components/FormSubmitButton";
import AlertMessageWarning from "../components/alerts/AlertMessageWarning";

export const categories = [
  "React",
  "MongoDB",
  "Docker",
  "CSS",
  "HTML",
  "Express.js",
  "Node.js",
  "Tailwind",
  "Firebase",
  "Redux",
];

const RegisterUserCategoryForm = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showLimitChoiseMessage, setShowLimitChpoiseMessage] = useState(false);
  const navigate = useNavigate();

  //Add or delete the selected categories by clicking them
  //Sets the choice limit to 3
  //Limit message popup
  const handleSelection = (e) => {
    const selectedCategory = e.target.value;

    if (selectedCategories.includes(selectedCategory)) {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== selectedCategory)
      );
    } else {
      //we can here modify the maximum number of choices
      if (selectedCategories.length < 3) {
        setSelectedCategories([...selectedCategories, selectedCategory]);
      } else {
        setShowLimitChpoiseMessage(true);

        setTimeout(() => {
          setShowLimitChpoiseMessage(false);
        }, 2000);
      }
    }
  };

  //console.log("selected categories==>", selectedCategories);

  //Stores the choices in local storage and navigates to the next page
  const handleSubmit = (e) => {
    e.preventDefault();
    let userRegisterData = JSON.parse(localStorage.getItem("userRegisterData"));

    userRegisterData = {
      ...userRegisterData,
      categories: selectedCategories,
    };
    localStorage.setItem("userRegisterData", JSON.stringify(userRegisterData));
    navigate("/register");
  };

  //The categories if necessary can be stored in another file
  //and imported here

  return (
    <>
      <div className="border border-black rounded-2xl p-7 bg-white">
        <h2 className="text-2xl text-center mb-3 font-semibold">
          What are you interested in?
        </h2>
        <h3 className="text-xl text-center mb-6">
          Choose your three favourite categories!
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-4 gap-2 justify-center items-center mb-5">
            {categories.map((category, index) => (
              <label
                key={index}
                className={`flex items-center justify-center px-4 py-2 rounded-md cursor-pointer transition-colors duration-300 ${
                  selectedCategories.includes(category)
                    ? "bg-retroRed"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <input
                  className="sr-only"
                  type="checkbox"
                  value={category}
                  onChange={handleSelection}
                />
                {category}
              </label>
            ))}
          </div>
          <FormSubmitButton name="NEXT" />
        </form>
        {showLimitChoiseMessage && (
          <AlertMessageWarning text="You've reached the choice limit!" />
        )}
      </div>
    </>
  );
};

export default RegisterUserCategoryForm;
