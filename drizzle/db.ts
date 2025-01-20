import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@/drizzle/schema";
import { Pool } from "pg";

export const client = new Pool({
    connectionString: process.env.DATABASE_URL!,
});

export const db = drizzle(client, { schema });