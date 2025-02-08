"use client"; // To use React hooks in a Client Component
import React, { useState, useEffect } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts, gearUp, latest } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "../actions/actions";
import { ChevronDown, ChevronUp } from "lucide-react";
import Swal from "sweetalert2";

const Products = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
      gender: true,
      kids: true,
      price: true,
    });
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [priceRange, setPriceRange] = useState<number>(50000);
  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
      setProducts(fetchedProduct);
      setFilteredProducts(fetchedProduct);
    }
    fetchProduct();
  }, []);

  useEffect(()=>{
    const filtered = products.filter( product => product.price <= priceRange); 
    setFilteredProducts(filtered);
  },[priceRange, products])

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      // position: "top-right",
      icon: "success",
      title: `${product.productName} Added to Cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  const handlePriceRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(e.target.value))
  }

  return (
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6">
      {/* Sidebar */}
      <div className="w-full lg:w-64 py-4 min-h-screen">
        <ul className="text-[15px] font-medium">
          {["Shoes", "Sports Bras", "Tops & T-Shirts", "Hoodies & Sweatshirts", "Jackets", "Trousers & Tights", "Shorts", "Tracksuits", "Jumpsuits & Rompers", "Skirts & Dresses", "Socks", "Accessories & Equipment"].map((item, index) => (
            <li key={index} className="py-1 cursor-pointer hover:underline">
              {item}
            </li>
          ))}
        </ul>

        {["Gender", "Kids", "Shop By Price"].map((section, index) => (
          <div key={index} className="mt-4 border-t pt-2">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSection(section.toLowerCase())}>
              <h3 className="font-semibold text-sm">{section}</h3>
              {openSections[section.toLowerCase()] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {openSections[section.toLowerCase()] && (
              <ul className="mt-2 space-y-1 text-sm">
                {section === "Gender" && ["Men", "Women", "Unisex"].map((item) => (
                  <li key={item} className="flex items-center">
                    <input type="checkbox" className="mr-2" /> {item}
                  </li>
                ))}
                {section === "Kids" && ["Boys", "Girls"].map((item) => (
                  <li key={item} className="flex items-center">
                    <input type="checkbox" className="mr-2" /> {item}
                  </li>
                ))}
                {section === "Shop By Price" && (
                  <div className="mt-2">
                    <input type="range" min={0} max={50000} value={priceRange} onChange={handlePriceRange} className="w-full" />
                    <div className="text-xs mt-2">$0 - ${priceRange}</div>
                  </div>
                )}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-28 w-full">
        {filteredProducts.map((product) => (
          <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 flex flex-col h-full">
            <Link href={`/product/${product.slug.current}`} className="flex flex-col h-full">
              {product.image && (
                <Image src={urlFor(product.image).url()} alt={product.productName} width={300} height={300} className="w-full h-auto object-cover mb-4" />
              )}
              <div className="w-full flex flex-col flex-grow justify-between">
                <div className="grid grid-cols-3 items-start gap-2 mb-2">
                  <h3 className="font-medium col-span-2 break-words text-[15px]">{product.productName}</h3>
                  <p className="text-[15px] text-right text-[#757575]">{product.price ? `$${product.price}` : "Price Not Available"}</p>
                </div>
                <div>
                  <p className="text-[15px] text-[#757575] w-full">{product.category}</p>
                  <button className="mt-4 w-full bg-gradient-to-r from-[#444040] to-[#111111] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out" onClick={(e) => handleAddToCart(e, product)}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
