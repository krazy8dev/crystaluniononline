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
import { motion } from "framer-motion";

const Faq = () => {
  return (
    <motion.div
      className="bg-gray-100 py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <motion.div
          className="mb-10 flex flex-col items-center justify-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-xl font-bold text-blue-800 md:text-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            If you have question, we have answer
          </motion.h1>
          <motion.h2
            className="text-center text-2xl font-bold text-black md:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="font-lg text-center font-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Get answers to all questions you have and boost your knowledge so
            you can save, <br /> invest and spend smarter.{" "}
            <span className="text-blue-800">See all questions here!</span>
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-3xl space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.answer}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <AccordionItem
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
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Faq;
