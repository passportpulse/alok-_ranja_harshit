import {
  Target,
  Monitor,
  Handshake,
  TrendingUp,
  MessageSquare,
  Trophy,
  Rocket,
  Eye
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-[#f8fafc] py-20">
      <div className="container mx-auto px-6">

        {/* MAIN HERO WRAPPER */}
        <div className="relative rounded-[28px] bg-blue-900 text-white overflow-hidden">

          {/* subtle grid texture */}
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:30px_30px]" />

          <div className="relative grid lg:grid-cols-2 gap-20 p-14 items-center">

            {/* ================= LEFT CONTENT ================= */}
            <div className="space-y-8 max-w-xl">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                Now Enrolling New Batch
              </div>

              {/* Heading */}
              <h1 className=" md:text-4xl text-3xl xl:text-6xl font-semibold leading-tight">
                Financial Advisor & Insurance Agent
                <span className="block mt-2 font-bold">
                  Coaching in Jharkhand
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg text-white/80 leading-relaxed">
                Learn how to get
                <span className="font-semibold text-white">
                  {" "}clients online ethically
                </span>
                , consistently & without cold calling.
              </p>

              {/* Pills */}
              <div className="flex flex-wrap gap-3">
                <Pill icon={Target} text="Quality Clients" />
                <Pill icon={Monitor} text="Digital Systems" />
                <Pill icon={Handshake} text="Ethical Approach" />
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/apply"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-300 px-8 py-4 text-base font-semibold text-black hover:bg-emerald-300 transition"
                >
                  <Rocket className="w-5 h-5" />
                  Join the Program
                </a>

                <a
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-base font-semibold text-white/90 hover:bg-white/10 transition"
                >
                  <Eye className="w-5 h-5" />
                  Free Preview
                </a>
              </div>
            </div>

            {/* ================= RIGHT BENTO ================= */}
            <div className="grid grid-cols-2 gap-4">

              {/* IMAGE */}
              <div className="col-span-2 rounded-2xl overflow-hidden bg-white">
                <img
                  src="/hero-insurance-agent.png"
                  alt="Insurance Agent Growth"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* STATS */}
              <Stat
                icon={TrendingUp}
                title="300% Growth"
                desc="avg client results"
              />

              <Stat
                icon={MessageSquare}
                title="50+ Leads"
                desc="every month"
              />

              {/* TRUST TILE */}
              <div className="col-span-2 rounded-2xl bg-white p-6 text-gray-900">
                <div className="flex items-center gap-4">
                  <Trophy className="w-7 h-7 text-blue-300" />
                  <div>
                    <p className="font-semibold">Proven Coaching System</p>
                    <p className="text-sm text-gray-600">
                      Designed for insurance professionals
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function Pill({ icon: Icon, text }: any) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
      <Icon className="w-4 h-4 text-blue-300" />
      <span className="text-white/90">{text}</span>
    </div>
  );
}

function Stat({ icon: Icon, title, desc }: any) {
  return (
    <div className="rounded-2xl bg-white p-6 text-gray-900">
      <Icon className="w-6 h-6 mb-2 text-blue-300" />
      <p className="text-xl font-semibold">{title}</p>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}
