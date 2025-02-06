import React from "react";
import { FiTruck } from "react-icons/fi";

const Checkout = () => {
  return (
    <div className="max-w-4xl mb-32 mx-auto p-6 text-[#111111] grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Section */}
      <div>
        {/* Heading & Info */}
        <h2 className="text-[21px] font-medium">
          How would you like to get your order?
        </h2>
        <p className="text-[15px] text-[#757575] mt-2">
          Customs regulation for India require a copy of the recipient's KYC.
          The address on the KYC needs to match the shipping address. Our
          courier will contact you via SMS/email to obtain a copy of your KYC.
          The KYC will be stored securely and used solely for the purpose of
          clearing customs (including sharing it with customs officials) for all
          orders and returns. If your KYC does not match your shipping address,
          please click the link for more information.{" "}
          <a href="#" className="underline">
            Learn More
          </a>
        </p>

        {/* Delivery Option */}
        <button className="mt-6 text-[15px] flex items-center gap-5 border-2 border-[#111111] p-6 rounded-lg w-full">
          <FiTruck className="text-[20px]" /> Deliver it
        </button>

        {/* Name & Address */}
        <h3 className="text-[21px] font-medium mt-8">
          Enter your name and address:
        </h3>
        <input
          type="text"
          placeholder="First Name"
          className="w-full border p-4 mt-7 rounded-md"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full border p-4 mt-7 rounded-md"
        />
        <input
          type="text"
          placeholder="Address Line 1"
          className="w-full border p-4 mt-7 rounded-md"
        />
        <input
          type="text"
          placeholder="Address Line 2"
          className="w-full border p-4 mt-7 rounded-md"
        />
        <input
          type="text"
          placeholder="Address Line 3"
          className="w-full border p-4 mt-7 rounded-md"
        />
        <div className="flex gap-4 mt-7">
          <input
            type="text"
            placeholder="Postal Code"
            className="w-1/2 border p-4 rounded-md"
          />
          <input
            type="text"
            placeholder="Locality"
            className="w-1/2 border p-4 rounded-md"
          />
        </div>
        <div className="flex gap-4 mt-7">
          <select className="w-1/2 border p-4 rounded-md">
            <option>State/Territory</option>
          </select>
          <select className="w-1/2 border p-4 rounded-md">
            <option>India</option>
          </select>
        </div>
        <div className="mt-7">
          <input type="checkbox" id="save-address" />
          <label htmlFor="save-address" className="ml-2 text-[15px]">
            Save this address to my profile
          </label>
        </div>
        <div className="mt-7">
          <input type="checkbox" id="preferred-address" />
          <label htmlFor="preferred-address" className="ml-2 text-[15px]">
            Make this my preferred address
          </label>
        </div>

        {/* Contact Info */}
        <h3 className="text-[21px] font-medium mt-8">
          What’s your contact information?
        </h3>
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-4 mt-4 rounded-md"
        />
        <p className="text-xs mt-1 pl-4 text-[#757575]">
          A confirmation email will be sent after checkout.
        </p>
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border p-4 mt-3 rounded-md"
        />
        <p className="text-xs mt-1 pl-4 text-[#757575]">
          A carrier might contact you to confirm delivery.
        </p>

        {/* PAN Section */}
        <h3 className="text-[21px] font-medium mt-8">What’s your PAN?</h3>
        <input
          type="text"
          placeholder="PAN"
          className="w-full border p-4 mt-4 rounded-md"
        />
        <p className="text-xs mt-1 pl-4 text-[#757575]">
          Enter your PAN to enable payment with UPI, Net Banking or local card
          methods.
        </p>
        <div className="mt-2">
          <input type="checkbox" id="save-pan" />
          <label htmlFor="save-pan" className="pl-5 text-[11px] text-[#757575]">
            Save PAN details to Nike Profile
          </label>
        </div>
        <div className="mt-8 leading-tight ">
          <input type="checkbox" id="consent" />
          <label
            htmlFor="consent"
            className="pl-5 text-[12px] text-[#757575]  "
          >
            I have read and consent to shipworld processing my information in
            accordance with the{" "}
            <a href="#" className="underline">
              Privacy Statement
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Cookie Policy
            </a>
            .
          </label>
        </div>

        {/* Continue Button */}
        <button className="mt-16 bg-[#F5F5F5] text-[#757575] text-[15px] font-medium w-full py-4 rounded-full">
          Continue
        </button>

        <div className="mt-7 border-t">
          <h3 className="text-[21px] font-medium mt-4">Delivery</h3>
          <p className="text-[21px] text-[#757575] font-medium mt-8 pt-3 border-t">
            Shipping
          </p>
          <p className="text-[21px] text-[#757575] font-medium mt-8 pt-3 border-t">
            Billing
          </p>
          <p className="text-[21px] text-[#757575] font-medium mt-8 pt-3 border-t">
            Payement
          </p>
        </div>
      </div>

      {/* Right Section - Order Summary */}
      <div className="px-10">
        <h3 className="text-[21px] font-medium">Order Summary</h3>
        <p className="flex text-[#757575] text-[15px] justify-between mt-4">
          <span>Subtotal</span>
          <span>₹ 20,890.00</span>
        </p>
        <p className="flex text-[#757575] text-[15px] justify-between mt-2">
          <span>Delivery/Shipping</span>
          <span>Free</span>
        </p>
        <hr className="my-4" />
        <p className="flex justify-between font-medium text-[15px]">
          <span>Total</span>
          <span>₹ 20,890.00</span>
        </p>
        <hr className="my-4" />
        <p className="text-[9px] text-[#111111]">
          (The total reflects the price of your order, including all duties and
          taxes)
        </p>
        <h3 className="text-[15px] font-bold mt-4">
          Arrives Mon, 27 Mar - Wed, 12 Apr
        </h3>
        <div className="mt-4 flex flex-col md:flex-row gap-3">
          <img src="/images/ultra.png" alt="" width="208px" />
          <div className="flex flex-col">
            <p className="text-[14px] leading-6">
              Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top
            </p>
            <p className="text-[#8D8D8D] text-[14px]">
              Qty 1 <br /> Size L <br /> ₹ 3,895.00
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-col md:flex-row gap-3">
          <img src="/images/max_97.png" alt="" width="208px" />
          <div className="flex flex-col">
            <p className="text-[14px] leading-6">
            Nike Air Max 97 SE Men's Shoes
            </p>
            <p className="text-[#8D8D8D] text-[14px]">
              Qty 1 <br /> Size UK 8 <br /> ₹ 16,995.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
