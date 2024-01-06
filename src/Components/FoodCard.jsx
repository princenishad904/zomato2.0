import React from "react";
import { IoIosStar } from "react-icons/io";
import { PiCurrencyInr } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";

const FoodCard = () => {
  return (
    <div className="w-80  hover:shadow-xl transition p-3 rounded-xl border">
      <div className="w-full h-56  border overflow-hidden rounded-2xl relative">
        <img
          src="https://b.zmtcdn.com/data/pictures/3/19842503/cfcfa8172a1d862820076c271c07d2a2_o2_featured_v2.jpg"
          alt=""
          className="h-full object-cover"
        />
        <span className="py-0 px-4 bg-blue-500 text-white absolute top-3 rounded-r-lg">
          50% of
        </span>
      </div>
      <div className="w-full flex justify-between items-center gap-4 my-2">
        <h2 className="w-4/5 truncate text-ellipsis text-xl text-gray-500">
          Pizza 2
        </h2>
        <span className="bg-green-600 text-white w-14 grid grid-cols-2 px-1 place-items-center rounded ">
          4.5 <IoIosStar />
        </span>
      </div>
      <div className="w-full flex justify-between items-center gap-4 text-gray-500">
        <h2 className=" truncate text-ellipsis text-md ">Gorakhapur's pizza</h2>
        <h3 className="flex items-center ">
          <PiCurrencyInr /> 150 for one
        </h3>
      </div>
      <h3 className="flex items-center gap-1 text-md text-gray-500 ">
        <CiDeliveryTruck className="text-xl" /> 15 min
      </h3>
    </div>
  );
};

export default FoodCard;
