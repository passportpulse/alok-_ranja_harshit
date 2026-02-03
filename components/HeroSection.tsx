import {
  Target,
  Monitor,
  Handshake,
  Rocket,
  Eye
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[620px] w-full overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/hero-insurance-agent.png"
        alt="Insurance Advisor"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* SOFT WHITE GRADIENT OVERLAY (like Fincart) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/10" />

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto h-full px-6 flex items-center">
        <div className="max-w-xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
            Now Enrolling New Batch
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-3xl md:text-4xl xl:text-5xl font-semibold leading-tight text-gray-900">
            Financial Advisor & Insurance Agent{" "}
            <span className="font-bold text-blue-700">
              Coaching in Jharkhand
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-5 text-lg text-gray-700 leading-relaxed">
            Learn how to get{" "}
            <span className="font-semibold text-gray-900">
              clients online ethically
            </span>
            , consistently & without cold calling.
          </p>

          {/* Pills */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Pill icon={Target} text="Quality Clients" />
            <Pill icon={Monitor} text="Digital Systems" />
            <Pill icon={Handshake} text="Ethical Approach" />
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/apply"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white hover:bg-blue-700 transition"
            >
              <Rocket className="w-5 h-5" />
              Join the Program
            </a>

            <a
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-8 py-4 text-base font-semibold text-gray-800 hover:bg-gray-100 transition"
            >
              <Eye className="w-5 h-5" />
              Free Preview
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENT ================= */

function Pill({ icon: Icon, text }: any) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-gray-800 shadow-sm">
      <Icon className="w-4 h-4 text-blue-600" />
      <span>{text}</span>
    </div>
  );
}
