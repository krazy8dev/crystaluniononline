"use client";

import React from "react";
import Container from "../shared/container";
import background from "@/app/assets/images/bg.png";
import Link from "next/link";
import Image from "next/image";
import { CheckIcon, ArrowRight, TrendingUp, Shield } from "lucide-react";
import { loans } from "@/lib";
import { motion } from "framer-motion";

const Planning = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${background.src})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-emerald-900/70" />

      <div className="relative z-10">
        <Container>
          <div className="py-16 md:py-24">
            {/* Hero CTA Section */}
            <motion.div
              className="mb-20 text-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="mx-auto max-w-4xl rounded-2xl bg-white/95 p-8 shadow-2xl backdrop-blur-sm md:p-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h1
                  className="mb-4 text-3xl font-bold text-emerald-700 md:text-4xl lg:text-5xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Ready to make the leap?
                </motion.h1>

                <motion.h2
                  className="mb-8 text-2xl font-semibold text-gray-700 md:text-3xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Let us help you achieve your financial goals
                </motion.h2>

                <motion.div
                  className="flex flex-col gap-4 sm:flex-row sm:justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/register"
                      className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl"
                    >
                      <span>Open Account</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>

                  {/* <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-8 py-4 font-semibold text-gray-700 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                    >
                      <span>Get in touch</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div> */}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Financial Planning Section */}
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 p-4 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <TrendingUp className="h-8 w-8 text-white" />
                </motion.div>

                {/* Header */}
                <div className="space-y-4">
                  <motion.h3
                    className="text-lg font-semibold text-emerald-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    Financial Planning
                  </motion.h3>
                  <motion.h2
                    className="text-4xl font-bold tracking-tight text-white md:text-5xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    Let&apos;s plan your finances the
                    <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      right way
                    </span>
                  </motion.h2>
                </div>

                {/* Description */}
                <motion.p
                  className="text-lg leading-relaxed text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  Lending that doesn&apos;t weigh you down. We understand how
                  challenging it can be to start something new, which is why
                  we&apos;ve crafted the perfect financial solutions tailored to
                  your needs.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  {/* <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/register"
                      className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl"
                    >
                      <span>Apply for a loan</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div> */}
                </motion.div>
              </motion.div>

              {/* Loan Cards */}
              <motion.div
                className="grid gap-6 sm:grid-cols-2"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {loans.map((loan, index) => (
                  <motion.div
                    key={loan.title}
                    className="group relative overflow-hidden rounded-2xl bg-white/95 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 p-4 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={loan.icon}
                          alt={loan.title}
                          className="h-8 w-8 object-contain brightness-0 invert filter"
                        />
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        className="mb-4 text-xl font-bold text-gray-900 md:text-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      >
                        {loan.title}
                      </motion.h3>

                      {/* Features */}
                      <div className="space-y-3">
                        {loan.tags.map((tag, tagIndex) => (
                          <motion.div
                            key={tag}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.6,
                              delay: index * 0.1 + 0.4 + tagIndex * 0.1,
                            }}
                          >
                            <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                              <CheckIcon className="h-3 w-3 text-emerald-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">
                              {tag}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Hover effect border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-16 text-center md:mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex flex-wrap items-center justify-center gap-8">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-emerald-400" />
                  <span className="text-sm font-medium text-gray-300">
                    Secure & Trusted
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-emerald-400" />
                  <span className="text-sm font-medium text-gray-300">
                    Fast Approval
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-emerald-400" />
                  <span className="text-sm font-medium text-gray-300">
                    Competitive Rates
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Planning;
