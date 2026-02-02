import { Metadata } from "next"
import HeroSection from "@/components/HeroSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import HomeFAQSection from "@/components/HomeFAQSection"
import CourseOverviewSection from "@/components/CourseOverviewSection"
import PricingSection from "@/components/PricingSection"
import AboutUsSection from "@/components/AboutUsSection"
import FinalCTASection from "@/components/FinalCTASection"

export const metadata: Metadata = {
  title: "Fin Health | Financial Advisor & Insurance Agent Coaching in Jharkhand",
  description: "Coaching for Financial Advisors & Insurance Agents in Jharkhand to get more clients online ethically, consistently, and profitably. Join free coaching now.",
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
    <div className="min-h-screen leading-relaxed bg-zinc-50 ">
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
