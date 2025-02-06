"use client"; // To use React hooks in a Client Component
import React, { useState, useEffect } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts, four } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";

const ShoeList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(four);
      setProducts(fetchedProduct);
    }
    fetchProduct();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      // position: "top-right",
      icon: "success",
      title: `${product.productName} Added to Cart`,
      showConfirmButton: false,
      timer: 1000,
    })
    addToCart(product);
    
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[5em]">
      <h2 className="text-[22px] font-medium ">Our Latest Produts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 w-full flex flex-col items-start"
          >
            <Link href={`/product/${product.slug.current}`}>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.productName}
                  width={300}
                  height={300}
                  className="w-full h-auto sm:h-48 lg:h-auto object-cover  mb-4"
                />
              )}
              <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-[15px]">
                    {product.productName}
                  </h3>
                  <p className="text-[15px] text-[#757575]">
                    {product.price ? `$${product.price}` : "Price Not Available"}
                  </p>
                </div>
                <div>
                  <p className="text-[15px] text-[#757575] w-full">
                    {product.category}
                  </p>
                  <button
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
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

export default ShoeList;
