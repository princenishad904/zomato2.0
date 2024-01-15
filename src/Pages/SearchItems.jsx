import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
import { IoMdMic } from "react-icons/io";
import SearchBar from "../Components/SearchBar";

const SearchItems = () => {
  return (
    <div className="w-full h-screen absolute top-0 z-10 py-4">
      <div className="flex items-center justify-center gap-4">
        <NavLink to={"/"}>
          <button className="text-2xl">
            <GoArrowLeft />
          </button>
        </NavLink>
        <SearchBar />
        <button className="text-2xl">
          <IoMdMic />
        </button>
      </div>
    </div>
  );
};

export default SearchItems;
