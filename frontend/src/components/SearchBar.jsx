import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  return showSearch ? (
    <div className="border-t border-b bg-gray-5 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-1 bg-inherit text-sm outline-none"
        />
        <img
          src={assets.search_icon}
          alt="search"
          className="w-4 cursor-pointer"
        />
      </div>
      <img
        src={assets.cross_icon}
        alt="close"
        className="w-4 inline cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
