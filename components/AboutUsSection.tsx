import { Building, Trophy, Users, Globe, Monitor, Target } from 'lucide-react'

export default function AboutUsSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-28">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT – CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
            About Us
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            We are on a mission to{" "}
            <span className="font-semibold text-gray-900">
              modernize the insurance profession
            </span>.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            This platform is created by a senior insurance & banking professional
            with{" "}
            <span className="font-semibold text-blue-600">
              34+ years of industry experience
            </span>{" "}
            and{" "}
            <span className="font-semibold text-blue-600">
              multiple-time MDRT qualification
            </span>.
          </p>

          <p className="text-gray-700 mb-10 leading-relaxed">
            Having trained hundreds of advisors, we understand one simple truth:
          </p>

          {/* QUOTE */}
          <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-800 text-lg mb-10">
            “Insurance agents don’t fail because of lack of products —
            they fail due to lack of systems.”
          </blockquote>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Our programs are{" "}
            <span className="font-semibold">
              practical, ethical, and designed specifically
            </span>{" "}
            for Indian insurance professionals.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We believe insurance advisors deserve{" "}
            <span className="font-semibold text-gray-900">
              respect, predictable income, and work-life balance
            </span>.
          </p>

          {/* FIN HEALTH COACHING CONTENT */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Financial Advisor & Insurance Agent Coaching in Jharkhand
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              <span className="font-semibold text-gray-900">Fin Health</span> is a unique coaching platform that was made to help financial advisors and insurance agents achieve sustainable growth in the digitally dominant world of today.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Our Financial Advisor & Insurance Agent Coaching in Jharkhand is tailored for those professionals who want to attract quality clients online, win trust that lasts, and grow their advisory business in an ethical and consistent manner.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Jharkhand community of insurance agents, mutual fund distributors, and financial planners is the one which keeps expanding rapidly. Yet, a great number of people in the sector are still heavily relying on referrals, walk-ins, or cold calling.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Fin Health is there to take you beyond these old-fashioned methods by offering you the step-by-step new online client acquisition systems that are very easy, practical, and regulatory compliant.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Our coaching can serve the purposes of unlocking the potential of the two: newly licensed advisors as well as experienced professionals who want to raise the level of their practice to meet the needs of tomorrow.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              One of the things that we work on at Fin Health is that you learn how to build a personal brand that is backed up by actions in real life through our Financial Advisor & Insurance Agent Coaching in Jharkhand.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Additionally, you become master the usage of popular social platforms such as WhatsApp, Facebook, and LinkedIn for marketing and sales purposes, and most importantly how to effectively deliver your value proposition to potential clients.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              The objective is not merely to get more leads but the right clientele those who trust you, and will stay with you in the long run.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Ethical and relationship-based approach. We firmly think that credible and relationship-based marketing supports value orientation and client trust.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Fin Health also runs free coaching programs to help advisors. Such sessions equip you with the knowledge of online client acquisition and digital marketing strategies.
            </p>
          </div>
        </div>

        {/* RIGHT – STATS / TRUST CARDS */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "34+ Years",
                desc: "Insurance & Banking Experience",
                icon: <Building className="w-6 h-6 text-blue-600" />,
              },
              {
                title: "Multiple-Time",
                desc: "MDRT Qualified Professional",
                icon: <Trophy className="w-6 h-6 text-blue-600" />,
              },
              {
                title: "Hundreds",
                desc: "Advisors Trained Successfully",
                icon: <Users className="w-6 h-6 text-blue-600" />,
              },
              {
                title: "India-Focused",
                desc: "Ethical & Practical Systems",
                icon: <Globe className="w-6 h-6 text-blue-600" />,
              },
              {
                title: "Digital",
                desc: "Client Acquisition Systems",
                icon: <Monitor className="w-6 h-6 text-blue-600" />,
              },
              {
                title: "Free",
                desc: "Coaching Sessions Available",
                icon: <Target className="w-6 h-6 text-blue-600" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-br from-white to-blue-50 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-100"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-blue-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 font-medium text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
