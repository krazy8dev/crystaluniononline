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
  const { token, isInitialized, setInitialized, checkAdminAccess } =
    useAuthStore();
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
    if (isInitialized) {
      if (!token) {
        console.log("Not authenticated, redirecting to login");
        router.replace("/login");
        return;
      }

      // If user is admin, redirect to admin dashboard
      if (checkAdminAccess()) {
        console.log("Admin user detected, redirecting to admin dashboard");
        router.replace("/admin/dashboard");
        return;
      }
    }
  }, [isInitialized, token, router, checkAdminAccess]);

  // Show loading state while initializing
  if (!isInitialized) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <div className="text-gray-700">Loading...</div>
        </div>
      </div>
    );
  }

  // Only render children if we have a token and user is not an admin
  return token && !checkAdminAccess() ? <>{children}</> : null;
}
