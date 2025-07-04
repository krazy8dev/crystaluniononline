import * as z from "zod";

export const registerSchema = z
  .object({
    fullname: z.string().min(1, "Fullname is required"),
    email: z.string().email("Invalid email address"),
    securityPin: z
      .string()
      .min(4, "Security pin must be 4 digits")
      .max(4, "Security pin must be 4 digits")
      .regex(/^\d+$/, "Security pin must contain only numbers"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
