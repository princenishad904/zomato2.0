import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { IoIosArrowUp } from "react-icons/io";

const Layout = ({ children }) => {
  const [shadow, setShadow] = useState(false);
  window.addEventListener("scroll", () => {
    let scrollTracker = pageYOffset;

    if (scrollTracker > 300) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  });
  return (
    <>
      <Navbar shadow={shadow} />
      <main style={{ minHeight: "85vh" }}>
        {children}
        <button
          onClick={() => scrollTo(0, 0)}
          className={`w-14 h-14 bg-red-500 fixed right-5 bottom-5 rounded-full ${
            shadow ? "block" : "hidden"
          } text-white text-3xl grid place-items-center max-md:h-10 max-md:w-10 max-md:text-xl`}
        >
          <IoIosArrowUp />
        </button>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
