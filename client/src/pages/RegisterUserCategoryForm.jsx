import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormSubmitButton from "../components/FormSubmitButton";

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
    //console.log("Categories stored:", selectedCategories);
  };

  //The categories if necessary can be stored in another file
  //and imported here
  const categories = [
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

  return (
    <>
      <div>
        <h2 className="text-2xl text-center mb-3">
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
                    ? "bg-orange-500"
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
          <FormSubmitButton name="Next" />
        </form>
        {showLimitChoiseMessage && (
          <div class="bg-yellow-50 border border-yellow-400 rounded text-yellow-800 text-sm p-4 flex fixed  items-start  top-0  left-1/2 transform -translate-x-1/2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="w-full">
              <p>
                <span class="font-bold">Info: </span>
                You've reached the category selection limit.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RegisterUserCategoryForm;
