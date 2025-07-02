import axios from "axios";
import { config } from "@/config";
import useAuthStore from "@/store/authstore";

export const axiosInstance = axios.create({
  baseURL: config.api.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add bearer token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor to handle unauthorized responses
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Only log out if it's a token-related error, not validation errors
      const errorMessage = error.response?.data?.message?.toLowerCase() || "";

      // Don't log out for these specific error cases
      const nonLogoutErrors = [
        "invalid security pin",
        "wrong security pin",
        "incorrect security pin",
        "security pin is required",
        "invalid credentials",
        "wrong pin",
        "incorrect pin",
      ];

      const shouldLogout = !nonLogoutErrors.some((msg) =>
        errorMessage.includes(msg),
      );

      if (shouldLogout) {
        // Clear auth state on unauthorized response
        useAuthStore.getState().logout();
      }
    }
    return Promise.reject(error);
  },
);
