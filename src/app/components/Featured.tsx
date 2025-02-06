import React from "react";

const Featured = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative w-full bg-white mt-[5em]">
        <h2 className="text-[22px] font-medium text-center md:text-left">Featured</h2>
      </div>

      {/* Image Section */}
      <div
        className="mt-7 bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]"
        style={{
          backgroundImage: `url('images/featured.png')`,
          backgroundColor: "#fafafa",
        }}
      ></div>

      {/* Content Section */}
      <div className="w-full text-center bg-white py-12 px-4 sm:px-6 md:px-8">
        <div className="space-y-7 max-w-[700px] mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[54px] font-medium lg:whitespace-nowrap leading-tight">
            STEP INTO WHAT FEELS GOOD
          </h1>

          <p className="text-sm sm:text-base md:text-[15px] text-black">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>

          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-6 font-medium">
            <button className="bg-[#111111] text-[#FFFFFF] px-5 py-2 text-sm md:text-[15px] rounded-full hover:opacity-90">
              Find Your Shoe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;