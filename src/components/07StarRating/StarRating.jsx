import React from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

const StarRating = () => {
  const stars = 3.7; // this data can come from api through props

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
        <div  >
      <span  key={index}>
        {stars >= index + 1 ? (
          <div><FaStar /></div> // insted of full star we can render icons
        ) : stars >= number ? (
          <div> <FaRegStarHalfStroke  /></div>
        ) : (
          <div><CiStar /></div>
        )}
      </span>
      </div>
    );
  });
  return <div>i m star rating
    <div className="flex" >
        {ratingStar}
    </div>
  </div>;
};

export default StarRating;
