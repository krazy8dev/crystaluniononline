"use client";

import Faq from "@/components/ui/faq";
import React from "react";
import Breadcrumb from "@/components/ui/breadcrumb";
import { motion } from "framer-motion";
import Container from "@/components/shared/container";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pt-40 pb-10">
        <Breadcrumb />
        {/* Hero Section */}
        <motion.div
          className="relative bg-gradient-to-r from-blue-900 to-blue-700"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <Container>
            <div className="relative flex flex-col items-center gap-6 py-32">
              <motion.h1
                className="mb-6 text-center text-4xl leading-tight font-bold text-white md:text-6xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                Frequently Asked Questions
              </motion.h1>
              <motion.p
                className="max-w-2xl text-center text-lg text-blue-100 md:text-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                Find answers to the most common questions about our services and
                support.
              </motion.p>
            </div>
          </Container>
        </motion.div>
        <div className="mt-12">
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default page;
