import fullStarSvg from "../../assets/rating_svg/star.png";

export default function TopReviews({ reviews }) {

  return (
    <div className="bg-cobaltBlue pb-4 pt-4 rounded-[30px] border-1 border-black border mr-[10px] ml-[10px] lg:mr-[80px] lg:ml-[80px] border-b-8">
      {reviews?.map((review, index) => (
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
