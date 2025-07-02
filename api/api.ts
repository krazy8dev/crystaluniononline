import { VerifyAccountResponse } from "@/store/userStore";
import type { User, UserProfileResponse } from "@/types/user";
import { axiosInstance } from "@/utils/axiosInstance";

function isAxiosError(
  error: unknown,
): error is { response?: { status?: number; data?: { message?: string } } } {
  return (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    typeof (error as Record<string, unknown>).response === "object"
  );
}

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

export async function getUserByAccountNumber(
  accountNumber: string,
): Promise<VerifyAccountResponse> {
  try {
    const response = await axiosInstance.post("/user/verify-account", {
      accountNumber,
    });
    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error) && error.response?.status === 401) {
      throw new Error("Unauthorized. Please login again.");
    }
    throw new Error(
      isAxiosError(error) && error.response?.data?.message
        ? error.response.data.message
        : "Failed to verify account",
    );
  }
}
