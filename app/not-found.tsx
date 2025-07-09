"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  ArrowLeft,
  Search,
  AlertTriangle,
  Sparkles,
  Zap,
  Star,
  Heart,
} from "lucide-react";
// import { useRouter } from "next/navigation";

const NotFound = () => {
  // const router = useRouter();
  const floatingElements = [
    { icon: Star, delay: 0, x: 20, y: -30 },
    { icon: Heart, delay: 0.5, x: -40, y: 20 },
    { icon: Sparkles, delay: 1, x: 30, y: 40 },
    { icon: Zap, delay: 1.5, x: -20, y: -40 },
    { icon: Star, delay: 2, x: 50, y: 10 },
    { icon: Heart, delay: 2.5, x: -30, y: 30 },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=1920&h=1080&fit=crop&crop=center')`,
        }}
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white/80 to-blue-50/50" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-400/30"
            initial={{
              x: element.x,
              y: element.y,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: element.x + Math.sin(index) * 50,
              y: element.y + Math.cos(index) * 50,
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <element.icon className="h-8 w-8" />
          </motion.div>
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute left-20 top-20 h-64 w-64 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="text-center">
          {/* 404 Number */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              ease: "backOut",
              type: "spring",
              stiffness: 100,
            }}
          >
            <h1 className="text-8xl font-black text-gray-900 md:text-9xl lg:text-[12rem]">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                404
              </span>
            </h1>
          </motion.div>

          {/* Error Icon */}
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, rotate: -180, scale: 0 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "backOut",
            }}
          >
            <div className="relative">
              <motion.div
                className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0.7)",
                    "0 0 0 20px rgba(59, 130, 246, 0)",
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <AlertTriangle className="h-12 w-12 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Oops! Page Not Found
            </h2>
            <p className="mx-auto max-w-md text-lg text-gray-600 md:text-xl">
              Looks like this page has been transferred to a different account.
              Don&apos;t worry, our secure banking services are still available
              to help you navigate back to safety.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.button
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center gap-2">
                <Home className="h-5 w-5" />
                Go Home
              </span>
            </motion.button>

            <motion.button
              className="group relative overflow-hidden rounded-full border-2 border-blue-200 bg-white/80 px-8 py-4 font-semibold text-gray-700 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search Site
              </span>
            </motion.button>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link
              href="/"
              className="group flex items-center gap-2 text-gray-600 transition-colors duration-300 hover:text-blue-600"
            >
              <motion.div
                className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowLeft className="h-4 w-4 text-blue-600" />
              </motion.div>
              Back to Home
            </Link>

            <Link
              href="/about"
              className="group flex items-center gap-2 text-gray-600 transition-colors duration-300 hover:text-blue-600"
            >
              <motion.div
                className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="h-4 w-4 text-blue-600" />
              </motion.div>
              About Us
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-2 text-gray-600 transition-colors duration-300 hover:text-blue-600"
            >
              <motion.div
                className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Heart className="h-4 w-4 text-blue-600" />
              </motion.div>
              Contact
            </Link>
          </motion.div>

          {/* Fun Message */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <p className="text-sm text-gray-500">
              Made with ❤️ by Crystal Union
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      />
    </div>
  );
};

export default NotFound;
