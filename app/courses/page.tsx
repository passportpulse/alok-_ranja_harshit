import { Metadata } from "next"
import CourseDetailsSection from "@/components/pages/CourseDetailsSection"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Courses - Insurance Business | Digital Client Acquisition Training",
  description: "Explore our comprehensive digital client acquisition training courses for insurance professionals. Learn proven strategies to attract quality clients online and grow your insurance business.",
  keywords: "insurance courses, digital client acquisition training, online insurance courses, insurance sales training, client acquisition strategies",
}

export default function Courses() {
  

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
                Agent Growth System
              </h1>
              <p className="text-lg md:text-xl text-blue-600 font-semibold mb-4">
                (Online Client Acquisition Mastery)
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Transform your insurance business with proven online client acquisition strategies
              </p>
              <div className="mt-8">
                <Link
                  href="/apply"
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
                  src="/course-hero.svg"
                  alt="Insurance agent learning online"
                  className="w-full h-auto max-h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
<CourseDetailsSection />
     
    </div>
  )
}
