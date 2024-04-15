import { useEffect, useState, useContext } from "react";
import { useOfferContext } from "../../context/OfferContext.jsx";

export default function EditOffer({ offerId }) {
  const { findOffer, foundOffer, updateOffer } = useOfferContext();
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [salary, setSalary] = useState("");
  const [skillsRequired, setSkillsRequired] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState(null);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    if (!isVisible) findOffer(offerId); // Fetch the offer when making the form visible
  };

  useEffect(() => {
    if (foundOffer) {
      setTitle(foundOffer.title || "");
      setDescription(foundOffer.description || "");
      setLocation(foundOffer.location || "");
      setType(foundOffer.type || "");
      setCategory(foundOffer.category || "");
      setSalary(foundOffer.salary ? foundOffer.salary.toString() : "");
      setSkillsRequired(foundOffer.skillsRequired || "");
      setStatus(foundOffer.status || "");
    }
  }, [foundOffer]);

  const handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("type", type);
    formData.append("category", category);
    formData.append("salary", salary);
    formData.append("skillsRequired", skillsRequired);
    formData.append("status", status);
    formData.append("postImage", image);

    updateOffer(offerId, formData);
  };

  return (
    <>
      <div>
        <button
          onClick={toggleVisibility}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          edit
        </button>

        {isVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-200 w-full h-full md:w-1/4 md:h-auto">
              <button
                onClick={toggleVisibility}
                className="absolute top-0 right-0 mt-4 mr-4 text-red-500 text-4xl hover:text-red-700"
              >
                &times;
              </button>
              <form
                onSubmit={handleSave}
                className="w-full h-full mt-10 md:h-auto"
              >
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Offer title"
                  required
                  className="w-full p-2 mb-4 border-2 border-green-500 rounded"
                />
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  required
                  className="w-full p-2 mb-4 border-2 border-green-500 rounded"
                />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  className="w-full p-2 mb-4 border-2 border-green-500 rounded"
                />
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  required
                  className="w-full p-2 mb-4 border-2 border-green-500 rounded"
                >
                  <option value="">Select Type</option>
                  <option value="offer">Offer</option>
                  <option value="seeking">Seeking</option>
                </select>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Category"
                  required
                  className="w-full p-2 mb-4 border-2 border-green-500 rounded"
                />
                <input
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="Salary"
                  className="w-full p-2 mb-4 border-2 border-green-500 rounded"
                />
                <input
                  type="text"
                  value={skillsRequired}
                  onChange={(e) => setSkillsRequired(e.target.value)}
                  placeholder="Skills Required (comma-separated)"
                  className="w-full p-2 mb-4 border-2 border-green-500 rounded"
                />
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                  className="w-full p-2 mb-4 border-2 border-green-500 rounded"
                >
                  <option value="">Select Status</option>
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                </select>
                <input
                  type="file"
                  name="postImage"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="w-full p-2 mb-4 border-2 border-green-500 rounded file:border-none file:bg-green-200 file:text-green-700"
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded transition-colors duration-200"
                >
                  save
                </button>
                <button
                  type="button"
                  onClick={toggleVisibility}
                  className="w-full bg-red-500 hover:bg-red-700 text-white p-2 rounded transition-colors duration-200"
                >
                  cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
