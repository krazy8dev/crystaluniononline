# Animation System Documentation

This document explains how to use the animation system built with Framer Motion in the Heritage Trust Bank application.

## 🎯 Overview

The animation system provides smooth, professional animations that enhance user experience while maintaining performance. It includes:

- **Pre-built animation variants** for common use cases
- **Reusable animation components** for consistent behavior
- **Scroll-triggered animations** for engaging page interactions
- **Global animation provider** for app-wide consistency

## 📦 Installation

Framer Motion is already installed in the project:

```bash
npm install framer-motion
```

## 🚀 Quick Start

### 1. Basic Usage

```tsx
import { motion } from "framer-motion";
import { fadeInUp } from "@/components/ui/animation";

const MyComponent = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h1>Animated Content</h1>
    </motion.div>
  );
};
```

### 2. Using Reusable Components

```tsx
import { AnimatedDiv, AnimatedSection } from "@/components/ui/animation";

const MyComponent = () => {
  return (
    <AnimatedSection>
      <AnimatedDiv variants={fadeInUp} delay={0.2}>
        <h2>Section Title</h2>
      </AnimatedDiv>
      <AnimatedDiv variants={fadeInUp} delay={0.4}>
        <p>Section content</p>
      </AnimatedDiv>
    </AnimatedSection>
  );
};
```

## 🎨 Available Animation Variants

### Basic Animations

| Variant       | Description          | Use Case        |
| ------------- | -------------------- | --------------- |
| `fadeInUp`    | Fades in from bottom | General content |
| `fadeInDown`  | Fades in from top    | Headers, titles |
| `fadeInLeft`  | Fades in from left   | Side content    |
| `fadeInRight` | Fades in from right  | Side content    |
| `scaleIn`     | Scales in from 0.8   | Cards, buttons  |
| `slideInUp`   | Slides up from below | Hero sections   |

### Specialized Variants

| Variant            | Description             | Use Case      |
| ------------------ | ----------------------- | ------------- |
| `heroVariants`     | Hero section animation  | Landing pages |
| `heroTextVariants` | Text animation for hero | Hero content  |
| `cardVariants`     | Card hover effects      | Product cards |
| `iconVariants`     | Icon entrance animation | Feature icons |
| `buttonVariants`   | Button interactions     | CTA buttons   |
| `staggerContainer` | Staggered children      | Lists, grids  |

## 🧩 Reusable Components

### AnimatedDiv

A wrapper component for individual animated elements.

```tsx
<AnimatedDiv
  variants={fadeInUp}
  delay={0.2}
  duration={0.6}
  once={true}
  className="my-class"
>
  Content here
</AnimatedDiv>
```

**Props:**

- `variants`: Animation variant to use
- `delay`: Delay before animation starts (seconds)
- `duration`: Custom animation duration (seconds)
- `once`: Whether animation should only play once
- `className`: Additional CSS classes

### AnimatedSection

A container for multiple animated children with staggered timing.

```tsx
<AnimatedSection variants={staggerContainer}>
  <AnimatedDiv variants={fadeInUp}>Child 1</AnimatedDiv>
  <AnimatedDiv variants={fadeInUp}>Child 2</AnimatedDiv>
  <AnimatedDiv variants={fadeInUp}>Child 3</AnimatedDiv>
</AnimatedSection>
```

### ScrollAnimationWrapper

A simple wrapper for scroll-triggered animations.

```tsx
import { ScrollAnimationWrapper } from "@/components/providers/animation-provider";

<ScrollAnimationWrapper direction="up" delay={0.2} className="my-class">
  Content here
</ScrollAnimationWrapper>;
```

## 🎭 Animation Examples

### Hero Section

```tsx
import { motion } from "framer-motion";
import {
  heroVariants,
  heroTextVariants,
  buttonVariants,
} from "@/components/ui/animation";

const Hero = () => {
  return (
    <motion.div variants={heroVariants} initial="initial" animate="animate">
      <motion.h1 variants={heroTextVariants}>
        Welcome to Heritage Trust Bank
      </motion.h1>
      <motion.button variants={buttonVariants}>Get Started</motion.button>
    </motion.div>
  );
};
```

### Card Grid

```tsx
import {
  AnimatedSection,
  AnimatedDiv,
  cardVariants,
} from "@/components/ui/animation";

const CardGrid = () => {
  return (
    <AnimatedSection>
      <AnimatedDiv variants={cardVariants} whileHover="hover">
        <div className="card">Card 1</div>
      </AnimatedDiv>
      <AnimatedDiv variants={cardVariants} whileHover="hover">
        <div className="card">Card 2</div>
      </AnimatedDiv>
    </AnimatedSection>
  );
};
```

### Feature List

```tsx
import {
  AnimatedDiv,
  fadeInLeft,
  iconVariants,
} from "@/components/ui/animation";

const FeatureList = () => {
  return (
    <div>
      <AnimatedDiv variants={fadeInLeft}>
        <motion.div variants={iconVariants}>
          <Icon />
        </motion.div>
        <h3>Feature Title</h3>
        <p>Feature description</p>
      </AnimatedDiv>
    </div>
  );
};
```

## ⚙️ Configuration

### Global Settings

The animation system is configured in the root layout:

```tsx
// app/layout.tsx
import { AnimationProvider } from "@/components/providers/animation-provider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}
```

### Custom Variants

Create custom animation variants:

```tsx
import { Variants } from "framer-motion";

export const customVariant: Variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
```

## 🎯 Best Practices

### 1. Performance

- Use `once={true}` for scroll animations to prevent re-triggering
- Keep animations under 1 second for optimal UX
- Use `transform` properties (opacity, scale, translate) for better performance

### 2. Accessibility

- Respect `prefers-reduced-motion` media query
- Don't rely solely on animations for important information
- Provide fallbacks for users with motion sensitivity

### 3. Consistency

- Use the same animation variants for similar elements
- Maintain consistent timing across the application
- Follow the established animation patterns

### 4. User Experience

- Animations should enhance, not distract
- Use subtle animations for professional applications
- Ensure animations don't interfere with functionality

## 🔧 Troubleshooting

### Common Issues

1. **Animations not triggering**

   - Check if `whileInView` is used for scroll animations
   - Ensure `viewport` prop is configured correctly
   - Verify the element is visible in the viewport

2. **Performance issues**

   - Reduce animation complexity
   - Use `transform` properties instead of layout properties
   - Consider using `will-change` CSS property for complex animations

3. **TypeScript errors**
   - Ensure proper typing for custom variants
   - Use the provided `Variants` type from framer-motion

### Debug Mode

Enable debug mode to see animation boundaries:

```tsx
<motion.div
  variants={fadeInUp}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  style={{ border: "2px solid red" }} // Debug border
>
  Content
</motion.div>
```

## 📚 Additional Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Animation Principles](https://motion.dev/)
- [Performance Best Practices](https://www.framer.com/motion/performance/)

## 🤝 Contributing

When adding new animations:

1. Follow the existing naming conventions
2. Add documentation for new variants
3. Test on different devices and browsers
4. Consider accessibility implications
5. Update this documentation

---

For questions or issues, please refer to the project's issue tracker or contact the development team.
