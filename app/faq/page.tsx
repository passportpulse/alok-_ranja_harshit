"use client";

import { useState } from "react";

export default function FAQ() {

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
  className="
    bg-white rounded-xl border border-gray-200 shadow-sm
    focus-within:border-gray-200
    focus-within:ring-0
    focus-within:outline-none
  "
>

    <button
      onMouseDown={(e) => e.preventDefault()}
  onClick={() => setOpenIndex(isOpen ? null : index)}
  className="
    w-full flex items-center justify-between p-6 text-left
    hover:bg-gray-50 transition-colors

    outline-none border-none
    focus:outline-none focus:ring-0
    focus-visible:outline-none focus-visible:ring-0
    active:outline-none active:ring-0
  "
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
