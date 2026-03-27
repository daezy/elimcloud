export default function About() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="bg-[#0e0818] pb-16 pt-32">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-[#f72a6b]">
            About Us
          </span>
          <h1 className="font-display text-4xl font-extrabold md:text-5xl">
            About Elim Business Ventures
          </h1>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="bg-[#0b0510] py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-8 md:grid-cols-2 md:items-center lg:px-16">
          <div>
            <h2 className="mb-6 font-display text-3xl font-bold">Who We Are</h2>
            <p className="mb-4 leading-relaxed text-white/60">
              Elim ERP Solutions are products of Elim Business Ventures Limited,
              a company based in Lagos, Nigeria. We possess over 15&nbsp;years'
              experience developing custom software solutions to small and
              medium businesses.
            </p>
            <p className="mb-4 leading-relaxed text-white/60">
              Our team consists of professional accountants, certified personnel
              managers, project managers, software engineers, and management
              consultants experienced in business automation. We deliver
              scalable solutions built to suit best practices in Enterprise
              Business Automation.
            </p>
            <p className="leading-relaxed text-white/60">
              Founded on the belief that quality software products enhance any
              business regardless of its size and nature, we serve businesses
              across multiple industries throughout Nigeria and West Africa.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { num: "15+", label: "Years Experience" },
              { num: "200+", label: "Clients Served" },
              { num: "8+", label: "Industry Solutions" },
              { num: "24/7", label: "Support Available" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
              >
                <div className="mb-1 font-display text-4xl font-extrabold text-[#f72a6b]">
                  {s.num}
                </div>
                <div className="text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="bg-[#0e0818] py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-8 md:grid-cols-2 lg:px-16">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-4 font-display text-2xl font-bold">
              Our Mission
            </h3>
            <p className="leading-relaxed text-white/60">
              To deliver innovative, reliable, and scalable cloud-based
              accounting and ERP solutions that empower small and medium
              businesses to achieve operational excellence and sustainable
              growth.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-4 font-display text-2xl font-bold">Our Vision</h3>
            <p className="leading-relaxed text-white/60">
              To be a leading provider of cloud business solutions in Africa,
              recognized for transforming how businesses manage their operations
              through technology and professional service delivery.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-[#0b0510] py-20">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <h2 className="mb-12 text-center font-display text-3xl font-bold md:text-4xl">
            Why Choose Elim?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Industry Expertise",
                desc: "Our team of certified accountants and business consultants understand your industry's unique requirements.",
              },
              {
                title: "Cloud-Native Solutions",
                desc: "Access your business data securely from anywhere, anytime. No heavy infrastructure investment required.",
              },
              {
                title: "Tailored To Your Needs",
                desc: "Software carefully designed to meet diverse industry standards and specifications for your specific business.",
              },
              {
                title: "Continuous Support",
                desc: "Dedicated support team available to assist you with implementation, training, and ongoing maintenance.",
              },
              {
                title: "Proven Track Record",
                desc: "Over 15 years of delivering reliable solutions to businesses across multiple sectors in Nigeria and beyond.",
              },
              {
                title: "Scalable Architecture",
                desc: "Grow confidently — our solutions scale from single-branch operations to multi-location enterprises.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-[#f72a6b]/40"
              >
                <h3 className="mb-3 text-lg font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
