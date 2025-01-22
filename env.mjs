import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        APP_ENV: z.string(),
        DATABASE_URL: z.string().url(),
        SECRET_COOKIE_PASSWORD: z.string().min(1),
        MMS_API_TOKEN_GATEWAY_URL: z.string().url(),
        API_TOKEN_GATEWAY_GRANT_TYPE: z.string().min(1),
        API_TOKEN_GATEWAY_CLIENT_ID: z.string().min(1),
        API_TOKEN_GATEWAY_CLIENT_SECRET: z.string().min(1),
    },
    client: {
        NEXT_PUBLIC_APP_URL: z.string().min(1)
    },
    runtimeEnv: {
        APP_ENV: process.env.APP_ENV,
        DATABASE_URL: process.env.DATABASE_URL,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
        SECRET_COOKIE_PASSWORD: process.env.NEXTAUTH_SECRET,
        MMS_API_TOKEN_GATEWAY_URL: process.env.MMS_API_TOKEN_GATEWAY_URL,
        API_TOKEN_GATEWAY_GRANT_TYPE: process.env.API_TOKEN_GATEWAY_GRANT_TYPE,
        API_TOKEN_GATEWAY_CLIENT_ID: process.env.API_TOKEN_GATEWAY_CLIENT_ID,
        API_TOKEN_GATEWAY_CLIENT_SECRET: process.env.API_TOKEN_GATEWAY_CLIENT_SECRET,
    },
});