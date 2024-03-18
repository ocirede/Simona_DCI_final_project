import { useState } from 'react';

export default function StarRating({ onClick }){
    const [rating, setRating] = useState(0);

    const handleStarClick = (index) => {
        const newRating = index + 1;
        setRating(newRating === rating ? 0 : newRating);
        onClick && onClick(newRating);
    };

    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => (
                <i
                    key={index}
                    className={`fa-solid fa-star cursor-pointer text-[20px] m-1 ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
                    onMouseEnter={() => setRating(index + 1)}
                    onMouseLeave={() => setRating(0)}
                    onClick={() => handleStarClick(index)}
                ></i>
            ))}
        </div>
    );
}
