import StarRating from "../ReviewStars";

export default function TopReviews({ reviews }) {
    return (
        <div className="m-2 bg-cobaltBlue pb-4 flex flex-col justify-center items-center border border-1 border-black rounded-[30px] shadow-md p-8">
            {/* <h2 className="uppercase text-[40px] mb-5 mt-10 pt-4 text-center">Top Reviews</h2> */}
            {/* {reviews.map((review, index) => (
                <div key={index} className="m-5 flex flex-col items-center text-center">
                    <StarRating rating={review.rating} />
                    <p className="mt-2">{review.comment}</p>
                </div>
            ))} */}
            {/* replace later with actual info */}
            <div className="flex gap-2 mb-4">
                <img src="/star.png" alt="star" className="w-[30px]"></img>
                <img src="/star.png" alt="star" className="w-[30px]"></img>
                <img src="/star.png" alt="star" className="w-[30px]"></img>
                <img src="/star.png" alt="star" className="w-[30px]"></img>
                <img src="/star_empty.png" alt="star" className="w-[30px]"></img>
            </div>
            <p className="text-center md:text-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.</p>
        </div>
    );
}