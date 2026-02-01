export default function TestimonialsSection() {
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

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-28">
       <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Success Stories & Testimonials
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Real results from real insurance professionals
          </p>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
            >
      

              {/* QUOTE */}
              <blockquote className="mt-6 text-gray-700 italic leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* USER */}
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTNOTE */}
        <div className="text-center mt-16">
          <p className="text-sm text-gray-500 italic">
            (Real student stories will be added as the community grows)
          </p>
        </div>

      </div>
    </section>
  );
}
