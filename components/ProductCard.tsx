"use client";

import React from "react";
import { Product } from "../types";
import { useCart } from "./CartProvider";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, incrementQuantity, decrementQuantity, getQuantity } = useCart();
  const quantity = getQuantity(product.id);

  return (
    <div className="rounded-lg border p-4 shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="h-32 w-full object-cover rounded-md mb-4"
      />
      <h3 className="text-lg">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <p className="text-lg font-semibold mt-2">${product.price.toFixed(2)}</p>
      {quantity > 0 ? (
        <div className="flex items-center space-x-2 mt-2">
          <button
            onClick={() => decrementQuantity(product.id)}
            className="px-2 py-1 bg-red-500 text-white rounded-md"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => incrementQuantity(product.id)}
            className="px-2 py-1 bg-green-500 text-white rounded-md"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="mt-2 w-full bg-[#ff8e00] text-white py-2 rounded-md"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
