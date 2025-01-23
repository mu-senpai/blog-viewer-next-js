"use client";

import { LoginLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useState } from "react";

export default function ProfilePage() {
    const { user } = useKindeBrowserClient();
    const [loading, setLoading] = useState(true);

    if (!user) {
        return <div className="w-full h-screen flex flex-col items-center justify-center gap-3">
            <p>Please log in to view your profile.</p>
            <LoginLink postLoginRedirectURL="/profile" className="text-blue-500 hover:underline">
                Login
            </LoginLink>
        </div>
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-3">
            <h1>Welcome, {user.given_name || user.email}!</h1>
            <p>Email: {user.email}</p>
        </div>
    );
}
