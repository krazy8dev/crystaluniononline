"use client";

import { axiosInstance } from "@/utils/axiosInstance";
import { config } from "@/config";
import { getUserProfile } from "@/api/api";
import { User } from "@/types/user";
import { create } from "zustand";

export interface VerifyAccountResponse {
  status: string;
  message: string;
  data: {
    fullName: string;
  };
}

interface UserState {
  profile: User | null;
  isLoading: boolean;
  error: string | null;
  fetchProfile: () => Promise<void>;
  verifyAccount: (accountNumber: string) => Promise<VerifyAccountResponse>;
}

const useUserStore = create<UserState>((set) => ({
  profile: null,
  isLoading: false,
  error: null,
    verifyAccount: async (accountNumber: string) => {
    try {
      const response = await axiosInstance.post(
        config.api.endpoints.user.verifyAccount,
        { accountNumber },
      );
      return response.data;
    } catch (error) {
      console.error("Error verifying account:", error);
      throw error;
    }
  },

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
}));

export default useUserStore;
