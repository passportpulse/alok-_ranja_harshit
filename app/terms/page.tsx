import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Insurance Business | Legal Terms & Conditions",
  description: "Read our terms of service to understand the rules and guidelines for using Insurance Business platform and services. Learn about your rights and responsibilities as a user.",
  keywords: "terms of service, legal terms, conditions, user agreement, insurance business terms, service terms",
  openGraph: {
    title: "Terms of Service - Insurance Business",
    description: "Read our terms of service to understand your rights and responsibilities.",
    url: "https://insurancebusiness.com/terms",
    type: "website",
  },
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-blue-100">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="">
          
          {/* Last Updated */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12">
            <p className="text-lg font-medium text-gray-900">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Introduction
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                Welcome to Insurance Business. These Terms of Service ("Terms") govern your use of our website <strong>insurancebusiness.com</strong> and our online training programs and services (collectively, the "Services").
              </p>
              <p className="text-lg leading-relaxed">
                By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
              </p>
            </div>
          </div>

          {/* Services Description */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                Insurance Business provides online training programs, courses, and resources designed specifically for insurance professionals in India. Our Services include:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Digital client acquisition training programs</li>
                <li>Online video courses and tutorials</li>
                <li>Downloadable resources and templates</li>
                <li>Community support and mentorship</li>
                <li>Live coaching sessions and workshops</li>
              </ul>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              User Responsibilities
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Account Security
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li className="text-lg">Maintain the confidentiality of your account credentials</li>
                  <li className="text-lg">Notify us immediately of any unauthorized use</li>
                  <li className="text-lg">You are responsible for all activities under your account</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Acceptable Use
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li className="text-lg">Use Services for legitimate insurance business purposes</li>
                  <li className="text-lg">Do not share course materials with non-enrolled individuals</li>
                  <li className="text-lg">Respect intellectual property rights</li>
                  <li className="text-lg">Do not attempt to reverse engineer or copy our content</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Professional Conduct
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li className="text-lg">Maintain professional standards in community interactions</li>
                  <li className="text-lg">Follow all applicable insurance regulations</li>
                  <li className="text-lg">Implement strategies ethically and responsibly</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Payment Terms
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Course Fees
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li className="text-lg">All fees are clearly displayed before purchase</li>
                  <li className="text-lg">Prices are in Indian Rupees (INR)</li>
                  <li className="text-lg">Taxes may apply as per applicable laws</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Payment Methods
                </h3>
                <p className="text-lg text-gray-700">
                  We accept various payment methods including credit/debit cards, UPI, net banking, and EMI options through secure payment gateways.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Refund Policy
                </h3>
                <p className="text-lg text-gray-700">
                  We offer a 30-day money-back guarantee. If you're not satisfied with our courses, request a refund within 30 days of purchase for a full refund.
                </p>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Intellectual Property
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                All content, materials, and intellectual property on our website and courses are owned by Insurance Business and protected by copyright, trademark, and other intellectual property laws.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6">
                <p className="text-lg font-medium text-gray-900">
                  <strong>Important:</strong> Course materials are for your personal use only. You may not reproduce, distribute, or share our content without explicit written permission.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Disclaimer
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                Our training programs provide educational content and strategies for insurance professionals. However:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Results may vary based on individual effort and market conditions</li>
                <li>We do not guarantee specific business outcomes or income levels</li>
                <li>Success requires consistent implementation of taught strategies</li>
                <li>You remain responsible for compliance with insurance regulations</li>
              </ul>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Limitation of Liability
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                To the maximum extent permitted by law, Insurance Business shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our total liability for any claims arising from these Terms or your use of the Services shall not exceed the amount you paid for the applicable course.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Termination
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation.
              </p>
              
              <p className="text-lg leading-relaxed">
                Upon termination, your right to use the Service will cease immediately. All provisions of the Terms which by their nature should survive termination shall survive.
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Changes to Terms
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
              
              <p className="text-lg leading-relaxed">
                Your continued use of the Services after the effective date of the revised Terms constitutes acceptance of the changes.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Contact Us
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-blue-100">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="space-y-2">
                <p className="text-lg"><strong>Email:</strong> legal@insurancebusiness.com</p>
                <p className="text-lg"><strong>Phone:</strong> +91-XXXXXXXXXX</p>
                <p className="text-lg"><strong>Address:</strong> [Your Business Address]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
