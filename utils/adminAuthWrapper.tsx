"use client";

import useAuthStore from "@/store/authstore";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { config } from "@/config";

interface AdminAuthWrapperProps {
  children: React.ReactNode;
}

export default function AdminAuthWrapper({ children }: AdminAuthWrapperProps) {
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

  // Handle authentication and admin access redirects
  useEffect(() => {
    // Skip auth check for login page if not authenticated
    if (pathname === "/admin/login" && !token) {
      return;
    }

    if (isInitialized) {
      if (!token) {
        console.log("Not authenticated, redirecting to admin login");
        router.replace("/admin/login");
        return;
      }

      // If already authenticated and trying to access login page
      if (pathname === "/admin/login") {
        if (checkAdminAccess()) {
          console.log(
            "Admin already logged in, redirecting to admin dashboard",
          );
          router.replace("/admin/dashboard-admin");
        } else {
          console.log("Non-admin user detected, redirecting to user dashboard");
          router.replace("/dashboard/account-summary");
        }
        return;
      }

      // For admin routes, check if user is admin
      if (pathname.startsWith("/admin/") && pathname !== "/admin/login") {
        if (!checkAdminAccess()) {
          console.log("Non-admin user detected, redirecting to user dashboard");
          router.replace("/dashboard/account-summary");
          return;
        }
      }
    }
  }, [isInitialized, token, router, checkAdminAccess, pathname]);

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

  // For login page, only render if not authenticated
  if (pathname === "/admin/login") {
    return !token ? <>{children}</> : null;
  }

  // For admin routes, only render if user is admin
  return token && checkAdminAccess() ? <>{children}</> : null;
}
