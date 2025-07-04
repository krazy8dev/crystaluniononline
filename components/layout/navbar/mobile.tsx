"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  CreditCard,
  Building2,
  // Phone,

} from "lucide-react";
// import Logo from "../../ui/logo";

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: Building2 },
    { name: "Accounts", href: "/accounts", icon: CreditCard },
    // { name: "Contact", href: "/contact", icon: Phone },
  ];


  return (
    <>
      {/* Hamburger Button */}
      <motion.button
        onClick={toggleMenu}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white transition-colors duration-200 hover:bg-blue-700 md:hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Menu className="h-6 w-6" />
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-2xl md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-end border-b border-gray-200 p-6">
              {/* <Logo width={150} height={40} /> */}
              <motion.button
                onClick={closeMenu}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors duration-200 hover:bg-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Navigation Menu */}
            <div className="flex h-full flex-col">
              <div className="flex-1 overflow-y-auto">
                {/* Main Menu */}
                <div className="p-6">
                  {/* <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                    Navigation
                  </h3> */}
                  <nav className="space-y-2">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="group flex items-center space-x-3 rounded-lg px-4 py-3 text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {/* <item.icon className="h-5 w-5 text-gray-400 transition-colors duration-200 group-hover:text-blue-600" /> */}
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Support Section */}
                <div className="px-6 pb-6">
                  {/* <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                    Support
                  </h3> */}
                  {/* <nav className="space-y-2">
                    {supportItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index + menuItems.length) * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="group flex items-center space-x-3 rounded-lg px-4 py-3 text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
                        >
                          <item.icon className="h-5 w-5 text-gray-400 transition-colors duration-200 group-hover:text-blue-600" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </nav> */}
                </div>

                {/* Contact Info */}
                <div className="px-6 pb-6">
                  <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                    Contact Info
                  </h3>
                  <div className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      className="flex items-start space-x-3"
                    >
                      {/* <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" /> */}
                      <div>
                        {/* <p className="text-sm text-gray-700">+971 4 123 4567</p> */}
                        <p className="text-sm text-gray-500">24/7 Support</p>
                      </div>
                    </motion.div>

                    {/* <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                      className="flex items-start space-x-3"
                    >
                      <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-700">
                          support@heritagetrustbank.ae
                        </p>
                        <p className="text-sm text-gray-500">Email Support</p>
                      </div>
                    </motion.div> */}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 p-6">
                <div className="space-y-4">
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {/* {socialLinks.map((social, index) => (
                      <motion.div
                        key={social.name}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                      >
                        <Link
                          href={social.href}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-200 hover:bg-blue-500"
                        >
                          <social.icon className="h-5 w-5" />
                        </Link>
                      </motion.div>
                    ))} */}
                  </div>

                  {/* Copyright */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="text-center text-xs text-gray-500"
                  >
                    © 2024 Heritage Trust Bank
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Mobile;
