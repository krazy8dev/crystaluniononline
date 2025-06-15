"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import useAuthStore from "@/store/authstore";
import { useRouter } from "next/navigation";
import {
  LogOut,
  Menu,
  PanelLeftClose,
  PanelLeft,
} from "lucide-react";
import { adminLinks } from "@/lib";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const sidebarContent = (
    <>
      {/* Logo Section */}
      <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
        {!isCollapsed && (
          <Link
            href="/dashboard/account-summary"
            className="text-xl font-bold text-blue-800"
          >
            Heritage Trust Bank
          </Link>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden rounded-lg p-1.5 hover:bg-gray-100 lg:block"
        >
          {isCollapsed ? (
            <PanelLeft className="h-5 w-5" />
          ) : (
            <PanelLeftClose className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1 p-4">
        {adminLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <div key={link.href}>
              <button
                onClick={() => router.push(link.href)}
                className={cn(
                  "flex w-full items-center rounded-lg py-2 text-sm font-medium transition-colors",
                  isCollapsed ? "justify-center px-2" : "px-4",
                  isActive
                    ? "bg-blue-50 text-blue-800"
                    : "text-gray-700 hover:bg-gray-100",
                )}
                title={isCollapsed ? link.label : undefined}
              >
                <div
                  className={cn(
                    "flex items-center transition-all duration-300 ease-in-out",
                    !isCollapsed && "space-x-3",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {!isCollapsed && <span>{link.label}</span>}
                </div>
              </button>
            </div>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="border-t border-gray-200 p-4">
        <button
          onClick={handleLogout}
          className={cn(
            "flex items-center rounded-lg py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50",
            isCollapsed ? "justify-center px-2" : "w-full space-x-3 px-4",
          )}
          title={isCollapsed ? "Logout" : undefined}
        >
          <LogOut className="h-5 w-5" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 rounded-lg bg-white p-2 shadow-md lg:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="bg-opacity-10 fixed inset-0 z-40 bg-black/10 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col bg-white transition-all duration-300 ease-in-out",
          isCollapsed ? "w-20" : "w-64",
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0",
        )}
      >
        {sidebarContent}
      </div>

      {/* Content Margin */}
      <div className={cn("hidden lg:block", isCollapsed ? "w-20" : "w-64")} />
    </>
  );
};

export default Sidebar;
