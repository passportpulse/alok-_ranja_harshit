import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Insurance Business | Data Protection & Privacy",
  description: "Read our comprehensive privacy policy to understand how Insurance Business collects, uses, and protects your personal information. Learn about your data rights and our commitment to privacy.",
  keywords: "privacy policy, data protection, personal information, GDPR compliance, insurance business privacy, user data rights",
  openGraph: {
    title: "Privacy Policy - Insurance Business",
    description: "Learn how we protect your personal information and respect your privacy rights.",
    url: "https://insurancebusiness.com/privacy",
    type: "website",
  },
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
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
                Insurance Business ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>insurancebusiness.com</strong> and use our online training programs.
              </p>
              <p className="text-lg leading-relaxed">
                By using our website and services, you consent to the practices described in this policy.
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Information We Collect
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Personal Information
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li className="text-lg">Name and contact information (email, phone number)</li>
                  <li className="text-lg">Billing information (payment details, address)</li>
                  <li className="text-lg">Professional information (insurance license, experience)</li>
                  <li className="text-lg">Account credentials (username, password)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Usage Information
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li className="text-lg">Pages visited and time spent on our website</li>
                  <li className="text-lg">Course progress and completion data</li>
                  <li className="text-lg">IP address and device information</li>
                  <li className="text-lg">Browser type and operating system</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Cookies and Tracking Technologies
                </h3>
                <p className="text-lg text-gray-700">
                  We use cookies and similar technologies to enhance your experience, analyze traffic, and personalize content.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How We Use Your Information
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Provide Services</h4>
                  <p className="text-gray-700">To deliver our training programs and support your learning journey</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Process Payments</h4>
                  <p className="text-gray-700">To handle course enrollment and subscription payments</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Communicate</h4>
                  <p className="text-gray-700">To send course updates, support, and marketing communications</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Improve Services</h4>
                  <p className="text-gray-700">To analyze usage patterns and enhance our training programs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Information Sharing
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Service providers who assist in operating our website (payment processors, email services)</li>
                <li>When required by law or to protect our rights, property, or safety</li>
                <li>With your explicit consent for specific purposes</li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Data Security
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security audits and updates</li>
                <li>Restricted access to personal information</li>
              </ul>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Your Rights
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Access</h4>
                  <p className="text-gray-700">Request access to your personal information</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Correction</h4>
                  <p className="text-gray-700">Update or correct inaccurate information</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Deletion</h4>
                  <p className="text-gray-700">Request deletion of your personal information</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Preferences</h4>
                  <p className="text-gray-700">Control communication preferences and cookie settings</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Contact Us
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-blue-100">
                If you have questions about this Privacy Policy or how we handle your information, please contact us:
              </p>
              
              <div className="space-y-2">
                <p className="text-lg"><strong>Email:</strong> privacy@insurancebusiness.com</p>
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
