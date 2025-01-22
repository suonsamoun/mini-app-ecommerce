'use server'

import { env } from "./env";

export async function LoginWithCore() {
    try {
        const response = await fetch(env.MMS_API_TOKEN_GATEWAY_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:  new URLSearchParams({
                grant_type: env.API_TOKEN_GATEWAY_GRANT_TYPE,
                client_id: env.API_TOKEN_GATEWAY_CLIENT_ID,
                client_secret: env.API_TOKEN_GATEWAY_CLIENT_SECRET
            }).toString()
        });
       
        if (response.status == 200) {
            return await response.json();
        }
        return null;
        
    } catch (error) {
        console.log(error);
        return null
    }
}