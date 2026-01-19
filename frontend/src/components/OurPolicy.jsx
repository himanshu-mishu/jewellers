import React from "react";
import exchangeIcon from "../assets/exchange_icon.png";
import { assets } from "../assets/assets";
const OurPolicy = () => {
  return (
    <div className="flex flex-col sd:flex-row justify-around items-center gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img
          src={assets.exchange_icon}
          alt="Exchange Icon"
          className="w-12  m-auto mb-5"
        />
        <p className="font-semibold">Exchange Policy</p>
        <p className="text-gray-400">
          We offer a hassle-free exchange within 30 days of purchase.
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
