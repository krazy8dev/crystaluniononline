import React from "react";
import Breadcrumb from "@/components/ui/breadcrumb";
import Container from "@/components/shared/container";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pb-10 pt-40">
        <Breadcrumb />
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="absolute inset-0 bg-black/20"></div>
          <Container>
            <div className="relative flex flex-col items-center gap-6 py-24">
              <h1 className="mb-4 text-center text-4xl font-bold leading-tight text-white md:text-6xl">
                Privacy Policy
              </h1>
              <p className="max-w-2xl text-center text-lg text-blue-100 md:text-2xl">
                Your privacy is important to us. This policy explains how we
                collect, use, and protect your information.
              </p>
            </div>
          </Container>
        </div>
        {/* Policy Content */}
        <Container>
          <div className="mt-12 rounded-lg bg-white p-8 shadow-md">
            <section className="mb-8">
              <h2 className="mb-2 text-2xl font-semibold text-blue-900">
                Introduction
              </h2>
              <p className="text-gray-700">
                Crystal Union we are committed to protecting your privacy. This
                Privacy Policy describes how we collect, use, disclose, and
                safeguard your information when you use our services.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="mb-2 text-2xl font-semibold text-blue-900">
                Information We Collect
              </h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>
                  Personal identification information (Name, email address,
                  phone number, etc.)
                </li>
                <li>
                  Account information (account number, transaction history,
                  etc.)
                </li>
                <li>Usage data and cookies</li>
                <li>Other information you provide directly to us</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="mb-2 text-2xl font-semibold text-blue-900">
                How We Use Information
              </h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>To provide and maintain our services</li>
                <li>To process transactions and manage accounts</li>
                <li>
                  To communicate with you about your account or our services
                </li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="mb-2 text-2xl font-semibold text-blue-900">
                Data Security
              </h2>
              <p className="text-gray-700">
                We implement a variety of security measures to maintain the
                safety of your personal information. However, no method of
                transmission over the Internet or electronic storage is 100%
                secure.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="mb-2 text-2xl font-semibold text-blue-900">
                Your Rights
              </h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Access, update, or delete your personal information</li>
                <li>Object to or restrict certain processing of your data</li>
                <li>
                  Withdraw consent at any time where we rely on your consent
                </li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="mb-2 text-2xl font-semibold text-blue-900">
                Changes to This Policy
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We
                encourage you to review this page periodically for any changes.
                Changes are effective when posted on this page.
              </p>
            </section>
            <section>
              <h2 className="mb-2 text-2xl font-semibold text-blue-900">
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you have any questions or concerns about this Privacy Policy,
                please chat us on the chatbox
              </p>
            </section>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
