import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {

  const openWhatsApp = () => {
    const phoneNumber = "918210609471"; // country code + number (no +)
    const message = "Hi, I saw your website and I am interested in job opportunities.";
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className=" font-semibold text-xl text-gray-600">Our Store</p>

          <p className=" text-gray-500">
            Sudha Dairy Indraprashta society <br />
            ward no -2 opposite to tvs showroom
          </p>

          <p className=" text-gray-500">
            Tel: 91+ 8210609471
            <br />
            Email: himanshu.agrl11@gmail.com
          </p>

          <p className=" font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>

          <p className=" text-gray-500">
            Learn more about our teams and job openings.
          </p>

          {/* WhatsApp Button */}
          <button
            onClick={openWhatsApp}
            className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500"
          >
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
