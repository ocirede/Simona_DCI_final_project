import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormSubmitButton from "../components/FormSubmitButton";

const RegisterUserCategoryForm = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let userRegisterData = JSON.parse(localStorage.getItem("userRegisterData"));

    console.log(
      "Fetch user Data from local category form==>",
      userRegisterData
    );
  }, []);

  const handleSelection = (e) => {
    const selectedCategory = e.target.value;

    if (selectedCategories.includes(selectedCategory)) {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== selectedCategory)
      );
    } else {
      setSelectedCategories([...selectedCategories, selectedCategory]);
    }
  };
  console.log("selected categories==>", selectedCategories);

  const handleSubmit = (e) => {
    e.preventDefault();
    let userRegisterData = JSON.parse(localStorage.getItem("userRegisterData"));

    userRegisterData = {
      ...userRegisterData,
      categories: selectedCategories,
    };
    localStorage.setItem("userRegisterData", JSON.stringify(userRegisterData));
    navigate("/register");
    console.log("Categories stored:", selectedCategories);
  };

  return (
    <>
      <div>
        <h2 className="text-2xl text-center mb-6">What you are interested?</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-4 gap-2 justify-center items-center mb-5">
            <label
              className={`flex items-center justify-center px-4 py-2  rounded-md cursor-pointer transition-colors duration-300 ${
                selectedCategories.includes("React")
                  ? "bg-orange-500"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <input
                className="sr-only"
                type="checkbox"
                value="React"
                onChange={handleSelection}
              />
              React
            </label>
            <label
              className={`flex items-center justify-center px-4 py-2  rounded-md cursor-pointer transition-colors duration-300 ${
                selectedCategories.includes("Mongo")
                  ? "bg-orange-500"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <input
                className="sr-only"
                type="checkbox"
                value="Mongo"
                onChange={handleSelection}
              />
              MongoDb
            </label>
            <label
              className={`flex items-center justify-center px-4 py-2  rounded-md cursor-pointer transition-colors duration-300 ${
                selectedCategories.includes("Docker")
                  ? "bg-orange-500"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <input
                className="sr-only"
                type="checkbox"
                value="Docker"
                onChange={handleSelection}
              />
              Docker
            </label>

            <label
              className={`flex items-center justify-center px-4 py-2  rounded-md cursor-pointer transition-colors duration-300 ${
                selectedCategories.includes("React")
                  ? "bg-orange-500"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <input
                className="sr-only"
                type="checkbox"
                value="CSS"
                onChange={handleSelection}
              />
              CSS
            </label>
            <label
              className={`flex items-center justify-center px-4 py-2  rounded-md cursor-pointer transition-colors duration-300 ${
                selectedCategories.includes("Mongo")
                  ? "bg-orange-500"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <input
                className="sr-only"
                type="checkbox"
                value="HTML"
                onChange={handleSelection}
              />
              HTML
            </label>
            <label
              className={`flex items-center justify-center px-4 py-2  rounded-md cursor-pointer transition-colors duration-300 ${
                selectedCategories.includes("Docker")
                  ? "bg-orange-500"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <input
                className="sr-only"
                type="checkbox"
                value="Express.js"
                onChange={handleSelection}
              />
              Express.js
            </label>
            <label
              className={`flex items-center justify-center px-4 py-2  rounded-md cursor-pointer transition-colors duration-300 ${
                selectedCategories.includes("React")
                  ? "bg-orange-500"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <input
                className="sr-only"
                type="checkbox"
                value="Node.js"
                onChange={handleSelection}
              />
              Node.js
            </label>
            <label
              className={`flex items-center justify-center px-4 py-2  rounded-md cursor-pointer transition-colors duration-300 ${
                selectedCategories.includes("Mongo")
                  ? "bg-orange-500"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <input
                className="sr-only"
                type="checkbox"
                value="Tailwind"
                onChange={handleSelection}
              />
              Tailwind
            </label>
            <label
              className={`flex items-center justify-center px-4 py-2  rounded-md cursor-pointer transition-colors duration-300 ${
                selectedCategories.includes("Docker")
                  ? "bg-orange-500"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <input
                className="sr-only"
                type="checkbox"
                value="Firebase"
                onChange={handleSelection}
              />
              Firebase
            </label>
          </div>
          <FormSubmitButton name="Next" />
        </form>
      </div>
    </>
  );
};

export default RegisterUserCategoryForm;
