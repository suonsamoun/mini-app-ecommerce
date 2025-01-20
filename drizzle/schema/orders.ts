import { pgTable, serial, integer, numeric } from "drizzle-orm/pg-core";
import { products } from "./products";
import { users } from "./users";


export const orders = pgTable("orders", {
    id: serial("id").primaryKey(),
    productId: integer("product_id")
        .notNull()
        .references(() => products.id),
    userId: integer("user_id")
        .notNull()
        .references(() => users.id),
    quantity: integer("quantity").notNull().default(1),
    totalPrice: numeric("total_price", { precision: 10, scale: 2 }).notNull(),
});