"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Sidebar: React.FC = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    gender: true,
    kids: true,
    price: true,
  });
  const [priceRange, setPriceRange] = useState<[number, number]>([2500, 5000]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="w-64 py-4 min-h-screen">
      <ul className=" text-[15px] font-medium">
        {[
          "Shoes",
          "Sports Bras",
          "Tops & T-Shirts",
          "Hoodies & Sweatshirts",
          "Jackets",
          "Trousers & Tights",
          "Shorts",
          "Tracksuits",
          "Jumpsuits & Rompers",
          "Skirts & Dresses",
          "Socks",
          "Accessories & Equipment",
        ].map((item, index) => (
          <li key={index} className="py-1 cursor-pointer hover:underline">
            {item}
          </li>
        ))}
      </ul>

      {["Gender", "Kids", "Shop By Price"].map((section, index) => (
        <div key={index} className="mt-4 border-t pt-2">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection(section.toLowerCase())}
          >
            <h3 className="font-semibold text-sm">{section}</h3>
            {openSections[section.toLowerCase()] ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </div>
          {openSections[section.toLowerCase()] && (
            <ul className="mt-2 space-y-1 text-sm">
              {section === "Gender" &&
                ["Men", "Women", "Unisex"].map((item) => (
                  <li key={item} className="flex items-center">
                    <input type="checkbox" className="mr-2" /> {item}
                  </li>
                ))}
              {section === "Kids" &&
                ["Boys", "Girls"].map((item) => (
                  <li key={item} className="flex items-center">
                    <input type="checkbox" className="mr-2" /> {item}
                  </li>
                ))}
              {section === "Shop By Price" && (
                <div className="mt-2">
                  <Slider
                    range
                    min={0}
                    max={10000}
                    step={100}
                    value={priceRange}
                    onChange={(value) =>
                      setPriceRange(value as [number, number])
                    }
                  />
                  <div className="text-xs mt-2">
                    ₹ {priceRange[0]} - ₹ {priceRange[1]}
                  </div>
                </div>
              )}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
