"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { registerSchema } from "@/lib/schema/registerSchema";
import type { z } from "zod";
import { icons } from "@/lib";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import useAuthStore from "@/store/authstore";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import type { RegisterRequest } from "@/types/auth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const register = useAuthStore((state) => state.register);
  const router = useRouter();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      email: "",
      securityPin: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    try {
      setIsLoading(true);
      // Convert form values to match API request type
      const registerData: RegisterRequest = {
        fullName: values.fullname, // Convert fullname to fullName
        email: values.email,
        securityPin: values.securityPin,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };

      await register(registerData);
      toast.success(
        "Registration successful!",
      );
      router.replace("/login");
    } catch  {
      const errorMessage =
        // error.response?.data?.message ||
        // error.message ||
        "Failed to register. Please try again.";
      toast.error(errorMessage);

      // If email already exists, clear the email field
      if (errorMessage.toLowerCase().includes("email already exists")) {
        form.setValue("email", "");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-5 flex items-center justify-center p-4">
      <div className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:gap-16">
        {/* Left side - Form */}
        <div className="flex w-full flex-col lg:w-1/2">
          <div className="mb-8">
            <h3 className="mb-2 text-xl font-bold text-[#0B4B3C] md:text-2xl">
              The Power of Financial Freedom
            </h3>
            <h1 className="mb-3 text-3xl font-bold md:text-6xl">
              Let&apos;s Get Started!
            </h1>
            <p className="text-gray-600">
              Please Enter your Email Address to Start your Online Application
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Fullname<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Fullname"
                        className="h-12 bg-white text-base"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Email<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        className="h-12 bg-white text-base"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="securityPin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Security pin<span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Support pin"
                        className="h-12 bg-white text-base"
                        {...field}
                        disabled={isLoading}
                        maxLength={4}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 space-y-6">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Password<span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Your Password"
                            className="h-12 bg-white pr-10 text-base"
                            {...field}
                            disabled={isLoading}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            disabled={isLoading}
                          >
                            {showPassword ? (
                              <EyeOffIcon className="h-5 w-5" />
                            ) : (
                              <EyeIcon className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <p className="mt-1 text-xs text-gray-500">
                        Password must be at least 8 characters and contain
                        uppercase, lowercase, number, and special character
                      </p>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Confirm password<span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            className="h-12 bg-white pr-10 text-base"
                            {...field}
                            disabled={isLoading}
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            disabled={isLoading}
                          >
                            {showConfirmPassword ? (
                              <EyeOffIcon className="h-5 w-5" />
                            ) : (
                              <EyeIcon className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="text-sm text-gray-600">
                By clicking submit, you agree to{" "}
                <Link href="/terms" className="text-blue-600 hover:underline">
                  heritagetrustbank.com Terms of Use
                </Link>
              </div>

              <div>
                <Button
                  type="submit"
                  className="h-12 rounded-full bg-blue-600 px-20 text-base font-medium text-white hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Registering..." : "Submit Now"}
                </Button>
              </div>
            </form>
          </Form>
        </div>

        {/* Right side - Image */}
        <div className="hidden w-full max-w-[480px] lg:block">
          <Image
            src={icons.register}
            alt="Banking illustration"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
