import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://princenishad904.github.io/prortfolio_projects_v1_api/zomato_api.json"
      );

      const food = await res.json();

      setData(food);
    })();
  }, []);

  const [searchItem, setSearchItem] = useState("");
  const [userSearch, setUserSearch] = useState([]);

  const searchInput = (e) => {
    let value = e.target.value;
    setSearchItem(value);

    if (value) {
      let filtered = data.filter((f) =>
        f.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
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
    <div className="shadow-md  flex rounded-full px-3 items-center border py-1 w-full relative">
      <input
        type="text"
        value={searchItem}
        autoF
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
              onClick={() => handleSearch(f.name)}
              key={f.id}
            >
              <div className="flex items-center gap-4">
                <img
                  src={f.poster}
                  alt=""
                  className="w-16 object-cover h-16 rounded-md"
                />
                {f.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
