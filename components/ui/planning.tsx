import React from "react";
import Container from "../shared/container";
import background from "@/app/assets/images/bg.png";
import Link from "next/link";
import Image from "next/image";
import { CheckIcon } from "lucide-react";
import { loans } from "@/lib";

const Planning = () => {
  return (
    <div
      className="relative h-[300px] w-full"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <div className="absolute top-[18rem] right-4 left-4 -translate-y-1/2 rounded-xl border bg-white p-6 text-center shadow-sm md:right-auto md:left-1/2 md:w-[600px] md:-translate-x-1/2 md:p-10 lg:w-[800px] xl:w-[1000px]">
          <h1 className="text-2xl font-bold text-green-800 md:text-4xl">
            Ready to make the leap?
          </h1>
          <h2 className="mt-3 text-2xl font-bold md:text-4xl">
            Let us help you.
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:mt-10">
            <Link
              href="/register"
              className="rounded-full bg-blue-800 px-8 py-3 font-bold text-white transition-colors duration-200 hover:border hover:bg-white hover:text-black md:px-10"
            >
              Open Account
            </Link>
            <Link
              href="/contact"
              className="rounded-full border bg-white px-8 py-3 font-bold text-black transition-colors duration-200 hover:bg-blue-800 hover:text-white md:px-10"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="mt-[30rem] mb-10 flex flex-col gap-10 md:mt-[30rem] lg:mt-[30rem] lg:flex-row">
          <div className="w-full space-y-6 text-center md:space-y-8 lg:w-1/2 lg:text-left">
            <h1 className="text-lg font-bold md:text-xl">Financial Planning</h1>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Let's plan your finances the <br className="hidden lg:block" />{" "}
              right way.
            </h2>
            <p className="text-sm font-medium md:text-base">
              Lending that doesn't weigh you down. We know how hard is it to
              start something <br className="hidden lg:block" /> new, that's why
              we have the perfect plan for you.
            </p>
            <Link
              href="/register"
              className="inline-block rounded-full bg-blue-800 px-6 py-3 font-bold text-white transition-colors duration-200 hover:border hover:bg-white hover:text-black md:px-8"
            >
              Apply for a loan
            </Link>
          </div>
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:w-1/2">
            {loans.map((loan) => (
              <div
                className="flex flex-col items-start justify-start space-y-4 rounded-xl border bg-white p-4 md:p-5"
                key={loan.title}
              >
                <Image
                  src={loan.icon}
                  alt={loan.title}
                  className="h-16 w-16 md:h-20 md:w-20"
                />
                <h1 className="text-xl font-bold md:text-2xl">{loan.title}</h1>
                <span className="flex gap-2 text-base font-medium md:text-lg">
                  <CheckIcon className="h-5 w-5 rounded-full border border-green-700 bg-green-700 p-1 text-white md:h-6 md:w-6" />
                  {loan.tags[0]}
                </span>
                <span className="flex gap-2 text-base font-medium md:text-lg">
                  <CheckIcon className="h-5 w-5 rounded-full border border-green-700 bg-green-700 p-1 text-white md:h-6 md:w-6" />
                  {loan.tags[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Planning;
