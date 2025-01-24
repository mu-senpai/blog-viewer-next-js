"use client";

import { LoginLink, RegisterLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const { user, getUser } = useKindeBrowserClient();
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (user) {
          setAuthenticatedUser(user);
        } else if (getUser) {
          const fetchedUser = await getUser();
          setAuthenticatedUser(fetchedUser);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setAuthenticatedUser(null);
      }
    };

    fetchUser();
  }, [user, getUser]);

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between">
        <Link href="/" className="text-2xl font-bold hover:underline">BlogViewer</Link>
        <div className="flex space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {
            user ? <Link href="/profile" className="hover:underline">
              Profile
            </Link>
              : <LoginLink className="hover:underline">Profile</LoginLink>
          }
          {authenticatedUser ? (
            <>
              <span className="mr-4">Welcome, {authenticatedUser.given_name || "User"}</span>
              <LogoutLink className="hover:underline">Logout</LogoutLink>
            </>
          ) : (
            <div className="space-x-4">
              <LoginLink postLoginRedirectURL="/profile" className="hover:underline">
                Login
              </LoginLink>
              <RegisterLink postLoginRedirectURL="/profile" className="hover:underline">
                Register
              </RegisterLink>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
