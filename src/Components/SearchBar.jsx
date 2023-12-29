import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center border border-red-200 py-1 px-2 w-full">
      <input
        type="text"
        placeholder="Search for restaurant couisine a dish"
        className="outline-none"
      />
    </div>
  );
};

export default SearchBar;
