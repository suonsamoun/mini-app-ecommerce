"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../types";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {

  return (
    <section className="no-scrollbar my-3 flex flex-1 flex-col overflow-y-auto px-2.5 mb-2">
      <div className="flex flex-col space-y-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
