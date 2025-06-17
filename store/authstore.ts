"use client";

import { config } from "@/config";
import {
    ForgotPasswordRequest,
    LoginRequest,
    RegisterRequest,
    ResetPasswordRequest,
    User,
} from "@/types/auth";
import { axiosInstance } from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import { NextRouter } from "next/router";
import { create, StateCreator } from "zustand";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware";

const decodeToken = (token: string) => {
  try {
    const base64Payload = token.split(".")[1];
    const payload = Buffer.from(base64Payload, "base64").toString("utf-8");
    return JSON.parse(payload);
  } catch (error) {
    console.error("Invalid token");
    return null;
  }
};

interface AuthState {
  token: string | null;
  expireAt: number | null;
  user: User | null;
  isInitialized: boolean;
  isAdmin: boolean;
  pageLoad: boolean;

  setPageLoad: (pageLoad: boolean) => void;
  setInitialized: (initialized: boolean) => void;
  setToken: (token: string | null) => void;

  register: (data: RegisterRequest) => Promise<void>;
  login: (data: LoginRequest, isAdminRoute?: boolean) => Promise<void>;
  forgotPassword: (data: ForgotPasswordRequest) => Promise<void>;
  resetPassword: (data: ResetPasswordRequest) => Promise<void>;
  logout: (router?: NextRouter) => void;
  checkAdminAccess: () => boolean;
}

type AuthPersistState = {
  token: string | null;
  expireAt: number | null;
  user: User | null;
  isInitialized: boolean;
  isAdmin: boolean;
};

type AuthStorePersist = (
  config: StateCreator<AuthState>,
  options: PersistOptions<AuthState, AuthPersistState>,
) => StateCreator<AuthState>;

const useAuthStore = create<AuthState>()(
  (persist as AuthStorePersist)(
    (set: any, get: any) => ({
      token: null,
      expireAt: null,
      user: null,
      pageLoad: false,
      isInitialized: false,
      isAdmin: false,

      setPageLoad: (pageLoad: boolean) => set({ pageLoad }),
      setInitialized: (initialized: boolean) =>
        set({ isInitialized: initialized }),
      setToken: (token: string | null) => {
        if (token) {
          const decodedToken = decodeToken(token);
          if (decodedToken) {
            const expireAt =
              decodedToken.exp ||
              Math.floor(Date.now() / 1000) + config.auth.sessionDuration;
            set({ token, expireAt });
          }
        } else {
          set({ token: null, expireAt: null });
        }
      },

      register: async (data: RegisterRequest) => {
        try {
          const response = await axiosInstance.post(
            config.api.endpoints.auth.register,
            data,
          );
          if (response.status === 201) {
            set({
              user: response.data.user,
              isAdmin: response.data.user.role === "admin",
            });
          }
        } catch (error: any) {
          if (error.response?.status === 400) {
            throw new Error(
              error.response.data.message || "Invalid registration data",
            );
          }
          throw error;
        }
      },

      login: async (data: LoginRequest, isAdminRoute = false) => {
        try {
          console.log("Making login request with data:", data);

          const response = await axiosInstance.post(
            isAdminRoute ? "/auth/admin/login" : config.api.endpoints.auth.login,
            data,
          );

          console.log("Login response:", response.data);

          if (response.data.status === "success") {
            const { token } = response.data;
            const user = response.data.data.user;
            const decodedToken = decodeToken(token);

            if (!decodedToken) {
              throw new Error("Invalid token received");
            }

            // For admin route, verify the user has admin role
            if (isAdminRoute && user.role !== "admin") {
              throw new Error("Unauthorized: Admin access required");
            }

            // For user route, verify user is not trying to access with admin credentials
            if (!isAdminRoute && user.role === "admin") {
              throw new Error("Please use admin login for admin accounts");
            }

            const expireAt =
              decodedToken.exp ||
              Math.floor(Date.now() / 1000) + config.auth.sessionDuration;

            // Set cookies
            Cookies.set(config.auth.cookie.token.name, token, {
              expires: config.auth.sessionDuration / 3600,
              ...config.auth.cookie.token.options,
            });

            // Update state
            set({
              token,
              expireAt,
              user,
              isAdmin: user.role === "admin",
            });
          } else {
            throw new Error(response.data.message || "Failed to login");
          }
        } catch (error: any) {
          console.error("Login error details:", {
            status: error.response?.status,
            data: error.response?.data,
            message: error.message,
          });

          if (error.response?.status === 401) {
            throw new Error(
              isAdminRoute
                ? "Invalid admin credentials"
                : "Invalid credentials",
            );
          } else if (error.response?.status === 500) {
            throw new Error("Server error. Please try again later.");
          }
          throw new Error(error.response?.data?.message || "Failed to login");
        }
      },

      checkAdminAccess: () => {
        const state = get();
        return state.isAdmin && state.user?.role === "admin";
      },

      forgotPassword: async (data: ForgotPasswordRequest) => {
        try {
          const response = await axiosInstance.post(
            config.api.endpoints.auth.forgotPassword,
            data,
          );
          if (response.status !== 200) {
            throw new Error("Failed to send reset email");
          }
        } catch (error: any) {
          if (error.response?.status === 404) {
            throw new Error("User not found");
          }
          throw error;
        }
      },

      resetPassword: async (data: ResetPasswordRequest) => {
        try {
          const response = await axiosInstance.post(
            config.api.endpoints.auth.resetPassword,
            data,
          );
          if (response.status !== 200) {
            throw new Error("Failed to reset password");
          }
        } catch (error: any) {
          throw new Error(
            error.response?.data?.message || "Password reset failed",
          );
        }
      },

      logout: (router?: NextRouter) => {
        Cookies.remove(
          config.auth.cookie.token.name,
          config.auth.cookie.token.options,
        );
        Cookies.remove(
          config.auth.cookie.expireAt.name,
          config.auth.cookie.expireAt.options,
        );

        set({
          token: null,
          expireAt: null,
          user: null,
          isAdmin: false,
        });

        if (router) {
          const isAdminPath = router.pathname.startsWith("/admin");
          router.push(isAdminPath ? "/admin/login" : "/login");
        }
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state: AuthState): AuthPersistState => ({
        token: state.token,
        expireAt: state.expireAt,
        user: state.user,
        isInitialized: state.isInitialized,
        isAdmin: state.isAdmin,
      }),
    },
  ),
);

export default useAuthStore;
