"use client";
import React from "react";
import AllCards from "./AllCards"; // Card component import kiya
import productData from "../data/products"; // Dummy data (aap API ya real data use kar sakte ho)

const Products: React.FC = () => {
  return (
    <div className="w-full min-h-screen mb-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-28">
        {productData.map((item, index) => (
          <AllCards
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            category={item.category}
            color={item.color}
          />
        ))}
      </div>
      <div className="border-t"></div>

      <div className="mt-14">
        <h3 className="font-medium text-[19px] mb-4 ">Related Categories</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        <button className="= bg-white text-black px-[13px] py-[6px] rounded-full border border-gray-400 text-[12px]">
          Best Selling Products
        </button>
        <button className="= bg-white text-black px-[13px] py-[6px] rounded-full border border-gray-400 text-[12px]">
          Best Shoes
        </button>
        <button className="= bg-white text-black px-[13px] py-[6px] rounded-full border border-gray-400 text-[12px]">
          New Basketball Shoes
        </button>
        <button className="= bg-white text-black px-[13px] py-[6px] rounded-full border border-gray-400 text-[12px]">
          New Football Shoes
        </button>
        <button className="= bg-white text-black px-[13px] py-[6px] rounded-full border border-gray-400 text-[12px]">
          New Men's Shoes
        </button>
        <button className="= bg-white text-black px-[13px] py-[6px] rounded-full border border-gray-400 text-[12px]">
          New Running Shoes
        </button>
        <button className="= bg-white text-black px-[13px] py-[6px] rounded-full border border-gray-400 text-[12px]">
          Best Men's Shoes
        </button>
        <button className="= bg-white text-black px-[13px] py-[6px] rounded-full border border-gray-400 text-[12px]">
          New Jordan Shoes
        </button>
        <button className="= bg-white text-black px-[13px] py-[6px] rounded-full border border-gray-400 text-[12px]">
          Best Women's Shoes
        </button>
        <button className="= bg-white text-black px-[13px] py-[6px] rounded-full border border-gray-400 text-[12px]">
          Best Training & Gym
        </button>
      </div>
    </div>
  );
};

export default Products;
