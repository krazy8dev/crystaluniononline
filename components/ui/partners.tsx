"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Container from "../shared/container";

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
    autoplaySpeed: 2000,
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
    { name: "Visa", logo: icons.visa },
    { name: "Mastercard", logo: icons.mastercard },
    { name: "American Express", logo: icons.amex },
    { name: "PayPal", logo: icons.paypal },
    { name: "Stripe", logo: icons.stripe },
  ];

  return (
    <div className="bg-white py-12">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Our Payment Partners
          </h2>
        </div>
        <Slider {...settings} className="partners-slider">
          {partners.map((partner) => (
            <div key={partner.name} className="px-4 py-2">
              <div className="flex items-center justify-center flex-col">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={50}
                  height={50}
                  className="object-contain grayscale filter transition-all duration-300 hover:grayscale-0"
                />
                {/* <p>{partner.name}</p> */}
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Partners;
