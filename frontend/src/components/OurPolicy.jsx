import React from "react";
import exchangeIcon from "../assets/exchange_icon.png";
import { assets } from "../assets/assets";
const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
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
      <div>
        <img
          src={assets.quality_icon}
          alt="Exchange Icon"
          className="w-12  m-auto mb-5"
        />
        <p className="font-semibold">7 days return Policy</p>
        <p className="text-gray-400">
          We accept returns within 7 days of delivery for a full refund.
        </p>
      </div>
      <div>
        <img
          src={assets.support_img}
          alt="Exchange Icon"
          className="w-12  m-auto mb-5"
        />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">
          Our support team is available 24/7 to assist you with any queries.
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
