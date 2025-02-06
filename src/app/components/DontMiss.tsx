import React from "react";

const DontMiss = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative w-full bg-white mt-[5em]">
        <h2 className="text-[22px] font-medium">Don't Miss</h2>
      </div>

      {/* Image Section */}
      <div
        className="mt-7 bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]"
        style={{
          backgroundImage: `url('images/dont_miss.png')`,
          backgroundColor: "#fafafa",
        }}
      ></div>

      {/* Content Section */}
      <div className="w-full text-center bg-white py-12">
        <div className="space-y-5 sm:space-y-6 md:space-y-7 max-w-[700px] mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[54px] font-medium whitespace-nowrap">
            FLIGHT ESSENTIALS
          </h1>

          <p className="text-xs sm:text-sm md:text-[15px] text-black leading-relaxed">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6 font-medium">
            <button className="bg-[#111111] text-[#FFFFFF] px-5 py-2 text-xs sm:text-sm md:text-[15px] rounded-full hover:opacity-90">
              Shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DontMiss;
