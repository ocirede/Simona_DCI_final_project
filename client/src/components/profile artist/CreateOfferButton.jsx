import { useState } from 'react';
import {  useOfferContext } from '../../context/OfferContext.jsx'; 

export default function CreateOffer() {
    const { createOffer } = useOfferContext(); 
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <>
        <div>
            <button onClick={toggleVisibility} className="bg-retroBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[30px]">
                Create Offer
            </button>

            {isVisible && (
                <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-200 w-full h-full md:w-1/4 md:h-auto">
                        <button onClick={toggleVisibility} className="absolute top-0   right-0 mt-4 mr-4 text-red-500 text-4xl hover:text-red-700">
                            &times;
                        </button>
                        <form onSubmit={createOffer} className={` w-full h-full mt-10 md:h-auto`}>
                        <input
                            type="text"
                            name="title"
                            placeholder="Offer title"
                            required
                            className="w-full p-2 mb-4 border-2  border-gray-500 rounded"
                        />
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            required
                            className="w-full p-2 mb-4 border-2  border-gray-500 rounded"
                        />
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            className="w-full p-2 mb-4 border-2  border-gray-500 rounded"
                        />
                        <select
                        name="type"
                        required
                        className="w-full p-2 mb-4 border-2  border-gray-500 rounded"
                    >
                        <option value="">Select Type</option>
                        <option value="offer">Offer</option>
                        <option value="seeking">Seeking</option>
                    </select>
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            required
                            className="w-full p-2 mb-4 border-2  border-gray-500 rounded"
                        />
                        <input
                            type="number"
                            name="salary"
                            placeholder="Salary"
                            className="w-full p-2 mb-4 border-2  border-gray-500 rounded"
                        />
                         <input
                        type="text"
                        name="skillsRequired"
                        placeholder="Skills Required (comma-separated)"
                        className="w-full p-2 mb-4 border-2  border-gray-500 rounded"
                    />
                      <select
                        name="status"
                        required
                        className="w-full p-2 mb-4 border-2  border-gray-500 rounded"
                    >
                        <option value="">Select Status</option>
                        <option value="open">Open</option>
                        <option value="closed">Closed</option>
                    </select>
                        <input
                            type="file"
                            name="offer-image"
                            className="w-full p-2 mb-4 border-2  border-gray-500 rounded file:border-none file:bg-green-200 file:text-green-700"
                        />
                        <button  type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded transition-colors duration-200">Create Offer</button>
                    </form>
                    </div>
                </div>
            )}
        </div>
        </>
    );
}
