import React from "react";
import heroImage from "@/app/assets/images/banker.jpg";
import Link from "next/link";
import Container from "../shared/container";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-20 md:py-40"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <Container>
        <div className="py-40 md:text-end text-center">
          <h1 className="text-4xl font-bold">Simple. Transparent. Secure.</h1>
          <h2 className="my-5 text-5xl font-bold">Banking Solutions</h2>
          <p className="text text-xl">
            Products and services designed to help you reach your <br />{" "}
            financial goals.
          </p>

          <div className="my-5 flex md:justify-end justify-center gap-4 text-sm">
            <Link
              href="/register"
              className="rounded-full bg-blue-800 px-5 py-3 font-bold text-white"
            >
              Open Account
            </Link>

            <Link
              href="/login"
              className="rounded-full border border-black bg-transparent px-8 py-3 font-bold text-black transition-all duration-300 hover:bg-[#ffffff76] hover:text-black"
            >
              Login
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
