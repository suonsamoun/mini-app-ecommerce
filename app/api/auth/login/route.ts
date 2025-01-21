import { getSession } from '@/app/utils/session';
import { NextResponse } from 'next/server';


export async function POST(request: Request) {
  try {
    const session = await getSession();
    const { email, password } = await request.json();

    if (email === "user@example.com" && password === "password") {
      session.userId = 1;
      session.isLoggedIn = true;

      await session.save();

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
