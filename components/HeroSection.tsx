export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-28">
      
      {/* Background decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_40%)]" />

      <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <h1 className="text-2xl md:text-5xl xl:text-6xl font-medium text-gray-700 leading-tight mb-6">
            Financial Advisor & Insurance Agent Coaching in Jharkhand <br className="hidden md:inline"/>
            {/* <span className="text-blue-600  ">
              Consistently. Predictably. Profitably.
            </span> */}
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10">
           Learn How to Get Clients Online Ethically, 
            <span className="font-medium text-gray-700">
              {" "}Consistently & Without Cold Calling
            </span>
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <a
              href="/apply"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-600 transition"
            >
              👉 Join the Program
            </a>

            <a
              href="/courses"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              Get Free Preview
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Designed for serious insurance agents seeking stable income & long-term success.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative hidden lg:block">
          <div className="rounded-3xl  p-6">
            <img
              src="/hero-insurance-agent.png"
              alt="Insurance Agent Growth"
              className="rounded-2xl"
            />
          </div>

          {/* Floating stat cards */}
          {/* <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg px-4 py-3 text-sm font-medium">
            📈 Consistent Growth
          </div>

          <div className="absolute -bottom-6 right-0 bg-white rounded-xl shadow-lg px-4 py-3 text-sm font-medium">
            💬 Qualified Client Inquiries
          </div> */}
        </div>
      </div>
    </section>
  );
}
