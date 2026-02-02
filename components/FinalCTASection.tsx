export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-blue-600 py-28">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_45%)]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Stop Chasing Clients. <br />
          <span className="text-orange-300">
            Start Attracting Them.
          </span>
        </h2>

        <p className="text-lg md:text-xl text-blue-100 mb-12">
          Build a predictable, respectful, and stress-free insurance business
          using proven online systems.
        </p>

        {/* CTA BUTTON */}
        <a
          href="/apply"
          className="inline-flex items-center gap-3 rounded-2xl bg-orange-500 px-10 py-5 text-xl font-bold text-white shadow-2xl hover:bg-orange-600 transition"
        >
          👉 Join the Agent Growth System Today
        </a>

        {/* TRUST LINE */}
        <p className="mt-8 text-sm text-blue-100 italic">
          No cold calling • No door knocking • No buying leads
        </p>
      </div>
    </section>
  );
}
