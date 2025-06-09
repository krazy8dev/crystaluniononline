"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-white py-20">
      {/* Chat Button */}
      <button className="fixed right-8 bottom-8 flex items-center space-x-2 rounded-full bg-blue-600 px-6 py-3 text-white shadow-lg transition-colors hover:bg-blue-700">
        <span>Chat</span>
        <MessageCircle className="h-5 w-5" />
      </button>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Bank Info Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Heritage Trust Bank"
                width={200}
                height={60}
                className="h-auto w-auto"
              />
            </div>
            <p className="max-w-md text-gray-600">
              A modern, technology-first bank built for you and your growing
              business.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-600 transition-colors hover:text-blue-800"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 transition-colors hover:text-blue-800"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 transition-colors hover:text-blue-800"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-600 transition-colors hover:text-blue-800"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 transition-colors hover:text-blue-800"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/awards"
                  className="text-gray-600 transition-colors hover:text-blue-800"
                >
                  Awards
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Support</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="mailto:support@heritagetrust.com"
                  className="text-gray-600 transition-colors hover:text-blue-800"
                >
                  support@heritagetrust.com
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 transition-colors hover:text-blue-800"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 transition-colors hover:text-blue-800"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-600">
              Copyright © 2008 Heritage Trust Bank
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 transition-colors hover:text-blue-800"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 transition-colors hover:text-blue-800"
              >
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
