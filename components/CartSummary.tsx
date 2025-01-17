"use client";

import React from "react";
import { useCart } from "@/components/CartProvider";

export default function CartSummary() {
  const { totalPrice, totalCount } = useCart();

  return totalCount &&(
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold text-gray-800">Cart Summary</h2>
      <div className="mt-2 flex justify-between">
        <span className="text-sm font-medium text-gray-600">Total Items:</span>
        <span className="text-sm font-semibold">{totalCount}</span>
      </div>
      <div className="mt-2 flex justify-between">
        <span className="text-sm font-medium text-gray-600">Total Price:</span>
        <span className="text-sm font-semibold">${totalPrice.toFixed(2)}</span>
      </div>
      <div className="mx-2.5 mt-2">
        <button className="w-full rounded-md bg-[#ff8e00] py-2 font-semibold text-white">
          Checkout
        </button>
      </div>
    </div>
  );
}
