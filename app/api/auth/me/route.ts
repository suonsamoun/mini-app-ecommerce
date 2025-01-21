import { getSession } from '@/app/utils/session';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const userData = {
    id: session.userId,
    email: "user@example.com",
    name: "John Doe"
  };

  return NextResponse.json(userData);
}