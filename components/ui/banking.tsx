"use client";

import React from "react";
import Container from "../shared/container";
import {
  CheckIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  TabletIcon,
  Download,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { icons } from "@/lib";
import { motion } from "framer-motion";

const Banking = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 md:py-24 overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Icon */}
            <motion.div
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-4 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ShieldCheckIcon className="h-8 w-8 text-white" />
            </motion.div>

            {/* Header */}
            <div className="space-y-4">
              <motion.h3
                className="text-lg font-semibold text-blue-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Banking at your fingertips
              </motion.h3>
              <motion.h2
                className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Your banking experience
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  anytime, anywhere
                </span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              className="text-lg leading-relaxed text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Get your money moving with our intuitive mobile banking app.
              Experience the convenience of a full-service bank branch right in
              your pocket, with advanced security and seamless functionality.
            </motion.p>

            {/* Features */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-base font-medium text-gray-700">
                  Bill payments, funds transfer, and QR payments
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-base font-medium text-gray-700">
                  Credit card payments and food ordering
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                  <Zap className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-base font-medium text-gray-700">
                  Real-time notifications and instant transfers
                </span>
              </div>
            </motion.div>

            {/* Download Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.button
                className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-lg"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                  <TabletIcon className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Download on the</span>
                  <span className="text-sm font-semibold text-gray-900">
                    App Store
                  </span>
                </div>
                <Download className="h-4 w-4 text-gray-400 transition-colors group-hover:text-blue-600" />
              </motion.button>

              <motion.button
                className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-lg"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black">
                  <SmartphoneIcon className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Get it on</span>
                  <span className="text-sm font-semibold text-gray-900">
                    Google Play
                  </span>
                </div>
                <Download className="h-4 w-4 text-gray-400 transition-colors group-hover:text-blue-600" />
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-600">
                  Bank-level security
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-600">24/7 support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={icons.mobile}
                alt="Mobile banking app interface"
                className="h-full w-full object-cover"
                priority
              />
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-xl"></div>
            <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 blur-xl"></div>

            {/* Floating stats */}
            <motion.div
              className="absolute top-8 -left-4 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600">2M+</div>
                <div className="text-xs text-gray-600">Active Users</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-4 bottom-8 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="text-center">
                <div className="text-lg font-bold text-green-600">99.9%</div>
                <div className="text-xs text-gray-600">Uptime</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Banking;
