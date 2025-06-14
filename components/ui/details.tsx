import React from "react";
import Container from "../shared/container";
import Image from "next/image";
import notif from "@/app/assets/images/notification.jpg";
import { Bell, CheckIcon, ShieldCheckIcon } from "lucide-react";

const Details = () => {
  return (
    <main className="bg-gray-100 py-10 md:py-20">
      <Container>
        <div className="flex flex-col gap-10 md:gap-20">
          {/* First Section */}
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="flex w-full flex-col gap-4 text-center md:gap-5 lg:w-1/2 lg:text-left">
              <Bell className="mx-auto h-12 w-12 rounded-full bg-blue-800 p-4 text-white md:h-14 md:w-14 lg:mx-0" />
              <h3 className="text-xl font-bold md:text-2xl">Smart Banking</h3>
              <h1 className="text-3xl font-bold capitalize md:text-4xl lg:text-5xl">
                Real time notifications
              </h1>
              <p className="text-base font-medium md:text-lg">
                Your customer stay informed in real time with everything that&apos;s
                happening on his account: payments, transfer, advice. Get
                visibility on your customers&apos; flows to anticipate their needs.
              </p>

              <div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-center gap-2 lg:justify-start">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 rounded-full border border-green-700 bg-green-700 p-1 text-white md:h-6 md:w-6" />
                    <span className="text-base font-bold md:text-lg">
                      Cards that work all across the world.
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 lg:justify-start">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 rounded-full border border-green-700 bg-green-700 p-1 text-white md:h-6 md:w-6" />
                    <span className="text-base font-bold md:text-lg">
                      No ATM fees. No minimum balance. No overdrafts.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src={notif}
                alt="notification"
                className="mx-auto w-full max-w-[500px] rounded-xl"
                priority
              />
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <Image
                src={notif}
                alt="notification"
                className="mx-auto w-full max-w-[500px] rounded-xl"
                priority
              />
            </div>
            <div className="flex w-full flex-col gap-4 text-center md:gap-5 lg:w-1/2 lg:text-left">
              <ShieldCheckIcon className="mx-auto h-12 w-12 rounded-full bg-blue-800 p-4 text-white md:h-14 md:w-14 lg:mx-0" />
              <h3 className="text-xl font-bold md:text-2xl">
                Safe Investments
              </h3>
              <h1 className="text-3xl font-bold capitalize md:text-4xl lg:text-5xl">
                The better way to save & invest
              </h1>
              <p className="text-base font-medium md:text-lg">
                Heritage Trust Bank helps over 2 million customers achieve their
                financial goals by helping them save and invest with ease. Put
                that extra cash to use without putting it at risk with Heritage
                Trust Bank.
              </p>

              <div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-center gap-2 lg:justify-start">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 rounded-full border border-green-700 bg-green-700 p-1 text-white md:h-6 md:w-6" />
                    <span className="text-base font-bold md:text-lg">
                      Profitable to invest and Handy to manage
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 lg:justify-start">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 rounded-full border border-green-700 bg-green-700 p-1 text-white md:h-6 md:w-6" />
                    <span className="text-base font-bold md:text-lg">
                      Highest Returns on your investments
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Details;
