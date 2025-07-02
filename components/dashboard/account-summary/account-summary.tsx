"use client";

import { getInitials } from "@/lib/utils";
import useTransactionStore from "@/store/transactionStore";
import useUserStore from "@/store/userStore";
import {
  ChevronDown,
  Copy,
  CreditCard,
  Ellipsis,
  RefreshCcw,
  User2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import Breadcrumb from "../../ui/breadcrumb";
import Ebanking from "./e-banking";
import Personal from "./personal";

const AccountSummary = () => {
  const router = useRouter();
  const { profile, isLoading, error, fetchProfile } = useUserStore();
  const { transactionsCount, getAllTransactions } = useTransactionStore();

  useEffect(() => {
    fetchProfile();
    getAllTransactions();
  }, [fetchProfile, getAllTransactions]);

  // Timer effect
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const now = new Date();
  //     const minutes = now.getMinutes().toString().padStart(2, "0");
  //     const seconds = now.getSeconds().toString().padStart(2, "0");
  //     const hours = now.getHours().toString().padStart(2, "0");
  //     setTimeLeft(`${hours}:${minutes}:${seconds}`);
  //   // }, 1000);

  //   // return () => clearInterval(timer);
  // }, []);

  if (isLoading) {
    return (
      <div className="h-full space-y-6">
        <div className="flex items-center justify-between">
          <Breadcrumb />
          <div className="h-12 w-12 animate-pulse rounded-full bg-gray-200" />
        </div>
        <div className="h-6 w-32 animate-pulse rounded bg-gray-200" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full space-y-6">
        <div className="flex items-center justify-between">
          <Breadcrumb />
        </div>
        <div className="mt-4 text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="h-full space-y-6">
        <div className="flex items-center justify-between">
          <Breadcrumb />
        </div>
        <div className="mt-4">No profile data available</div>
      </div>
    );
  }

  const initials = getInitials(profile.fullName);

  return (
    <div className="h-full space-y-6">
      <div className="flex items-center justify-between">
        <Breadcrumb />
        <div
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-800"
          onClick={() => router.push("/dashboard/account-details")}
        >
          {initials}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Accounts Summary</h1>
        <span
          className="flex cursor-pointer items-center gap-2 text-sm text-gray-500"
          onClick={() => window.location.reload()}
        >
          <RefreshCcw className="h-4 w-4" />
          Reload
        </span>
      </div>

      <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-4 lg:p-6">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <div className="transition-all duration-300 hover:scale-[1.02]">
            <div className="relative h-full bg-white p-6 shadow-lg">
              <div className="flex items-start justify-between">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
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

          <div className="transition-all duration-300 hover:scale-[1.02]">
            <div className="relative h-full bg-black p-6 shadow-lg">
              <div className="flex items-start justify-between">
                <h1 className="text-2xl font-semibold text-white">HT Bank</h1>
                <span className="flex items-center text-sm text-white">
                  <Ellipsis />
                </span>
              </div>
              <div className="mt-12">
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
          <div className="transition-all duration-300 hover:scale-[1.02] sm:col-span-2 xl:col-span-1">
            <div className="relative h-full bg-white p-6 shadow-lg">
              <div className="flex items-start justify-between">
                <User2 className="h-8 w-8 text-yellow-600" />
                <span className="flex items-center rounded-full bg-blue-600 px-4 py-1 text-sm text-white">
                  Premium <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </div>
              <div className="mt-12">
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold text-gray-900">
                    {transactionsCount}
                  </span>
                </div>
                <p className="mt-1 text-base text-gray-500">Transactions</p>
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
