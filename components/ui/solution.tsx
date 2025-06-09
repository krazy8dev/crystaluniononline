import React from "react";
import Container from "../shared/container";
import Image from "next/image";
import Link from "next/link";
import { icons } from "@/lib";

const Solution = () => {
  return (
    <div className="bg-blue-800 py-5 text-white md:py-10">
      <Container>
        <div className="flex flex-col items-center justify-center gap-8 md:gap-12 lg:flex-row lg:gap-40">
          <div className="w-full max-w-[300px] lg:max-w-[400px]">
            <Image
              src={icons.person}
              alt="solution"
              className="h-auto w-full"
              priority
            />
          </div>

          <div className="space-y-4 text-center md:space-y-5 lg:text-left">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Need a Personalized <br className="hidden md:block" />
              Solution?
            </h1>
            <p className="max-w-[600px] text-base md:text-lg">
              Get in touch with us, and we will help you to create the right one
              for <br className="hidden lg:block" /> your business or personal
              needs.
            </p>
            <div className="pt-2 md:pt-4">
              <Link
                href="/register"
                className="inline-block rounded-full bg-white px-6 py-3 font-bold text-black transition-colors duration-200 hover:border hover:bg-blue-800 hover:text-white md:px-8"
              >
                Apply for a loan
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Solution;
