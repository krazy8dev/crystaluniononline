"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

const Breadcrumb = () => {
  const pathname = usePathname();

  // Skip rendering breadcrumb on home page
  if (pathname === "/") return null;

  // Convert path to breadcrumb items
  const pathSegments = pathname.split("/").filter(Boolean);
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    return {
      href,
      label:
        segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
    };
  });

  // Check if we're in admin or user dashboard areas
  const isInDashboard =
    pathname.startsWith("/admin") || pathname.startsWith("/dashboard");

  return (
    <motion.nav
      className="container mx-auto px-2 py-4 sm:px-4 sm:py-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ol className="scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent flex max-w-full items-center space-x-2 overflow-x-auto rounded-lg border border-gray-100 bg-white px-2 py-2 text-xs shadow-sm sm:px-4 sm:py-3 sm:text-sm">
        {!isInDashboard && (
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Link
              href="/"
              className="flex items-center text-gray-600 transition-all duration-200 hover:scale-105 hover:text-blue-600"
            >
              <Home className="mr-1 h-4 w-4" />
              Home
            </Link>
          </motion.li>
        )}
        {breadcrumbItems.map((item, index) => (
          <motion.li
            key={item.href}
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
          >
            {(!isInDashboard || index > 0) && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              >
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </motion.div>
            )}
            {index === breadcrumbItems.length - 1 ? (
              <span className="rounded-md bg-blue-50 px-2 py-1 font-semibold text-blue-600">
                {item.label}
              </span>
            ) : isInDashboard && index === 0 ? (
              // First item in dashboard is not clickable
              <span className="font-medium text-gray-600">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="rounded-md px-2 py-1 text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:text-blue-600"
              >
                {item.label}
              </Link>
            )}
          </motion.li>
        ))}
      </ol>
    </motion.nav>
  );
};

export default Breadcrumb;
