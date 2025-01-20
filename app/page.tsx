import ProductList from "@/components/ProductList";
import { Product } from "../types";
import CartSummary from "@/components/CartSummary";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/products", { cache: "no-store" });
  const { data: products }: { data: Product[] } = await res.json();

  return (
    <div className="mx-auto flex h-screen max-w-xs flex-col overflow-hidden bg-[#f6f5fb]">
      <div className="relative mt-1 max-w-xs text-center">Mini E-Commerce</div>
      <ProductList products={products} />
      <CartSummary />
    </div>
  );
}
