"use client";

import { config } from "@/config";
import { axiosInstance } from "@/utils/axiosInstance";
import { create, StateCreator } from "zustand";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware";

// Types
interface DashboardStats {
  users: {
    total: number;
    topUsers: Array<{
      fullName: string;
      email: string;
      accountNumber: string;
      balance: number;
    }>;
  };
  transactions: {
    total: number;
    byStatus: {
      pending: number;
      completed: number;
      failed: number;
      cancelled: number;
    };
    totalAmount: number;
    recent: Array<{
      _id: string;
      type: string;
      amount: number;
      status: string;
      createdAt: string;
    }>;
  };
}

interface TransactionStats {
  period: string;
  stats: {
    byStatus: Array<{
      _id: string;
      count: number;
    }>;
    amountByStatus: Array<{
      _id: string;
      total: number;
    }>;
    volumeOverTime: Array<{
      _id: string;
      count: number;
      amount: number;
    }>;
  };
}

interface User {
  fullName: string;
  email: string;
  accountNumber: string;
  balance: number;
  role: string;
}

interface Transaction {
  _id: string;
  type: string;
  amount: number;
  status: string;
  sender: {
    fullName: string;
    email: string;
    accountNumber: string;
  };
  recipient?: {
    accountNumber: string;
  };
  createdAt: string;
}

interface AdminState {
  dashboardStats: DashboardStats | null;
  transactionStats: TransactionStats | null;
  users: User[];
  pendingTransactions: Transaction[];
  selectedUser: User | null;
  selectedTransaction: Transaction | null;
  loading: boolean;
  error: string | null;

  // Actions
  fetchDashboardStats: () => Promise<void>;
  fetchTransactionStats: (period: 'daily' | 'weekly' | 'monthly' | 'yearly') => Promise<void>;
  fetchUsers: () => Promise<void>;
  fetchUserById: (id: string) => Promise<void>;
  updateUser: (id: string, data: Partial<User>) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
  topUpUserBalance: (id: string, amount: number) => Promise<void>;
  fetchPendingTransactions: () => Promise<void>;
  fetchTransactionById: (id: string) => Promise<void>;
  updateTransactionStatus: (id: string, status: string) => Promise<void>;
  clearError: () => void;
}

type AdminStorePersist = (
  config: StateCreator<AdminState>,
  options: PersistOptions<AdminState>,
) => StateCreator<AdminState>;

const useAdminStore = create<AdminState>()(
  (persist as AdminStorePersist)(
    (set, get) => ({
      dashboardStats: null,
      transactionStats: null,
      users: [],
      pendingTransactions: [],
      selectedUser: null,
      selectedTransaction: null,
      loading: false,
      error: null,

      fetchDashboardStats: async () => {
        try {
          set({ loading: true, error: null });
          const response = await axiosInstance.get(config.api.endpoints.admin.dashboard);
          set({ dashboardStats: response.data.data.stats });
        } catch (error: any) {
          set({ error: error.response?.data?.message || 'Failed to fetch dashboard stats' });
        } finally {
          set({ loading: false });
        }
      },

      fetchTransactionStats: async (period) => {
        try {
          set({ loading: true, error: null });
          const response = await axiosInstance.get(`${config.api.endpoints.admin.transactions.stats}?period=${period}`);
          set({ transactionStats: response.data.data });
        } catch (error: any) {
          set({ error: error.response?.data?.message || 'Failed to fetch transaction stats' });
        } finally {
          set({ loading: false });
        }
      },

      fetchUsers: async () => {
        try {
          set({ loading: true, error: null });
          const response = await axiosInstance.get(config.api.endpoints.admin.users);
          set({ users: response.data.data.users });
        } catch (error: any) {
          set({ error: error.response?.data?.message || 'Failed to fetch users' });
        } finally {
          set({ loading: false });
        }
      },

      fetchUserById: async (id) => {
        try {
          set({ loading: true, error: null });
          const response = await axiosInstance.get(config.api.endpoints.admin.getUserById(id));
          set({ selectedUser: response.data.data.user });
        } catch (error: any) {
          set({ error: error.response?.data?.message || 'Failed to fetch user' });
        } finally {
          set({ loading: false });
        }
      },

      updateUser: async (id, data) => {
        try {
          set({ loading: true, error: null });
          const response = await axiosInstance.patch(config.api.endpoints.admin.updateUser(id), data);
          set({ selectedUser: response.data.data.user });
          // Update user in the users list if it exists
          const users = get().users;
          const updatedUsers = users.map(user => 
            user.accountNumber === id ? response.data.data.user : user
          );
          set({ users: updatedUsers });
        } catch (error: any) {
          set({ error: error.response?.data?.message || 'Failed to update user' });
        } finally {
          set({ loading: false });
        }
      },

      deleteUser: async (id) => {
        try {
          set({ loading: true, error: null });
          await axiosInstance.delete(config.api.endpoints.admin.deleteUser(id));
          // Remove user from the users list
          const users = get().users;
          const updatedUsers = users.filter(user => user.accountNumber !== id);
          set({ users: updatedUsers });
        } catch (error: any) {
          set({ error: error.response?.data?.message || 'Failed to delete user' });
        } finally {
          set({ loading: false });
        }
      },

      topUpUserBalance: async (id, amount) => {
        try {
          set({ loading: true, error: null });
          const response = await axiosInstance.post(config.api.endpoints.admin.topUpUser(id), { amount });
          set({ selectedUser: response.data.data.user });
          // Update user in the users list if it exists
          const users = get().users;
          const updatedUsers = users.map(user => 
            user.accountNumber === id ? response.data.data.user : user
          );
          set({ users: updatedUsers });
        } catch (error: any) {
          set({ error: error.response?.data?.message || 'Failed to top up balance' });
        } finally {
          set({ loading: false });
        }
      },

      fetchPendingTransactions: async () => {
        try {
          set({ loading: true, error: null });
          const response = await axiosInstance.get(config.api.endpoints.admin.transactions.pending);
          set({ pendingTransactions: response.data.data.transactions });
        } catch (error: any) {
          set({ error: error.response?.data?.message || 'Failed to fetch pending transactions' });
        } finally {
          set({ loading: false });
        }
      },

      fetchTransactionById: async (id) => {
        try {
          set({ loading: true, error: null });
          const response = await axiosInstance.get(config.api.endpoints.admin.transactions.getById(id));
          set({ selectedTransaction: response.data.data.transaction });
        } catch (error: any) {
          set({ error: error.response?.data?.message || 'Failed to fetch transaction' });
        } finally {
          set({ loading: false });
        }
      },

      updateTransactionStatus: async (id, status) => {
        try {
          set({ loading: true, error: null });
          const response = await axiosInstance.patch(config.api.endpoints.admin.transactions.updateStatus(id), { status });
          set({ selectedTransaction: response.data.data.transaction });
          // Update transaction in the pending transactions list if it exists
          const pendingTransactions = get().pendingTransactions;
          const updatedTransactions = pendingTransactions.map(transaction => 
            transaction._id === id ? response.data.data.transaction : transaction
          );
          set({ pendingTransactions: updatedTransactions });
        } catch (error: any) {
          set({ error: error.response?.data?.message || 'Failed to update transaction status' });
        } finally {
          set({ loading: false });
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: "admin-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAdminStore; 