import React from "react";

const Categories = () => {
  return (
    <div className="flex justify-center py-6 bg-[#FFFFFF] mt-8 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 text-left">
        {/* Icons */}
        <div>
          <h3 className="text-[15px] font-medium mb-7">Icons</h3>
          <ul className="space-y-4 text-[15px] font-medium text-[#757575]">
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>

        {/* Shoes */}
        <div>
          <h3 className="text-[15px] font-medium mb-7">Shoes</h3>
          <ul className="space-y-4 text-[15px] font-medium text-[#757575]">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>

        {/* Clothing */}
        <div>
          <h3 className="text-[15px] font-medium mb-7">Clothing</h3>
          <ul className="space-y-4 text-[15px] font-medium text-[#757575]">
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>

        {/* Kids' */}
        <div>
          <h3 className="text-[15px] font-medium mb-7">Kids'</h3>
          <ul className="space-y-4 text-[15px] font-medium text-[#757575]">
            <li>Infant & Toddler Shoes</li>
            <li>Kids' Shoes</li>
            <li>Kids' Jordan Shoes</li>
            <li>Kids' Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
