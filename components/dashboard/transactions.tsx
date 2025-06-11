"use client";

import React, { useEffect } from "react";
import Breadcrumb from "../ui/breadcrumb";
import { getInitials } from "@/lib/utils";
import useUserStore from "@/store/userStore";
import { History } from "lucide-react";

const Transactions = () => {
  const { profile, isLoading, error, fetchProfile } = useUserStore();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const initials = getInitials(profile?.fullName ?? "");

  if (isLoading) {
    return (
      <div className="p-4">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-48 rounded bg-gray-200" />
          <div className="h-32 rounded bg-gray-200" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4">
      <div className="flex items-center justify-between">
        <Breadcrumb />
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-800">
          {initials}
        </div>
      </div>
      <hr className="my-4" />

      <h1 className="text-xl font-semibold text-gray-900">
        Transactions history
      </h1>

      <div className="mt-6">
        <div className="rounded-lg bg-white p-8 shadow-sm">
          <div className="flex min-h-[400px] flex-col items-center justify-center">
            <div className="rounded-full bg-gray-50 p-4">
              <History className="h-8 w-8 text-gray-400" />
            </div>
            <h2 className="mt-4 text-lg font-medium text-gray-900">
              No recent transactions
            </h2>
            <p className="mt-2 max-w-sm text-center text-sm text-gray-500">
              When you make transactions, they will appear here. Start by making
              a transfer or receiving funds.
            </p>
            <button className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Make a Transfer
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between text-sm text-gray-600">
        <p>
          This site provides information about and access to services offered by
          the Institution and all its respective affiliates or partners.
        </p>
      </div>
      <p className="mt-2 text-xs text-gray-500">©2022 All rights reserved.</p>
    </div>
  );
};

export default Transactions;
