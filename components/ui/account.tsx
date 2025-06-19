"use client";

import React from "react";
import building from "@/app/assets/images/building.jpg";
import Container from "../shared/container";
import { cards } from "@/lib";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Account = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${building.src})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-blue-900/60" />

      <div className="relative z-10">
        <Container>
          <div className="py-16 md:py-24">
            {/* Header Section */}
            <motion.div
              className="mb-16 text-center md:mb-20"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-100">
                  Global Banking Solutions
                </span>
              </motion.div>

              <motion.h1
                className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Open your account from
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  anywhere in the world
                </span>
              </motion.h1>

              <motion.h2
                className="mb-6 text-2xl font-semibold text-gray-200 md:text-3xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Solutions for Every Business Need
              </motion.h2>

              <motion.p
                className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Power up your business with a full-stack online bank account
                that fits your needs. Seamless integration, global reach, and
                enterprise-grade security.
              </motion.p>
            </motion.div>

            {/* Cards Grid */}
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {cards.map((card, index) => (
                <motion.div
                  key={card.title}
                  className="group relative overflow-hidden rounded-2xl bg-white/95 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-4 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={card.icon}
                        alt={card.title}
                        className="h-8 w-8 object-contain brightness-0 invert filter"
                      />
                    </motion.div>

                    {/* Content */}
                    <motion.h3
                      className="mb-4 text-xl font-bold text-gray-900 md:text-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    >
                      {card.title}
                    </motion.h3>

                    <motion.p
                      className="mb-6 text-base leading-relaxed text-gray-600"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    >
                      {card.description}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                      className="flex items-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="/register"
                        className="group/btn inline-flex items-center gap-2 text-blue-600 transition-all duration-200 hover:text-blue-700"
                      >
                        <span className="font-semibold">{card.button}</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                      </Link>
                    </motion.div>
                  </div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              className="mt-16 text-center md:mt-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-medium text-white">
                  Ready to get started?
                </span>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-1 text-blue-400 transition-colors hover:text-blue-300"
                >
                  <span className="font-semibold">Open Account</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Account;
