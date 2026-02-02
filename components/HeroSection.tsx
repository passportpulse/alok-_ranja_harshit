import { Target, Monitor, Handshake, TrendingUp, MessageSquare, Trophy, Rocket, Eye } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 md:py-32">
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.1),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-medium shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Now Enrolling New Batch
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl xl:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Financial Advisor & Insurance Agent
            </span>
            <br className="hidden md:inline"/>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-extrabold">
              {" "}Coaching in Jharkhand
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Learn How to 
            <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              {" "}Get Clients Online Ethically
            </span>
            , Consistently & Without Cold Calling
          </p>

          {/* Stats Pills */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-gray-200">
              <Target className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Quality Clients</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-gray-200">
              <Monitor className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Digital Systems</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-gray-200">
              <Handshake className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Ethical Approach</span>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/apply"
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 text-lg font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Join the Program
              </span>
            </a>

            <a
              href="/courses"
              className="group inline-flex items-center justify-center rounded-xl border-2 border-gray-300 bg-white/80 backdrop-blur-sm px-8 py-4 text-lg font-bold text-gray-700 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 hover:scale-105"
            >
              <Eye className="w-5 h-5 mr-2" />
              Get Free Preview
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <span>Limited Seats Available</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg mr-1">⭐</span>
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative hidden lg:block">
          {/* Main image with enhanced styling */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl"></div>
            <div className="relative backdrop-blur-sm ">
              <img
                src="/hero-insurance-agent.png"
                alt="Insurance Agent Growth"
                className="rounded-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Floating stat cards with animations */}
          <div className="absolute -top-4 -left-4 bg-white rounded-xl text-gray-500 shadow-xl px-4 py-3 text-sm font-bold border border-gray-100 animate-bounce">
            <TrendingUp className="w-4 h-4 text-blue-600 inline mr-1" /> 300% Growth
          </div>

          <div className="absolute top-1/2 -right-4 bg-white rounded-xl text-gray-500 shadow-xl px-4 py-3 text-sm font-bold border border-gray-100 animate-pulse delay-500">
            <MessageSquare className="w-4 h-4 text-green-600 inline mr-1" /> 50+ Leads/Month
          </div>

          <div className="absolute -bottom-4 left-1/4 bg-white rounded-xl text-gray-500 shadow-xl px-4 py-3 text-sm font-bold border border-gray-100 animate-bounce delay-1000">
            <Trophy className="w-4 h-4 text-purple-600 inline mr-1" /> Proven System
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
