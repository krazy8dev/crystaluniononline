"use client";

import { icons } from "@/lib";
import useUserStore from "@/store/userStore";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Ebanking = () => {
  const { profile } = useUserStore();

  //   useEffect(() => {
  //     fetchProfile();
  //   }, [fetchProfile]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="w-full">
        <h1 className="mb-5 text-xl font-semibold">E-Banking</h1>
        <div className="relative bg-white shadow-lg">
          <div
            className="flex flex-col items-start justify-end bg-black/30 p-4"
            style={{
              backgroundImage: `url(${icons.ebanking.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "300px",
              width: "100%",
              backgroundBlendMode: "overlay",
            }}
          >
            <h1 className="rounded-full border border-[#ffffff39] bg-[#ffffff8c] px-4 py-1 font-bold text-white">
              Heritage Trust Bank
            </h1>
            <p className="mt-2 px-3 text-lg font-bold text-white capitalize">
              More than banking
            </p>
          </div>

          <div className="mt-4 px-4 py-4">
            <p className="text-gray-600">
              Offering tailor made banking products and high quality solutions
              that create value for you.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <h1 className="mb-5 text-xl font-semibold">Received Funds</h1>

        <div className="relative overflow-hidden bg-white p-6 shadow-lg">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold text-gray-900">
              ${profile?.balance?.toLocaleString() ?? "0"}
            </h1>
            <span className="text-sm text-gray-500">
              Total amount of money received for this month
            </span>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-medium text-gray-500">
                  Last Transaction
                </h2>
                <span className="mt-1 flex items-center gap-1 text-lg font-semibold text-green-600">
                  <ArrowUpRight className="h-5 w-5" />
                  $0.00
                </span>
              </div>

              <div>
                <h2 className="text-sm font-medium text-gray-500">
                  Account Name
                </h2>
                <span className="mt-1 block text-lg font-semibold text-gray-900">
                  {profile?.fullName ?? "N/A"}
                </span>
              </div>

              <div>
                <h2 className="text-sm font-medium text-gray-500">
                  Account Number
                </h2>
                <span className="mt-1 block text-lg font-semibold text-gray-900">
                  {profile?.accountNumber ?? "N/A"}
                </span>
              </div>
            </div>

            <div className="rounded-lg bg-gray-50 p-4">
              <h2 className="font-medium text-gray-900">Quick Actions</h2>
              <div className="mt-2 flex flex-col gap-2">
                <Link
                  href="/dashboard/domestic-transfer"
                  className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Transfer Money
                </Link>
                <button className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  View Statement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ebanking;
