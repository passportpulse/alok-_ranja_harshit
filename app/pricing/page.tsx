'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Pricing() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }
  const plans = [
    {
      name: "Starter Plan",
      price: "₹2,999",
      features: [
        "Full course access",
        "Recorded video lessons",
        "Worksheets & templates",
        "Lifetime access"
      ],
      popular: false
    },
    {
      name: "Professional Plan",
      price: "₹7,999",
      features: [
        "Everything in Starter",
        "Live group mentoring sessions",
        "Case studies",
        "Client acquisition scripts",
        "Community access"
      ],
      popular: true
    },
    {
      name: "Elite Mentorship",
      price: "₹24,999",
      features: [
        "Everything in Professional",
        "1-to-1 strategy sessions",
        "Personal brand review",
        "Customized growth roadmap",
        "Priority support"
      ],
      popular: false
    }
  ];

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
                Choose Your Growth Plan
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                             Select the perfect plan that aligns with your business goals and accelerates your insurance career

              </p>
              <div className="mt-8">
                <Link
                  href="/apply-now"
                  className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-colors inline-block"
                >
                  Apply Now
                </Link>
              </div>
            </div>
            
            {/* Right - Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl max-w-md mx-auto">
                <img
                  src="/priceHero.svg"
                  alt="Insurance pricing plans"
                  className="w-full h-auto max-h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
  

          {/* PRICING CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  plan.popular ? 'ring-4 ring-blue-600 ring-opacity-50 transform scale-105' : 'border border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 text-sm font-bold rounded-bl-xl">
                    ⭐ MOST POPULAR
                  </div>
                )}
                
                <div className="p-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {plan.name}
                    </h3>
                    <div className="mb-6">
                      <span className="text-5xl md:text-6xl font-extrabold text-gray-900">
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-gray-600 font-medium">
                      {plan.name === 'Starter' && 'Perfect for getting started'}
                      {plan.name === 'Professional' && 'Most popular choice'}
                      {plan.name === 'Enterprise' && 'Maximum growth potential'}
                    </p>
                  </div>
                  
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <div className="h-6 w-6 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/apply-now"
                    className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 inline-block text-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border-2 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {plan.popular ? 'Apply Now' : 'Choose Plan'}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ENHANCED COMPARISON TABLE */}
          <div className="bg-white rounded-3xl shadow-xl p-10 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Detailed Plan Comparison
              </h3>
              <p className="text-xl text-gray-600">
                Compare all features side by side to make the perfect choice
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <th className="text-left py-6 px-6 font-bold text-gray-900 rounded-tl-xl border-b-2 border-blue-200">
                      Features
                    </th>
                    <th className="text-center py-6 px-6 font-bold text-gray-900 border-b-2 border-blue-200">
                      <div className="flex flex-col items-center">
                        <span className="text-lg">Starter</span>
                        <span className="text-sm font-normal text-gray-600">₹2,999</span>
                      </div>
                    </th>
                    <th className="text-center py-6 px-6 font-bold text-blue-600 border-b-2 border-blue-200 bg-blue-50">
                      <div className="flex flex-col items-center">
                        <span className="text-lg">Professional</span>
                        <span className="text-sm font-normal text-blue-600">₹9,999</span>
                        <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full mt-1">Popular</span>
                      </div>
                    </th>
                    <th className="text-center py-6 px-6 font-bold text-gray-900 rounded-tr-xl border-b-2 border-blue-200">
                      <div className="flex flex-col items-center">
                        <span className="text-lg">Enterprise</span>
                        <span className="text-sm font-normal text-gray-600">₹19,999</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Complete Course Access', starter: '✓', pro: '✓', enterprise: '✓', desc: 'All modules and materials' },
                    { feature: 'Community Support', starter: '✓', pro: '✓', enterprise: '✓', desc: '24/7 community access' },
                    { feature: '1-on-1 Sessions', starter: 'Limited', pro: '✓', enterprise: '✓', desc: 'Personal coaching calls' },
                    { feature: 'Personal Brand Review', starter: '✗', pro: '✓', enterprise: '✓', desc: 'Expert brand analysis' },
                    { feature: 'Priority Support', starter: '✗', pro: '✗', enterprise: '✓', desc: 'Fast-track assistance' },
                    { feature: 'Custom Growth Roadmap', starter: '✗', pro: '✗', enterprise: '✓', desc: 'Personalized strategy' },
                    { feature: 'Lifetime Updates', starter: '✓', pro: '✓', enterprise: '✓', desc: 'Course content updates' },
                    { feature: 'Certificate of Completion', starter: '✓', pro: '✓', enterprise: '✓', desc: 'Industry-recognized certificate' }
                  ].map((row, index) => (
                    <tr key={index} className={`border-b border-gray-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="py-5 px-6">
                        <div>
                          <div className="font-semibold text-gray-900">{row.feature}</div>
                          <div className="text-sm text-gray-500 mt-1">{row.desc}</div>
                        </div>
                      </td>
                      <td className="py-5 px-6 text-center">
                        <span className={`inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium ${
                          row.starter === '✓' ? 'bg-green-100 text-green-700' : 
                          row.starter === 'Limited' ? 'bg-yellow-100 text-yellow-700' : 
                          'bg-gray-100 text-gray-400'
                        }`}>
                          {row.starter}
                        </span>
                      </td>
                      <td className="py-5 px-6 text-center">
                        <span className={`inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium ${
                          row.pro === '✓' ? 'bg-green-100 text-green-700' : 
                          row.pro === 'Limited' ? 'bg-yellow-100 text-yellow-700' : 
                          'bg-gray-100 text-gray-400'
                        }`}>
                          {row.pro}
                        </span>
                      </td>
                      <td className="py-5 px-6 text-center">
                        <span className={`inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium ${
                          row.enterprise === '✓' ? 'bg-green-100 text-green-700' : 
                          row.enterprise === 'Limited' ? 'bg-yellow-100 text-yellow-700' : 
                          'bg-gray-100 text-gray-400'
                        }`}>
                          {row.enterprise}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ENHANCED FAQ SECTION */}
          <div className="mb-20">
            <div className="max-w-4xl mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h3>
              <p className="text-xl text-gray-600">
                Everything you need to know about our pricing plans
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "Can I switch between plans later?",
                  a: "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you'll only pay the prorated difference. Downgrades take effect at the next billing cycle.",
                  category: "Billing"
                },
                {
                  q: "Is there a money-back guarantee?",
                  a: "Yes, we offer a 30-day money-back guarantee for all plans. If you're not completely satisfied with the course, request a full refund within 30 days of purchase.",
                  category: "Guarantee"
                },
                {
                  q: "How long do I have access to the course?",
                  a: "You get lifetime access to all course materials, including all future updates. This means you can revisit the content anytime and stay updated with industry changes.",
                  category: "Access"
                },
                {
                  q: "Are there any hidden fees or additional costs?",
                  a: "No hidden fees whatsoever. The price you see is exactly what you pay. All features listed for each plan are included with no surprise charges.",
                  category: "Pricing"
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit/debit cards, UPI, net banking, and EMI options. All payments are processed securely through our payment partners.",
                  category: "Payment"
                },
                {
                  q: "Do you provide certificates after completion?",
                  a: "Yes, all plans include a certificate of completion that you can add to your LinkedIn profile and resume. The certificate is industry-recognized.",
                  category: "Certification"
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-bold text-sm">{faq.category.charAt(0)}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 truncate">{faq.q}</h4>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full whitespace-nowrap">{faq.category}</span>
                        <svg
                          className={`h-5 w-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                            expandedFaq === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {expandedFaq === index && (
                      <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA SECTION */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-16 text-center text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of insurance professionals who've transformed their careers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply-now"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
              >
                Apply Now
              </Link>
              <Link
                href="/courses"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
              >
                View Course Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
