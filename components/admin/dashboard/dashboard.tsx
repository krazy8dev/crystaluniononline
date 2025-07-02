"use client";

import Breadcrumb from "@/components/ui/breadcrumb";
import { getInitials } from "@/lib/utils";
import useAdminStore from "@/store/adminStore";
import useUserStore from "@/store/userStore";
import { ArrowDown, ArrowUp, Ban, Download, File, Hourglass, Loader } from "lucide-react";
import { useEffect } from "react";

const Dashboard = () => {
  const { profile } = useUserStore();
  const { dashboardStats, loading, error, fetchDashboardStats } = useAdminStore();

  useEffect(() => {
    fetchDashboardStats();
  }, [fetchDashboardStats]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen"><Loader className="animate-spin" /></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <Breadcrumb />
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-800">
          {getInitials(profile?.fullName ?? "")}
        </div>
      </div>
      <hr className="my-4" />

      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-lg border bg-white px-4 py-6 shadow-md">
          <h1>Total Users</h1>
          <p className="text-2xl font-bold">{dashboardStats?.users.total || 0}</p>
          <span className="flex items-center gap-2 text-sm text-green-600">
            <ArrowUp className="h-4 w-4 text-green-600" />
            {dashboardStats?.users.topUsers.length || 0} Top Users
          </span>
        </div>
        <div className="flex w-full items-center justify-between rounded-lg border bg-white p-4 shadow-md">
          <div>
            <h1>Total Transactions</h1>
            <p className="text-2xl font-bold">{dashboardStats?.transactions.total || 0}</p>
            <span className="flex items-center gap-2 text-sm text-green-600">
              <ArrowUp className="h-4 w-4 text-green-600" />
              Total Amount: ${dashboardStats?.transactions.totalAmount || 0}
            </span>
          </div>
          <File className="h-10 w-10 text-green-600" />
        </div>
        <div className="flex w-full items-center justify-between rounded-lg border bg-white p-4 shadow-md">
          <div>
            <h1>Completed Transactions</h1>
            <p className="text-2xl font-bold">{dashboardStats?.transactions.byStatus.completed || 0}</p>
            <span className="flex items-center gap-2 text-sm text-green-600">
              <ArrowUp className="h-4 w-4 text-green-600" />
              {((dashboardStats?.transactions.byStatus.completed || 0) / (dashboardStats?.transactions.total || 1) * 100).toFixed(1)}%
              <span className="text-gray-500">Completion Rate</span>
            </span>
          </div>
          <Download className="h-10 w-10 text-yellow-500" />
        </div>
        <div className="flex w-full items-center justify-between rounded-lg border bg-white p-4 shadow-md">
          <div>
            <h1>Pending Transactions</h1>
            <p className="text-2xl font-bold">{dashboardStats?.transactions.byStatus.pending || 0}</p>
            <span className="flex items-center gap-2 text-sm text-yellow-600">
              <Hourglass className="h-4 w-4 text-yellow-600" />
              {((dashboardStats?.transactions.byStatus.pending || 0) / (dashboardStats?.transactions.total || 1) * 100).toFixed(1)}%
              <span className="text-gray-500">Pending Rate</span>
            </span>
          </div>
          <Hourglass className="h-10 w-10 text-yellow-500" />
        </div>
        <div className="flex w-full items-center justify-between rounded-lg border bg-white p-4 shadow-md">
          <div>
            <h1>Failed Transactions</h1>
            <p className="text-2xl font-bold">{dashboardStats?.transactions.byStatus.failed || 0}</p>
            <span className="flex items-center gap-2 text-sm text-red-600">
              <ArrowDown className="h-4 w-4 text-red-600" />
              {((dashboardStats?.transactions.byStatus.failed || 0) / (dashboardStats?.transactions.total || 1) * 100).toFixed(1)}%
              <span className="text-gray-500">Failure Rate</span>
            </span>
          </div>
          <Ban className="h-10 w-10 text-red-600" />
        </div>
        <div className="flex w-full items-center justify-between rounded-lg border bg-white p-4 shadow-md">
          <div>
            <h1>Recent Transactions</h1>
            <p className="text-2xl font-bold">{dashboardStats?.transactions.recent.length || 0}</p>
            <span className="flex items-center gap-2 text-sm text-blue-600">
              <File className="h-4 w-4 text-blue-600" />
              Latest Activity
            </span>
          </div>
          <File className="h-10 w-10 text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
