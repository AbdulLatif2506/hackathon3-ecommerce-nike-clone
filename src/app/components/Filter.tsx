"use client";
import React from "react";
import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";

const Filter = () => {
  const [filtersVisible, setFiltersVisible] = useState(true);

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex items-center justify-between px-4 py-2 w-full mt-14">
      <h2 className="text-[24px] font-medium">New (500)</h2>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setFiltersVisible(!filtersVisible)}
          className="flex items-center gap-1 text-[16px] text-gblack hover:text-gray-600"
        >
          {filtersVisible ? "Hide Filters" : "Show Filters"}
          <SlidersHorizontal size={16} />
        </button>
        <button className="flex items-center gap-1 text-[16px] text-black hover:text-gray-600">
          Sort By <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default Filter;
