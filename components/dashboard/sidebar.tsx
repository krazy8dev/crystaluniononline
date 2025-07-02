"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { sidebarLinks, type SidebarLink } from "@/lib";
import useAuthStore from "@/store/authstore";
import {
  ChevronDown,
  ChevronRight,
  LogOut,
  Menu,
  PanelLeft,
  PanelLeftClose,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    setShowLogoutConfirm(false);
    logout();
    router.push("/");
  };

  const initiateLogout = () => {
    setShowLogoutConfirm(true);
  };

  const toggleSubmenu = (label: string) => {
    if (isCollapsed) {
      setIsCollapsed(false);
      setExpandedMenu(label);
      return;
    }
    setExpandedMenu(expandedMenu === label ? null : label);
  };

  const renderSubLinks = (link: SidebarLink) => {
    if (!link.subLinks?.length) return null;

    return (
      <div className={cn("mt-1 space-y-1", isCollapsed ? "px-2" : "ml-4")}>
        {link.subLinks.map((subLink) => {
          const SubIcon = subLink.icon;
          const isSubActive = pathname === subLink.href;

          return (
            <Link
              key={subLink.href}
              href={subLink.href}
              className={cn(
                "flex items-center rounded-lg py-2 text-sm font-medium transition-colors",
                isCollapsed ? "justify-center px-2" : "space-x-3 px-4",
                isSubActive
                  ? "bg-blue-50 text-blue-800"
                  : "text-gray-700 hover:bg-gray-100",
              )}
              title={isCollapsed ? subLink.label : undefined}
            >
              <SubIcon
                className={cn(
                  "flex-shrink-0",
                  isCollapsed ? "h-5 w-5" : "h-4 w-4",
                )}
              />
              {!isCollapsed && <span>{subLink.label}</span>}
            </Link>
          );
        })}
      </div>
    );
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
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          const isActive =
            pathname === link.href || pathname.startsWith(link.href + "/");
          const hasSubLinks = Boolean(link.subLinks?.length);
          const isExpanded = expandedMenu === link.label;

          return (
            <div key={link.href}>
              <button
                onClick={() =>
                  hasSubLinks
                    ? toggleSubmenu(link.label)
                    : router.push(link.href)
                }
                className={cn(
                  "flex w-full items-center rounded-lg py-2 text-sm font-medium transition-colors",
                  isCollapsed ? "justify-center px-2" : "justify-between px-4",
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
                {hasSubLinks &&
                  !isCollapsed &&
                  (isExpanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  ))}
              </button>

              {/* Submenu */}
              {hasSubLinks &&
                (isExpanded || isCollapsed) &&
                renderSubLinks(link)}
            </div>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="border-t border-gray-200 p-4">
        <button
          onClick={initiateLogout}
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
          className="bg-opacity-50 fixed inset-0 z-40 bg-black/10 lg:hidden"
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

      {/* Logout Confirmation Dialog */}
      <Dialog open={showLogoutConfirm} onOpenChange={setShowLogoutConfirm}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Logout</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-gray-600">
              Are you sure you want to logout?
            </p>
          </div>
          <div className="flex justify-end space-x-4">
            <Button
              variant="outline"
              onClick={() => setShowLogoutConfirm(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Content Margin */}
      <div className={cn("hidden lg:block", isCollapsed ? "w-20" : "w-64")} />
    </>
  );
};

export default Sidebar;
