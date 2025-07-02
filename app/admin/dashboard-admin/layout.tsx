import Sidebar from "@/components/admin/sidebar";
import React from "react";

const AdminDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-auto p-4 lg:p-8">
        <div className="mx-auto max-w-7xl">
          {/* <div className="flex items-center justify-between">
          <Breadcrumb />
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-800">
            {initials}
          </div> */}
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
