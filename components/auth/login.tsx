"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/schema/loginSchema";
import type { z } from "zod";
import { icons } from "@/lib";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import useAuthStore from "@/store/authstore";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import type { LoginRequest } from "@/types/auth";
import Container from "../shared/container";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSecurityPin, setShowSecurityPin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      securityPin: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    try {
      setIsLoading(true);
      // console.log("Login request data:", {
      //   email: values.email,
      //   password: values.password,
      //   securityPin: values.securityPin,
      // });
      await login(values as LoginRequest);
      toast.success("Login successful!");
      router.replace("/dashboard/account-summary");
    } catch  {
      // console.error("Login error:", error);
      toast.error("Failed to login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-5 flex items-center justify-center p-4">
      <Container>
        <div className="flex items-center justify-center gap-10">
          {/* Left side - Form */}
          <div className="flex w-full flex-col lg:w-1/2">
            <div className="mb-8">
              <h3 className="mb-2 text-xl font-bold text-[#0B4B3C] md:text-2xl">
                The Power of Financial Freedom
              </h3>
              <h1 className="mb-3 text-3xl font-bold md:text-6xl">
                Login into your account
              </h1>
              <p className="text-gray-600">
                Your security is our top priority. You&apos;ll need this to log into
                your Heritage Trust account
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email address"
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Password
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
                        Security Pin
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showSecurityPin ? "text" : "password"}
                            placeholder="Enter Your Security Pin"
                            className="h-12 bg-white pr-10 text-base"
                            maxLength={4}
                            {...field}
                            disabled={isLoading}
                          />
                          <button
                            type="button"
                            onClick={() => setShowSecurityPin(!showSecurityPin)}
                            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            disabled={isLoading}
                          >
                            {showSecurityPin ? (
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

                <div className="flex items-center justify-between">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <div>
                  <Button
                    type="submit"
                    className="h-12 rounded-full bg-blue-600 px-20 text-base font-medium text-white hover:bg-blue-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          {/* Right side - Image */}
          <div className="hidden w-full max-w-[480px] lg:block">
            <Image
              src={icons.login}
              alt="Banking illustration"
              className="h-full w-full rounded-lg object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
