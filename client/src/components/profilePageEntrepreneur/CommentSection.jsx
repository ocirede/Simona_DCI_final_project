import StarRating from "../ReviewStars"

export default function CommentSection() {
    return (
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
    );
}


