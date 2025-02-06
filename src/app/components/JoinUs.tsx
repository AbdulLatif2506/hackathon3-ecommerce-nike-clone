import React from "react";

const JoinUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFFFFF] px-4 py-8">
      <div className=" p-6 w-full max-w-sm">
        {/* Nike Logo */}
        <div className="flex flex-col items-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
            alt="Nike Logo"
            className="h-4 mb-7"
          />
          <h2 className="text-[18px] text-[#111111] font-bold text-center">
            BECOME A NIKE MEMBER
          </h2>
        </div>

        {/* Description */}
        <p className="text-center text-[14px] text-[#8D8D8D] mb-6">
          Create your Nike Member profile and get <br /> first access to the
          very best of Nike <br />
          products, inspiration and community.
        </p>

        {/* Form Inputs */}
        <form className="text-[14px]">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border border-[#E5E5E5] rounded-[4px] mb-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-[#E5E5E5] rounded-[4px] mb-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 border border-[#E5E5E5] rounded-[4px] mb-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 border border-[#E5E5E5] rounded-[4px] mb-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="date"
            placeholder="Date Of Birth"
            className="w-full px-4 py-2 text-[#8D8D8D] border border-[#E5E5E5] rounded-[4px] mb-1 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <p className="text-[11px] text-[#8D8D8D] text-center mb-4">
            Get a Nike Member Reward every year on your Birthday.
          </p>

          {/* Country Dropdown */}
          <select className="w-full text-[#8D8D8D] px-4 py-2 border border-[#E5E5E5] rounded-[4px] mb-3 focus:outline-none focus:ring-2 focus:ring-black">
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
          </select>

          {/* Gender Selection */}
          <div className="flex gap-2 mb-4 text-[13px] text-[#8D8D8D]">
            <button
              type="button"
              className="w-1/2 p-3 border border-[#E5E5E5] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-black"
            >
              Male
            </button>
            <button
              type="button"
              className="w-1/2 p-3 border border-[#E5E5E5] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-black"
            >
              Female
            </button>
          </div>

          {/* Email Signup Checkbox */}
          <label className="flex items-center text-[11px] text-[#8D8D8D] mb-5">
            <input type="checkbox" className="mr-4" />
            Sign up for emails to get updates from Nike on
            <br /> products, offers and your Member benefits.
          </label>

          {/* Terms and Privacy Statement */}
          <p className="text-[12px] text-[#8D8D8D] text-center mb-6">
            By creating an account, you agree to Nike’s{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            and{" "}
            <a href="#" className="underline">
              Terms of Use
            </a>
            .
          </p>

          {/* Join Us Button */}
          <button className="w-full bg-[#111111] text-[#FFFFFF] text-[15px] py-3 rounded-[4px] hover:bg-gray-800 transition">
            JOIN US
          </button>
        </form>

        {/* Already a Member */}
        <p className="text-center text-[11px] text-[#8D8D8D] mt-4">
          Already a Member?{" "}
          <a href="#" className="text-[#111111] font-medium hover:underline">
            Sign In.
          </a>
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
