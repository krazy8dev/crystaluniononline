import { axiosInstance } from "@/utils/axiosInstance";
import type { User, UserProfileResponse } from "@/types/user";

export async function getUserProfile(): Promise<User> {
  try {
    const response =
      await axiosInstance.get<UserProfileResponse>("/user/profile");
    return response.data.data.user;
  } catch (error: any) {
    if (error.response?.status === 401) {
      throw new Error("Unauthorized. Please login again.");
    }
    throw new Error(
      error.response?.data?.message || "Failed to fetch user profile",
    );
  }
}

export async function getUserByAccountNumber(accountNumber: string): Promise<User> {
  try {
    const response = await axiosInstance.get(`/user/lookup?accountNumber=${accountNumber}`);
    return response.data.data.user;
  } catch (error: any) {
    if (error.response?.status === 401) {
      throw new Error("Unauthorized. Please login again.");
    }
    throw new Error(
      error.response?.data?.message || "Failed to fetch user",
    );
  }
}