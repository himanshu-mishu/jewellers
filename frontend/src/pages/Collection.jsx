import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(category.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(subCategory.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };
  const applyFilter = () => {
    let productsCopy = products.slice();
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }

    setFilteredProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filteredProducts.slice();

    switch (sortType) {
      case "low-high":
        fpCopy.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        fpCopy.sort((a, b) => b.price - a.price);
        break;
      case "relevant":
        applyFilter();
        return;
    }

    setFilteredProducts(fpCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products]);

  useEffect(() => {
    {
      sortProduct();
    }
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter options */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
          <img
            onClick={() => setShowFilter(!showFilter)}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : "rotate-0"}`}
            src={assets.dropdown_icon}
            alt="Toggle filter"
          />
        </p>
        {/* Category filter*/}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "block" : "hidden sm:block"}`}
        >
          <p className="font-medium text-sm mb-3">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        {/* Sub Category  */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? "" : "hidden sm:block"}`}
        >
          <p className="font-medium text-sm mb-3">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />{" "}
              Top Wear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />{" "}
              Bottom Wear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />{" "}
              WinterWear
            </p>
          </div>
        </div>
      </div>
      {/* Products grid */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* product sort */}
         <div className="relative inline-block">
  <select
    onChange={(e) => setSortType(e.target.value)}
    className="border border-gray-300 px-3 py-2 pr-8 text-sm rounded appearance-none bg-white"
  >
    <option value="relevant">Sort by: Relevant</option>
    <option value="low-high">Sort by: Low to High</option>
    <option value="high-low">Sort by: High to Low</option>
  </select>

  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-xs">
    ▼
  </span>
</div>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-8">
          {filteredProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item.id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
