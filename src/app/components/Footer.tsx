import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-[11px] bg-[#111111] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between mb-8 space-y-8 lg:space-y-0">
          {/* Grid Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-[#ffffff]">
            {/* Left Section */}
            <div>
              <ul className="space-y-4">
                <li className="hover:underline">FIND A STORE</li>
                <li className="hover:underline">BECOME A MEMBER</li>
                <li className="hover:underline">SIGN UP FOR EMAIL</li>
                <li className="hover:underline">Send Us Feedback</li>
                <li className="hover:underline">STUDENT DISCOUNTS</li>
              </ul>
            </div>

            {/* Middle Section */}
            <div>
              <h3 className="mb-6">GET HELP</h3>
              <ul className="space-y-4 text-[#7E7E7E]">
                <li className="hover:underline">Order Status</li>
                <li className="hover:underline">Delivery</li>
                <li className="hover:underline">Returns</li>
                <li className="hover:underline">Payment Options</li>
                <li className="hover:underline">
                  Contact Us On Nike.com Inquiries
                </li>
                <li className="hover:underline">
                  Contact Us On All Other Inquiries
                </li>
              </ul>
            </div>

            {/* Right Section */}
            <div>
              <h3 className="mb-6">ABOUT NIKE</h3>
              <ul className="space-y-4 text-[#7E7E7E]">
                <li className=" hover:underline">News</li>
                <li className=" hover:underline">Careers</li>
                <li className=" hover:underline">Investors</li>
                <li className=" hover:underline">Sustainability</li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-start space-x-6">
            <FaTwitter className="w-6 h-6 text-[#7E7E7E] hover:text-[#474747] cursor-pointer" />
            <FaFacebookF className="w-6 h-6 text-[#7E7E7E] hover:text-[#474747] cursor-pointer" />
            <FaYoutube className="w-6 h-6 text-[#7E7E7E] hover:text-[#474747] cursor-pointer" />
            <FaInstagram className="w-6 h-6 text-[#7E7E7E] hover:text-[#474747] cursor-pointer" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-600 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="flex items-center text-[#7E7E7E]">
              <FaMapMarkerAlt className="mr-2 text-white" /> India © 2023 Nike,
              Inc. All Rights Reserved
            </p>
            <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-[#7E7E7E]">
              <li className="hover:underline">Guides</li>
              <li className="hover:underline">Terms of Sale</li>
              <li className="hover:underline">Terms of Use</li>
              <li className="hover:underline">Nike Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
