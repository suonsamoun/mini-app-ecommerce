import { db } from "./db";
import { products } from "./schema";

async function seed() {
    try {
        await db.delete(products);
        await db.insert(products).values([
            {
                "name": "EverydayElite Essential Collection",
                "description": "A high-quality product for everyday use.",
                "price": "10",
                "image": "https://placehold.co/600x400"
            },
            {
                "name": "ModernFlex Lifestyle Series",
                "description": "Stylish and functional product for modern needs.",
                "price": "20",
                "image": "https://placehold.co/600x400"
            },
            {
                "name": "OutdoorPro Adventure Gear",
                "description": "Durable and reliable, perfect for outdoor activities.",
                "price": "30",
                "image": "https://placehold.co/600x400"
            },
            {
                "name": "CompactLux Premium Edition",
                "description": "Compact design with premium features.",
                "price": "25",
                "image": "https://placehold.co/600x400"
            },
            {
                "name": "ValueCraft Signature Series",
                "description": "Affordable product with exceptional quality.",
                "price": "15",
                "image": "https://placehold.co/600x400"
            },
            {
                "name": "EcoVital Sustainable Collection",
                "description": "Eco-friendly product for sustainable living.",
                "price": "18",
                "image": "https://placehold.co/600x400"
            },
            {
                "name": "TravelLite Voyager Series",
                "description": "Lightweight and easy to carry for travelers.",
                "price": "22",
                "image": "https://placehold.co/600x400"
            },
            {
                "name": "TechVantage Innovation Pro",
                "description": "Advanced features for tech enthusiasts.",
                "price": "35",
                "image": "https://placehold.co/600x400"
            },
            {
                "name": "DailyComfort+ Lifestyle Collection",
                "description": "Comfortable and stylish for daily use.",
                "price": "28",
                "image": "https://placehold.co/600x400"
            },
            {
                "name": "ProMaster Elite Series",
                "description": "Top choice for professionals.",
                "price": "40",
                "image": "https://placehold.co/600x400"
            },
            {
                "name": "CraftPrecision Artisan Collection",
                "description": "Crafted with precision and attention to detail.",
                "price": "32",
                "image": "https://placehold.co/600x400"
            },
            {
                "name": "LuxeSelect Premium Collection",
                "description": "A luxurious product for a premium experience.",
                "price": "50",
                "image": "https://placehold.co/600x400"
            },
            {
                "name": "InnovaMax Performance Plus",
                "description": "Innovative design for maximum efficiency.",
                "price": "27",
                "image": "https://placehold.co/600x400"
            },
            {
                "name": "VersaFlex Essential Plus",
                "description": "Compact, versatile, and affordable.",
                "price": "19",
                "image": "https://placehold.co/600x400"
            },
            {
                "name": "GiftMaster Deluxe Edition",
                "description": "Perfect for gifting on special occasions.",
                "price": "45",
                "image": "https://placehold.co/600x400"
            },
            {
                "name": "DuraPro Premium Series",
                "description": "Premium quality materials for durability.",
                "price": "33",
                "image": "https://placehold.co/600x400"
            },
            {
                "name": "DIYMaster Craft Collection",
                "description": "A must-have for hobbyists and DIY enthusiasts.",
                "price": "38",
                "image": "https://placehold.co/600x400"
            },
            {
                "name": "ComfortMax Performance Elite",
                "description": "Designed for maximum comfort and performance.",
                "price": "29",
                "image": "https://placehold.co/600x400"
            },
            {
                "name": "ExpertChoice Professional Series",
                "description": "Highly recommended by experts in the field.",
                "price": "42",
                "image": "https://placehold.co/600x400"
            },
            {
                "name": "TrustPro Heritage Collection",
                "description": "A trusted brand with a strong reputation.",
                "price": "55",
                "image": "https://placehold.co/600x400"
            }
        ]);

        console.log("Seeding completed");
    } catch (err) {
        console.error("Seeding failed", err);
    }
}

seed();
