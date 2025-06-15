import Sidebar from "@/components/admin/sidebar";
import React from "react";

const AdminDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
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
  );
};

export default AdminDashboard;
