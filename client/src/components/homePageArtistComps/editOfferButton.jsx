import { useEffect, useState, useContext } from "react";
import { useOfferContext } from "../../context/OfferContext.jsx";
import { UserContext } from "../../context/userContext.jsx";

export default function EditOffer({ offerId, setToggleEditForm }) {
  const { findOffer, foundOffer, updateOffer } = useOfferContext();
  const { user } = useContext(UserContext);

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
    setToggleEditForm(false);
  };

  useEffect(() => {
    findOffer(offerId);
  }, [offerId]);

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
    setToggleEditForm(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-[51] flex items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleVisibility}
        ></div>
        <div className="relative bg-white p-8 border border-gray-200 shadow-lg rounded-lg max-w-full md:max-w-2xl mx-auto my-auto z-10 overflow-auto">
          <button
            onClick={toggleVisibility}
            className="absolute top-0 right-0 mt-4 mr-4 text-red-500 text-4xl hover:text-red-700"
          >
            &times;
          </button>
          <form onSubmit={handleSave} className="w-full h-full mt-10 md:h-auto">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Offer title"
              required
              className="w-full p-2 mb-4 border-2 border-gray-500 rounded"
            />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
              className="w-full p-2 mb-4 border-2  border-gray-500 rounded"
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="w-full p-2 mb-4 border-2  border-gray-500 rounded"
            />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              className="w-full p-2 mb-4 border-2  border-gray-500 rounded"
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
              className="w-full p-2 mb-4 border-2  border-gray-500 rounded"
            />
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Salary"
              className="w-full p-2 mb-4 border-2  border-gray-500 rounded"
            />
            <input
              type="text"
              value={skillsRequired}
              onChange={(e) => setSkillsRequired(e.target.value)}
              placeholder="Skills Required (comma-separated)"
              className="w-full p-2 mb-4 border-2  border-gray-500 rounded"
            />
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              className="w-full p-2 mb-4 border-2  border-gray-500 rounded"
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
              onClick={() => {
                handleSave;
              }}
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
    </>
  );
}
