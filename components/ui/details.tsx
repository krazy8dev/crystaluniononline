"use client";

import React from "react";
import Container from "../shared/container";
import Image from "next/image";
import notif from "@/app/assets/images/notification.jpg";
import {
  Bell,
  CheckIcon,
  ShieldCheckIcon,
  TrendingUp,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const Details = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 md:py-24 overflow-hidden">
      <Container>
        <div className="space-y-24">
          {/* First Section - Smart Banking */}
          <motion.div
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
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
                <Bell className="h-8 w-8 text-white" />
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
                  Smart Banking
                </motion.h3>
                <motion.h2
                  className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Real-time notifications
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
                Keep your customers informed in real-time with everything
                happening on their account: payments, transfers, and important
                updates. Gain visibility into customer flows to anticipate their
                needs and provide proactive service.
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
                    Cards that work worldwide with competitive exchange rates
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-base font-medium text-gray-700">
                    No ATM fees, no minimum balance, no hidden charges
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-base font-medium text-gray-700">
                    Instant fraud alerts and transaction monitoring
                  </span>
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
                  src={notif}
                  alt="Real-time banking notifications"
                  className="h-full w-full object-cover"
                  priority
                />
              </motion.div>
              {/* Decorative element */}
              <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-xl"></div>
            </motion.div>
          </motion.div>

          {/* Second Section - Safe Investments */}
          <motion.div
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Image */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -40 }}
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
                  src={notif}
                  alt="Safe investment platform"
                  className="h-full w-full object-cover"
                  priority
                />
              </motion.div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/20 blur-xl"></div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="order-1 space-y-8 lg:order-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </motion.div>

              {/* Header */}
              <div className="space-y-4">
                <motion.h3
                  className="text-lg font-semibold text-emerald-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  Safe Investments
                </motion.h3>
                <motion.h2
                  className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  The smarter way to save & invest
                </motion.h2>
              </div>

              {/* Description */}
              <motion.p
                className="text-lg leading-relaxed text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                Heritage Trust Bank helps over 2 million customers achieve their
                financial goals through intelligent saving and investment
                solutions. Put your money to work without unnecessary risk,
                backed by our proven track record.
              </motion.p>

              {/* Features */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <TrendingUp className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-base font-medium text-gray-700">
                    Industry-leading returns with managed risk profiles
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <Globe className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-base font-medium text-gray-700">
                    Diversified portfolio across global markets
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <CheckIcon className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-base font-medium text-gray-700">
                    Automated rebalancing and tax-loss harvesting
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Details;
