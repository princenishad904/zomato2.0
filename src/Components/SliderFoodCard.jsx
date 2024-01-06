import React from "react";

const SliderFoodCard = ({ name }) => {
  return (
    <div className="w-36 max-sm:w-28  truncate inline-block mx-4">
      <div className="w-36 overflow-hidden border h-36  max-sm:w-28 max-sm:h-28 rounded-full">
        <img
          src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
          alt=""
        />
      </div>
      <h2 className="text-center text-xl">{name}</h2>
    </div>
  );
};

export default SliderFoodCard;
