"use client";

import React from "react";
import Container from "../shared/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/lib";

const Faq = () => {
  return (
    <div className="bg-gray-100 py-20">
      <Container>
        <div className="mb-10 flex flex-col items-center justify-center gap-4">
          <h1 className="text-xl font-bold text-blue-800 md:text-2xl">
            If you have question, we have answer
          </h1>
          <h2 className="text-center text-2xl font-bold text-black md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="font-lg text-center font-medium">
            Get answers to all questions you have and boost your knowledge so
            you can save, <br /> invest and spend smarter.{" "}
            <span className="text-blue-800">See all questions here!</span>
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.answer}
                value={`item-${faq.answer}`}
                className="rounded-lg border border-gray-200 bg-white px-6 py-4 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-semibold transition-colors hover:text-blue-800 [&[data-state=open]>svg]:text-blue-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
