import { useEffect, useState, useContext } from "react";
import { useOfferContext } from "../../context/OfferContext.jsx";
import { UserContext } from "../../context/userContext.jsx";

export default function EditForm({ offerId }) {
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

  console.log(foundOffer);

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
      <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-50">
        <div className="relative max-w-lg max-h-full overflow-hidden bg-white p-4 rounded-lg">
          <form onSubmit={handleSave} className="w-[300px]">
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
              className="w-full p-2 mb-4 border-2 border-gray-500 rounded"
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="w-full p-2 mb-4 border-2 border-gray-500 rounded"
            />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              className="w-full p-2 mb-4 border-2 border-gray-500 rounded"
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
              className="w-full p-2 mb-4 border-2 border-gray-500 rounded"
            />
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Salary"
              className="w-full p-2 mb-4 border-2 border-gray-500 rounded"
            />
            <input
              type="text"
              value={skillsRequired}
              onChange={(e) => setSkillsRequired(e.target.value)}
              placeholder="Skills Required (comma-separated)"
              className="w-full p-2 mb-4 border-2 border-gray-500 rounded"
            />
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              className="w-full p-2 mb-4 border-2 border-gray-500 rounded"
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
