"use client";

import React from "react";
import Container from "../shared/container";
import Image from "next/image";
import { icons } from "@/lib";
import { motion } from "framer-motion";
import { Users, Sparkles } from "lucide-react";

const Solution = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 md:py-24 overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={icons.person}
                alt="Personalized banking solutions"
                className=""
                priority
              />
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-xl"></div>
            <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 blur-xl"></div>

            {/* Floating badge */}
            <motion.div
              className="absolute top-8 -left-4 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-900">Expert</div>
                  <div className="text-xs text-gray-600">Advisors</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                Personalized Solutions
              </span>
            </motion.div>

            {/* Header */}
            <div className="space-y-4">
              <motion.h2
                className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Need a Personalized
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Solution?
                </span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              className="text-lg leading-relaxed text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Get in touch with our expert advisors, and we&apos;ll help you create
              the perfect financial solution tailored to your business or
              personal needs. Our team is here to guide you every step of the
              way.
            </motion.p>

            {/* Features */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <span className="text-base font-medium text-gray-700">
                  Customized financial strategies
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <span className="text-base font-medium text-gray-700">
                  One-on-one expert consultation
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </div>
                <span className="text-base font-medium text-gray-700">
                  Ongoing support and guidance
                </span>
              </div>
            </motion.div>

            {/* CTA Button */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  <span>Apply for a loan</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div> */}

            {/* Trust Indicators */}
            <motion.div
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                <span className="text-sm text-gray-600">Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                <span className="text-sm text-gray-600">No commitment</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Solution;
