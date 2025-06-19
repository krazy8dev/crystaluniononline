import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import Script from "next/script";
import { AnimationProvider } from "@/components/providers/animation-provider";

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
        <AnimationProvider>
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
            // Check if ad blocker is active
            function isAdBlockerActive() {
              return new Promise((resolve) => {
                const testAd = document.createElement('div');
                testAd.innerHTML = '&nbsp;';
                testAd.className = 'adsbox';
                document.body.appendChild(testAd);
                
                setTimeout(() => {
                  const isBlocked = testAd.offsetHeight === 0;
                  document.body.removeChild(testAd);
                  resolve(isBlocked);
                }, 100);
              });
            }

            // Only load Tawk.to if ad blocker is not active
            isAdBlockerActive().then((blocked) => {
              if (!blocked) {
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                  try {
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/68512fb04be5e7190b532d79/1itui4iue';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                  } catch(e) {
                    console.log('Tawk.to chat widget disabled');
                  }
                })();
              } else {
                console.log('Tawk.to chat widget disabled due to ad blocker');
              }
            });
          `}
          </Script>
        </AnimationProvider>
      </body>
    </html>
  );
}
