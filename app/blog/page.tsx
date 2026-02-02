'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FileText, Building, TrendingUp, Calendar, User, Clock, ChevronLeft, ChevronRight } from 'lucide-react'

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState('insurance')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  const blogPosts = {
    insurance: [
      {
        id: 1,
        title: "Understanding Life Insurance: A Complete Guide for Beginners",
        excerpt: "Learn the fundamentals of life insurance, types of policies, and how to choose the right coverage for your family's needs.",
        author: "Alok Ranjan Basak",
        date: "2024-01-15",
        readTime: "5 min read",
        category: "Life Insurance",
        image: "/blog-insurance-1.jpg"
      },
      {
        id: 2,
        title: "Health Insurance Trends in 2024: What's New?",
        excerpt: "Discover the latest trends in health insurance, including cashless treatments, wellness programs, and digital claim processes.",
        author: "Alok Ranjan Basak",
        date: "2024-01-10",
        readTime: "4 min read",
        category: "Health Insurance",
        image: "/blog-insurance-2.jpg"
      },
      {
        id: 3,
        title: "Motor Insurance Claims: Dos and Don'ts",
        excerpt: "Essential guidelines for filing motor insurance claims correctly and avoiding common mistakes that could lead to rejection.",
        author: "Alok Ranjan Basak",
        date: "2024-01-05",
        readTime: "6 min read",
        category: "Motor Insurance",
        image: "/blog-insurance-3.jpg"
      }
    ],
    banking: [
      {
        id: 4,
        title: "Digital Banking Revolution: Transforming Financial Services",
        excerpt: "How digital banking is reshaping the financial landscape and what it means for customers and traditional banks.",
        author: "Alok Ranjan Basak",
        date: "2024-01-12",
        readTime: "7 min read",
        category: "Digital Banking",
        image: "/blog-banking-1.jpg"
      },
      {
        id: 5,
        title: "Fixed Deposits vs Mutual Funds: Where to Invest?",
        excerpt: "A comprehensive comparison between traditional fixed deposits and modern mutual fund investments for better returns.",
        author: "Alok Ranjan Basak",
        date: "2024-01-08",
        readTime: "8 min read",
        category: "Investment",
        image: "/blog-banking-2.jpg"
      },
      {
        id: 6,
        title: "Understanding Loan Eligibility: A Complete Guide",
        excerpt: "Learn about the factors that determine your loan eligibility and how to improve your chances of approval.",
        author: "Alok Ranjan Basak",
        date: "2024-01-03",
        readTime: "5 min read",
        category: "Loans",
        image: "/blog-banking-3.jpg"
      }
    ],
    market: [
      {
        id: 7,
        title: "Stock Market Analysis: January 2024 Update",
        excerpt: "Comprehensive analysis of current market trends, sector performance, and investment opportunities in the Indian stock market.",
        author: "Alok Ranjan Basak",
        date: "2024-01-14",
        readTime: "10 min read",
        category: "Stock Market",
        image: "/blog-market-1.jpg"
      },
      {
        id: 8,
        title: "Interest Rate Impact on Insurance and Banking",
        excerpt: "How changing interest rates affect insurance premiums, bank deposits, and loan rates in the current economic scenario.",
        author: "Alok Ranjan Basak",
        date: "2024-01-09",
        readTime: "6 min read",
        category: "Economy",
        image: "/blog-market-2.jpg"
      },
      {
        id: 9,
        title: "Cryptocurrency Regulations in India: Latest Updates",
        excerpt: "Understanding the current regulatory framework for cryptocurrencies and their impact on traditional financial services.",
        author: "Alok Ranjan Basak",
        date: "2024-01-06",
        readTime: "7 min read",
        category: "Cryptocurrency",
        image: "/blog-market-3.jpg"
      }
    ]
  }

  const tabs = [
    { id: 'insurance', label: 'Insurance', icon: FileText },
    { id: 'banking', label: 'Banking', icon: Building },
    { id: 'market', label: 'Market Update', icon: TrendingUp }
  ]

  // Get current posts for pagination
  const currentPosts = blogPosts[activeTab as keyof typeof blogPosts]
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPostsToShow = currentPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(currentPosts.length / postsPerPage)

  // Reset page when tab changes
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    setCurrentPage(1)
  }

  // Pagination functions
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages))
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1))

  // Helper function to create slug from title
  const getSlugFromTitle = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

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
                Financial Insights & Updates
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Stay informed with the latest trends, tips, and analysis in insurance, banking, and financial markets
              </p>
            </div>
            
            {/* Right - Image/Graphic */}
          <div className="relative">
              <div className="overflow-hidden rounded-2xl max-w-md mx-auto">
                <img
                  src="/g1.svg"
                  alt="Insurance agent learning FAQ"
                  className="w-full h-auto max-h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="mb-12">
            <nav className="flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                      key={tab.id}
      onMouseDown={(e) => e.preventDefault()}

                    onClick={() => handleTabChange(tab.id)}
                   className={`group relative py-4 px-1 border-b-2 font-medium text-sm
transition-all duration-200
- focus:outline-none focus:ring-0
+ focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0
${
  activeTab === tab.id
    ? 'border-blue-600 text-blue-600'
    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
}`}

                  >
                    <div className="flex items-center space-x-2">
                      <Icon className={`w-5 h-5 transition-colors duration-200 ${
                        activeTab === tab.id ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'
                      }`} />
                      <span className="text-base font-semibold">{tab.label}</span>
                    </div>
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPostsToShow.map((post) => (
              <article
                key={post.id}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6  transition-all duration-500 hover:border-blue-300 group"
              >
                {/* Header with Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-xs">{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Image */}
                <div className="relative h-40 mb-6 rounded-xl overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${post.id}/400/250.jpg`}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center mr-3">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                      <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}</p>
                    </div>
                  </div>
                  
                  <Link href={`/blog/${getSlugFromTitle(post.title)}`} className="bg-blue-400 text-white p-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-12">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => paginate(pageNumber)}
                    className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                      currentPage === pageNumber
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
    
    </div>
  )
}
