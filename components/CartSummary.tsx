"use client";

import React from "react";
import { useCart } from "@/components/CartProvider";

export default function CartSummary() {
  const { totalPrice, totalCount } = useCart();

  return totalCount > 0 && (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold text-gray-800">Cart Summary</h2>
      <div className="mt-2 flex justify-between">
        <span className="text-sm font-medium text-gray-600">Total Items:</span>
        <span className="text-sm font-semibold">{totalCount}</span>
      </div>
      <div className="mt-2 flex justify-between">
        <span className="text-sm font-medium text-gray-600">Total Price:</span>
        <span className="text-sm font-semibold">${totalPrice}</span>
      </div>
      <div className="mx-2.5 mt-2 flex space-x-2 justify-center items-center">
        <button className="rounded-md w-full text-xs bg-[#ff8e00] py-2 font-semibold text-white">
          Pay (USD) 
        </button> 
        <button className="rounded-md w-full text-xs bg-[#ff8e00] py-2 font-semibold text-white">
          Pay (KHR)
        </button>
      </div>
    </div>
  );
}
