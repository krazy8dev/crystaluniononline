"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface AnimationProviderProps {
  children: React.ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({
  children,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// Scroll-triggered animation hook
export const useScrollAnimation = () => {
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.querySelector("[data-scroll-animation]");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return isInView;
};

// Animation wrapper component
interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 60 };
      case "down":
        return { opacity: 0, y: -60 };
      case "left":
        return { opacity: 0, x: -60 };
      case "right":
        return { opacity: 0, x: 60 };
      default:
        return { opacity: 0, y: 60 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
