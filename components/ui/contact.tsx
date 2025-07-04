"use client";

import React, { useState } from "react";
import Container from "../shared/container";
import { motion } from "framer-motion";
import Faq from "./faq";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    // console.log("Form submitted:", formData);
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
                Get in Touch
              </motion.h1>
              <motion.p
                className="text-xl leading-relaxed text-blue-100 md:text-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                We&apos;re here to help. Reach out to us for any questions about our
                services.
              </motion.p>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* Main Content */}
      <Container>
        <div className="py-20">
          {/* Contact Form Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
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
                Contact Us
              </motion.h2>
              <motion.div
                className="mx-auto h-1 w-24 bg-blue-600"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              ></motion.div>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <motion.div
                className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-lg md:p-12"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="mb-8 text-2xl font-semibold text-gray-900">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="account">Account Services</option>
                      <option value="loans">Loans & Credit</option>
                      <option value="investment">Investment Services</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full transform rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div>
                  <h3 className="mb-8 text-2xl font-semibold text-gray-900">
                    Contact Information
                  </h3>
                  <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    We&apos;re here to help you with all your banking needs. Reach
                    out to us through any of the channels below.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <motion.div
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        Phone
                      </h4>
                      <p className="text-gray-600">+971 4 123 4567</p>
                      <p className="text-gray-600">+971 50 123 4567</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                      <svg
                        className="h-6 w-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        Email
                      </h4>
                      <p className="text-gray-600">info@heritagetrustbank.ae</p>
                      <p className="text-gray-600">
                        support@heritagetrustbank.ae
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                      <svg
                        className="h-6 w-6 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        Address
                      </h4>
                      <p className="text-gray-600">Sheikh Zayed Road</p>
                      <p className="text-gray-600">Dubai, UAE</p>
                      <p className="text-gray-600">P.O. Box 12345</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                      <svg
                        className="h-6 w-6 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        Business Hours
                      </h4>
                      <p className="text-gray-600">
                        Sunday - Thursday: 8:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-600">
                        Friday: 8:00 AM - 12:00 PM
                      </p>
                      <p className="text-gray-600">Saturday: Closed</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          {/* <motion.div
            className="mx-auto max-w-4xl"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
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
                Frequently Asked Questions
              </motion.h2>
              <motion.div
                className="mx-auto h-1 w-24 bg-blue-600"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              ></motion.div>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How can I open a new account?",
                  answer:
                    "You can open a new account by visiting any of our branches with your Emirates ID and passport, or you can start the process online through our secure portal.",
                },
                {
                  question: "What documents do I need for a loan application?",
                  answer:
                    "For loan applications, you'll need your Emirates ID, passport, salary certificate, bank statements for the last 3 months, and proof of address.",
                },
                {
                  question: "How do I report a lost or stolen card?",
                  answer:
                    "If your card is lost or stolen, please call our 24/7 hotline immediately at +971 4 123 4567 to block the card and request a replacement.",
                },
                {
                  question: "What are your current interest rates?",
                  answer:
                    "Our interest rates vary based on the type of account and current market conditions. Please contact our customer service team for the most up-to-date rates.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 p-6 shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </Container>
          <Faq />
    </motion.div>
  );
};

export default Contact;
