import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  securityPin: z
    .string()
    .min(4, "Security pin must be 4 digits")
    .max(4, "Security pin must be 4 digits")
    .regex(/^\d+$/, "Security pin must contain only numbers"),
});
