"use client";

import { getInitials } from "@/lib/utils";
import useUserStore from "@/store/userStore";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../ui/breadcrumb";

const International = () => {
  const { profile, isLoading, error, fetchProfile } = useUserStore();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    country: "",
    bankName: "",
    accountNumber: "",
    swiftBic: "",
    ibanNumber: "",
    amount: "",
    purpose: "",
  });

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const initials = getInitials(profile?.fullName ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-800">
          {initials}
        </div>
      </div>
      <hr className="my-4" />

      <div className="w-full md:max-w-5xl">
        <h2 className="mb-6 text-2xl font-semibold">International transfer</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Receivers Details Section */}
          <div className="rounded-lg border p-6">
            <h3 className="mb-4 text-lg font-semibold">Recievers Details</h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="First name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City*
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="City"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country*
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="Country"
                  required
                />
              </div>
            </div>
          </div>

          {/* Receivers Bank Details Section */}
          <div className="rounded-lg border p-6">
            <h3 className="mb-4 text-lg font-semibold">
              Recievers Bank Details
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="bankName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Bank Name*
                </label>
                <input
                  type="text"
                  id="bankName"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="Bank Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="accountNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Account Number*
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="Account Number"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="swiftBic"
                  className="block text-sm font-medium text-gray-700"
                >
                  SWift/BIC*
                </label>
                <input
                  type="text"
                  id="swiftBic"
                  name="swiftBic"
                  value={formData.swiftBic}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="SWift Code"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="ibanNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  IBAN Number*
                </label>
                <input
                  type="text"
                  id="ibanNumber"
                  name="ibanNumber"
                  value={formData.ibanNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  placeholder="IBAN Number"
                  required
                />
              </div>
            </div>
          </div>

          {/* Amount and Purpose Section */}
          <div className="space-y-4">
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount*
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                placeholder="Amount"
                required
                min="0"
                step="0.01"
              />
            </div>

            <div>
              <label
                htmlFor="purpose"
                className="block text-sm font-medium text-gray-700"
              >
                Purpose*
              </label>
              <textarea
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                placeholder="Purpose"
                required
                rows={3}
              />
            </div>
          </div>

          <div className="text-sm text-red-500">
            Warning: if you have insufficient funds in your account to cover the
            transactions, your account is at risk of going into overdraft.
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-blue-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Next
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

export default International;
