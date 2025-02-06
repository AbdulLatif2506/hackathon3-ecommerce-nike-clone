// components/Card.tsx
import React from "react";

interface CardProps {
  image: string;
  title: string;
  price: number;
  category: string;
}

const Card: React.FC<CardProps> = ({ image, title, price, category}) => {
  return (
    <div className="w-full p-4 flex flex-col items-start">
      {/* Image */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-auto sm:h-48 lg:h-auto object-contain  mb-4"
      />
      
      {/* Title and Price */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium text-[15px]">{title}</h3>
          <p className="text-[15px]">₹ {price}</p>
        </div>
        {/* Category */}
        <p className="text-[15px] text-[#757575] w-full">{category}</p>
      </div>
    </div>
  );
};

export default Card;
