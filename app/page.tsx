import { Metadata } from "next"
import HeroSection from "@/components/HeroSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import HomeFAQSection from "@/components/HomeFAQSection"
import CourseOverviewSection from "@/components/CourseOverviewSection"
import PricingSection from "@/components/PricingSection"
import AboutUsSection from "@/components/AboutUsSection"
import FinalCTASection from "@/components/FinalCTASection"

export const metadata: Metadata = {
  title: "Insurance Business - Digital Client Acquisition Training | Home",
  description: "Transform your insurance business with proven digital client acquisition strategies. Learn from 34+ years experienced professional with multiple MDRT qualifications. Start attracting quality clients online today.",
  keywords: "insurance business, digital client acquisition, insurance training, MDRT qualification, insurance marketing, online insurance courses",
  openGraph: {
    title: "Insurance Business - Digital Client Acquisition Training",
    description: "Transform your insurance business with proven digital strategies. Learn from 34+ years experienced professional.",
    url: "https://insurancebusiness.com",
    type: "website",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <HeroSection />
      <CourseOverviewSection />
      <TestimonialsSection />
      <PricingSection />
      <AboutUsSection />
      <HomeFAQSection />
      <FinalCTASection />
    </div>
  );
}
