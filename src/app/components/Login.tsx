import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFFFFF] px-4">
      <div className=" p-6 w-full max-w-sm">
        {/* Nike Logo */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
            alt="Nike Logo"
            className="h-6 mb-4"
          />
          <h2 className="text-[18px] font-bold text-[#111111] text-center leading-tight">
            YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
          </h2>
        </div>

        {/* Form Inputs */}
        <form>
          <input
            type="email"
            placeholder="Email address"
            className="w-full py-2 px-3 border border-[#E5E5E5] rounded-sm mb-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full py-2 px-3 border border-[#E5E5E5] rounded-sm mb-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Keep me signed in + Forgot password */}
          <div className="flex items-center justify-between text-[12px] mb-6 mt-3">
            <label className="flex items-center text-[#8D8D8D] ">
              <input type="checkbox" className="mr-2" />
              Keep me signed in
            </label>
            <a href="#" className="text-[#BCBCBC] hover:underline">
              Forgotten your password?
            </a>
          </div>

          {/* Terms and Privacy Statement */}
          <p className="text-[12px] text-[#8D8D8D] text-center mb-6">
            By logging in, you agree to Nike’s{" "}
            <a href="#" className="underline">
              Privacy Policy <br />{" "}
            </a>
            and{" "}
            <a href="#" className="underline">
              Terms of Use
            </a>
            .
          </p>

          {/* Sign In Button */}
          <button className="w-full bg-[#000000] text-[11px] text-white py-3 hover:bg-gray-800 transition">
            SIGN IN
          </button>
        </form>

        {/* Join Us Link */}
        <p className="text-center text-[11px] text-[#8D8D8D] mt-4">
          Not a Member?{" "}
          <a href="#" className="text-[#111111] font-semibold hover:underline">
            Join Us.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
