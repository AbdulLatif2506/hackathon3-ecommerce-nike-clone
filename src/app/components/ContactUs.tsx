import React from "react";
import {
  FaPhoneAlt,
  FaRegCommentDots,
  FaEnvelope,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";

const ContactUs = () => {
  return (
    <div className="bg-[#FFFFFF] text-[#111111] font-sans mt-10 pb-10 border-[1px] border-[#000000]">
      {/* Top Header */}
      <div className="text-center text-[#111111] text-[32px] font-medium leading-none">
        GET HELP
      </div>
      {/* Top Search Bar */}
      <div className="p-6 flex items-center justify-center">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-full text-black text-[15px] px-3 py-4 pl-12 rounded-md focus:outline-none border border-[#757575]"
          />
          <AiOutlineSearch className="absolute left-4 top-[18px] text-[#757575] text-2xl" />
        </div>
      </div>
      {/* Main Content */}
      <div className="p-6 md:p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 ">
        {/* Payment Options Section */}
        <div>
          <h2 className="text-[28px] font-medium mb-6">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>
          <p>We accept the following payment options:</p>
          <p className="font-semibold mt-2">
            Visa, Mastercard, Diners Club, Discover, American Express, Visa
            Electron, Maestro
          </p>
          <p className="mt-2">
            If you enter your PAN information at checkout, you can pay with
            PayTM or a local credit/debit card.
          </p>
          <p className="mt-2 font-semibold">Apple Pay</p>
          <p className="mt-2">
            <span className="font-medium underline">Nike Members</span> can
            store multiple debit or credit cards in their profile for faster
            checkout.
            <a href="#" className="font-medium underline">
              {" "}
              Join us
            </a>{" "}
            today.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-[#111111] text-[#FFFFFF] text-[16px] px-5 py-2 font-medium rounded-full">
              JOIN US
            </button>
            <button className="bg-[#111111] text-[#FFFFFF] text-[16px] px-5 py-2 font-medium rounded-full">
              SHOP NIKE
            </button>
          </div>
          {/* FAQ Section */}
          <h3 className="text-[20px] font-medium mt-8">FAQs</h3>
          <div className="mt-4 space-y-6">
            <div>
              <p className="font-bold text-[16px]">
                Does my card need international purchases enabled?
              </p>
              <p>
                Yes, we recommend asking your bank to enable international
                purchases on your card. You will be notified at checkout if
                international purchases need to be enabled.
              </p>
            </div>
            <div>
              <p className="font-bold text-[16px]">
                Can I pay for my order with multiple methods?
              </p>
              <p>
                No, payment for Nike orders can't be split between multiple
                payment methods.
              </p>
            </div>
            <div>
              <p className="font-bold text-[16px]">
                What payment method is accepted for SNKRS orders?
              </p>
              <p>
                You can use any accepted credit card to pay for your SNKRS
                order.
              </p>
            </div>
            <div>
              <p className="font-bold text-[16px]">
                Why don’t I see Apple Pay as an option?
              </p>
              <p>
                To see Apple Pay as an option in the Nike App or on Nike.com,
                you’ll need to use a compatible Apple device running the latest
                OS, be signed into your iCloud account, and have a supported
                card in your Wallet. Additionally, you’ll need to use Safari to
                use Apple Pay on Nike.com.
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <p className="">Was this answer helpful?</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaThumbsUp className="text-xl cursor-pointer" />
            <FaThumbsDown className="text-xl cursor-pointer" />
          </div>
          <div className=" pt-6 text-[16px] font-medium space-y-2">
            <h4 className="text-[#757575] ">RELATED</h4>
            <p className="underline ml-8">WHAT ARE NIKE'S DELIVERY OPTIONS?</p>
            <p className="underline ml-8">
              HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
            </p>
          </div>
        </div>
        {/* Contact Section */}
        <div className="px-6 border-l border-[#E5E5E5]">
          <h2 className="text-[28px] font-medium mb-6">CONTACT US</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-2xl" />
              <p>
                <span className="font-medium">000 800 919 0566</span>
                <br />
                Products & Orders: 24 hours a day,
                <br /> 7 days a week
              </p>
            </div>
            <div className="flex items-start gap-4">
              <FaRegCommentDots className="text-2xl" />
              <p>
                <span className="font-medium"> 24 hours a day</span>
                <br /> 7 days a week
              </p>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-2xl" />
              <p>
                <span className="font-medium">We'll reply within</span>
                <br /> five business days
              </p>
            </div>
            <div className="flex items-start gap-4">
              <IoLocationSharp className="text-2xl" />
              <p>
                <span className="font-medium">STORE LOCATOR</span>
                <br /> Find Nike retail stores near you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
