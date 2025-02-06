"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
        _id,
        productName,
        _type,
        category,
        inventory,
        colors,
        status,
        description,
        image,
        price,
        }`,
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);
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
    <div className="flex items-center justify-center bg-[#FFFFFF]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center max-w-6xl w-full bg-[#FFFFFF] mt-32 mb-64">
        <div className="w-full lg:w-1/2 flex justify-start">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="w-full lg:w-1/2 text-[#111111] flex flex-col justify-start lg:pl-12  mt-6 lg:mt-0 text-left">
          <h1 className="text-[44px] font-medium leading-none md:text-[48px]">
            {product?.productName}
          </h1>
          <p className="text-[#111111] text-[15px] mt-4 max-w-md">
            {product.description}
          </p>
          <p className="text-[36px] font-medium mt-6">$ {product.price}.00</p>
          <button
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold mt-10 end-10 py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Add To Cart
                  </button>
        </div>
      </div>
    </div>
  );
}
