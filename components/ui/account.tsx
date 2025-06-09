import React from "react";
import building from "@/app/assets/images/building.jpg";
import Container from "../shared/container";
import { cards } from "@/lib";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Account = () => {
  return (
    <div
      className="min-h-[500px] w-full bg-white/60 pb-[400px] md:pb-[300px] lg:pb-[200px]"
      style={{
        backgroundImage: `url(${building.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <Container>
        <div className="relative">
          <div className="space-y-5 py-10 text-center md:py-20">
            <h1 className="text-2xl font-bold text-blue-800 md:text-3xl">
              Open your account from anywhere in the world
            </h1>
            <p className="mt-5 text-3xl font-extrabold md:text-5xl">
              Solutions for Every <br className="hidden md:block" /> Business
              Need.
            </p>
            <span className="block pt-5 text-sm font-medium text-black md:pt-10 md:text-base">
              Power up your business with a full-stack online bank account that
              fits your needs.
            </span>
          </div>

          <div className="absolute left-0 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
            {cards.map((card) => (
              <div
                className="flex flex-col items-center justify-center rounded-lg bg-white p-4 text-center shadow-sm md:p-5"
                key={card.title}
              >
                <div className="text-b flex h-16 w-16 items-center justify-center rounded-full bg-[#007bff26] md:h-20 md:w-20">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    className="h-8 w-8 fill-blue-500 object-contain md:h-10 md:w-10"
                  />
                </div>
                <h3 className="mt-3 text-xl font-bold md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-base font-medium md:mt-5 md:text-lg">
                  {card.description}
                </p>
                <Link
                  href="/register"
                  className="mt-6 flex w-full place-items-center items-center justify-center gap-2 text-blue-800 transition-colors duration-200 hover:text-blue-600 md:mt-10"
                >
                  {card.button}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Account;
