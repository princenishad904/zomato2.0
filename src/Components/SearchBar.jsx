import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  const data = [
    {
      id: 1,
      title: "pizza",
    },
    {
      id: 4,
      title: "pizza",
    },
    {
      id: 5,
      title: "burger",
    },
    {
      id: 6,
      title: "burger",
    },
    {
      id: 7,
      title: "zampa",
    },
    {
      id: 8,
      title: "bamara",
    },
  ];

  const [searchItem, setSearchItem] = useState("");
  const [userSearch, setUserSearch] = useState([]);

  const searchInput = (e) => {
    let value = e.target.value;
    setSearchItem(value);

    if (value) {
      let filtered = data.filter((f) =>
        f.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
      setUserSearch(filtered);
    } else {
      setUserSearch([]);
    }
  };
  const handleSearch = (name) => {
    setSearchItem(name);
    setUserSearch([]);
  };

  return (
    <div className="shadow-md max-sm:hidden flex rounded-full px-3 items-center border py-1 w-full relative">
      <input
        type="text"
        value={searchItem}
        onChange={searchInput}
        placeholder="Search for restaurant couisine a dish"
        className="outline-none h-8 w-full"
      />

      <button className="text-2xl text-gray-500 w-8 h-8">
        <IoSearchSharp />
      </button>

      <div
        className={`w-full z-20 top-14 h-auto mx-auto rounded-md left-0 border absolute bg-gray-50 shadow-lg ${
          userSearch.length > 0 ? "block" : "hidden"
        }`}
      >
        <ul className="px-2">
          {userSearch.slice(0, 6).map((f) => (
            <li
              className="my-2 cursor-pointer"
              onClick={() => handleSearch(f.title)}
              key={f.id}
            >
              {f.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
