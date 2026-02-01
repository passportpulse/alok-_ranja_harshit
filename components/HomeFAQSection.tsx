"use client";

import { useState } from "react";

export default function HomeFAQSection() {
  const faqs = [
    {
      question: "Is this course suitable for new insurance agents?",
      answer:
        "Yes. Even beginners can start from zero and grow systematically with step-by-step guidance.",
    },
    {
      question: "Do I need technical knowledge?",
      answer:
        "No. Everything is taught step-by-step in simple, practical language. No technical background is required.",
    },
    {
      question: "How soon can I see results?",
      answer:
        "Most agents start seeing online inquiries within 30–90 days if they consistently follow the system.",
    },
    {
      question:
        "Is this applicable for LIC, private insurers, or health insurance?",
      answer:
        "Yes. The system works for LIC advisors, private insurance agents, and health insurance consultants alike.",
    },
    {
      question: "Will this replace referrals?",
      answer:
        "Referrals usually improve automatically. This system also gives you an independent and predictable lead flow.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Yes. A clear and transparent refund policy is provided as per the program terms and conditions.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-28">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-left mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know before getting started
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT – IMAGE */}
          <div className="hidden lg:block">
            <div className="rounded-3xl overflow-hidden ">
              <img
                src="/FAQ.svg"
                alt="Insurance advisor working online"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-6 text-sm text-gray-500 italic text-center">
              Clear systems. Confident decisions.
            </p>
          </div>

          {/* RIGHT – FAQ */}
          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-gray-50"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <h3 className="text-base md:text-lg font-medium text-gray-900">
                      {faq.question}
                    </h3>

                    <span className="text-gray-500 text-xl">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {/* CTA */}
            <div className="pt-8">
              <a
                href="/faq"
                className="inline-flex items-center gap-2 text-gray-700 font-medium hover:text-gray-900 transition"
              >
                View all FAQs
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
