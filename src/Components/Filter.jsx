import React from "react";
import { CiFilter } from "react-icons/ci";

const Filter = () => {
  return (
    <div className="w-full sticky top-14 py-1 px-2 flex items-center gap-4 z-10 bg-white">
      <span className="flex border py-2 w-36 px-2 rounded-md items-center gap-4 text-xl ">
        <h3>0</h3>
        Filter
        <CiFilter />
      </span>
      <button className="text-xl border py-2 px-2 rounded-md text-gray-700">
        All
      </button>
      <button className="text-xl border py-2 px-2 rounded-md text-gray-700">
        Rating 4.0+
      </button>
      <button className="text-xl border py-2 px-2 rounded-md text-gray-700">
        Pure veg
      </button>
    </div>
  );
};

export default Filter;
