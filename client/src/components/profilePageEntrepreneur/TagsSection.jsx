import { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';

export default function TagsSection({ user }) {

    const { user: loggedInUser, addInterest, deleteInterest, addPersonality, deletePersonality } = useContext(UserContext);
    const [interest, setInterest] = useState("");
    const [personality, setPersonality] = useState("");
    const [message, setMessage] = useState("");
    const [showDeleteButtons, setShowDeleteButtons] = useState(false);
  
    const handleAddInterest = async () => {
      if (!interest.trim()) {
        setMessage("Enter an interest of your choice :)");
        return;
      }
      await addInterest(user._id, interest);
      setMessage("Interest added successfully");
      setInterest(""); 
    };

    const handleDeleteInterest = async (interestId) => {
        try {
          await deleteInterest(user._id, interestId);
          setMessage("Interest deleted successfully");
        } catch (error) {
          console.error("Error deleting interest:", error);
          setMessage("Failed to delete interest. Please try again.");
        }
      };

      const handleAddPersonality = async () => {
        if (!personality.trim()) {
          setMessage("Enter an personality of your choice :)");
          return;
        }
        await addPersonality(user._id, personality);
        setMessage("Personality added successfully");
        setPersonality(""); 
      };
  
      const handleDeletePersonality = async (personalityId) => {
          try {
            await deletePersonality(user._id, personalityId);
            setMessage("Personality deleted successfully");
          } catch (error) {
            console.error("Error deleting personality:", error);
            setMessage("Failed to delete personality. Please try again.");
          }
        };

    const toggleDeleteButtons = () => {
        setShowDeleteButtons(!showDeleteButtons);
    };

    return (
        <div className={`mb-4 bg-white shadow-md rounded-[20px] pr-4 pl-4 pt-4 border-b-8 border border-black ${showDeleteButtons ? 'h-auto pb-4' : 'h-[250px]'}`}>
            <div>
                <div className="flex justify-between">
                    <h4 className="text-[28px] uppercase font-semibold">Interests</h4>
                    {loggedInUser && loggedInUser._id === user._id &&  (
                    <i onClick={toggleDeleteButtons} className="fa-solid fa-pen-to-square text-[28px] cursor-pointer"></i>
                    )}
                </div>
                {showDeleteButtons && (
                <div> 
                    <input
                        type="text"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        placeholder="Enter your interest"
                        className="bg-white outline-none"
                    />
                   
                    <button onClick={handleAddInterest} className="glow-border rounded-full pr-2 pl-2 text-white p-1 bg-retroRed">Add</button>
                    {message && <p>{message}</p>}
                </div> 
                )}
                <ul className="flex flex-wrap gap-2 mt-4">
                    {user.interests.map((interest, index) => (
                        <li key={index} className="bg-retroBlue text-white pr-2 pl-2 p-1 rounded-full text-[14px]">
                            {interest}
                            {showDeleteButtons && (
                                <button onClick={() => handleDeleteInterest(interest)} className="ml-2 border-black border rounded-full p-1 hover:opacity-[0.2]">Delete</button>
                            )}
                        </li>
                    ))}
                </ul>

                {showDeleteButtons && (
                <div> 
                    <input
                        type="text"
                        value={personality}
                        onChange={(e) => setPersonality(e.target.value)}
                        placeholder="Enter your personality"
                        className="bg-white outline-none"
                    />
                   
                    <button onClick={handleAddPersonality} className="glow-border rounded-full pr-2 pl-2 text-white p-1 bg-retroRed mt-4">Add</button>
                    {message && <p>{message}</p>}
                </div> 
                )}
                <h4 className="text-[28px] uppercase font-semibold mt-4">Personalites</h4>
                <ul className="flex flex-wrap gap-2 mt-4">
                {user.personality.map((personality, i) => (
                        <li key={i} className="bg-retroRed text-white pr-2 pl-2 p-1 rounded-full text-[14px]">
                            {personality}
                            {showDeleteButtons && (
                                <button onClick={() => handleDeletePersonality(personality)} className="ml-2 border-black border rounded-full p-1 hover:opacity-[0.2]">Delete</button>
                            )}
                        </li>
                    ))}             
                </ul>
            </div>
        </div>
    );
}






