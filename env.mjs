import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        APP_ENV: z.string(),
        NEXTAUTH_URL: z.string().url().optional(),
        NEXTAUTH_SECRET: z.string().min(1)
    },
    client: {
        NEXT_PUBLIC_APP_URL: z.string().min(1)
    },
    runtimeEnv: {
        APP_ENV: process.env.APP_ENV,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL
    },
});