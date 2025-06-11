// 'use client'

import AuthWrapper from "@/utils/authWrapper";
import Sidebar from "@/components/dashboard/sidebar";
// import Breadcrumb from "@/components/ui/breadcrumb";
// import { getInitials } from "@/lib/utils";
// import useUserStore from "@/store/userStore";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //   const { profile, isLoading, error, fetchProfile } = useUserStore();
  //   const initials = getInitials(profile?.fullName ?? "");
  return (
    <AuthWrapper>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-4 lg:p-8">
          {/* <div className="flex items-center justify-between">
        <Breadcrumb />
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-800">
          {initials}
        </div> */}
          {children}
        </main>
      </div>
    </AuthWrapper>
  );
}
