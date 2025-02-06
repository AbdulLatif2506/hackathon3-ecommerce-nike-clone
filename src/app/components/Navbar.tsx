"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaHeart,
  FaShoppingBag,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* Top Bar */}
      <div className="w-full bg-[#F5F5F5] text-[#111111] text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">
          <img
            src="/images/jordan_logo.png"
            alt="Jordan Logo"
            className="w-5 h-5"
          />

          <div className="hidden sm:flex items-center space-x-4 text-[11px] font-medium">
            <Link href="#" className="hover:underline">
              Find a Store
            </Link>
            <span>|</span>
            <Link href="/contact_us" className="hover:underline">
              Help
            </Link>
            <span>|</span>
            <Link href="/join_us" className="hover:underline">
              Join Us
            </Link>
            <span>|</span>
            <Link href="/login" className="hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl bg-[#FFFFFF] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/">
          <img
            src="/images/nike_logo.png"
            alt="Nike Logo"
            className="w-14 h-auto"
          />
        </Link>
        {/* Center Navigation for Desktop */}
        <nav className="hidden lg:flex space-x-6 text-black text-[16px] font-medium">
          <a href="#" className="hover:underline">
            New & Featured
          </a>
          <a href="#" className="hover:underline">
            Men
          </a>
          <a href="#" className="hover:underline">
            Women
          </a>
          <a href="#" className="hover:underline">
            Kids
          </a>
          <a href="#" className="hover:underline">
            Sale
          </a>
          <a href="#" className="hover:underline">
            SNKRS
          </a>
        </nav>

        {/* Right Side with Icons */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Desktop Search */}
          <div className="relative hidden sm:block w-32 md:w-48">
            <FaSearch className="absolute left-3 top-2.5 text-black w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 text-sm border bg-[#F5F5F5] text-[#CCCCCC] font-medium border-gray-300 rounded-full focus:outline-none focus:border-black"
            />
          </div>

          {/* Icons */}
          <FaHeart className="text-red-500 w-5 h-5 hover:text-red-600 cursor-pointer" />
          <Link href="/cart">
            <FaShoppingBag className="text-orange-400 w-5 h-5 hover:text-orange-600 cursor-pointer" />
          </Link>

          {/* Hamburger Menu */}
          <button
            className="block lg:hidden text-black w-6 h-6"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Search Icon */}
          <button
            className="block sm:hidden text-black w-6 h-6"
            onClick={toggleSearch}
          >
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-300">
          <div className="px-4 py-2 space-y-2">
            <a
              href="#"
              className="block text-[14px] font-medium hover:underline"
            >
              New & Featured
            </a>
            <a
              href="#"
              className="block text-[14px] font-medium hover:underline"
            >
              Men
            </a>
            <a
              href="#"
              className="block text-[14px] font-medium hover:underline"
            >
              Women
            </a>
            <a
              href="#"
              className="block text-[14px] font-medium hover:underline"
            >
              Kids
            </a>
            <a
              href="#"
              className="block text-[14px] font-medium hover:underline"
            >
              Sale
            </a>
            <a
              href="#"
              className="block text-[14px] font-medium hover:underline"
            >
              SNKRS
            </a>
          </div>
          <div className="px-4 py-2 border-t border-gray-300 space-y-2">
            <a
              href="#"
              className="block text-[14px] font-medium hover:underline"
            >
              Find a Store
            </a>
            <Link
              href="/contact_us"
              className="block text-[14px] font-medium hover:underline"
            >
              Help
            </Link>
            <Link
              href="/join_us"
              className="block text-[14px] font-medium hover:underline"
            >
              Join Us
            </Link>
            <Link
              href="/login"
              className="block text-[14px] font-medium hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-0 left-0 w-full bg-white border-b border-gray-300 px-4 py-2 flex items-center">
          <FaSearch className="text-black w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="w-full ml-2 py-2 text-sm border-b bg-transparent text-black font-medium focus:outline-none"
          />
          <button onClick={toggleSearch} className="text-black w-6 h-6 ml-2">
            <FaTimes />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
