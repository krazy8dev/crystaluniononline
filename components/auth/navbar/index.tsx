"use client";

import Container from "@/components/shared/container";
import Logo from "@/components/shared/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarAuth = () => {
  const pathname = usePathname();
  return (
    <div className="fixed w-full border-b bg-white py-4 z-50">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <div className="md:flex hidden items-center gap-4 text-sm font-medium">
            <div>
              {pathname === "/login" ? (
                <h1>Don't have an account?</h1>
              ) : (
                <h1>Already have an account?</h1>
              )}
            </div>
            <div>
              {pathname === "/login" ? (
                <Link
                  href="/register"
                  className="rounded-full border border-blue-800 bg-blue-800 px-8 py-2 text-white transition-colors hover:bg-white hover:text-blue-800"
                >
                  Register
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="rounded-full border border-blue-800 bg-blue-800 px-8 py-2 text-white transition-colors hover:bg-white hover:text-blue-800"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavbarAuth;
