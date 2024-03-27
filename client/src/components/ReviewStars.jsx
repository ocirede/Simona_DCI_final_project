import { useState, useEffect, useContext } from "react";
import starSvg from "../assets/rating_svg/star1.png";
import fullStarSvg from "../assets/rating_svg/star.png";
import { RatingContext } from "../context/ratingContext";

export default function StarRating({ setRating }) {
  const { ratings } = useContext(RatingContext);
  const [localRating, setLocalRating] = useState(0);

  useEffect(() => {
    setLocalRating(0);
  }, [ratings]);

  const handleRatingChange = (value) => {
    setLocalRating(value);
    setRating(value);
  };

  return (
    <div className="flex space-x-2 items-center justify-start">
      {[1, 2, 3, 4, 5].map((value) => (
        <img
          key={value}
          src={value <= localRating ? fullStarSvg : starSvg}
          alt={value <= localRating ? "Full Star" : "Empty Star"}
          className="w-8 h-8 cursor-pointer"
          onClick={() => handleRatingChange(value)}
        />
      ))}
    </div>
  );
}
