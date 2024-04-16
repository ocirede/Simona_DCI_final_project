import { useState, useContext } from 'react';
import { useFormVisibility } from "./customHook/FormVisibility";
import { UserContext } from '../../context/userContext';

export default function TagsSection() {
    const { formVisibility, toggleFormVisibility } = useFormVisibility();
    const { user, updateUser } = useContext(UserContext);

    const [selectedIntrovertedIndex, setSelectedIntrovertedIndex] = useState(null);
    const [selectedImaginativeIndex, setSelectedImaginativeIndex] = useState(null);
    const [selectedIntuitiveIndex, setSelectedIntuitiveIndex] = useState(null);

    const handleIntrovertedSelection = (index) => {
        setSelectedIntrovertedIndex(index === selectedIntrovertedIndex ? null : index);
    };
    const handleImaginativeSelection = (index) => {
        setSelectedImaginativeIndex(index === selectedImaginativeIndex ? null : index);
    };
    const handleIntuitiveSelection = (index) => {
        setSelectedIntuitiveIndex(index === selectedIntuitiveIndex ? null : index);
    };

    const saveData = async () => {
        const updatedData = {
            tags: [
                { trait: "introverted", value: selectedIntrovertedIndex },
                { trait: "imaginative", value: selectedImaginativeIndex },
                { trait: "intuitive", value: selectedIntuitiveIndex }
            ].filter(item => item.value !== null)
        };
        await updateUser(user.userId, updatedData);
    };

    return (
        <div className="mb-4">
            {formVisibility.tags ? (
                <form className="h-[150px] bg-white shadow-md rounded-[20px] pr-4 pl-4 pt-4 border-b-8 border border-black">
                    <div className="mt-2 flex flex-wrap gap-2">
                        <p>Introverted</p>
                        {[...Array(6)].map((_, index) => (
                            <div 
                                key={index}
                                className={`rounded-md py-1 px-2 cursor-pointer ${selectedIntrovertedIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                onClick={() => handleIntrovertedSelection(index)}
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                        <p>Imaginative</p>
                        {[...Array(6)].map((_, index) => (
                            <div 
                                key={index}
                                className={`rounded-md py-1 px-2 cursor-pointer ${selectedImaginativeIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                onClick={() => handleImaginativeSelection(index)}
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                        <p>Intuitive</p>
                        {[...Array(6)].map((_, index) => (
                            <div 
                                key={index}
                                className={`rounded-md py-1 px-2 cursor-pointer ${selectedIntuitiveIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                onClick={() => handleIntuitiveSelection(index)}
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>
                    <div className="flex mt-2">
                        <button className="mr-2 bg-gray-400 text-white rounded-md py-1 px-4" onClick={saveData}>Save</button> 
                        <button className="bg-gray-400 text-white rounded-md py-1 px-4">Delete</button>
                    </div>
                </form>
            ) : (
                <div className="h-[150px] bg-white border border-black shadow-md rounded-[20px] flex justify-between border-b-8 border border-black">
                    <h2
                        className="text-[28px] uppercase font-semibold cursor-pointer pl-4 pt-2"
                        onClick={() => toggleFormVisibility('tags')}
                    >
                        Personality / Interests 
                    </h2>
                    <i className="fa-solid fa-pen-to-square text-[28px] pr-4 pt-3 cursor-pointer" onClick={() => toggleFormVisibility('tags')}></i>
                </div>
            )}
        </div>
    );
}






