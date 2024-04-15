import { useContext, useEffect, useState } from "react";
import StarRating from "./ReviewStars";
import { RatingContext } from "../../context/ratingContext";
import fullStarSvg from "../../assets/rating_svg/star.png";

export default function CommentSection({ user, loggeduser }) {
  const { addNewRating, getRatingsForUer, ratings } = useContext(RatingContext);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  //The profile id in the strings should be replaced with the
  //user id that we will get either from params or either from
  //query when we click on him to open this page
  //for testing now i importwd it manually

  const handleWriteComment = (e) => {
    e.preventDefault();
    addNewRating(user._id, rating, comment);
    setComment("");
    setRating(0);
  };

  useEffect(() => {
    getRatingsForUer(user._id);
  }, [user]);

  return (
    <div className="mb-4">
      <div className=" bg-white rounded-[20px] pr-4 pl-4 pt-4 border border-black text-black">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between align-middle mr-20">
          <div>
            <h3 className="text-[28px] uppercase font-semibold ">Reviews</h3>
          </div>

          <StarRating setRating={setRating} />
        </div>

        {user?._id !== loggeduser?._id && (
          <div>
            <form className="flex mb-2" onSubmit={handleWriteComment}>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full h-[50px] bg-white rounded-[50px] outline-none p-2  align-middle border border-black"
                placeholder="Write your comment..."
                style={{ resize: "none" }}
              ></textarea>
              <button
                type="submit"
                className=" text-black py-2 px-4 rounded-[10px]transition duration-300"
              >
                WRITE
              </button>
            </form>
          </div>
        )}
        <div style={{ maxHeight: "20rem", overflowY: "auto" }}>
          {ratings?.map((rating) => (
            <div key={rating._id} className="items-center mb-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {/* Display rater's photo */}
                    {rating.rater.profileImage ? (
                      <img
                        src={rating.rater.profileImage}
                        alt="Rater's Photo"
                        className="w-10 h-10 rounded-full mr-4 object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full mr-4 bg-gray-300"></div>
                    )}
                    {/* Display rater's name */}
                    <p className="font-semibold text-lg">
                      {rating.rater.address.firstname}
                    </p>
                  </div>

                  {/* Display rating with stars */}
                  <div className="flex items-center">
                    {[...Array(rating.ratingNumber)].map((_, index) => (
                      <img
                        key={index}
                        src={fullStarSvg}
                        alt="Full Star"
                        className="w-4 h-4 mr-1"
                      />
                    ))}
                  </div>
                </div>

                {/* Display comment */}
                <div className="mt-2">
                  <p>{rating.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
