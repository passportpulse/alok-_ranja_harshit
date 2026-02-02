"use client";

import { useState } from "react";

export default function HomeFAQSection() {
  const faqs = [
    {
      question: "What is Fin Health coaching for advisors and insurance agents?",
      answer:
        "Fin Health coaching is for advisors and insurance agents. It helps them to do their job better. It  get to learn how to talk to people about money and help them make choices. they can then assist people in managing their money and making smart decisions about insurance.",
    },
    {
      question: "Fin Health coaching is really good, for advisors and insurance agents.",
      answer:
        "Fin Health is a platform that coaches people who give advice and sell insurance. It helps  to make their businesses bigger in a honest way. It teaches them how to get clients online create an image for themselves do marketing on the internet and build strong relationships that last a long time. This is all made especially for people who do business in India.",
    },
    {
      question: "Who can join Financial Advisor and Insurance Agent Coaching in Jharkhand?",
      answer:
        "This is open to people who want to become a Financial Advisor or an Insurance Agent. This coaching is really good for people like insurance agents, mutual fund distributors, financial advisors, relationship managers and MDRT aspirants. It is helpful for these people in places like Jharkhand. This includes cities such as Ranchi, Jamshedpur, Dhanbad and Bokaro. The coaching is perfect for insurance agents and financial advisors in these areas. It is also great for mutual fund distributors and relationship managers who want to improve their skills. MDRT aspirants, in Jharkhand can also benefit from this coaching.",
    },
    {
      question:
        "Does Fin Health provide coaching, for free?",
      answer:
        "Yes, Fin Health has free coaching programs that teach advisors how to get clients on the internet make a name for themselves online and do marketing in a way without bothering people with cold calls. this programs give advisors more guidance and support from experienced people, at Fin Health.",
    },
    {
      question: "I want to know if this coaching will really help me find clients without having to make calls, to people.",
      answer:
        "Fin Health is really helpful. It shows you ways to find clients that are friendly and work well with rules. They teach you about using WhatsApp to talk to people being on media making a plan for the things you say and getting referrals, from people who already know you. This way you can get clients without being too pushy. Fin Health teaches you all these methods so you can attract clients in a nice way.",
    },
    {
      question: "Is the coaching suitable for senior or experienced advisors?",
      answer:
        "Yes, Fin Health coaching is for advisors who are just starting out and for those who have been doing this for a while. The people who have been advisors for a time can really benefit from Fin Health coaching because it gives them systems that are easy to use on computers ways to make their business look good and ways to grow their business without having to rely on people coming to them for help. Fin Health coaching helps advisors, with these things.",
    },
    {
      question: "Is this coaching compliant with insurance and financial regulations?",
      answer:
        "Yes, Fin Health strongly emphasizes ethical and compliance-friendly marketing practices aligned with Indian financial and insurance regulations.",
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
