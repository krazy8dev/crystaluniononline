"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

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

  return (
    <nav className="container mx-auto py-4">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link
            href="/"
            className="flex items-center text-gray-600 transition-colors hover:text-blue-800"
          >
            Home
          </Link>
        </li>
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4 text-gray-400" />
            {index === breadcrumbItems.length - 1 ? (
              <span className="font-medium text-blue-800">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-gray-600 transition-colors hover:text-blue-800"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
