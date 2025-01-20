import ProductList from "@/components/ProductList";
import CartSummary from "@/components/CartSummary";
import { TProduct } from "@/drizzle/schema/products";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/products`, { cache: "no-store" });
  const { data: products }: { data: TProduct[] } = await res.json();

  return (
    <div className="mx-auto flex h-screen max-w-xs flex-col overflow-hidden bg-[#f6f5fb]">
      <div className="relative mt-1 max-w-xs text-center">Mini E-Commerce</div>
      <ProductList products={products} />
      <CartSummary />
    </div>
  );
}
