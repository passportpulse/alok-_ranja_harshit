import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Insurance Business - Digital Client Acquisition Training for Insurance Professionals",
  description: "Transform your insurance business with proven digital client acquisition strategies. Learn from 34+ years experienced professional with multiple MDRT qualifications. Online courses, mentorship, and community support for Indian insurance advisors.",
  keywords: "insurance business, digital client acquisition, insurance training, MDRT qualification, insurance marketing, online insurance courses, insurance mentorship, Indian insurance professionals, client acquisition strategies, insurance sales training",
  authors: [{ name: "Insurance Business Team" }],
  creator: "Insurance Business",
  publisher: "Insurance Business",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://insurancebusiness.com"),
  alternates: {
    canonical: "https://insurancebusiness.com",
  },
  openGraph: {
    title: "Insurance Business - Digital Client Acquisition Training",
    description: "Transform your insurance business with proven digital strategies. Learn from 34+ years experienced professional with multiple MDRT qualifications.",
    url: "https://insurancebusiness.com",
    siteName: "Insurance Business",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Insurance Business - Digital Client Acquisition Training",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Business - Digital Client Acquisition Training",
    description: "Transform your insurance business with proven digital strategies. Learn from 34+ years experienced professional.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
