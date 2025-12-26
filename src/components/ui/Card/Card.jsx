import React from "react";

const Card = ({ img, title, brand, price, rating, reviews, status }) => {
  return (
    <div className="w-96.5">
      <img src={img} alt={title} />

      <div className="w-84 mt-3 p-5">
        <div className="flex justify-between">
          <div>
            <h3 className="text-[20px]">{title}</h3>
            <p className="text-[12px] text-black/50">{brand}</p>
          </div>
          <div>Rating: {rating}</div>
        </div>

        <p className="text-[12px]">({reviews}) Customer Reviews</p>

        <div className="flex justify-between">
          <p>${price}</p>
          <p className="text-[10px] text-red-500">{status}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
