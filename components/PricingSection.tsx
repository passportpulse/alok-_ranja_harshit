export default function PricingSection() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-28">
     <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Pricing Plans
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Choose the plan that fits your growth goals
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* STARTER */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Starter Plan
            </h3>
            <p className="text-gray-500 mb-6">
              Perfect to get started online
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-8">
              <span className="text-4xl font-medium text-gray-900">
                Free
              </span>
              <span className="text-xl text-gray-400 line-through">
                ₹2,999
              </span>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Full course access",
                "Recorded video lessons",
                "Worksheets & templates",
                "Lifetime access",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="/apply"
              className="block text-center rounded-xl border border-gray-300 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              Get Started
            </a>
          </div>

          {/* PROFESSIONAL – MOST POPULAR */}
          <div className="relative bg-white rounded-3xl border-2 border-blue-600 p-10 shadow-xl scale-[1.03]">

            {/* BADGE */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1 rounded-full text-sm font-semibold shadow">
              ⭐ Most Popular
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Professional Plan
            </h3>
            <p className="text-gray-500 mb-6">
              Best for serious growth
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-8">
              <span className="text-4xl font-medium text-gray-900">
                Free
              </span>
              <span className="text-xl text-gray-400 line-through">
                ₹7,999
              </span>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Everything in Starter",
                "Live group mentoring sessions",
                "Case studies",
                "Client acquisition scripts",
                "Community access",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="/apply"
              className="block text-center rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700 transition shadow-lg"
            >
              Join the Program
            </a>
          </div>

          {/* ELITE */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Elite Mentorship
            </h3>
            <p className="text-gray-500 mb-6">
              Personal guidance & fast results
            </p>
            <div className="flex items-baseline justify-center gap-2 mb-8">
              <span className="text-4xl font-medium text-gray-900">
                Free
              </span>
              <span className="text-xl text-gray-400 line-through">
                ₹24,999
              </span>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Everything in Professional",
                "1-to-1 strategy sessions",
                "Personal brand review",
                "Customized growth roadmap",
                "Priority support",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="/apply"
              className="block text-center rounded-xl border border-gray-300 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              Apply for Mentorship
            </a>
          </div>

        </div>

        {/* FOOT NOTE */}
        <div className="text-center mt-16">
          <p className="text-sm text-gray-600 italic">
            👉 Limited seats available for mentoring plans
          </p>
        </div>

      </div>
    </section>
  );
}
