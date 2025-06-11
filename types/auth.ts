export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  securityPin: string;
}

export interface VerifyEmailRequest {
  email: string;
  otp: string;
}

export interface LoginRequest {
  email: string;
  password: string;
  securityPin?: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  password: string;
  confirmPassword: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  // isEmailVerified: boolean;
  accountNumber?: string;
  securityPin?: string;
}
