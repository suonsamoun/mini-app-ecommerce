import {
    pgTable,
    serial,
    text,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import * as zod from "zod";

export const users = pgTable("users", {
    id: serial("id").primaryKey().unique(),
    username: varchar("username", { length: 255 }).notNull(),
    email: text("email").unique(),
    phoneNumber: text("phone_number").unique(),
    password: text("password"),
    avatar: varchar("avatar", { length: 50 }),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});

export const UserSchema = createSelectSchema(users);
export const NewUserSchema = createInsertSchema(users).pick({
    username: true,
    email: true,
    phoneNumber: true,
    password: true
});

export type TUser = zod.infer<typeof UserSchema>;
export type TNewUser = zod.infer<typeof NewUserSchema>;