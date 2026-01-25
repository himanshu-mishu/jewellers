import React from "react";
import { assets } from "../assets/assets.js";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 mt-24 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section */}
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm">
          {/* Brand */}
          <div>
            <img src={assets.logo} alt="logo" className="w-32 mb-5" />
            <p className="text-gray-600 leading-relaxed md:w-2/3">
              Discover timeless elegance with our handcrafted jewellery, ethnic
              wear, and designs—crafted to celebrate every moment.
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="font-medium text-gray-900 mb-4">Company</p>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">About Us</li>
              <li className="hover:text-black cursor-pointer">Delivery</li>
              <li className="hover:text-black cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="font-medium text-gray-900 mb-4">Support</p>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-black cursor-pointer">
                +1-22-33485884
              </li>
              <li className="hover:text-black cursor-pointer">
                Forever@design.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © {year} Jewellers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
