// components/Card.tsx
import React from "react";

interface AllCardsProps {
  image: string;
  title: string;
  price: number;
  category: string;
  color: number;
}

const AllCards: React.FC<AllCardsProps> = ({
  image,
  title,
  price,
  category,
  color,
}) => {
  return (
    <div className="w-full p-4 flex flex-col items-start">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-auto sm:h-auto lg:h-auto object-contain  mb-4"
      />

      {/* Title, Category And Color */}
      <div className="w-full">
        <div className="mb-2">
          <h3 className="font-medium text-[15px] text-[#111111]">{title}</h3>
          <p className="text-[15px] text-[#757575] w-full">{category}</p>
          <p className="text-[15px] text-[#757575] w-48">{color} Color</p>
        </div>
        {/* Price */}
      </div>
      <p className="text-[15px] text-[#111111] font-medium">₹ {price}</p>
    </div>
  );
};

export default AllCards;
