"use client";

import { axiosInstance } from "@/utils/axiosInstance";
import { create } from "zustand";

interface TransactionRecipient {
  firstName?: string;
  lastName?: string;
  email?: string;
  accountNumber: string;
  bankName?: string;
  bankRouteNumber?: string;
  city?: string;
  country?: string;
  swiftBic?: string;
  iban?: string;
}

interface TransactionSender {
  _id: string;
  fullName: string;
  email: string;
  accountNumber: string;
}

interface Transaction {
  _id: string;
  sender: TransactionSender;
  recipient?: TransactionRecipient;
  type: string;
  typeDescription?: string;
  amount: number;
  purpose: string;
  status: string;
  balance: number;
  createdAt: string;
  updatedAt: string;
  reference: string;
  __v: number;
}

interface TransactionState {
  isLoading: boolean;
  error: string | null;
  transactions: Transaction[];
  selectedTransaction: Transaction | null;

  // Same Bank Transfer
  sameBankTransfer: (data: {
    accountNumber: string;
    amount: number;
    purpose: string;
    securityPin: string;
  }) => Promise<void>;

  // Other Bank Transfer
  otherBankTransfer: (data: {
    firstName: string;
    lastName: string;
    email: string;
    accountNumber: string;
    bankName: string;
    bankRouteNumber: string;
    amount: number;
    purpose: string;
    securityPin: string;
  }) => Promise<void>;

  // International Transfer
  internationalTransfer: (data: {
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    country: string;
    bankName: string;
    accountNumber: string;
    swiftBic: string;
    iban: string;
    amount: number;
    purpose: string;
    securityPin: string;
  }) => Promise<void>;

  // Get All Transactions
  getAllTransactions: () => Promise<void>;

  // Get Transaction by ID
  getTransactionById: (id: string) => Promise<void>;

  clearError: () => void;
}

const useTransactionStore = create<TransactionState>((set) => ({
  isLoading: false,
  error: null,
  transactions: [],
  selectedTransaction: null,

  sameBankTransfer: async (data) => {
    try {
      set({ isLoading: true, error: null });
      const response = await axiosInstance.post(
        "/transactions/transfer/same-bank",
        {
          type: "SAME_BANK",
          ...data,
        },
      );
      set({ isLoading: false });
      return response.data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Transfer failed";
      set({
        error: errorMessage,
        isLoading: false,
      });
      throw new Error(errorMessage);
    }
  },

  otherBankTransfer: async (data) => {
    try {
      set({ isLoading: true, error: null });
      const response = await axiosInstance.post(
        "/transactions/transfer/other-bank",
        {
          type: "OTHER_BANK",
          ...data,
        },
      );
      set({ isLoading: false });
      return response.data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Transfer failed";
      set({
        error: errorMessage,
        isLoading: false,
      });
      throw new Error(errorMessage);
    }
  },

  internationalTransfer: async (data) => {
    try {
      set({ isLoading: true, error: null });
      const response = await axiosInstance.post(
        "/transactions/transfer/international",
        {
          type: "INTERNATIONAL",
          ...data,
        },
      );
      set({ isLoading: false });
      return response.data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Transfer failed";
      set({
        error: errorMessage,
        isLoading: false,
      });
      throw new Error(errorMessage);
    }
  },

  getAllTransactions: async () => {
    try {
      set({ isLoading: true, error: null });
      const response = await axiosInstance.get("/transactions");
      set({ transactions: response.data.data.transactions, isLoading: false });
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Failed to fetch transactions";
      set({
        error: errorMessage,
        isLoading: false,
      });
      throw new Error(errorMessage);
    }
  },

  getTransactionById: async (id) => {
    try {
      set({ isLoading: true, error: null });
      const response = await axiosInstance.get(`/transactions/${id}`);
      set({
        selectedTransaction: response.data.data.transaction,
        isLoading: false,
      });
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Failed to fetch transaction";
      set({
        error: errorMessage,
        isLoading: false,
      });
      throw new Error(errorMessage);
    }
  },

  clearError: () => set({ error: null }),
}));

export default useTransactionStore;
