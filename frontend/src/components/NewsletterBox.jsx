import React from "react";

const onSubmitHandler = (event) => {
  event.preventDefault();
};

const NewsLetterBox = () => {
  return (
    <div className="text-center">
      <p className="text-2xl  font-medium text-gray-800">
        Subscribe now and get 20% off
      </p>
      <p className="text-gray-400 mt-4">
        Subscribe to our newsletter and receive updates on new products and
        special offers.
      </p>
      <form className="mt-6 flex justify-center mb-6">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none px-4 py-2 border border-gray-300 rounded-l-md "
        />
        <button
          onClick={onSubmitHandler}
          type="submit"
          className="bg-black text-white rounded-r-md text-s px-10 py-4"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
