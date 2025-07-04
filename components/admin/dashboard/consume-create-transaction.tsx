"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import useAdminStore, { CreateTransferData } from "@/store/adminStore";
import useAuthStore from "@/store/authstore";
import useUserStore from "@/store/userStore";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

type TransferType = "SAME_BANK" | "OTHER_BANK" | "INTERNATIONAL";

const SameBankForm = ({
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (value: string) => {
    setFormData((prev) => ({ ...prev, status: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }
    onSubmit({
      ...formData,
      type: "SAME_BANK",
      amount: parseFloat(formData.amount),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="accountNumber">Sender Account Number</Label>
        <Input
          id="accountNumber"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
          required
          readOnly
        />
      </div>
      <div>
        <Label htmlFor="recipientAccountNumber">Recipient Account Number</Label>
        <Input
          id="recipientAccountNumber"
          name="recipientAccountNumber"
          value={formData.recipientAccountNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="purpose">Purpose</Label>
        <Textarea
          id="purpose"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="status">Status</Label>
        <Select
          onValueChange={handleStatusChange}
          defaultValue={formData.status}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="COMPLETED">Completed</SelectItem>
            <SelectItem value="PENDING">Pending</SelectItem>
            <SelectItem value="FAILED">Failed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Submitting..." : "Submit Transfer"}
      </Button>
    </form>
  );
};

const OtherBankForm = ({
  onSubmit,
  loading,
  adminAccountNumber,
}: {
  onSubmit: (data: CreateTransferData) => void;
  loading: boolean;
  adminAccountNumber: string;
}) => {
  const [formData, setFormData] = useState({
    accountNumber: adminAccountNumber, // sender
    recipientAccountNumber: "",
    amount: "",
    purpose: "",
    status: "COMPLETED",
    firstName: "",
    lastName: "",
    email: "",
    bankName: "",
    bankRouteNumber: "",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, accountNumber: adminAccountNumber }));
  }, [adminAccountNumber]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (value: string) => {
    setFormData((prev) => ({ ...prev, status: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }
    onSubmit({
      ...formData,
      type: "OTHER_BANK",
      amount: parseFloat(formData.amount),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4 rounded-lg border p-4">
        <h3 className="text-lg font-semibold">Sender Details</h3>
        <div>
          <Label htmlFor="o-accountNumber">Sender Account Number</Label>
          <Input
            id="o-accountNumber"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            required
            readOnly
          />
        </div>
      </div>

      <div className="space-y-4 rounded-lg border p-4">
        <h3 className="text-lg font-semibold">Recipient Details</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="o-recipientAccountNumber">
            Recipient Account Number
          </Label>
          <Input
            id="o-recipientAccountNumber"
            name="recipientAccountNumber"
            value={formData.recipientAccountNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="bankName">Bank Name</Label>
          <Input
            id="bankName"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="bankRouteNumber">Bank Route Number</Label>
          <Input
            id="bankRouteNumber"
            name="bankRouteNumber"
            value={formData.bankRouteNumber}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="space-y-4 rounded-lg border p-4">
        <h3 className="text-lg font-semibold">Transaction Details</h3>
        <div>
          <Label htmlFor="o-amount">Amount</Label>
          <Input
            id="o-amount"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="o-purpose">Purpose</Label>
          <Textarea
            id="o-purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="o-status">Status</Label>
          <Select
            onValueChange={handleStatusChange}
            defaultValue={formData.status}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="COMPLETED">Completed</SelectItem>
              <SelectItem value="PENDING">Pending</SelectItem>
              <SelectItem value="FAILED">Failed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Submitting..." : "Submit Transfer"}
      </Button>
    </form>
  );
};

const InternationalForm = ({
  onSubmit,
  loading,
  adminAccountNumber,
}: {
  onSubmit: (data: CreateTransferData) => void;
  loading: boolean;
  adminAccountNumber: string;
}) => {
  const [formData, setFormData] = useState({
    accountNumber: adminAccountNumber, // sender
    recipientAccountNumber: "",
    amount: "",
    purpose: "",
    status: "COMPLETED",
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    country: "",
    bankName: "",
    swiftBic: "",
    iban: "",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, accountNumber: adminAccountNumber }));
  }, [adminAccountNumber]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (value: string) => {
    setFormData((prev) => ({ ...prev, status: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }
    onSubmit({
      ...formData,
      type: "INTERNATIONAL",
      amount: parseFloat(formData.amount),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4 rounded-lg border p-4">
        <h3 className="text-lg font-semibold">Sender Details</h3>
        <div>
          <Label htmlFor="i-accountNumber">Sender Account Number</Label>
          <Input
            id="i-accountNumber"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            required
            readOnly
          />
        </div>
      </div>

      <div className="space-y-4 rounded-lg border p-4">
        <h3 className="text-lg font-semibold">Recipient Details</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="i-firstName">First Name</Label>
            <Input
              id="i-firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="i-lastName">Last Name</Label>
            <Input
              id="i-lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <Label htmlFor="i-email">Email</Label>
          <Input
            id="i-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="space-y-4 rounded-lg border p-4">
        <h3 className="text-lg font-semibold">Bank Details</h3>
        <div>
          <Label htmlFor="i-bankName">Bank Name</Label>
          <Input
            id="i-bankName"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="i-recipientAccountNumber">Account Number</Label>
          <Input
            id="i-recipientAccountNumber"
            name="recipientAccountNumber"
            value={formData.recipientAccountNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="swiftBic">SWIFT/BIC</Label>
            <Input
              id="swiftBic"
              name="swiftBic"
              value={formData.swiftBic}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="iban">IBAN</Label>
            <Input
              id="iban"
              name="iban"
              value={formData.iban}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="space-y-4 rounded-lg border p-4">
        <h3 className="text-lg font-semibold">Transaction Details</h3>
        <div>
          <Label htmlFor="i-amount">Amount</Label>
          <Input
            id="i-amount"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="i-purpose">Purpose</Label>
          <Textarea
            id="i-purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="i-status">Status</Label>
          <Select
            onValueChange={handleStatusChange}
            defaultValue={formData.status}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="COMPLETED">Completed</SelectItem>
              <SelectItem value="PENDING">Pending</SelectItem>
              <SelectItem value="FAILED">Failed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Submitting..." : "Submit Transfer"}
      </Button>
    </form>
  );
};

const CreateTransactionPage = () => {
  const [activeTab, setActiveTab] = useState<TransferType>("SAME_BANK");
  const { processTransfer, loading, error } = useAdminStore();
  const { user } = useAuthStore();
  const { fetchProfile } = useUserStore();

  const adminAccountNumber = user?.accountNumber || "";

  const handleTabChange = (tab: TransferType) => {
    setActiveTab(tab);
  };

  const handleSubmit = async (data: CreateTransferData) => {
    const success = await processTransfer(data);
    if (success) {
      toast.success("Transfer processed successfully!");
      // Refresh the user profile to update balance
      await fetchProfile();
    } else {
      toast.error(error || "An unknown error occurred.");
    }
  };

  const renderForm = () => {
    switch (activeTab) {
      case "SAME_BANK":
        return (
          <SameBankForm
            onSubmit={handleSubmit}
            loading={loading}
            adminAccountNumber={adminAccountNumber}
          />
        );
      case "OTHER_BANK":
        return (
          <OtherBankForm
            onSubmit={handleSubmit}
            loading={loading}
            adminAccountNumber={adminAccountNumber}
          />
        );
      case "INTERNATIONAL":
        return (
          <InternationalForm
            onSubmit={handleSubmit}
            loading={loading}
            adminAccountNumber={adminAccountNumber}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 md:p-6">
      <h2 className="mb-4 text-2xl font-bold">Create Admin Transfer</h2>
      <div className="mb-6 flex space-x-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
        {(["SAME_BANK", "OTHER_BANK", "INTERNATIONAL"] as TransferType[]).map(
          (tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`w-full rounded-md px-3 py-2 text-center text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-white text-gray-900 shadow dark:bg-gray-700 dark:text-white"
                  : "bg-transparent text-gray-600 hover:bg-white/50 dark:text-gray-400 dark:hover:bg-gray-700/50"
              }`}
            >
              {tab.replace("_", " ")}
            </button>
          ),
        )}
      </div>
      <div>{renderForm()}</div>
    </div>
  );
};

export default CreateTransactionPage;
