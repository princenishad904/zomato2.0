import React from "react";
import logo from "../../assets/zomato_image.png";
import SearchBar from "../SearchBar";

const Navbar = () => {
  return (
    <nav className="w-full h-16 sticky flex justify-between px-12 max-md:px-2 items-center">
      <div className="w-28">
        <img src={logo} alt="logo" />
      </div>
      <div className="w-2/5">
        <SearchBar />
      </div>
      <div>
        <button className="text-center py-1 px-3 rounded bg-red-500 text-white mx-2 border border-red-500 hover:bg-red-600">
          Login
        </button>
        <button className="text-center py-1 px-3 rounded border border-red-500 mx-2 hover:bg-red-300">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
