"use client";

import { create } from "zustand";
import { getUserByAccountNumber, getUserProfile } from "@/api/api";
import { User } from "@/types/user";
import { axiosInstance } from "@/utils/axiosInstance";

interface UserState {
  profile: User | null;
  isLoading: boolean;
  error: string | null;
  fetchProfile: () => Promise<void>;
  getUserByAccountNumber: (accountNumber: string) => Promise<User | null>;
}

const useUserStore = create<UserState>((set) => ({
  profile: null,
  isLoading: false,
  error: null,
  fetchProfile: async () => {
    try {
      set({ isLoading: true, error: null });
      const profile = await getUserProfile();
      set({ profile, isLoading: false });
    } catch (error: any) {
      set({
        error: error.message || "Failed to fetch profile",
        isLoading: false,
      });
    }
  },
  getUserByAccountNumber: async (accountNumber) => {
    try {
      set({ isLoading: true, error: null });
      const user = await getUserByAccountNumber(accountNumber);
      set({ isLoading: false });
      return user;
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Failed to fetch user",
        isLoading: false,
      });
      return null;
    }
  },
}));

export default useUserStore;
