export default function CourseOverviewSection() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-28">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Agent Growth System
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Transform your insurance business with proven online client acquisition strategies
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* LEFT - CONTENT */}
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🎯 What You'll Learn
                </h3>
                <ul className="space-y-3">
                  {[
                    "Online positioning for insurance professionals",
                    "Social media strategy (LinkedIn, Facebook, WhatsApp)",
                    "Content ideas that attract ready-to-buy clients",
                    "Online trust-building techniques",
                    "Lead nurturing & follow-up systems",
                    "Closing clients ethically and confidently online"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🚀 Course Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "No more chasing prospects",
                    "Build authority instead of discounts",
                    "Generate inbound leads automatically",
                    "Work with serious, qualified clients",
                    "Save time with proven systems",
                    "Suitable for new & experienced agents"
                  ].map((benefit, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-4">
                      <span className="text-blue-600 font-semibold">✓</span>
                      <span className="text-gray-700 ml-2">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - IMAGE */}
          <div className="relative">
            <div className=" overflow-hidden ">
              <img
                src="/course.svg"
                alt="Insurance agent learning online"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-full px-6 py-3 text-sm font-semibold shadow-lg">
              Proven System
            </div>
          </div>

        </div>

        {/* CTA SECTION */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Insurance Business?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of successful insurance agents who've mastered online client acquisition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pricing"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              View Pricing Plans
            </a>
            <a
              href="/apply"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
