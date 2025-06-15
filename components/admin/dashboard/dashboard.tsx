"use client";

import Breadcrumb from "@/components/ui/breadcrumb";
import { getInitials } from "@/lib/utils";
import useUserStore from "@/store/userStore";
import { ArrowDown, ArrowUp, Ban, Download, File, Hourglass, UsersRound } from "lucide-react";
import React from "react";

const Dashboard = () => {
  const { profile } = useUserStore();
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

      <div className="mt-10 grid grid-cols-3 gap-4">
        <div className="rounded-lg border bg-white px-4 py-6 shadow-md">
          <h1>Balance</h1>
          <p className="text-2xl font-bold">{profile?.balance || 0}</p>
          <span className="flex items-center gap-2 text-sm text-green-600">
            <ArrowUp className="h-4 w-4 text-green-600" />
            3.48%
            <span className="text-gray-500">Since last month</span>
          </span>
        </div>
        <div className="flex w-full items-center justify-between rounded-lg border bg-white p-4 shadow-md">
          <div>
            <h1>Users</h1>
            <p className="text-2xl font-bold">{profile?.balance || 0}</p>
            <span className="flex items-center gap-2 text-sm text-green-600">
              <ArrowUp className="h-4 w-4 text-green-600" />
              20.4%
              <span className="text-gray-500">Since last month</span>
            </span>
          </div>
          <UsersRound className="h-10 w-10 text-cyan-600" />
        </div>
        <div className="flex w-full items-center justify-between rounded-lg border bg-white p-4 shadow-md">
          <div>
            <h1>Total Transactions</h1>
            <p className="text-2xl font-bold">{profile?.balance || 39}</p>
            <span className="flex items-center gap-2 text-sm text-green-600">
              <ArrowUp className="h-4 w-4 text-green-600" />
              10.4%
              <span className="text-gray-500">Since last years</span>
            </span>
          </div>
          <File className="h-10 w-10 text-green-600" />
        </div>
        <div className="flex w-full items-center justify-between rounded-lg border bg-white p-4 shadow-md">
          <div>
            <h1>Completed Transactions</h1>
            <p className="text-2xl font-bold">{profile?.balance || 12}</p>
            <span className="flex items-center gap-2 text-sm text-red-600">
              <ArrowDown className="h-4 w-4 text-red-600" />
              12%
              <span className="text-gray-500">Since last years</span>
            </span>
          </div>
          <Download className="h-10 w-10 text-yellow-500" />
        </div>
        <div className="flex w-full items-center justify-between rounded-lg border bg-white p-4 shadow-md">
          <div>
            <h1>Pending Transactions</h1>
            <p className="text-2xl font-bold">{profile?.balance || 39}</p>
            <span className="flex items-center gap-2 text-sm text-green-600">
              <ArrowUp className="h-4 w-4 text-green-600" />
              1.10%
              <span className="text-gray-500">Since last month</span>
            </span>
          </div>
          <Hourglass  className="h-10 w-10 text-yellow-500" />
        </div>
        <div className="flex w-full items-center justify-between rounded-lg border bg-white p-4 shadow-md">
          <div>
            <h1>STATUS</h1>
            <p className="text-2xl font-bold">active</p>
            <span className="flex items-center gap-2 text-sm text-green-600">
              <ArrowUp className="h-4 w-4 text-green-600" />
              10.4%
              <span className="text-gray-500">Since last years</span>
            </span>
          </div>
          <Ban  className="h-10 w-10 text-green-600 font-bold" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
