import { pgTable, serial, text, numeric } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import * as zod from "zod";

export const products = pgTable("products", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    description: text("description").notNull(),
    price: numeric("price", { precision: 10, scale: 2 }).notNull(),
    image: text("image"),
});

export const ProductSchema = createSelectSchema(products);

export type TProduct = zod.infer<typeof ProductSchema>;