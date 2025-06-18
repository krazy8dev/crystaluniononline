"use client";

import { axiosInstance } from "@/utils/axiosInstance";
import { create } from "zustand";

interface TransactionState {
  isLoading: boolean;
  error: string | null;
  transactions: any[];
  selectedTransaction: any | null;

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

  // Get Transactions
  getTransactions: () => Promise<void>;

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
      const response = await axiosInstance.post("/transactions/transfer/same-bank", {
        type: "SAME_BANK",
        ...data,
      });
      set({ isLoading: false });
      return response.data;
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Transfer failed",
        isLoading: false,
      });
      throw error;
    }
  },

  otherBankTransfer: async (data) => {
    try {
      set({ isLoading: true, error: null });
      const response = await axiosInstance.post("/transactions/transfer/other-bank", {
        type: "OTHER_BANK",
        ...data,
      });
      set({ isLoading: false });
      return response.data;
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Transfer failed",
        isLoading: false,
      });
      throw error;
    }
  },

  internationalTransfer: async (data) => {
    try {
      set({ isLoading: true, error: null });
      const response = await axiosInstance.post("/transactions/transfer/international", {
        type: "INTERNATIONAL",
        ...data,
      });
      set({ isLoading: false });
      return response.data;
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Transfer failed",
        isLoading: false,
      });
      throw error;
    }
  },

  getTransactions: async () => {
    try {
      set({ isLoading: true, error: null });
      const response = await axiosInstance.get("/transactions");
      set({ transactions: response.data.data.transactions, isLoading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Failed to fetch transactions",
        isLoading: false,
      });
    }
  },

  getTransactionById: async (id) => {
    try {
      set({ isLoading: true, error: null });
      const response = await axiosInstance.get(`/transactions/${id}`);
      set({ selectedTransaction: response.data.data.transaction, isLoading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Failed to fetch transaction",
        isLoading: false,
      });
    }
  },

  clearError: () => set({ error: null }),
}));

export default useTransactionStore; 