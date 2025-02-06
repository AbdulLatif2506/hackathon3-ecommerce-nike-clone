import React from "react";
import { ShoppingCart } from "lucide-react";

const ProductDetails = () => {
  return (
    <div className="flex items-center justify-center bg-[#FFFFFF]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center max-w-6xl w-full bg-[#FFFFFF] mt-32 mb-64">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-start">
          <img
            src="/images/product.png"
            alt="Nike Air Force 1"
            className="w-full lg:w-1/2 flex justify-start"
          />
        </div>

        {/* Product Details Section */}
        <div className="w-full lg:w-1/2 text-[#111111] flex flex-col justify-start lg:pl-16  mt-6 lg:mt-0 text-left">
          <h1 className="text-[44px] font-medium leading-none md:text-[48px]">Nike Air Force 1</h1>
          <h2 className="text-[44px] font-medium md:text-[48px]">PLT.AF.ORM</h2>

          <p className="text-[#111111] text-[15px] mt-4 max-w-md">
            Turn style on its head with this crafted take on the Air Jordan 1
            Mid. Its "inside out"-inspired construction, including unique
            layering and exposed foam accents, ups the ante on this timeless
            Jordan Brand silhouette. Details like the deco stitching on the
            Swoosh add coveted appeal, while the unexpected shading, rich
            mixture of materials and aged midsole aesthetic give this release an
            artisan finish.
          </p>

          <p className="text-[36px] font-medium mt-6">₹ 8,695.00</p>

          <button className="mt-4 text[15px] flex items-center gap-2 bg-[#111111] text-[#FFFFFF] px-5 py-2 rounded-full font-medium hover:bg-[#323233] transition w-[160px]">
            <ShoppingCart size={20} /> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
