"use client";

import Breadcrumb from "@/components/ui/breadcrumb";
import React, { useEffect } from "react";
import { getInitials } from "@/lib/utils";
import useUserStore from "@/store/userStore";
import { Mail, Wallet, PenSquare } from "lucide-react";
import { useRouter } from "next/navigation";

const AccountDetails = () => {
  const { profile, isLoading, fetchProfile } = useUserStore();
  const router = useRouter();
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
    <div className="p-4">
      <div className="flex items-center justify-between">
        <Breadcrumb />
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-800 cursor-pointer"
        onClick={() => router.push("/dashboard/account-details")}
        >
          {initials}
        </div>
      </div>
      <hr className="my-4" />

      <h1 className="text-xl font-semibold text-gray-900">
        Accounts Details & History
      </h1>

      <div className="mt-6 grid gap-6 lg:grid-cols-[300px,1fr]">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Personal Info Card */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-xl font-semibold">
                {initials}
              </div>
              <div>
                <h2 className="font-medium text-gray-900">
                  Personal Online Banking
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Wallet className="h-4 w-4" />
                <span>Account No: {profile?.accountNumber}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span>Email: {profile?.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Wallet className="h-4 w-4" />
                <span>
                  Overdraft limit:{" "}
                  <span className="font-medium text-red-500">$300,000</span>
                </span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                Change Profile
              </button>
              <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Account
              </button>
            </div>
          </div>

          {/* Savings Bank Card */}
          <div className="rounded-lg bg-blue-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Savings Bank</h2>
              <span className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-medium">
                New
              </span>
            </div>
            <p className="mt-4 text-sm text-blue-100">
              Sign up offer requires you to deposit and maintain a minimum
              balance in order to earn the $600 bonus. For enquiries send us an
              email support@heritagetrustbank.com
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Premium Account Card */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                PREMIUM INDIVIDUAL ACCOUNT
              </h2>
              <button className="text-blue-600 hover:text-blue-700">
                <PenSquare className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-2 text-sm font-medium text-gray-500">
                      Account Name
                    </th>
                    <th className="pb-2 text-sm font-medium text-gray-500">
                      Account Number
                    </th>
                    <th className="pb-2 text-sm font-medium text-gray-500">
                      Current Balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 text-sm text-gray-900">
                      {profile?.fullName}
                    </td>
                    <td className="py-4 text-sm text-gray-900">
                      {profile?.accountNumber}
                    </td>
                    <td className="py-4 text-sm text-gray-900">
                      ${profile?.balance}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Account History Card */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                ACCOUNT HISTORY
              </h2>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                View Record
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-600">
        <p>
          This site provides information about and access to services offered by
          the Institution and all its respective affiliates or partners.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          ©2022 All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AccountDetails;
