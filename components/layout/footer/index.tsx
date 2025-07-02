"use client";

import React from "react";
import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";
import Logo from "../../ui/logo";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Bank Info Section */}
          <div className="space-y-4">
            <Logo width={180} height={50} />
            <p className="text-sm leading-relaxed text-gray-600">
              A legacy of trust, innovation, and excellence spanning over 150
              years in the UAE&apos;s financial landscape.
            </p>
            {/* <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-blue-600"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-blue-600"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-blue-600"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-blue-600"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/accounts"
                  className="text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  Accounts
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="m-0 cursor-pointer border-none bg-transparent p-0 text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  Loans & Credit
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="m-0 cursor-pointer border-none bg-transparent p-0 text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  Investment Services
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="m-0 cursor-pointer border-none bg-transparent p-0 text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  Help Center
                </button>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          {/* <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-600">+971 4 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-600">
                  info@heritagetrustbank.ae
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-600">Dubai, UAE</span>
              </div>
            </div>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-sm text-gray-500 md:mb-0">
              © 2024 Heritage Trust Bank. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm gap-5">
              <button
                type="button"
                className="m-0 cursor-pointer border-none bg-transparent p-0 text-sm text-gray-600 transition-colors hover:text-blue-600"
              >
                Terms & Conditions
              </button>
              <button
                type="button"
                className="m-0 cursor-pointer border-none bg-transparent p-0 text-sm text-gray-600 transition-colors hover:text-blue-600"
              >
                Security
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
