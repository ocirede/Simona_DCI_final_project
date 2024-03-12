import { useState } from "react";
import StarRating from "../components/ReviewStars";

export default function ProfilePageEntrepreneur() {
    const [formVisibility, setFormVisibility] = useState({
        name: false,
        about: false,
        offer: false,
        tags: false,
    });

    const toggleFormVisibility = (formName) => {
        setFormVisibility({
            ...formVisibility,
            [formName]: !formVisibility[formName],
        });
    };

    return (
        <>
        <div className="bg-gray-400 lg:mr-[250px] lg:ml-[250px] h-[200px] rounded-bl-[30px] rounded-br-[30px] relative">
            <input type="file" id="backgroundImageInput" className="hidden" accept="image/*" />
            <label htmlFor="backgroundImageInput" className="py-2 px-4 cursor-pointer absolute right-0 text-[22px]"><i className="fa-solid fa-pen-to-square"></i></label>
        </div>
        <div className="mx-auto p-6 relative lg:ml-[230px] lg:mr-[230px] md:ml-[50px] md:mr-[50px]"> 
            <div className="flex items-center absolute top-[-7%] lg:top-[-8.4%] lg:ml-10">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 relative overflow-hidden">
                <input type="file" id="profilePictureInput" className="hidden absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*" />
                <label htmlFor="profilePictureInput" className="absolute inset-0 flex items-center justify-center text-gray-600 cursor-pointer">
                    <span className="text-center text-[22px]"><i className="fa-solid fa-pen-to-square"></i></span>
                </label>
                </div>
                <div className="flex gap-6 ml-4">
                    <button className="bg-gray-500 text-white rounded-md py-2 px-4 mb-4 block mx-auto uppercase">Contact</button>
                    <button className="bg-gray-500 text-white rounded-md py-2 px-4 mb-4 block mx-auto uppercase">Share Link</button>
                </div>
            </div>
            <div>
            {/* User Name or Title Section */}
            <div className="text-center mb-4 mt-4 lg:text-left lg:mt-10 mt-10">
                {formVisibility.name ? (
                    <div className="flex">
                    <div className="h-[90px] bg-transparent w-1/2"></div>
                    <form className="h-[90px] bg-gray-500 rounded-[15px] w-1/2 text-[12px] pt-2 pr-4 pl-4">
                        <input
                            type="text"
                            className="mt-2 bg-transparent border-b border-gray-300 focus:outline-none w-full"
                            placeholder="User's Name or Title"
                        />
                        <div className="flex mt-2">
                            <button className="mr-2 bg-gray-400 text-white rounded-md py-1 px-4">Save</button>
                            <button className="bg-gray-400 text-white rounded-md py-1 px-4">Delete</button>
                        </div>
                    </form>
                    </div>
                ) : (
                    <div className="flex">
                        <div className="h-[50px] bg-transparent w-1/2"></div>
                        <div className="h-[50px] bg-gray-500 rounded-[15px] w-1/2 text-[12px] pt-2">
                        <h1
                            className="text-[20px] font-bold cursor-pointer text-center" 
                            onClick={() => toggleFormVisibility('name')}
                        >
                            Name / Title
                        </h1>
                        </div>
                    </div>
                )}
            </div>
            {/* About Section */}
            <div className="lg:flex gap-4">
            <div className="mb-4 lg:w-1/2 order-1">
                {formVisibility.about ? (
                    <form className="h-[150px] bg-gray-500 rounded-[20px] pr-4 pl-4 pt-4">
                        <input
                            type="text"
                            className="mt-2 bg-transparent border-b border-gray-300 focus:outline-none w-full"
                            placeholder="About"
                        />
                        <div className="flex mt-2">
                            <button className="mr-2 bg-gray-400 text-white rounded-md py-1 px-4">Save</button>
                            <button className="bg-gray-400 text-white rounded-md py-1 px-4">Delete</button>
                        </div>
                    </form>
                ) : (
                    <div className="h-[150px] bg-gray-500 rounded-[20px] flex justify-between">
                    <h2
                        className="text-[28px] uppercase font-semibold cursor-pointer pl-4 pt-2"
                        onClick={() => toggleFormVisibility('about')}
                    >
                        About
                    </h2>
                    <i className="fa-solid fa-pen-to-square text-[28px] pr-4 pt-3 cursor-pointer" onClick={() => toggleFormVisibility('about')}></i>
                    </div>
                )}
            </div>
            {/* Offers Section */}
            <div className="lg:w-1/2">
                <div className="mb-4">
                    {formVisibility.offer ? (
                        <form className="h-[150px] bg-gray-500 rounded-[20px] pr-4 pl-4 pt-4">
                            <input
                                type="text"
                                className="mt-2 bg-transparent border-b border-gray-300 focus:outline-none w-full"
                                placeholder="Offer/Posts"
                            />
                            <div className="flex mt-2">
                                <button className="mr-2 bg-gray-400 text-white rounded-md py-1 px-4">Save</button>
                                <button className="bg-gray-400 text-white rounded-md py-1 px-4">Delete</button>
                            </div>
                        </form>
                    ) : (
                        <div className="h-[150px] bg-gray-500 rounded-[20px] flex justify-between">
                        <h2
                            className="text-[28px] uppercase font-semibold cursor-pointer pl-4 pt-2"
                            onClick={() => toggleFormVisibility('offer')}
                        >
                            Offers
                        </h2>
                        <i className="fa-solid fa-pen-to-square text-[28px] pr-4 pt-3 cursor-pointer" onClick={() => toggleFormVisibility('offer')}></i>
                        </div>
                    )}
                </div>
                {/* Tags Section */}
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
            </div>
            </div>
            {/* Comment section */}
            <div className="mb-4">
                <div className="h-[250px] bg-gray-500 rounded-[20px] pr-4 pl-4 pt-4">
                    <div className="flex justify-between items-center">
                        <div className="mb-8">
                        <StarRating />
                        </div>
                        <div>
                            <div
                                contentEditable="true"
                                className="mt-2 bg-transparent border-b border-gray-300 focus:outline-none w-[150px] mr-2"
                                placeholder="Write your comment here..."
                            ></div>
                            <div className="flex mt-2 justify-end">
                                <button className="mr-2 bg-gray-400 text-white rounded-md py-1 px-4">Post</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[28px] uppercase font-semibold">Comment section</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
    );
}

