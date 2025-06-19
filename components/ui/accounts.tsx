"use client";

import React from "react";
import Container from "../shared/container";
import { motion } from "framer-motion";
import {
  CreditCard,
  PiggyBank,
  Building2,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Accounts = () => {
  const accountTypes = [
    {
      icon: CreditCard,
      title: "Personal Current Account",
      description:
        "Flexible banking for your daily needs with instant access to your funds and comprehensive online banking services.",
      features: [
        "No minimum balance",
        "Free debit card",
        "Mobile banking",
        "24/7 support",
      ],
      color: "blue",
    },
    {
      icon: PiggyBank,
      title: "Savings Account",
      description:
        "Grow your wealth with competitive interest rates and flexible savings options tailored to your financial goals.",
      features: [
        "Competitive rates",
        "Monthly interest",
        "Goal tracking",
        "Auto-save feature",
      ],
      color: "green",
    },
    {
      icon: Building2,
      title: "Business Account",
      description:
        "Comprehensive banking solutions for businesses of all sizes with dedicated relationship managers and corporate services.",
      features: [
        "Business loans",
        "Merchant services",
        "Corporate cards",
        "Trade finance",
      ],
      color: "purple",
    },
    {
      icon: TrendingUp,
      title: "Investment Account",
      description:
        "Professional investment management with access to global markets and personalized portfolio strategies.",
      features: [
        "Portfolio management",
        "Global markets",
        "Tax efficiency",
        "Regular reporting",
      ],
      color: "orange",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Secure Banking",
      description:
        "Advanced security measures and fraud protection to keep your money safe.",
    },
    {
      icon: Users,
      title: "Personal Service",
      description:
        "Dedicated relationship managers providing personalized financial advice and support.",
    },
    {
      icon: CheckCircle,
      title: "Trusted Heritage",
      description:
        "150+ years of banking excellence with a proven track record of financial stability.",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

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
                Heritage Trust Accounts
              </motion.h1>
              <motion.p
                className="text-xl leading-relaxed text-blue-100 md:text-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                Discover our range of professional banking accounts designed to
                meet your financial needs with personalized service and
                competitive rates.
              </motion.p>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* Main Content */}
      <Container>
        <div className="py-20">
          {/* Account Types */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
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
                Our Account Solutions
              </motion.h2>
              <motion.div
                className="mx-auto h-1 w-24 bg-blue-600"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              ></motion.div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {accountTypes.map((account, index) => (
                <motion.div
                  key={account.title}
                  className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full ${getColorClasses(account.color)}`}
                    >
                      <account.icon className="h-7 w-7" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    {account.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-gray-600">
                    {account.description}
                  </p>

                  <ul className="space-y-2">
                    {account.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        className="flex items-center text-sm text-gray-600"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + featureIndex * 0.1,
                        }}
                      >
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
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
                Why Choose Heritage Trust?
              </motion.h2>
              <motion.div
                className="mx-auto h-1 w-24 bg-blue-600"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              ></motion.div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                >
                  <motion.div
                    className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      ease: "backOut",
                      delay: index * 0.2,
                    }}
                  >
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </motion.div>

                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>

                  <p className="leading-relaxed text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-lg md:p-12"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="text-center">
              <motion.h2
                className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Ready to Get Started?
              </motion.h2>

              <motion.p
                className="mb-8 text-lg text-gray-600 md:text-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                Open your account today and experience the Heritage Trust
                difference. Our team is ready to help you choose the perfect
                account for your needs.
              </motion.p>

              <motion.button
                className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Open Account Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Accounts;
