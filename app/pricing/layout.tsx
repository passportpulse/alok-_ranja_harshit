import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing - Insurance Business Courses | Digital Client Acquisition Training",
  description: "Choose the perfect plan for your insurance business growth. Affordable pricing for digital client acquisition training with 30-day money-back guarantee. Starter, Professional, and Enterprise plans available.",
  keywords: "insurance course pricing, digital client acquisition cost, insurance training fees, online insurance courses price, MDRT training cost",
  openGraph: {
    title: "Pricing - Insurance Business Courses",
    description: "Affordable pricing for digital client acquisition training with 30-day money-back guarantee.",
    url: "https://insurancebusiness.com/pricing",
    type: "website",
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
