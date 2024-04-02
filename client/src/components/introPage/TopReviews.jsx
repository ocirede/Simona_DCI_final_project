import { useContext, useEffect } from "react";
import fullStarSvg from "../../assets/rating_svg/star.png";
import { RatingContext } from "../../context/ratingContext";

export default function TopReviews() {
  const { bestRatedComments, getBestRatedComments } = useContext(RatingContext);
  useEffect(() => {
    getBestRatedComments();
  }, []);
  return (
    <div className="bg-cobaltBlue pb-4 rounded-2xl">
      <h2 className="uppercase text-[40px] mb-5 mt-10 pt-4 text-center">
        Top Reviews
      </h2>
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
