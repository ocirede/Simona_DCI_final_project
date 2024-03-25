import StarRating from "../ReviewStars";

export default function TopReviews({ reviews }) {
    return (
        <div className="bg-gray-500 pb-4">
            <h2 className="uppercase text-[40px] mb-5 mt-10 pt-4 text-center">Top Reviews</h2>
            {/* {reviews.map((review, index) => (
                <div key={index} className="m-5 flex flex-col items-center text-center">
                    <StarRating rating={review.rating} />
                    <p className="mt-2">{review.comment}</p>
                </div>
            ))} */}
        </div>
    );
}