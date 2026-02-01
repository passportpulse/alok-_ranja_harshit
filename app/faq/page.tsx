"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "Is this course suitable for new insurance agents?",
      answer: "Yes. Even beginners can start from zero and grow systematically with step-by-step guidance."
    },
    {
      question: "Do I need technical knowledge?",
      answer: "No. Everything is taught step-by-step in simple, practical language. No technical background is required."
    },
    {
      question: "How soon can I see results?",
      answer: "Most agents start seeing online inquiries within 30–90 days if they consistently follow the system."
    },
    {
      question: "Is this applicable for LIC, private insurers, or health insurance?",
      answer: "Yes. The system works for LIC advisors, private insurance agents, and health insurance consultants alike."
    },
    {
      question: "Will this replace referrals?",
      answer: "Referrals usually improve automatically. This system also gives you an independent and predictable lead flow."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes. A clear and transparent refund policy is provided as per the program terms and conditions."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_40%)]" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Everything you need to know before getting started with the Agent Growth System
              </p>
            </div>
            
            {/* Right - Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl max-w-md mx-auto">
                <img
                  src="/faqHero.svg"
                  alt="Insurance agent learning FAQ"
                  className="w-full h-auto max-h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-blue-600 text-2xl font-light flex-shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            
            {/* Left - Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get in touch with our team and we'll help you choose the right path for your insurance career.
              </p>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 text-gray-500 border border-gray-300 texy-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border text-gray-500 border-gray-300 texy-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Question
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border text-gray-500 border-gray-300 texy-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us more about your question..."
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                    I agree to be contacted for more information
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>

            
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden ">
                <img
                  src="/group-R5.png"
                  alt="Support team helping insurance agents"
                  className="w-full h-full object-cover"
                />
              </div>
              
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
