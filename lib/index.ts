const navbarLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Accounts",
    href: "/accounts",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export { navbarLinks };

import amex from "@/app/assets/icons/amex.png";
import mastercard from "@/app/assets/icons/mastercard.png";
import paypal from "@/app/assets/icons/paypal.png";
import stripe from "@/app/assets/icons/stripe.png";
import visa from "@/app/assets/icons/visa.png";
import piggy from "@/app/assets/icons/piggy.png";
import chequing from "@/app/assets/icons/cheque.png";
import business from "@/app/assets/icons/case.png";
import mobile from "@/app/assets/images/mobile.jpg";
import car from "@/app/assets/icons/car.png";
import house from "@/app/assets/icons/house.png";
import education from "@/app/assets/icons/education.png";
import businessloan from "@/app/assets/icons/business.png";
import person from "@/app/assets/images/guy.png";
import register from "@/app/assets/images/register.jpg";
import login from "@/app/assets/images/login.jpg";
import loginImage from "@/app/assets/images/bglogin.jpg";
import ebanking from "@/app/assets/images/e-banking.jpg";


import {
  CreditCard,
  LayoutDashboard,
  SendHorizontal,
  History,
  Building2,
  Globe2,
  BanknoteIcon,
  LucideIcon,
  
} from "lucide-react";

export const icons = {
  amex,
  mastercard,
  paypal,
  stripe,
  visa,
  piggy,
  mobile,
  car,
  house,
  education,
  businessloan,
  person,
  register,
  login,
  loginImage,
  ebanking,
};

export const cards = [
  {
    title: "Checking Account",
    description:
      "Choose from our checking options that allow you to earn interest, avoid fees, and easily manage your account.",
    button: "Open Account",
    icon: chequing,
  },
  {
    title: "Savings Account",
    description:
      "Save for your goals and watch your money grow with a CD, a money market account, a savings account.Your future starts now.",
    button: "Start Saving",
    icon: piggy,
  },
  {
    title: "Business Account",
    description:
      "Take charge of your business banking with a business bank account. Services including virtual cards, team management and more.",
    button: "Open Account",
    icon: business,
  },
];

export const loans = [
  {
    title: "Home Loans",
    tags: ["Lowest interest rates", "Fast Loan Processing"],
    icon: house,
  },
  {
    title: "Car Loans",
    tags: ["Competitive rates", "Quick Easy"],
    icon: car,
  },
  {
    title: "Education Loans",
    tags: ["Pay back conveniently", "Fast Loan Processing"],
    icon: education,
  },
  {
    title: "Buiness Loans",
    tags: ["Easy Approval", "Full Assistance"],
    icon: businessloan,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sophie Moore",
    role: "Business Owner",
    location: "United Kingdom",
    quote: "I love Heritage Trust Bank, they're the best",
    description:
      "It's been 2 years since I found Heritage Trust Bank, and it's such a relief as a small business owner to not worry about unnecessary fees. I lost my credit card once, and the service was so prompt that I was back to work the next day!",
    image: "/testimonial1.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Entrepreneur",
    location: "United States",
    quote: "Best banking experience ever",
    description:
      "The digital banking features are incredible. I can manage all my business transactions seamlessly from my phone. Their customer service team is always ready to help.",
    image: "/testimonial2.jpg",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Startup Founder",
    location: "Australia",
    quote: "Transformed my business banking",
    description:
      "The integration capabilities and business tools have helped me scale my startup efficiently. Their competitive rates and transparent fee structure are unmatched.",
    image: "/testimonial3.jpg",
  },
];

export const faqData = [
  {
    question: "How do I locate the nearest branch or ATM?",
    answer:
      "You can easily find our nearest branch or ATM using our Branch/ATM Locator tool on our mobile app or website. Simply enter your location or zip code, and we'll show you all nearby locations with their operating hours and available services.",
  },
  {
    question: "What should I do if I lose my card?",
    answer:
      "If your card is missing, let us know immediately. We'll block your card right away and send over a new one on the same day. To report a lost or stolen card, call us at (406) 555-0120.",
  },
  {
    question: "How do I set up online banking?",
    answer:
      "Setting up online banking is simple! Download our mobile app or visit our website, click on 'Register', and follow the prompts. You'll need your account number and personal identification details. For assistance, call our support team at (406) 555-0120.",
  },
  {
    question: "What are your international transfer fees?",
    answer:
      "Our international transfer fees vary based on the destination country and transfer method. Standard wire transfers typically cost $25-45. Premium account holders enjoy reduced fees or free transfers. Check our fee schedule or contact us for specific rates.",
  },
  {
    question: "How can I dispute a transaction?",
    answer:
      "To dispute a transaction, log into your online banking, locate the transaction in question, and click 'Dispute Transaction'. Alternatively, call our 24/7 support line. We'll investigate the charge and credit your account if the dispute is valid.",
  },
  {
    question: "What security measures do you have in place?",
    answer:
      "We employ multiple layers of security including 256-bit encryption, two-factor authentication, biometric login, and 24/7 fraud monitoring. We also provide instant alerts for suspicious activities and zero liability protection for unauthorized transactions.",
  },
];

export interface SidebarLink {
  icon: LucideIcon;
  label: string;
  href: string;
  subLinks?: {
    label: string;
    href: string;
    icon: LucideIcon;
  }[];
}

export const sidebarLinks: SidebarLink[] = [
  {
    icon: LayoutDashboard,
    label: "My Account",
    href: "/dashboard",
    subLinks:[
      {
        icon: CreditCard,
        label: "Account Summary",
        href: "/dashboard/account-summary",
      },
      {
        icon: History,
        label: "Account Details",
        href: "/dashboard/account-details",
      },
      {
        icon: BanknoteIcon,
        label: "Transactions",
        href: "/dashboard/transactions",
      }
    ]
  },
 
  {
    icon: SendHorizontal,
    label: "Transfer",
    href: "/dashboard/transfer",
    subLinks: [
      {
        label: "Transfer to same bank",
        href: "/dashboard/domestic-transfer",
        icon: Building2,
      },
      {
        label: "Transfer to other bank",
        href: "/dashboard/other-transfer",
        icon: Building2,
      },
      {
        label: "International Transfer",
        href: "/dashboard/international-transfer",
        icon: Globe2,
      },
      //   {
    //     label: "Loans",
    //     href: "/dashboard/loans",
    //     icon: Wallet,
    //   },
    //   {
    //     label: "Deposits",
    //     href: "/dashboard/deposits",
    //     icon: BanknoteIcon,
    //   },
    ],
  },
];

export const dashboardLinks = [
  {
    title: "Transfer",
    links: [
      {
        label: "International Transfer",
        href: "/dashboard/international-transfer",
      },
      {
        label: "Domestic Transfer",
        href: "/dashboard/domestic-transfer",
      },
      {
        label: "Loans",
        href: "/dashboard/loans",
      },
      {
        label: "Deposits",
        href: "/dashboard/deposits",
      },
    ],
  },
];
