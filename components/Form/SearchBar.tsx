import React from "react";

interface Props {
  placeholder: string;
  extraClass : string;
  setSearch : (e : any) => void;
}

const SearchBar = ({ placeholder, extraClass, setSearch }: Props) => {
  return (
      <div className={`flex outline outline-2 w-full rounded items-center md:hover:outline-yellow-600 focus:outline-yellow-600 ${extraClass}`}>
        <input
          className="w-full pl-5 rounded h-11 outline-none"
          placeholder={placeholder}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
  );
};

export default SearchBar;
