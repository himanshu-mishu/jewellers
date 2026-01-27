import React, { useContext, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { assets } from "../assets/assets";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-T">
      {/* Filter options */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
          <img
            onClick={() => setShowFilter(!showFilter)}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : "rotate-0"}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* Category filter*/}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden sm:block"}`}
        >
          <p className="font-medium text-sm mb-3">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Men"} /> Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Women"} /> Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Kids"} /> Kids
            </p>
          </div>
        </div>
        {/* Sub Category  */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? "" : "hidden sm:block"}`}
        >
          <p className="font-medium text-sm mb-3">TYPE</p>
          <div className="flex flex-col gap-2 text-sm text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"TopWear"} /> Top
              Wear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"BottomWear"} />{" "}
              Bottom Wear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"WinterWear"} />{" "}
              WinterWear
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
