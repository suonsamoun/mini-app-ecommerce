import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        APP_ENV: z.string(),
        DATABASE_URL: z.string().url(),
        SECRET_COOKIE_PASSWORD: z.string().min(1),
    },
    client: {
        NEXT_PUBLIC_APP_URL: z.string().min(1)
    },
    runtimeEnv: {
        APP_ENV: process.env.APP_ENV,
        DATABASE_URL: process.env.DATABASE_URL,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
        SECRET_COOKIE_PASSWORD: process.env.NEXTAUTH_SECRET,
    },
});