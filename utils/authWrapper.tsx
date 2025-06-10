"use client";

import useAuthStore from "@/store/authstore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { config } from "@/config";

interface AuthWrapperProps {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const { token, isInitialized, setInitialized } = useAuthStore();
  const router = useRouter();

  // Initialize from cookies on first load
  useEffect(() => {
    const initializeAuth = () => {
      const token = Cookies.get(config.auth.cookie.token.name);

      // If we have a token in cookies, set it in the store
      if (token) {
        useAuthStore.setState({ token });
      }

      // Mark as initialized
      setInitialized(true);
    };

    if (!isInitialized) {
      initializeAuth();
    }
  }, [isInitialized, setInitialized]);

  // Handle authentication redirects
  useEffect(() => {
    if (isInitialized && !token) {
      console.log("Not authenticated, redirecting to login");
      router.replace("/login");
      return;
    }
  }, [isInitialized, token, router]);

  // Show loading state while initializing
  if (!isInitialized) {
    return (
      <div>
        {/* <div className="mb-4 h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-blue-500"></div> */}
        <div className="ml-4 text-black">Loading...</div>
      </div>
    );
  }

  // Only render children if we have a token
  return token ? <>{children}</> : null;
}
