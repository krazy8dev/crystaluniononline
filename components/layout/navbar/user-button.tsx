"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  
  LogOut,
  LayoutDashboard,

} from "lucide-react";
import useAuthStore from "@/store/authstore";
import { useRouter } from "next/navigation";

const UserButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Get auth state from store
  const { token, user, logout } = useAuthStore();
  const isAuthenticated = !!token;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    router.push("/");
  };

  // Get user initials for avatar
  const getUserInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center gap-2">
        <Link
          href="/register"
          className="transform rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl"
        >
          Open Account
        </Link>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* User Button */}
      <motion.button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-3 rounded-full bg-gray-100 px-4 py-2 transition-all duration-200 hover:bg-gray-200"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* User Avatar */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
          <span className="text-xs">
            {getUserInitials(user?.fullName || "User")}
          </span>
        </div>

        {/* User Info */}
        <div className="hidden text-left sm:block">
          <p className="text-sm font-medium text-gray-900">
            {user?.fullName || "User"}
          </p>
          <p className="text-xs text-gray-500">
            {user?.email || "user@example.com"}
          </p>
        </div>

        {/* Dropdown Arrow */}
        <ChevronDown
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            className="absolute right-0 z-50 mt-2 w-64 rounded-xl border border-gray-200 bg-white py-2 shadow-lg"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* User Info Header */}
            <div className="border-b border-gray-100 px-4 py-3">
              <p className="text-sm font-semibold text-gray-900">
                {user?.fullName || "User"}
              </p>
              <p className="text-xs text-gray-500">
                {user?.email || "user@example.com"}
              </p>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              <Link
                href="/dashboard/account-summary"
                onClick={() => setIsDropdownOpen(false)}
                className="group flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <LayoutDashboard className="h-4 w-4 text-gray-400 transition-colors duration-200 group-hover:text-blue-600" />
                <span>Dashboard</span>
              </Link>

              {/* <Link
                href="/dashboard/profile"
                onClick={() => setIsDropdownOpen(false)}
                className="group flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <User className="h-4 w-4 text-gray-400 transition-colors duration-200 group-hover:text-blue-600" />
                <span>Profile Settings</span>
              </Link>

              <Link
                href="/dashboard/settings"
                onClick={() => setIsDropdownOpen(false)}
                className="group flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <Settings className="h-4 w-4 text-gray-400 transition-colors duration-200 group-hover:text-blue-600" />
                <span>Account Settings</span>
              </Link> */}
            </div>

            {/* Divider */}
            <div className="my-2 border-t border-gray-100"></div>

            {/* Logout Button */}
            <div className="px-2">
              <button
                onClick={handleLogout}
                className="group flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-sm text-red-600 transition-all duration-200 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4 text-red-500 transition-colors duration-200 group-hover:text-red-600" />
                <span>Sign Out</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserButton;
