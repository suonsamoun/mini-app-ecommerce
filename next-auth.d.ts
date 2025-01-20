import type { DefaultSession, DefaultUser } from "next-auth"
import { JWT } from "next-auth/jwt"

interface UserPayload {
    username: string | null
    email: string | null
    phone: string | null
    avatar: string | null
    access_token: string;
    refresh_token: string;
}

declare module "next-auth" {
    interface Session {
        user: UserPayload & DefaultSession["user"]
    }

    interface User extends UserPayload { }
}

declare module "next-auth/jwt" {
    interface JWT extends UserPayload { }
}