export default function CourseDetailsSection() {
  return (
    <section className="bg-white py-28">
      <div className="container mx-auto px-6 space-y-28">

  {/* COURSE OVERVIEW — SINGLE SECTION */}
 <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
          About the Course
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <span className="font-medium text-gray-900">
            Agent Growth System
          </span>{" "}
          is a step-by-step online coaching program designed specifically for
          insurance professionals who want to grow their business online in a
          consistent and predictable way.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          This program helps you build a strong online presence, attract
          high-quality prospects organically, and convert online inquiries into
          loyal, long-term clients — without technical complexity.
        </p>

        <h3 className="text-2xl font-medium text-gray-900 mb-6">
          What This Program Helps You Achieve
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Build Authority",
              desc: "Create a strong and trusted personal brand online",
              icon: "Award"
            },
            {
              title: "Attract Quality",
              desc: "Draw high-quality prospects organically to your business",
              icon: "Target"
            },
            {
              title: "Convert Effectively",
              desc: "Turn online inquiries into loyal, long-term clients",
              icon: "Briefcase"
            },
            {
              title: "Predictable Growth",
              desc: "Create consistent monthly insurance business revenue",
              icon: "TrendingUp"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon === "Award" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />}
                      {item.icon === "Target" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
                      {item.icon === "Briefcase" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                      {item.icon === "TrendingUp" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />}
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-gray-600 italic">
          No technical background required. Everything is explained in simple,
          practical language.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="overflow-hidden">
        <img
          src="/online-learning-insurance.png"
          alt="Online learning and client acquisition for insurance professionals"
          className="w-full h-auto object-contain"
        />
      </div>

    </div>



        {/* SECTION 3 — WHAT YOU’LL LEARN (CARDS + IMAGE FEEL) */}
        <div className="bg-gray-50 rounded-3xl p-14">
          <h3 className="text-2xl font-medium text-gray-900 mb-10">
            What You’ll Learn Inside the Course
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Online positioning for insurance professionals",
              "Social media strategy (LinkedIn, Facebook & WhatsApp)",
              "Content ideas that attract ready-to-buy clients",
              "Online trust-building techniques",
              "Lead nurturing & follow-up systems",
              "Ethical and confident online closing methods",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200"
              >
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4 — BENEFITS */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <img
                  src="/client-acquisition.png"
                  alt="Insurance course benefits and advantages"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-orange-500 text-white rounded-full px-6 py-3 text-sm font-bold shadow-lg">
                Premium Benefits
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 lg:order-2">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             Course Benefits
              </h3>
              <p className="text-xl text-gray-600 mb-12">
                Transform your insurance business with these game-changing advantages
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "No more chasing prospects",
                  "Build authority instead of discounts", 
                  "Generate inbound leads automatically",
                  "Work with serious, qualified clients",
                  "Save time with proven systems",
                  "Suitable for new & experienced agents"
                ].map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="h-6 w-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-800 font-medium text-sm">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Premium Features</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">• Lifetime access to course updates</p>
                  <p className="text-gray-700">• Private community access</p>
                  <p className="text-gray-700">• Personalized support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5 — FINAL CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-4xl p-16 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Your Transformation Awaits
          </h3>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Build a stable, respectful, and stress-free insurance business where premium clients seek you out consistently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pricing"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              View Premium Plans
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              Schedule Strategy Call
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
