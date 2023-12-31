import React, { useReducer, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import SliderFoodCard from "./SliderFoodCard";

const Slider = ({ children }) => {
  const handleScroll = useRef();
  function scrollFun(state, action) {
    switch (action.type) {
      case "LEFT":
        return handleScroll.current.scrollBy(-180, 0);

      case "RIGHT":
        return handleScroll.current.scrollBy(180, 0);
    }
  }

  let [state, dispatch] = useReducer(scrollFun, "LEFT");
  return (
    <div className="w-full bg-slate-100 py-4">
      <div className="w-4/5 max-md:w-11/12  mx-auto relative">
        <h1 className="text-3xl max-sm:text-xl">
          Inspiration for your first order
        </h1>
        <button
          onClick={() => dispatch({ type: "LEFT" })}
          className="absolute top-28 max-sm:top-24 left-0 h-8 w-8 border bg-white shadow-xl z-10 rounded-full grid place-items-center text-xl "
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => dispatch({ type: "RIGHT" })}
          className="absolute top-28 max-sm:top-24 right-0 h-8 w-8 border bg-white shadow-xl z-10 rounded-full grid place-items-center text-xl "
        >
          <IoIosArrowForward />
        </button>
        <div
          ref={handleScroll}
          className="w-full whitespace-nowrap overflow-x-scroll scroll-smooth relative p-3 horizantalscroll mt-4"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Slider;
