export default function AboutUsSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-28">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

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
        </div>

        {/* RIGHT – STATS / TRUST CARDS */}
        <div className="grid sm:grid-cols-2 gap-8">
          {[
            {
              title: "34+ Years",
              desc: "Insurance & Banking Experience",
            },
            {
              title: "Multiple-Time",
              desc: "MDRT Qualified Professional",
            },
            {
              title: "Hundreds",
              desc: "Advisors Trained Successfully",
            },
            {
              title: "India-Focused",
              desc: "Ethical & Practical Systems",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-3xl font-extrabold text-blue-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
