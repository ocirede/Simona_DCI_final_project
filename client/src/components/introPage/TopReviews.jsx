import { useContext, useEffect } from "react";
import fullStarSvg from "../../assets/rating_svg/star.png";
import { RatingContext } from "../../context/ratingContext";

export default function TopReviews() {
  const { bestRatedComments, getBestRatedComments } = useContext(RatingContext);
  useEffect(() => {
    getBestRatedComments();
  }, []);
  return (

    <div className="m-2 bg-cobaltBlue pb-4 rounded-[30px] border-black rounded-[30px] border-b-8 md:text-[20px] lg:text-[28px] pt-6">
      {bestRatedComments?.map((review, index) => (
        <div key={index} className="m-5 flex flex-col items-center text-center">
          <div className="flex items-center">
            {[...Array(review.ratingNumber)].map((_, index) => (
              <img
                key={index}
                src={fullStarSvg}
                alt="Full Star"
                className="w-6 h-6 mr-1"
              />
            ))}
          </div>
          <p className="mt-2 text-white">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
