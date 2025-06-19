"use client";

import React from "react";
import Container from "../shared/container";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib";
import { motion } from "framer-motion";

const Testimonials = () => {
  const NextArrow = (props: { onClick: () => void }) => {
    const { onClick } = props;
    return (
      <motion.button
        className="absolute top-1/2 -right-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 hover:bg-gray-50 hover:shadow-xl lg:-right-8"
        onClick={onClick}
        aria-label="Next slide"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="h-5 w-5 text-gray-700" />
      </motion.button>
    );
  };

  const PrevArrow = (props: { onClick: () => void }) => {
    const { onClick } = props;
    return (
      <motion.button
        className="absolute top-1/2 -left-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 hover:bg-gray-50 hover:shadow-xl lg:-left-8"
        onClick={onClick}
        aria-label="Previous slide"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="h-5 w-5 text-gray-700" />
      </motion.button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    customPaging: () => (
      <motion.div
        className="mx-1 h-2 w-2 rounded-full bg-gray-300 transition-colors duration-200 hover:bg-blue-600"
        whileHover={{ scale: 1.2 }}
      ></motion.div>
    ),
  };

  return (
    <section className="bg-gray-100 py-16 md:py-24 ">
      <Container>
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how we&apos;ve helped thousands of clients achieve their
            financial goals with personalized banking solutions.
          </motion.p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative px-4 md:px-12 lg:px-20">
          <Slider {...settings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="outline-none">
                <motion.div
                  className="mx-auto max-w-4xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="rounded-2xl bg-gray-50 p-8 md:p-12">
                    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                      {/* Image */}
                      <motion.div
                        className="text-center lg:text-left"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg md:h-40 md:w-40">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="mt-4">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-600">
                            {testimonial.location}
                          </p>
                          <div className="mt-2 flex items-center justify-center gap-1 lg:justify-start">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>

                      {/* Quote */}
                      <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                            <Quote className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <blockquote className="text-lg leading-relaxed font-medium text-gray-900 md:text-xl">
                              &quot;{testimonial.quote}&quot;
                            </blockquote>
                            <p className="mt-4 text-gray-600">
                              {testimonial.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-600"></div>
              <span className="text-sm font-medium text-gray-600">
                Verified customers
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-600"></div>
              <span className="text-sm font-medium text-gray-600">
                Real testimonials
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-600"></div>
              <span className="text-sm font-medium text-gray-600">
                5-star satisfaction
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;
