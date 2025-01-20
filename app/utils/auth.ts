import { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { db } from "@/drizzle/db"
import { users } from "@/drizzle/schema"
import { eq } from "drizzle-orm"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { label: "Phone", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {

        if (!credentials?.phone || !credentials?.password) {
          throw new Error("Phone and password required")
        }

        const user = await db
          .select()
          .from(users)
          .where(eq(users.phone, credentials.phone))
          .limit(1)
          .then(res => res[0])

        if (!user || user.password !== credentials.password) {
          throw new Error("Invalid credentials")
        }

        return {
          phone: user.phone,
          username: user.username,
          email: user.email,
          avatar: user.avatar
        } as User;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.phone = user.phone
        token.username = user.username
        token.email = user.email
        token.avatar = user.avatar
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          phone: token.phone,
          username: token.username,
          email: token.email as string,
          avatar: token.avatar
        }
      }
      return session
    }
  }
}