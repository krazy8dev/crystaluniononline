"use client";

import { icons } from "@/lib";
import React from "react";
import Container from "../shared/container";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.div
        className="relative bg-gradient-to-r from-blue-900 to-blue-700"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.9), rgba(29, 78, 216, 0.8)), url(${icons.about.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <Container>
          <div className="relative flex flex-col gap-6 py-32">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <motion.h1
                className="mb-6 text-5xl leading-tight font-bold text-white md:text-6xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                About Heritage Trust Bank
              </motion.h1>
              <motion.p
                className="text-xl leading-relaxed text-blue-100 md:text-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                A legacy of trust, innovation, and excellence spanning over 150
                years in the UAE's financial landscape.
              </motion.p>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* Main Content */}
      <Container>
        <div className="py-20">
          {/* Mission Statement */}
          <motion.div
            className="mx-auto mb-20 max-w-4xl"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-16 text-center">
              <motion.h2
                className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Our Mission & Values
              </motion.h2>
              <motion.div
                className="mx-auto h-1 w-24 bg-blue-600"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              ></motion.div>
            </div>

            <motion.div
              className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-lg md:p-12"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <p className="text-lg leading-relaxed font-medium text-gray-700 md:text-xl">
                At Heritage Trust Bank, we have over 150 years of experience
                working with professional financial advisers in the UAE. We have
                earned our reputation by putting the traditional values of{" "}
                <span className="font-semibold text-blue-600">courtesy</span>,{" "}
                <span className="font-semibold text-blue-600">convenience</span>{" "}
                and{" "}
                <span className="font-semibold text-blue-600">
                  personal banking service
                </span>{" "}
                into an efficient and contemporary context.
              </p>
            </motion.div>
          </motion.div>

          {/* Key Features Grid */}
          <motion.div
            className="mb-20 grid gap-12 md:grid-cols-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  staggerChildren: 0.1,
                }}
              >
                <motion.div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "backOut" }}
                >
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Expert Financial Guidance
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    Our insight into the needs of financial intermediaries, as
                    well as the differing requirements of personal, business and
                    specialist clients, allows us to focus on doing the things
                    that matter.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  staggerChildren: 0.1,
                }}
              >
                <motion.div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "backOut" }}
                >
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Professional Service
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    From answering calls quickly and professionally to
                    developing uncomplicated banking solutions and protecting
                    valuable relationships between financial advisers and
                    clients.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Company Overview */}
          <motion.div
            className="mx-auto mb-20 max-w-4xl"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl md:p-12"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.h2
                className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Heritage Trust Group
              </motion.h2>
              <motion.p
                className="mb-6 text-lg leading-relaxed text-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Today, Heritage Trust Bank is a wholly owned subsidiary of the
                Heritage Trust Group. Our growing range of bank accounts and
                structured solutions is designed to be consistent with the needs
                of clients' cash portfolios.
              </motion.p>
              <motion.div
                className="mt-8 grid gap-6 md:grid-cols-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  staggerChildren: 0.1,
                }}
              >
                <motion.div
                  className="rounded-lg bg-blue-50 p-6"
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h4 className="mb-3 font-semibold text-blue-900">
                    Account Types
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="mr-3 h-2 w-2 rounded-full bg-blue-500"></span>
                      Current Accounts
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 h-2 w-2 rounded-full bg-blue-500"></span>
                      Savings Accounts
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 h-2 w-2 rounded-full bg-blue-500"></span>
                      Fixed Term Deposits
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3 h-2 w-2 rounded-full bg-blue-500"></span>
                      Structured Deposit Products
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  className="rounded-lg bg-green-50 p-6"
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h4 className="mb-3 font-semibold text-green-900">
                    Our Commitment
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                    At Heritage Trust Bank, we want you and your clients to feel
                    good about banking with us. We prioritize your financial
                    success and peace of mind.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white md:p-12"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.h3
                className="mb-4 text-2xl font-bold md:text-3xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Learn More About Heritage Trust Bank
              </motion.h3>
              <motion.p
                className="mx-auto mb-8 max-w-2xl text-lg text-blue-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                For an overview of our history, services and products, and our
                commitment to you and your clients, download our comprehensive
                introduction.
              </motion.p>
              <motion.button
                className="rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-colors duration-200 hover:bg-blue-50"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Introduction Guide
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default About;
