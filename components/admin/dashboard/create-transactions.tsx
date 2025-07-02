"use client";

import Breadcrumb from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { getInitials } from "@/lib/utils";
import useAdminStore, { type CreateTransferData } from "@/store/adminStore";
import useAuthStore from "@/store/authstore";
import useUserStore from "@/store/userStore";
import type React from "react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const transactionTypes = [
  { label: "Domestic Transfer", value: "domestic" },
  { label: "International Transfer", value: "international" },
  { label: "Local Transfer", value: "local" },
];

const DomesticTransferForm = ({
  onSubmit,
  loading,
  adminAccountNumber,
}: {
  onSubmit: (data: CreateTransferData) => void;
  loading: boolean;
  adminAccountNumber: string;
}) => {
  const [formData, setFormData] = useState({
    accountNumber: adminAccountNumber,
    recipientAccountNumber: "",
    amount: "",
    purpose: "",
    status: "COMPLETED",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, accountNumber: adminAccountNumber }));
  }, [adminAccountNumber]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.amount || Number.parseFloat(formData.amount) <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }
    onSubmit({
      ...formData,
      type: "SAME_BANK",
      amount: Number.parseFloat(formData.amount),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-1">
        <label
          htmlFor="accountNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Sender Account Number<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="accountNumber"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          placeholder="Account Number"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          required
          readOnly
        />
      </div>

      <div className="space-y-1">
        <label
          htmlFor="recipientAccountNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Receiver Account Number<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="recipientAccountNumber"
          name="recipientAccountNumber"
          value={formData.recipientAccountNumber}
          onChange={handleChange}
          placeholder="Recipient Account Number"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          required
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
          htmlFor="status"
          className="block text-sm font-medium text-gray-700"
        >
          Status
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        >
          <option value="COMPLETED">Completed</option>
          <option value="PENDING">Pending</option>
          <option value="FAILED">Failed</option>
          <option value="CANCELLED">Cancelled</option>
        </select>
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Submitting..." : "Submit Transfer"}
      </Button>
    </form>
  );
};

const InternationalTransferForm = ({
  onSubmit,
  loading,
  adminAccountNumber,
}: {
  onSubmit: (data: CreateTransferData) => void;
  loading: boolean;
  adminAccountNumber: string;
}) => {
  const [formData, setFormData] = useState({
    accountNumber: adminAccountNumber,
    recipientAccountNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    country: "",
    bankName: "",
    swiftBic: "",
    iban: "",
    amount: "",
    purpose: "",
    status: "COMPLETED",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, accountNumber: adminAccountNumber }));
  }, [adminAccountNumber]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.amount || Number.parseFloat(formData.amount) <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }
    onSubmit({
      ...formData,
      type: "INTERNATIONAL",
      amount: Number.parseFloat(formData.amount),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-lg border p-6">
        <h3 className="mb-4 text-lg font-semibold">Sender Details</h3>
        <div>
          <label
            htmlFor="accountNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Sender Account Number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            required
            readOnly
          />
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h3 className="mb-4 text-lg font-semibold">Receiver&apos;s Details</h3>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-6">
        <h3 className="mb-4 text-lg font-semibold">Bank Details</h3>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="bankName"
              className="block text-sm font-medium text-gray-700"
            >
              Bank Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="bankName"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="recipientAccountNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Account Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="recipientAccountNumber"
              name="recipientAccountNumber"
              value={formData.recipientAccountNumber}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="swiftBic"
              className="block text-sm font-medium text-gray-700"
            >
              SWIFT/BIC<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="swiftBic"
              name="swiftBic"
              value={formData.swiftBic}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="iban"
              className="block text-sm font-medium text-gray-700"
            >
              IBAN Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="iban"
              name="iban"
              value={formData.iban}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
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
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
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
            Purpose<span className="text-red-500">*</span>
          </label>
          <textarea
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            required
            rows={3}
          />
        </div>

        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          >
            <option value="COMPLETED">Completed</option>
            <option value="PENDING">Pending</option>
            <option value="FAILED">Failed</option>
            <option value="CANCELLED">Cancelled</option>
          </select>
        </div>
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Submitting..." : "Submit Transfer"}
      </Button>
    </form>
  );
};

const LocalTransferForm = ({
  onSubmit,
  loading,
  adminAccountNumber,
}: {
  onSubmit: (data: CreateTransferData) => void;
  loading: boolean;
  adminAccountNumber: string;
}) => {
  const [formData, setFormData] = useState({
    accountNumber: adminAccountNumber,
    recipientAccountNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    bankName: "",
    bankRouteNumber: "",
    amount: "",
    purpose: "",
    status: "COMPLETED",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, accountNumber: adminAccountNumber }));
  }, [adminAccountNumber]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.amount || Number.parseFloat(formData.amount) <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }
    onSubmit({
      ...formData,
      type: "OTHER_BANK",
      amount: Number.parseFloat(formData.amount),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="accountNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Sender Account Number<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="accountNumber"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          required
          readOnly
        />
      </div>

      <div>
        <label
          htmlFor="firstName"
          className="block text-sm font-medium text-gray-700"
        >
          Recipient First Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      <div>
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          Recipient Last Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Recipient Email<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      <div>
        <label
          htmlFor="recipientAccountNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Recipient Account Number<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="recipientAccountNumber"
          name="recipientAccountNumber"
          value={formData.recipientAccountNumber}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      <div>
        <label
          htmlFor="bankName"
          className="block text-sm font-medium text-gray-700"
        >
          Recipient Bank Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="bankName"
          name="bankName"
          value={formData.bankName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      <div>
        <label
          htmlFor="bankRouteNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Recipient Bank Route Number<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="bankRouteNumber"
          name="bankRouteNumber"
          value={formData.bankRouteNumber}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      <div>
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
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
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
          Purpose<span className="text-red-500">*</span>
        </label>
        <textarea
          id="purpose"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          required
          rows={3}
        />
      </div>

      <div>
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700"
        >
          Status
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        >
          <option value="COMPLETED">Completed</option>
          <option value="PENDING">Pending</option>
          <option value="FAILED">Failed</option>
          <option value="CANCELLED">Cancelled</option>
        </select>
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Submitting..." : "Submit Transfer"}
      </Button>
    </form>
  );
};

const CreateTransactions = () => {
  const [selected, setSelected] = useState("domestic");
  const { profile } = useUserStore();
  const { createTransfer, loading, error } = useAdminStore();
  const { user } = useAuthStore();

  const adminAccountNumber = user?.accountNumber || "";

  const handleSubmit = async (data: CreateTransferData) => {
    const success = await createTransfer(data);
    if (success) {
      toast.success("Transfer created successfully!");
      // Reset form by changing selected type and back (optional)
    } else {
      toast.error(error || "An unknown error occurred.");
    }
  };

  let FormComponent = null;
  if (selected === "domestic")
    FormComponent = (
      <DomesticTransferForm
        onSubmit={handleSubmit}
        loading={loading}
        adminAccountNumber={adminAccountNumber}
      />
    );
  else if (selected === "international")
    FormComponent = (
      <InternationalTransferForm
        onSubmit={handleSubmit}
        loading={loading}
        adminAccountNumber={adminAccountNumber}
      />
    );
  else if (selected === "local")
    FormComponent = (
      <LocalTransferForm
        onSubmit={handleSubmit}
        loading={loading}
        adminAccountNumber={adminAccountNumber}
      />
    );

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <Breadcrumb />
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-800">
          {getInitials(profile?.fullName ?? "")}
        </div>
      </div>
      <hr className="my-4" />

      <div className="mb-6">
        <label
          htmlFor="transferType"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Select Transfer Type
        </label>
        <select
          id="transferType"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        >
          {transactionTypes.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>{FormComponent}</div>
    </div>
  );
};

export default CreateTransactions;
