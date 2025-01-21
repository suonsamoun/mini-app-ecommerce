import { sessionOptions } from './config';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

export interface SessionData {
  userId?: number;
  userName?: string;
  email?: string;
  phone: string;
  isLoggedIn: boolean;
  refreshToken: string;
  accessToken: string;
}

export async function getSession() {
  const session = await getIronSession<SessionData>(await cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = false;
  }

  return session;
}