import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 - Page Not Found | Insurance Business",
  description: "The page you're looking for doesn't exist. Return to Insurance Business homepage to explore our digital client acquisition training programs.",
  keywords: "404 error, page not found, insurance business, digital client acquisition",
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        {/* 404 NUMBER */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <div className="h-1 w-32 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* ERROR MESSAGE */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Oops! Page Not Found
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The page you're looking for seems to have vanished into the digital void. 
            Don't worry - even the best insurance professionals sometimes hit dead ends!
          </p>

          {/* SUGGESTED ACTIONS */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Go Home
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Return to our homepage and explore our training programs
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </Link>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Explore Courses
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Discover our digital client acquisition training programs
              </p>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                View Courses
              </Link>
            </div>
          </div>

          {/* POPULAR PAGES */}
          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Popular Pages
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                About Us
              </Link>
              <Link
                href="/pricing"
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                Contact
              </Link>
              <Link
                href="/faq"
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>

        {/* SEARCH SUGGESTION */}
        <div className="bg-white/80 backdrop-blur rounded-xl p-6">
          <p className="text-gray-600 mb-4">
            Looking for something specific? Try searching or contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Contact Support
            </Link>
            <div className="flex items-center justify-center text-gray-500 text-sm">
              Or email us at: <span className="font-medium text-gray-700 ml-1">support@insurancebusiness.com</span>
            </div>
          </div>
        </div>

        {/* FUN INSURANCE QUOTE */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 italic text-sm">
            "The best insurance policy is the one you actually understand." - Unknown Insurance Wisdom
          </p>
        </div>
      </div>
    </div>
  )
}
