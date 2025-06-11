"use client";

import { create } from "zustand";
import { getUserProfile } from "@/api/api";
import { User } from "@/types/user";

interface UserState {
  profile: User | null;
  isLoading: boolean;
  error: string | null;
  fetchProfile: () => Promise<void>;
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
}));

export default useUserStore;
