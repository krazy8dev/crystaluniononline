"use client";

import React from "react";
import Container from "../shared/container";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib";

const Testimonials = () => {
  const NextArrow = (props: { onClick: () => void }) => {
    const { onClick } = props;
    return (
      <button
        className="slick-arrow slick-next"
        onClick={onClick}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    );
  };

  const PrevArrow = (props: { onClick: () => void }) => {
    const { onClick } = props;
    return (
      <button
        className="slick-arrow slick-prev"
        onClick={onClick}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
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
      <div className="mx-1 h-2 w-2 rounded-full bg-gray-300 transition-colors duration-200 hover:bg-blue-500"></div>
    ),
  };

  return (
    <div className="overflow-x-hidden py-20">
      <Container>
        <div className="mb-10 flex flex-col items-center justify-center gap-4">
          <h1 className="text-xl font-bold text-blue-800 md:text-2xl">
            Testimonials
          </h1>
          <h2 className="text-center text-2xl font-bold text-black md:text-5xl">
            Don&apos;t take our word for <br /> it, take theirs
          </h2>
          <p className="font-lg font-medium">
            Take a look at our past success stories. Our goal is to help you
            grow
          </p>
        </div>
        <div className="px-4 md:px-12 lg:px-20">
          <Slider {...settings} className="testimonial-slider">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="outline-none">
                <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-20">
                  <div className="relative w-full lg:w-1/2">
                    <div className="relative mx-auto h-[300px] w-[300px] overflow-hidden rounded-full bg-blue-800 md:h-[400px] md:w-[400px]">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="w-full space-y-6 text-center lg:w-1/2 lg:text-left">
                    <div className="flex justify-center lg:justify-start">
                      <Quote className="h-12 w-12 text-blue-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-blue-800 md:text-3xl">
                      {testimonial.quote}
                    </h2>
                    <p className="text-base text-gray-600 md:text-lg">
                      {testimonial.description}
                    </p>
                    <div>
                      <h3 className="text-xl font-bold">{testimonial.name}</h3>
                      <p className="text-green-700">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
