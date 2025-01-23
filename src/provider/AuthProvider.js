"use client";

import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

export const AuthProvider = ({ children }) => {
    return <KindeProvider
        clientId={process.env.KINDE_CLIENT_ID}
        clientSecret={process.env.KINDE_CLIENT_SECRET}
        domain={process.env.KINDE_ISSUER_URL}
        siteUrl={process.env.KINDE_SITE_URL}
        redirectUri={process.env.KINDE_POST_LOGIN_REDIRECT_URL}
        logoutRedirectUri={process.env.KINDE_POST_LOGOUT_REDIRECT_URL}
    >{children}</KindeProvider>;
};