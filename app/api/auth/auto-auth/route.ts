import { NextResponse } from "next/server"
import { db } from "@/drizzle/db"
import { users } from "@/drizzle/schema"
import { eq } from "drizzle-orm"

export async function POST(request: Request) {
  try {
    const { phone } = await request.json()

    if (!phone) {
      return NextResponse.json({ error: "Phone required" }, { status: 400 })
    }

    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.phone, phone))
      .limit(1)

    if (existingUser.length > 0) {
      return NextResponse.json({
        success: true,
        phone,
        password: existingUser[0].password
      })
    }

    const defaultPassword = phone.slice(-6)
    
    const [newUser] = await db
      .insert(users)
      .values({
        phone,
        password: defaultPassword,
        username: `user_${phone.slice(-4)}`,
        email: null,
        avatar: null
      })
      .returning()

    return NextResponse.json({
      success: true,
      phone,
      password: defaultPassword
    })
  } catch (error) {
    console.error('Auto-auth error:', error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}