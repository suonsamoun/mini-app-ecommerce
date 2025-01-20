import { NextResponse } from "next/server";
import { db } from "@/drizzle/db";
import { products } from "@/drizzle/schema";

export async function GET() {
    try {

        const productList = await db.select().from(products);

        return NextResponse.json({ data: productList });
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}
