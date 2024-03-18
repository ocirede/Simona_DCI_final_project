import { useFormVisibility } from "../../context/formVisibility";

export default function TagsSection() {
    const { formVisibility, toggleFormVisibility } = useFormVisibility();
    
    return (
        <div className="mb-4">
                {formVisibility.tags ? (
                    <form className="h-[150px] bg-gray-500 rounded-[20px] pr-4 pl-4 pt-4">
                        <div
                            contentEditable="true"
                            className="mt-2 bg-transparent border-b border-gray-300 focus:outline-none w-full"
                            placeholder="Tags"
                        ></div>
                        <div className="flex mt-2">
                            <button className="mr-2 bg-gray-400 text-white rounded-md py-1 px-4">Save</button>
                            <button className="bg-gray-400 text-white rounded-md py-1 px-4">Delete</button>
                        </div>
                    </form>
                ) : (
                    <div className="h-[150px] bg-gray-500 rounded-[20px] flex justify-between">
                        <h2
                            className="text-[28px] uppercase font-semibold cursor-pointer pl-4 pt-2"
                            onClick={() => toggleFormVisibility('tags')}
                        >
                            Interested
                        </h2>
                        <i className="fa-solid fa-pen-to-square text-[28px] pr-4 pt-3 cursor-pointer" onClick={() => toggleFormVisibility('tags')}></i>
                    </div>
                )}
        </div>
    );
}
