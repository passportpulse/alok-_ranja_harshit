const testimonials = [
  {
    name: "Ramesh K.",
    role: "LIC Advisor (12 Years Experience)",
    quote:
      "Earlier I depended only on referrals. After this program, I started getting regular online inquiries within 60 days.",
    initials: "RK",
  },
  {
    name: "Anita S.",
    role: "Health Insurance Consultant",
    quote:
      "I was afraid of social media. This course made it simple. Now clients trust me before the first call.",
    initials: "AS",
  },
  {
    name: "Suresh P.",
    role: "MDRT Qualifier",
    quote:
      "The online positioning strategy completely changed my business quality. Less effort, better clients.",
    initials: "SP",
  },
];

export default function Page() {
  return (
    <main className="bg-[#F7FAFC] text-[#1A365D]">

      {/* ================= HERO ================= */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium bg-orange-100 text-[#F6871F]">
              For Insurance & Financial Advisors
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Stop Knocking. <br />
              <span className="text-[#F6871F]">Start Scaling.</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Replace door-to-door selling with a predictable online system
              that brings serious, ready-to-buy clients.
            </p>

            <button className="mt-8 bg-[#F6871F] hover:bg-orange-600 transition text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-orange-200">
              Get Free Access Today
            </button>
          </div>

          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              className="rounded-3xl shadow-xl"
              alt="Advisor working online"
            />
          </div>
        </div>
      </section>

      {/* ================= PAIN ================= */}
      <section>
        <div className="container  mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-center">
            Is Your Gas Tank More Full Than Your Pipeline?
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {[
              ["Inconsistent", "Weather and “No Soliciting” signs control your income."],
              ["Exhausting", "8 hours of walking for just 2 real conversations."],
              ["Outdated", "Your best clients are already online searching."],
            ].map(([title, text], i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 border shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section className="bg-blue-50">
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-center">
            The FinHealth Digital Blueprint
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-12">
            {[
              ["Search & Target", "Reach people already searching for insurance online."],
              ["Automated Prospecting", "Your digital presence works 24/7 for you."],
              ["Virtual Handshake", "Close high-quality clients on Zoom."],
            ].map(([title, text], i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-10 shadow-md hover:-translate-y-1 transition"
              >
                <div className="mb-4 text-sm font-semibold text-[#F6871F]">
                  STEP {i + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPARISON ================= */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-center mb-14">
            The Alpha Move
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border rounded-2xl overflow-hidden">
              <thead className="bg-[#1A365D] text-white">
                <tr>
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4">Door-to-Door</th>
                  <th className="p-4">FinHealth Digital</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Reach", "20–30 houses/day", "1,000+ prospects/day"],
                  ["Cost", "High effort & expense", "Low cost, organic"],
                  ["Rejection", "Face-to-face", "Warm leads only"],
                  ["Scaling", "Limited", "Unlimited"],
                ].map((row, i) => (
                  <tr key={i} className="border-t">
                    {row.map((cell, j) => (
                      <td key={j} className="p-4 text-center text-gray-700">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section>
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-center mb-16">
            Advisors Who Made the Shift
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#F6871F] text-white flex items-center justify-center font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>

                <p className="text-gray-700 italic">“{t.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#1A365D] text-white">
        <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Your First Digital Lead Is Waiting
            </h2>
            <p className="mt-4 text-blue-100">
              Free coaching. No credit card. No pressure.
            </p>
          </div>

          <form className="bg-white rounded-3xl p-8 text-gray-800 space-y-4 shadow-xl">
            <input className="w-full border rounded-lg px-4 py-3" placeholder="Your Name" />
            <input className="w-full border rounded-lg px-4 py-3" placeholder="Email Address" />
            <select className="w-full border rounded-lg px-4 py-3">
              <option>Life</option>
              <option>Health</option>
              <option>Wealth</option>
            </select>

            <button className="w-full bg-[#F6871F] hover:bg-orange-600 transition text-white py-3 rounded-lg font-semibold">
              Start My Free Coaching
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
