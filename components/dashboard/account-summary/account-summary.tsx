"use client";

import React, { useEffect, useState } from "react";
import Breadcrumb from "../../ui/breadcrumb";
import useUserStore from "@/store/userStore";
import { getInitials } from "@/lib/utils";
import {
  CreditCard,
  ChevronDown,
  RefreshCcw,
  User2,
  Ellipsis,
  Copy,
} from "lucide-react";
import { toast } from "sonner";
import Ebanking from "./e-banking";
import Personal from "./personal";

const AccountSummary = () => {
  const { profile, isLoading, error, fetchProfile } = useUserStore();
  const [timeLeft, setTimeLeft] = useState("00:00:00");

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const hours = now.getHours().toString().padStart(2, "0");
      setTimeLeft(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="p-4">
        <Breadcrumb />
        <div className="mt-4 flex items-center space-x-4">
          <div className="h-12 w-12 animate-pulse rounded-full bg-gray-200" />
          <div className="h-6 w-32 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <Breadcrumb />
        <div className="mt-4 text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="p-4">
        <Breadcrumb />
        <div className="mt-4">No profile data available</div>
      </div>
    );
  }

  const initials = getInitials(profile.fullName);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <Breadcrumb />
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-800">
          {initials}
        </div>
      </div>
      <hr className="my-4" />

      <div className="flex max-w-5xl items-center justify-between">
        <h1 className="text-xl font-semibold">Accounts Summary</h1>
        <span
          className="flex cursor-pointer items-center gap-2 text-sm text-gray-500"
          onClick={() => window.location.reload()}
        >
          <RefreshCcw className="h-4 w-4" />
          Reload
        </span>
      </div>

      <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50/50 p-6">
        <div className="flex flex-col gap-6 md:flex-row md:gap-10">
          <div className="w-full transition-all duration-300 hover:scale-[1.02] md:w-[400px]">
            <div className="relative bg-white p-6 shadow-lg">
              {/* Top section with icon and timer */}
              <div className="flex items-start justify-between">
                <CreditCard className="h-8 w-8 text-blue-600" />
                <span className="flex items-center rounded-full bg-blue-600 px-4 py-1 text-sm text-white">
                  {timeLeft} <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </div>

              {/* Balance section */}
              <div className="mt-12">
                <div className="flex items-baseline">
                  <span className="text-2xl text-gray-700">$</span>
                  <span className="text-4xl font-semibold text-gray-900">
                    {profile.balance.toLocaleString()}
                  </span>
                </div>
                <p className="mt-1 text-base text-gray-500">Balance</p>
              </div>
            </div>
          </div>
          <div className="w-full transition-all duration-300 hover:scale-[1.02] md:w-[400px]">
            <div className="relative bg-white p-6 shadow-lg">
              {/* Top section with icon and timer */}
              <div className="flex items-start justify-between">
                <User2 className="h-8 w-8 text-yellow-600" />
                <span className="flex items-center rounded-full bg-blue-600 px-4 py-1 text-sm text-white">
                  Premium <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </div>

              {/* Balance section */}
              <div className="mt-12">
                <div className="flex items-baseline">
                  <span className="text-2xl text-gray-700"></span>
                  <span className="text-4xl font-semibold text-gray-900">
                    0
                  </span>
                </div>
                <p className="mt-1 text-base text-gray-500">Transactions</p>
              </div>
            </div>
          </div>
          <div className="w-full transition-all duration-300 hover:scale-[1.02] md:w-[400px]">
            <div className="relative bg-black p-6 shadow-lg">
              {/* Top section with icon and timer */}
              <div className="flex items-start justify-between">
                <h1 className="text-2xl font-semibold text-white">HT Bank</h1>
                <span className="flex items-center text-sm text-white">
                  <Ellipsis />
                </span>
              </div>

              {/* Balance section */}
              <div className="mt-12">
                <div className="flex items-baseline">
                  <span className="text-2xl text-gray-700"></span>
                  <span className="text-4xl font-semibold text-gray-900">
                    0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="mt-1 text-xl font-extrabold text-white">
                    {profile.accountNumber}
                  </p>
                  <span
                    className="cursor-pointer hover:opacity-80"
                    onClick={() => {
                      navigator.clipboard.writeText(profile.accountNumber);
                      toast.success("Copied to clipboard");
                    }}
                  >
                    <Copy className="h-5 w-5 text-white" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6">
          <Ebanking />
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6">
          <Personal />
        </div>
      </div>
    </div>
  );
};

export default AccountSummary;
