import React from "react";

const Essentials = () => {
  return (
    <div className="bg-[#FFFFFF] p-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">
        The Essentials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Men's Section */}
        <div className="relative group">
          <div className="h-[250px] sm:h-[300px] lg:h-[400px] w-full bg-gray-200 overflow-hidden">
            <img
              src="/images/men.png"
              alt="Men's Essentials"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 text-xs sm:text-sm rounded-full font-medium shadow-md group-hover:shadow-lg">
            Men's
          </button>
        </div>

        {/* Women's Section */}
        <div className="relative group">
          <div className="h-[250px] sm:h-[300px] lg:h-[400px] w-full bg-gray-200 overflow-hidden">
            <img
              src="/images/women.png"
              alt="Women's Essentials"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 text-xs sm:text-sm rounded-full font-medium shadow-md group-hover:shadow-lg">
            Women's
          </button>
        </div>

        {/* Kids' Section */}
        <div className="relative group">
          <div className="h-[250px] sm:h-[300px] lg:h-[400px] w-full bg-gray-200 overflow-hidden">
            <img
              src="/images/kids.png"
              alt="Kids' Essentials"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 text-xs sm:text-sm rounded-full font-medium shadow-md group-hover:shadow-lg">
            Kids'
          </button>
        </div>
      </div>
    </div>
  );
};

export default Essentials;