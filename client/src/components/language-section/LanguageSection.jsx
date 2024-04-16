import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import Spinner from "../loading/LoadingSpinner";
import LevelBar from "./LevelBar";

const LanguageSection = ({ user, loggeduser }) => {
  const { updateUser, addNewLanguage, deleteLanguage } =
    useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [addIsLoading, setAddIsLoading] = useState(false);
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);
  const [toggleAddForm, setToggleAddForm] = useState(false);
  const [newLanguage, setNewLanguage] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const levelTextToNumber = (level) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return 1;
      case "elementary":
        return 2;
      case "intermediate":
        return 3;
      case "advanced":
        return 4;
      case "fluent":
        return 5;
      default:
        return 0;
    }
  };

  const handleAddLanguage = async (e) => {
    e.preventDefault();
    try {
      setAddIsLoading(true);
      await addNewLanguage(loggeduser._id, newLanguage, selectedLevel);
    } catch (error) {
      console.error("Error adding the language:", error);
    } finally {
      setAddIsLoading(false);
      setToggleAddForm(false);
      setIsEditing(false);
      setNewLanguage("");
      setSelectedLevel("");
    }
  };

  const handleDeleteLanguage = async (languageId) => {
    try {
      setDeleteIsLoading(true);
      await deleteLanguage(loggeduser._id, languageId);
    } catch (error) {
      console.error("Error deleting the language:", error);
    } finally {
      setDeleteIsLoading(false);
    }
  };

  return (
    <div className="mb-4 ">
      <div className="bg-white rounded-[20px] p-4 border border-black text-black">
        <div className="flex justify-between items-center">
          <h3 className="text-[28px] uppercase font-semibold">Languages</h3>
          {loggeduser && loggeduser._id === user._id && (
            <>
              {/* Toggle editing mode */}
              <i
                className="fa-solid fa-pen-to-square text-[28px] cursor-pointer mr-4"
                onClick={() => setIsEditing(!isEditing)}
              ></i>
            </>
          )}
        </div>
        <div>
          {user.languages.map((language, index) => (
            <div key={index} className="mb-3 flex justify-between mt-2">
              <div>
                <div className="flex gap-3 items-center mb-2">
                  <p className="text-lg">{language.language}:</p>
                  <p className="text-m">{language.level}</p>
                </div>
                <div>
                  <LevelBar level={levelTextToNumber(language.level)} />
                </div>
              </div>
              {isEditing && (
                <>
                  <button
                    onClick={() => {
                      handleDeleteLanguage(language._id);
                    }}
                    className="flex justify-center items-center cursor-pointer"
                    disabled={deleteIsLoading}
                  >
                    {deleteIsLoading ? (
                      <Spinner />
                    ) : (
                      <i className="fa-solid fa-circle-minus text-red-700"></i>
                    )}
                  </button>
                </>
              )}
            </div>
          ))}
          {isEditing && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => {
                  setToggleAddForm(true);
                }}
                className="border-none bg-retroRed text-white rounded-xl py-1 px-4 w-[200px] cursor-pointer transition duration-300 shadow-md hover:shadow-custom"
                style={{
                  boxShadow: "0 0 10px #DF3C5F",
                }}
              >
                <span className="text-white">+</span> Add Language
              </button>
            </div>
          )}
        </div>
        <div>
          {toggleAddForm && (
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-50">
              <div className="relative max-w-lg max-h-full overflow-hidden bg-white p-4 rounded-lg">
                <form onSubmit={handleAddLanguage} className="w-[300px]">
                  <div className="mb-4">
                    <label
                      htmlFor="language"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Language
                    </label>
                    <input
                      type="text"
                      id="language"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-borderBlue focus:border-borderBlue bg-white"
                      value={newLanguage}
                      onChange={(e) => setNewLanguage(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="level"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Level
                    </label>
                    <select
                      id="level"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-borderBlue focus:border-borderBlue bg-white"
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      required
                    >
                      <option value="">Select Level</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Elementary">Elementary</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Fluent">Fluent</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className=" w-full border-none bg-retroRed text-white rounded-xl py-1 px-4  cursor-pointer  "
                    style={{
                      boxShadow: "0 0 10px #DF3C5F",
                    }}
                    disabled={addIsLoading}
                  >
                    {addIsLoading ? (
                      <>
                        <Spinner />
                        <span className="ml-2 text-white">Adding...</span>
                      </>
                    ) : (
                      "Add"
                    )}
                  </button>
                </form>

                <button
                  className="absolute top-2 right-2 text-black text-sm "
                  onClick={() => {
                    setToggleAddForm(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageSection;
