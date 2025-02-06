"use client"; // To use React hooks in a Client Component
import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card from "./Card";

interface Clothing {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
}

const clothing: Clothing[] = [
  {
    id: 1,
    image: "/images/ultra.png",
    title: "Nike Dri-FIT ADV TechKnit Ultra",
    category: "Men's Short-Sleeve Running Top",
    price: 3895,
  },
  {
    id: 2,
    image: "/images/challenger.png",
    title: "Nike Dri-FIT Challenger",
    category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    price: 2495,
  },
  {
    id: 3,
    image: "/images/division.png",
    title: "Nike Dri-FIT ADV Run Division",
    category: "Women's Long-Sleeve Running Top",
    price: 5295,
  },
  {
    id: 4,
    image: "/images/fast.png",
    title: "Nike Fast",
    category: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
    price: 3795,
  },
  {
    id: 5,
    image: "/images/ultra.png",
    title: "Nike Dri-FIT ADV TechKnit Ultra",
    category: "Men's Short-Sleeve Running Top",
    price: 3895,
  },
  {
    id: 6,
    image: "/images/challenger.png",
    title: "Nike Dri-FIT Challenger",
    category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    price: 2495,
  },
];

const GearUp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3); // Default to 3 items for large screens

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(3); // Large screens
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2); // Tablets
      } else {
        setVisibleItems(1); // Mobile
      }
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Next Slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleItems >= clothing.length ? 0 : prevIndex + visibleItems
    );
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? clothing.length - visibleItems
        : prevIndex - visibleItems
    );
  };

  return (
    <div className="relative w-full bg-white mt-[3em]">
      {/* Header with Arrow Buttons */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[22px] font-medium">Gear Up</h2>
        <div className="flex gap-2">
          <button
            className="bg-white text-black border border-black rounded-full p-2 hover:bg-black hover:text-white transition"
            onClick={prevSlide}
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="bg-white text-black border border-black rounded-full p-2 hover:bg-black hover:text-white transition"
            onClick={nextSlide}
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Shoe Cards */}
      <div className="overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          }}
        >
          {clothing.map((clothe) => (
            <div
              key={clothe.id}
              className={`w-full ${
                visibleItems === 1
                  ? "flex-[1_0_100%]"
                  : visibleItems === 2
                  ? "flex-[1_0_50%]"
                  : "flex-[1_0_33.33%]"
              }`}
            >
              <Card
                image={clothe.image}
                title={clothe.title}
                category={clothe.category}
                price={clothe.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GearUp;
