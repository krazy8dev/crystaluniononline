import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import Script from "next/script";

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
        position="top-center"
        toastOptions={{
          style: {
            background: "#0B4B3C",
            color: "white",
          },
          className: "text-sm font-medium",
        }}
        />
        <Script id="tawkto" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68512fb04be5e7190b532d79/1itui4iue';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
