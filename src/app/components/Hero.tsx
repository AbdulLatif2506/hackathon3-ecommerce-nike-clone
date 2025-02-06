import React from "react";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Image Section */}
      <div
        className="bg-cover bg-center bg-no-repeat h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]"
        style={{
          backgroundImage: `url('images/hero.png')`,
          backgroundColor: "#fafafa",
        }}
      ></div>

      {/* Content Section */}
      <div className="w-full text-center bg-white py-12 px-4 sm:px-6 md:px-8">
        <div className="space-y-4 max-w-[700px] mx-auto">
          <h4 className="text-xs sm:text-sm font-medium tracking-wide">
            First Look
          </h4>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[56px] font-medium leading-tight">
            NIKE AIR MAX PULSE
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          </p>
          <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
            —designed to push you past your limits and help you go to the max.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-6 font-medium">
            <button className="bg-[#111111] text-[#FFFFFF] px-5 py-2 text-sm md:text-[15px] rounded-full hover:opacity-90">
              Notify Me
            </button>
            <button className="bg-[#111111] text-[#FFFFFF] border border-black px-5 py-2 text-sm md:text-[15px] rounded-full hover:opacity-90">
              Shop Air Max
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
