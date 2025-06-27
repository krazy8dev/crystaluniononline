"use client";

import { getInitials } from "@/lib/utils";
import useTransactionStore from "@/store/transactionStore";
import useUserStore from "@/store/userStore";
import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import Breadcrumb from "../ui/breadcrumb";

const DomesticTransfer = () => {
  const router = useRouter();
  const { profile } = useUserStore();
  const { sameBankTransfer, isLoading, error } = useTransactionStore();
  const { verifyAccount } = useUserStore();
  const [formData, setFormData] = useState({
    accountNumber: "",
    beneficiary: "",
    amount: "",
    purpose: "",
    securityPin: "",
  });
  const [beneficiaryName, setBeneficiaryName] = useState("");

  const handleAccountNumberChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // still call the original handleChange to update the form state
    handleChange(e);

    if (name === "accountNumber" && value.length === 10) {
      try {
        const data = await verifyAccount(value);
        if (data.status === "success") {
          setBeneficiaryName(data.data.fullName);
          // also update the main form data
          setFormData((prev) => ({ ...prev, beneficiary: data.data.fullName }));
        } else {
          setBeneficiaryName("");
        }
      } catch (error) {
        setBeneficiaryName("");
        toast.error("Failed to verify account number.");
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sameBankTransfer({
        accountNumber: formData.accountNumber,
        amount: parseFloat(formData.amount),
        purpose: formData.purpose,
        securityPin: formData.securityPin,
      });
      // Redirect to success page or show success message
      router.push("/dashboard/transactions");
    } catch {
      // Error is handled by the store
      // console.error("Transfer failed:", error);
      toast.error("Transfer failed, Please try again");
    }
  };

  const initials = getInitials(profile?.fullName ?? "");

  return (
    <div className="min-h-screen p-4">
      <div className="flex items-center justify-between">
        <Breadcrumb />
        <div
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-800"
          onClick={() => router.push("/dashboard/account-details")}
        >
          {initials}
        </div>
      </div>
      <hr className="my-4" />

      <div className="w-full md:max-w-5xl">
        <h1 className="text-2xl font-semibold text-gray-900">
          Transfer to the same bank
        </h1>

        {error && (
          <div className="mt-4 rounded-lg bg-red-50 p-4 text-sm text-red-600">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-1">
            <label
              htmlFor="accountNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Receiver Account Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleAccountNumberChange}
              placeholder="Account Number"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="beneficiary"
              className="block text-sm font-medium text-gray-700"
            >
              Beneficiary
            </label>
            <input
              type="text"
              id="beneficiary"
              name="beneficiary"
              value={beneficiaryName || formData.beneficiary}
              onChange={handleChange}
              placeholder="Beneficiary Name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Amount"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="purpose"
              className="block text-sm font-medium text-gray-700"
            >
              Purpose<span className="text-red-500">*</span>
            </label>
            <textarea
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              placeholder="Purpose"
              rows={3}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="securityPin"
              className="block text-sm font-medium text-gray-700"
            >
              Security PIN<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="securityPin"
              name="securityPin"
              value={formData.securityPin}
              onChange={handleChange}
              placeholder="Enter your security PIN"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              required
              maxLength={4}
              minLength={4}
            />
          </div>

          <div className="flex items-start gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-600">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <p>
              Warning: if you have insufficient funds in your account to cover
              the transactions, your account is at risk of going into overdraft.
            </p>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? "Processing..." : "Next"}
            </button>
          </div>
        </form>

        <div className="mt-8 text-sm text-gray-600">
          <p>
            This site provides information about and access to services offered
            by the Institution and all its respective affiliates or partners.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            ©2022 All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DomesticTransfer;
