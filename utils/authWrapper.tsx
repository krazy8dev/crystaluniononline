"use client";

import useAuthStore from "@/store/authstore";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { config } from "@/config";
import { toast } from "sonner";

interface AuthWrapperProps {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const { token, isInitialized, setInitialized, checkAdminAccess } =
    useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

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
      const isAuthRoute = pathname === "/login" || pathname === "/register";
      const isHomeRoute = pathname === "/";

      if (token) {
        // If user is already logged in and tries to access login/register
        if (isAuthRoute) {
          // console.log("Authenticated user detected, redirecting to dashboard");
          // toast.error("Authenticated user detected, redirecting to dashboard")
          router.replace("/dashboard/account-summary");
          return;
        }
      } else {
        // If user is not logged in and tries to access protected routes
        if (!isAuthRoute && !isHomeRoute) {
          // console.log("Not authenticated, redirecting to login");
          // toast.error("Not authenticated, redirecting to login")
          router.replace("/login");
          return;
        }
      }
    }
  }, [isInitialized, token, router, pathname]);

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

  // For login/register pages, only render if not authenticated
  if (pathname === "/login" || pathname === "/register") {
    return !token ? <>{children}</> : null;
  }

  // For other pages, render if authenticated (both admin and user can access user routes)
  return token ? <>{children}</> : null;
}
