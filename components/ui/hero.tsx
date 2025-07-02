"use client";

import React from "react";
import heroImage from "@/app/assets/images/banker.jpg";
import Link from "next/link";
import Container from "../shared/container";
import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-blue-900/60" />

      <div className="relative z-10">
        <Container>
          <div className="flex min-h-screen items-center py-24 md:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-100">
                    Trusted by 2M+ customers
                  </span>
                </motion.div>

                {/* Header */}
                <div className="space-y-4">
                  <motion.h1
                    className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Simple. Transparent.
                    <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Secure.
                    </span>
                  </motion.h1>

                  <motion.h2
                    className="text-2xl font-semibold text-gray-200 md:text-3xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    Banking Solutions for Modern Life
                  </motion.h2>
                </div>

                {/* Description */}
                <motion.p
                  className="text-lg leading-relaxed text-gray-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  Products and services designed to help you reach your
                  financial goals. Experience banking that adapts to your
                  lifestyle with cutting-edge technology and personalized
                  solutions.
                </motion.p>

                {/* Features */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-400/20">
                      <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    </div>
                    <span className="text-base font-medium text-blue-100">
                      Advanced security with biometric authentication
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-400/20">
                      <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    </div>
                    <span className="text-base font-medium text-blue-100">
                      Real-time notifications and instant transfers
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-400/20">
                      <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    </div>
                    <span className="text-base font-medium text-blue-100">
                      24/7 customer support and financial guidance
                    </span>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col gap-4 sm:flex-row"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
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

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href="/login"
                      className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/20"
                    >
                      <span>Login</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Floating Stats Cards */}
                <motion.div
                  className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">2M+</div>
                      <div className="text-sm text-blue-200">
                        Active Customers
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">$50B+</div>
                      <div className="text-sm text-emerald-200">
                        Assets Managed
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">99.9%</div>
                      <div className="text-sm text-purple-200">
                        Uptime Guarantee
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
