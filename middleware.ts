import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { sessionOptions } from './app/utils/config';
import { getIronSession } from 'iron-session';
import { SessionData } from './app/utils/session';

export async function middleware(request: NextRequest) {
  const session = await getIronSession<SessionData>(request, NextResponse.next(), sessionOptions);


  console.log(session);

  if (!session.isLoggedIn && request.nextUrl.pathname.startsWith('/api/me')) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.next();
}


export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|signin).*)'],
};
