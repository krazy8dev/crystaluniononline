
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heritage Trust Bank",
  description:
    "A modern, technology-first bank built for you and your growing business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster
          // position="top-right"
          // toastOptions={{
          //   style: {
          //     background: "white",
          //     color: "black",
          //   },
          //   className: "text-sm font-medium",
          // }}
        />
      </body>
    </html>
  );
}
