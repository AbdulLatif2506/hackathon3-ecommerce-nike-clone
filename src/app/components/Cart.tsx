"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Image from "next/image";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "The item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to checkout",
      text: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been placed!", "success");
        setCartItems([]);
      }
    });
  };

  return (
    <div className="bg-[#FFFFFF] text-[#111111] min-h-screen p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      <div className="space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item._id} className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.productName}
                    width={500}
                    height={500}
                    className="w-32 h-32 object-cover"
                  />
                )}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{item.productName}</h3>
                  <p className="text-sm text-[#757575]">{item.category}</p>
                  <p className="text-md font-semibold text-[#757575]">Price: ${item.price}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-200 rounded-md">{item.inventory}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 mt-4 sm:mt-0"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center text-xl font-semibold">
            <h2>Total:</h2>
            <p>${calculateTotal().toFixed(2)}</p>
          </div>
          <button
            onClick={handleProceed}
            className="mt-6 bg-[#111111] text-[#FFFFFF] text-lg font-medium w-full py-3 rounded-lg hover:bg-[#8D8D8D]"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
