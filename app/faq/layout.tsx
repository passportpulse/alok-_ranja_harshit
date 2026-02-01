import { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - Insurance Business | Frequently Asked Questions",
  description: "Get answers to common questions about our digital client acquisition training for insurance professionals. Learn about courses, pricing, and how we help insurance agents succeed online.",
  keywords: "insurance FAQ, digital client acquisition questions, insurance training FAQ, online courses questions, insurance business help",
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
