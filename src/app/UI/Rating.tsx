import React, { useState } from "react";

type ratingProp = {
  Rating: number[];
  blogRating: number;
};
const Rating = ({ Rating, blogRating }: ratingProp) => {
  // const [rating, setRating] = useState<number>(destinationDetail.rating);
  const [rating, setRating] = useState<number>(blogRating);
  const handleRating = (num: number) => {
    setRating(num);
  };

  return (
    <>
      <strong>Rating: </strong>
      {Rating.map((num) => (
        <span
          className=" items-center cursor-pointer gap-1 text-yellow-500 text-lg"
          key={num}
          onClick={() => handleRating(num)}
        >
          {num <= rating ? "⭐" : "☆"}
        </span>
      ))}
    </>
  );
};

export default Rating;
