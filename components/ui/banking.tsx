import React from "react";
import Container from "../shared/container";
import {
  CheckIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  TabletIcon,
} from "lucide-react";
import Image from "next/image";
import { icons } from "@/lib";

const Banking = () => {
  return (
    <section className="bg-gray-100 py-10 md:py-20">
      <Container>
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:justify-between">
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <ShieldCheckIcon className="mx-auto h-12 w-12 rounded-full bg-blue-600/70 p-3 text-white md:h-14 md:w-14 lg:mx-0" />
            <h1 className="mt-4 mb-3 text-lg font-bold capitalize md:mt-5 md:mb-5 md:text-xl">
              Banking at your fingertips
            </h1>
            <h2 className="text-3xl leading-tight font-extrabold md:text-4xl lg:text-5xl">
              Your banking <br className="hidden md:block" /> experience
              anytime, <br className="hidden md:block" /> anywhere.
            </h2>
            <p className="mt-4 text-sm md:mt-5 md:text-base">
              Get your money moving with our simple to use, accessible mobile
              app. As good as <br className="hidden lg:block" /> a bank branch
              within your phone!
            </p>
            <div className="mt-5">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-center gap-2 lg:justify-start">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 rounded-full border border-green-700 bg-green-700 p-1 text-white md:h-6 md:w-6" />
                  <span className="text-sm font-bold md:text-base">
                    Bill Payments, Funds Transfer, QR payments
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 lg:justify-start">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 rounded-full border border-green-700 bg-green-700 p-1 text-white md:h-6 md:w-6" />
                  <span className="text-sm font-bold md:text-base">
                    Credit card payments and Order food
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10 lg:justify-start">
              <button className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-black px-3 py-2 transition-all hover:bg-gray-900 md:px-4">
                <TabletIcon className="h-5 w-5 text-white md:h-6 md:w-6" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-300 md:text-xs">
                    Download on the
                  </span>
                  <span className="text-xs font-semibold text-white md:text-sm">
                    App Store
                  </span>
                </div>
              </button>
              <button className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-black px-3 py-2 transition-all hover:bg-gray-900 md:px-4">
                <SmartphoneIcon className="h-5 w-5 text-white md:h-6 md:w-6" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-300 md:text-xs">
                    Get it on
                  </span>
                  <span className="text-xs font-semibold text-white md:text-sm">
                    Google Play
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src={icons.mobile}
              alt="banking"
              className="mx-auto w-full max-w-[500px] rounded-xl"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banking;
