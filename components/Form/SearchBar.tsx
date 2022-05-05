import React from "react";

interface Props {
  placeholder: string;
  searchData: () => void;
  extraClass : string;
  setSearch : (e : any) => void;
}

const SearchBar = ({ placeholder, searchData, extraClass, setSearch }: Props) => {
  return (
      <div className={`flex outline outline-2 w-full rounded items-center md:hover:outline-yellow-600 focus:outline-yellow-600 ${extraClass}`}>
        <input
          className="w-full pl-5 rounded h-11 outline-none"
          placeholder={placeholder}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex items-center w-max">
          <button
            onClick={searchData}
            className="bg-white px-5 rounded -ml-2 h-11"
          >
            <img src="search.png" alt="Search Icon" />
          </button>
        </div>
      </div>
  );
};

export default SearchBar;
