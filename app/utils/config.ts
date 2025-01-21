export const sessionOptions = {
    password: process.env.SECRET_COOKIE_PASSWORD as string,
    cookieName: "iron-session",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 30,
    },
};