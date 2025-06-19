"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Container from "../shared/container";
import { motion } from "framer-motion";
import { Shield, Handshake } from "lucide-react";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import custom styles
import "@/app/styles/partners.css";
import { icons } from "@/lib";

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const partners = [
    {
      name: "Visa",
      logo: icons.visa,
      description: "Global payment technology",
    },
    {
      name: "Mastercard",
      logo: icons.mastercard,
      description: "Worldwide payment network",
    },
    {
      name: "American Express",
      logo: icons.amex,
      description: "Premium financial services",
    },
    {
      name: "PayPal",
      logo: icons.paypal,
      description: "Digital payment platform",
    },
    {
      name: "Stripe",
      logo: icons.stripe,
      description: "Online payment processing",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 md:py-24">
      <Container>
        {/* Header Section */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Handshake className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              Trusted Partners
            </span>
          </motion.div>

          <motion.h2
            className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our Payment Partners
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We partner with the world's leading payment providers to ensure
            secure, fast, and reliable transactions for our customers.
          </motion.p>
        </motion.div>

        {/* Partners Slider */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Slider {...settings} className="partners-slider">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="px-4 py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="group relative flex flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Logo */}
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gray-50 p-3 transition-all duration-300 group-hover:bg-blue-50">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={40}
                      height={40}
                      className="object-contain transition-all duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Partner Info */}
                  <div className="text-center">
                    <h3 className="mb-1 text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {partner.description}
                    </p>
                  </div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                </motion.div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">
                PCI DSS Compliant
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-600"></div>
              <span className="text-sm font-medium text-gray-600">
                256-bit encryption
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-600"></div>
              <span className="text-sm font-medium text-gray-600">
                Global coverage
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Partners;
