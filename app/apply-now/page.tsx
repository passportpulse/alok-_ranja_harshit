'use client'

import { useState } from 'react'

export default function ApplyNow() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobileNumber: '',
    emailId: '',
    experience: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Application submitted:', formData)
    alert('Thank you for your application! We will contact you soon with further details.')
    setFormData({ name: '', address: '', mobileNumber: '', emailId: '', experience: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Video */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_40%)]" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
                Apply Now
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Take the first step towards your insurance career. Fill out the application form and our team will guide you through the enrollment process.
              </p>
            </div>
            
            {/* Right - Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl max-w-md mx-auto mix-blend-multiply" >
                <img
                  src="/apply-now.svg"
                  alt="Apply Now"
                  className="w-full h-auto max-h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Application Information */}
        <div className="lg:sticky lg:top-24 h-fit self-start">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Course Application
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Professional Training</h3>
                  <p className="text-gray-600">Comprehensive insurance courses designed for success</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Expert Guidance</h3>
                  <p className="text-gray-600">Learn from industry professionals with years of experience</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Career Opportunities</h3>
                  <p className="text-gray-600">Placement assistance and job support after completion</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Links
              </h3>
              <div className="space-y-2">
                <a href="/courses" className="block text-blue-600 hover:text-blue-700 transition-colors">
                  → Explore Our Courses
                </a>
                <a href="/pricing" className="block text-blue-600 hover:text-blue-700 transition-colors">
                  → View Pricing Plans
                </a>
                <a href="/faq" className="block text-blue-600 hover:text-blue-700 transition-colors">
                  → Frequently Asked Questions
                </a>
                <a href="/contact" className="block text-blue-600 hover:text-blue-700 transition-colors">
                  → Contact Support
                </a>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Application Form
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 text-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your complete address"
                  />
                </div>

                <div>
                  <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="emailId" className="block text-sm font-medium text-gray-700 mb-2">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    id="emailId"
                    name="emailId"
                    value={formData.emailId}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Experience in Insurance Sector *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your experience level</option>
                    <option value="fresher">Fresher (No experience)</option>
                    <option value="0-1">0-1 Year</option>
                    <option value="1-3">1-3 Years</option>
                    <option value="3-5">3-5 Years</option>
                    <option value="5+">5+ Years</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to join this course?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 text-gray-500 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your goals and how this course will help you achieve them..."
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                    I agree to be contacted for course enrollment and related information
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Submit Application
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
