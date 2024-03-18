export default function ProfileImgBgSection() {
    return (
        <div className="relative">  
            <div className="bg-gray-400 lg:mr-[250px] lg:ml-[250px] h-[200px] rounded-bl-[30px] rounded-br-[30px] relative">
                <input type="file" id="backgroundImageInput" className="hidden" accept="image/*" />
                <label htmlFor="backgroundImageInput" className="py-2 px-4 cursor-pointer absolute right-0 text-[22px]"><i className="fa-solid fa-pen-to-square"></i></label>
            </div>
            <div className="flex items-center absolute top-[65%] left-[4%] lg:left-60 lg:ml-10">
                <div className="bg-gray-200 w-[180px] h-[125px] rounded-full mx-auto mb-4 relative overflow-hidden">
                <input type="file" id="profilePictureInput" className="hidden absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*" />
                <label htmlFor="profilePictureInput" className="absolute inset-0 flex items-center justify-center text-gray-600 cursor-pointer">
                    <span className="text-center text-[22px]"><i className="fa-solid fa-pen-to-square"></i></span>
                </label>
                </div>
                <div className="flex gap-4 ml-4 w-full">
                    <div className="relative cursor-pointer" title="Add me">
                        <button className="bg-gray-500 text-white rounded-full py-2 px-3 block mx-auto uppercase"><i className="fa-solid fa-plus"></i></button>
                    </div>
                    <div>
                        <button className="bg-gray-500 text-white rounded-full py-2 px-4 block mx-auto uppercase">Contact</button>
                        </div>
                    <div>
                        <button className="bg-gray-500 text-white rounded-full py-2 px-4 block mx-auto uppercase"><i className="fa-solid fa-arrow-up-from-bracket"></i> Share</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

