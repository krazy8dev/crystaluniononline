"use client";

import AdminAuthWrapper from "@/utils/adminAuthWrapper";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminAuthWrapper>
      {/* Add your admin layout components here (navbar, sidebar, etc.) */}
      <div className="min-h-screen bg-gray-100">{children}</div>
    </AdminAuthWrapper>
  );
}
