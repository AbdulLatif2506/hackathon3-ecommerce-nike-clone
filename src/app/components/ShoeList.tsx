"use client"; // To use React hooks in a Client Component
import React, { useState, useEffect } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts, latest } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";

const ShoeList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(latest);
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
    });
    addToCart(product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-28 ">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 w-full flex flex-col h-full"
          >
            <Link
              href={`/product/${product.slug.current}`}
              className="flex flex-col h-full"
            >
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.productName}
                  width={300}
                  height={300}
                  className="w-full h-auto sm:h-48 lg:h-auto object-cover  mb-4"
                />
              )}
              <div className="w-full flex flex-col flex-grow justify-between">
                <div className="grid grid-cols-3 items-start gap-2 mb-2">
                  <h3 className="font-medium col-span-2 break-words text-[15px]">
                    {product.productName}
                  </h3>
                  <p className="text-[15px] text-right text-[#757575]">
                    {product.price
                      ? `$${product.price}`
                      : "Price Not Available"}
                  </p>
                </div>
                <div>
                  <p className="text-[15px] text-[#757575] w-full">
                    {product.category}
                  </p>

                  <button
                    className="mt-4 w-full bg-gradient-to-r from-[#444040] to-[#111111] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
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
