import { db } from "./db";
import { users } from "./schema";


async function seed() {
    await db.insert(users).values([]);

    console.log('Seeding completed');
}

seed().catch((err) => {
    console.error('Seeding failed', err);
});