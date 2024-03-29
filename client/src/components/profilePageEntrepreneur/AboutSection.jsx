import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import EditorModal from "../profile artist/EditorModal";
import { useFormVisibility } from "./customHook/FormVisibility";
import { UserContext } from "../../context/userContext";

export default function AboutSection() {
    const { formVisibility, toggleFormVisibility } = useFormVisibility();
    const { saveAboutText } = useContext(UserContext);
    const [aboutText, setAboutText] = useState('');
    const [editing, setEditing] = useState(false); // Track whether the user is editing

    useEffect(() => {
        const fetchAboutText = async () => {
            try {
                const response = await axios.get('/profile/user/profile/about');
                setAboutText(response.data.about);
            } catch (error) {
                console.error('Error fetching about text:', error);
            }
        };

        fetchAboutText();
    }, []);

    const openEditorModal = () => {
        toggleFormVisibility('about');
        setEditing(true); // Set editing state to true when opening the editor
    };

    const handleSave = async () => {
        try {
            await saveAboutText(aboutText); 
            toggleFormVisibility('about');
            setEditing(false); // Set editing state to false when saving
        } catch (error) {
            console.error('Error saving about text:', error);
        }
    };

    const handleEditorChange = (newText) => {
        setAboutText(newText);
    };

    return (
        <div className="mb-4 lg:w-1/2 order-1">
            {formVisibility.about && editing ? (
                <form className="h-[150px] bg-gray-500 rounded-[20px] pr-4 pl-4 pt-4">
                    <EditorModal value={aboutText} onChange={handleEditorChange} />
                    <div className="flex mt-2">
                        <button className="mr-2 bg-gray-400 text-white rounded-md py-1 px-4" onClick={handleSave}>Save</button>
                        <button className="bg-gray-400 text-white rounded-md py-1 px-4" onClick={() => {toggleFormVisibility('about'); setEditing(false);}}>Cancel</button>
                    </div>
                </form>
            ) : (
                <div className="h-[150px] bg-gray-500 rounded-[20px] flex justify-between">
                    <div>
                        <h2 className="text-[28px] uppercase font-semibold cursor-pointer pl-4 pt-2" onClick={openEditorModal}>About</h2>
                        <p className="pl-4 pt-2">{aboutText}</p>
                    </div>
                    <i className="fa-solid fa-pen-to-square text-[28px] pr-4 pt-3 cursor-pointer" onClick={openEditorModal}></i>
                </div>
            )}
        </div>
    );
}



