import React, { useState, useEffect } from "react";
import logo from "../../assets/zomato_image.png";
import SearchBar from "../SearchBar";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ shadow }) => {
  const [bars, setBars] = useState(<FaBars />);

  return (
    <nav
      className={`w-full sticky bg-white z-30 top-0 h-16 flex justify-between px-12 max-md:px-2 items-center ${
        shadow ? "shadow-md" : null
      } `}
    >
      <div className="w-28">
        <img src={logo} alt="logo" />
      </div>
      <div className="w-2/5 max-sm:hidden">
        <SearchBar />
      </div>
      <div className="flex items-center">
        <Link to={"/search"}>
          <button className="hidden max-sm:block text-2xl">
            <IoSearchOutline />
          </button>
        </Link>
        <button
          className="hidden max-md:block text-2xl mx-4 transition"
          onClick={() => setBars(!bars)}
        >
          {bars ? <FaBars /> : <RxCross1 />}
        </button>
      </div>
      <div
        className={`max-md:absolute max-md:top-14 max-md:left-0 max-md:bg-gray-100 max-md:w-48 max-md:h-screen max-md:flex max-md:flex-col max-md:gap-4 max-md:p-4 ${
          bars ? "myCollapse" : "myCollapse2"
        }`}
      >
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
