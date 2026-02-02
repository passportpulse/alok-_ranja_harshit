import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Insurance Business - 34+ Years Experience | MDRT Qualified",
  description: "Learn about Insurance Business - founded by a senior insurance professional with 34+ years of experience and multiple MDRT qualifications. Discover our mission to transform insurance careers through digital strategies.",
  keywords: "about insurance business, insurance training, MDRT qualification, 34 years experience, insurance professional, digital insurance strategies",
  openGraph: {
    title: "About Insurance Business - 34+ Years Experience",
    description: "Learn about our mission to transform insurance careers through proven digital strategies.",
    url: "https://insurancebusiness.com/about",
    type: "website",
  },
}

export default function About() {
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
                About Insurance Business
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Empowering insurance professionals with modern digital strategies to build sustainable, profitable businesses
              </p>
            </div>
            
            {/* Right - Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl max-w-md mx-auto">
                <img
                  src="/about-hero.svg"
                  alt="Insurance business team working together"
                  className="w-full h-auto max-h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* ABOUT US SECTION */}
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-4xl p-12 mb-20">
          <div className="">
         
            
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-8">
              {/* LEFT CONTENT */}
              <div>
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    We are on a mission to <span className="font-semibold text-blue-600">modernize the insurance profession</span> through ethical, practical, and proven digital systems.
                  </p>
                  
                  <p className="text-xl text-gray-700 leading-relaxed">
                    This platform is created by a senior insurance & banking professional with <span className="font-semibold text-blue-600">34+ years of industry experience</span> and <span className="font-semibold text-blue-600">multiple-time MDRT qualification</span>.
                  </p>
                  
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Having trained hundreds of advisors, we understand one simple truth:
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-8 rounded-xl mb-8">
                  <p className="text-2xl font-bold text-gray-900 italic">
                    "Insurance agents don't fail because of lack of products — they fail due to lack of systems."
                  </p>
                </div>
                
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Our programs are <span className="font-semibold">practical, ethical, and designed specifically</span> for Indian insurance professionals.
                  </p>
                  
                  <p className="text-xl font-bold text-gray-900 text-2xl">
                    We believe insurance advisors deserve respect, predictable income, and work‑life balance.
                  </p>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                  <img
                    src="/about-team.webp"
                    alt="Insurance business team working together"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-full px-6 py-3 text-sm font-bold shadow-lg">
                  34+ Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WHAT WE DO - ENHANCED */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions to transform your insurance business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-20 w-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Comprehensive Training
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Step-by-step online coaching programs covering all aspects of digital client acquisition with proven methodologies
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-20 w-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Community Support
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Join a thriving community of insurance professionals sharing insights, strategies, and success stories
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-20 w-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Proven Results
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Practical systems that have helped hundreds of agents achieve predictable business growth and success
              </p>
            </div>
          </div>
        </div>

        {/* OUR VALUES - ENHANCED */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                Ethical practices and transparent communication in all our interactions
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                High-quality training and proven methodologies that deliver results
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Modern digital strategies for traditional insurance business models
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.682-1.682a4.5 4.5 0 00-6.364 0L4.318 6.318a4.5 4.5 0 000 6.364z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Support</h3>
              <p className="text-gray-600">
                Continuous guidance and mentorship throughout your journey
              </p>
            </div>
          </div>
        </div>


        {/* FIN HEALTH COACHING SECTION */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-4xl p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
                Financial Advisor & Insurance Agent Coaching in Jharkhand
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <span className="font-bold text-blue-600">Fin Health</span> is a unique coaching platform that was made to help financial advisors and insurance agents achieve sustainable growth in the digitally dominant world of today.
                </p>
                
                <p>
                  Our Financial Advisor & Insurance Agent Coaching in Jharkhand is tailored for those professionals who want to <span className="font-semibold text-blue-600">attract quality clients online, win trust that lasts, and grow their advisory business</span> in an ethical and consistent manner.
                </p>
                
                <p>
                  Jharkhand community of insurance agents, mutual fund distributors, and financial planners is the one which keeps expanding rapidly. Yet, a great number of people in the sector are still heavily relying on referrals, walk-ins, or cold calling.
                </p>
                
                <p>
                  Fin Health is there to take you beyond these old-fashioned methods by offering you the <span className="font-semibold text-blue-600">step-by-step new online client acquisition systems</span> that are very easy, practical, and regulatory compliant.
                </p>
                
                <p>
                  Our coaching can serve the purposes of unlocking the potential of the two: newly licensed advisors as well as experienced professionals who want to raise the level of their practice to meet the needs of tomorrow.
                </p>
                
                <p>
                  One of the things that we work on at Fin Health is that you learn how to <span className="font-semibold text-blue-600">build a personal brand that is backed up by actions in real life</span> through our Financial Advisor & Insurance Agent Coaching in Jharkhand.
                </p>
                
                <p>
                  Additionally, you become master the usage of popular social platforms such as WhatsApp, Facebook, and LinkedIn for marketing and sales purposes, and most importantly how to effectively deliver your value proposition to potential clients.
                </p>
                
                <p>
                  The objective is not merely to get more leads but the right clientele those who trust you, and will stay with you in the long run.
                </p>
                
                <p>
                  Ethical and relationship-based approach. We firmly think that credible and relationship-based marketing supports value orientation and client trust.
                </p>
                
                <p>
                  Fin Health also runs <span className="font-semibold text-blue-600">free coaching programs</span> to help advisors. Such sessions equip you with the knowledge of online client acquisition and digital marketing strategies.
                </p>
              </div>
              
              {/* COACHING FEATURES */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Clients</h3>
                  <p className="text-gray-600">Attract the right clients who trust you and stay long-term</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Systems</h3>
                  <p className="text-gray-600">Step-by-step online client acquisition systems</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ethical Approach</h3>
                  <p className="text-gray-600">Relationship-based marketing that builds trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ENHANCED CTA SECTION */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-4xl p-16 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Insurance Career?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join hundreds of successful insurance professionals who have already transformed their business with our proven systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/courses"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
              >
                Explore Courses
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
