import { AnimationProvider } from "@/components/providers/animation-provider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";
// import { TranslationProvider } from "@/contexts/TranslationContext";
// import LanguageSelector from "@/components/ui/language-selector";

export const metadata: Metadata = {
  title: "Crystal Union ",
  description:
    "A modern, technology-first bank built for you and your growing business.",
  icons: [
    {
      url: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en">
      <body>
        {/* Smartsupp Live Chat script */}
        <Script id="smartsupp-livechat" strategy="afterInteractive">
          {`
            var _smartsupp = _smartsupp || {};
            _smartsupp.key = '${process.env.NEXT_PUBLIC_SMARTSUPP_KEY}';
            window.smartsupp||(function(d) {
              var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
              s=d.getElementsByTagName('script')[0];c=d.createElement('script');
              c.type='text/javascript';c.charset='utf-8';c.async=true;
              c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
            })(document);
          `}
        </Script>
        <noscript>
          Powered by{" "}
          <a href="https://www.smartsupp.com" target="_blank">
            Smartsupp
          </a>
        </noscript>
        {/* <TranslationProvider> */}
        {/* <div
          id="google_translate_element"
          className="fixed top-1/2 right-4 z-50 -translate-y-1/2 rounded bg-white px-3 py-2 shadow-md"
        ></div> */}

        {/* <Script id="google-translate" strategy="afterInteractive">
          {`
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    }
  `}
        </Script> */}
        <Script
          strategy="afterInteractive"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />

        <AnimationProvider>
          {/* Language Selector - Fixed position at bottom */}
          <div className="fixed bottom-4 left-4 z-50">
            {/* <LanguageSelector /> */}
          </div>
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
          {/* <Script id="tawkto" strategy="afterInteractive">
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
            </Script> */}
          <Analytics />
        </AnimationProvider>
        {/* </TranslationProvider> */}
      </body>
    </html>
  );
}
