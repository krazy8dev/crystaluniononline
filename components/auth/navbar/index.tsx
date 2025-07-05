"use client";

import Container from "@/components/shared/container";
import Logo from "@/components/shared/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const NavbarAuth = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed z-50 w-full border-b bg-white py-4">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden items-center gap-4 text-sm font-medium md:flex">
            <div>
              {pathname === "/login" ? (
                <h1>Don&apos;t have an account?</h1>
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

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="flex h-8 w-8 flex-col items-center justify-center space-y-1 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${isMenuOpen ? "block" : "hidden"} mt-4 border-t pt-4 pb-4`}
        >
          <div className="flex flex-col items-center gap-4 text-sm font-medium">
            <div className="text-center">
              {pathname === "/login" ? (
                <h1>Don&apos;t have an account?</h1>
              ) : (
                <h1>Already have an account?</h1>
              )}
            </div>
            <div>
              {pathname === "/login" ? (
                <Link
                  href="/register"
                  className="rounded-full border border-blue-800 bg-blue-800 px-8 py-2 text-white transition-colors hover:bg-white hover:text-blue-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="rounded-full border border-blue-800 bg-blue-800 px-8 py-2 text-white transition-colors hover:bg-white hover:text-blue-800"
                  onClick={() => setIsMenuOpen(false)}
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
