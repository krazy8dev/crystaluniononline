"use client";

import { navbarLinks } from "@/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const UserMenu = () => {
  const path = usePathname();
  return (
    <div className="flex items-center gap-4 text-sm">
      {navbarLinks.map((link) => (
        <Link
          href={link.href}
          key={link.label}
          className={`${path === link.href ? "text-black underline underline-offset-8" : "text-gray-500"}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default UserMenu;
