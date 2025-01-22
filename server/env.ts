import zod from 'zod'

const envSchema = zod.object({
    MMS_API_TOKEN_GATEWAY_URL: zod.string().nonempty(),
    API_TOKEN_GATEWAY_GRANT_TYPE: zod.string().nonempty(),
    API_TOKEN_GATEWAY_CLIENT_ID: zod.string().nonempty(),
    API_TOKEN_GATEWAY_CLIENT_SECRET: zod.string().nonempty(),
});

export const env = envSchema.parse(process.env);