"use client";

import { Button } from "@/components/ui/button";
import useAuthStore from "@/store/authstore";
import { LogOut } from "lucide-react";
// import { useRouter } from "next/router";
import { toast } from "sonner";

interface LogoutButtonProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

export default function LogoutButton({
  variant = "outline",
  size = "default",
  className = "",
  showIcon = true,
  children = "Logout",
}: LogoutButtonProps) {
  const { logout } = useAuthStore();
  // const router = useRouter();

  const handleLogout = () => {
    try {
      logout();
      toast.success("Logged out successfully");
    } catch {
      toast.error("Failed to logout");
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleLogout}
    >
      {showIcon && <LogOut className="mr-2 h-4 w-4" />}
      {children}
    </Button>
  );
}
