import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Just Sell — No Support",
    badge: "Entry Level",
    badgeColor: "bg-blue-50 text-blue-600",
    desc: "Focus purely on selling while we handle the rest. You earn attractive commissions on every sale — no technical expertise or implementation effort required from your side.",
    points: [
      "Earn commission on every software sale",
      "We handle all implementation and onboarding",
      "We provide first-rate ongoing client support",
      "Zero service overhead on your part",
      "Ideal for hardware vendors and system integrators",
    ],
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Sell and Support",
    badge: "Full Service",
    badgeColor: "bg-[#fff0f4] text-[#f72a6b]",
    desc: "If you have trained staff capable of offering implementation and support, this tier lets you maximise revenue — earning commissions from us plus service fees directly from clients.",
    points: [
      "Commission on every software sale from us",
      "Charge clients separately for your services",
      "Full implementation and support capability",
      "Deeper client relationships and retention",
      "Higher total earnings per customer",
    ],
  },
  {
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "Training & Marketing",
    badge: "Growth Partner",
    badgeColor: "bg-emerald-50 text-emerald-600",
    desc: "We provide full training on our software suite and supply all the marketing materials you need to hit the ground running. Compensation and commission are structured for mutual long-term benefit.",
    points: [
      "Comprehensive software training program",
      "Professionally designed marketing collateral",
      "Mutually agreed compensation structure",
      "Access to our entire product portfolio",
      "Ongoing support as you grow your territory",
    ],
  },
];

const benefits = [
  {
    title: "Superior Software",
    desc: "Our products are among the richest in features in the Nigerian HR & payroll industry — powerful, easy to implement, and highly robust.",
  },
  {
    title: "High Commissions",
    desc: "Competitive commission structure designed to maximise your return on every deal you close.",
  },
  {
    title: "Nationwide Network",
    desc: "Join partners already spread across Nigeria and its environs, benefiting from a growing brand reputation.",
  },
  {
    title: "Happy Clients",
    desc: "Best-in-class support ensures your clients are satisfied, protecting your reputation and driving referrals.",
  },
  {
    title: "Full Marketing Kit",
    desc: "Brochures, presentations, demo access, and digital assets provided at no cost to qualified partners.",
  },
  {
    title: "Ongoing Training",
    desc: "Regular product update sessions and deep-dive training to keep you ahead of the competition.",
  },
];

export default function Partnership() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#partner-header",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 },
      );
      gsap.fromTo(
        "#tiers-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: "#tiers-header", start: "top 88%" },
        },
      );
      gsap.fromTo(
        "#tiers-grid > *",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: "#tiers-grid", start: "top 85%" },
        },
      );
      gsap.fromTo(
        "#benefits-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: "#benefits-header", start: "top 88%" },
        },
      );
      gsap.fromTo(
        "#benefits-grid > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: "#benefits-grid", start: "top 85%" },
        },
      );
      gsap.fromTo(
        "#partner-cta > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: "#partner-cta", start: "top 88%" },
        },
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* ── PAGE HEADER ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0d1126] pb-20 pt-32">
        <img
          src="/images/team-collab.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0d1126]/96 via-[#0d1126]/78 to-[#0d1126]/55" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_60%,rgba(247,42,107,0.14),transparent_70%)]" />
        <div
          id="partner-header"
          className="relative mx-auto w-full max-w-7xl px-8 lg:px-16"
        >
          <span className="mb-4 inline-block rounded-full bg-[#fff0f4]/12 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#ff8fab]">
            Partnership
          </span>
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[56px]">
            Partner with{" "}
            <span className="bg-linear-to-r from-[#ff6090] via-[#f72a6b] to-[#d4186d] bg-clip-text text-transparent">
              Elim
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/55">
            If you are a vendor of hardware or software, a system integrator, or
            a professional with business clients — we invite you to sell Elim HR
            &amp; Payroll Software and earn compelling returns.
          </p>
        </div>
      </section>

      {/* ── INTRO ───────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-[#fff0f4] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f72a6b]">
              Why Partner With Us
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0f172a] md:text-4xl">
              Unique opportunities to make your clients happy and maximise your
              profits
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#475569]">
              All our software are superior compared to any other available
              today in the Human Resources industry. They are rich in features,
              powerful, easy to implement, and very robust. As a vendor, you can
              take advantage of any of our partnership programmes below.
            </p>
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP TIERS ───────────────────────────────────────────── */}
      <section className="bg-[#f8f9fc] py-20">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <div id="tiers-header" className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#fff0f4] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f72a6b]">
              Partnership Programmes
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0f172a] md:text-4xl">
              Choose Your Partnership Model
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#475569]">
              Three flexible models designed to fit your capabilities and growth
              ambitions.
            </p>
          </div>

          <div id="tiers-grid" className="grid gap-8 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.title}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#fff0f4] text-[#f72a6b]">
                    {tier.icon}
                  </div>
                  <span
                    className={`mt-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${tier.badgeColor}`}
                  >
                    {tier.badge}
                  </span>
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-[#0f172a]">
                  {tier.title}
                </h3>
                <p className="mb-6 grow leading-relaxed text-[#475569] text-sm">
                  {tier.desc}
                </p>
                <ul className="space-y-2.5">
                  {tier.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2.5 text-sm text-[#475569]"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#f72a6b]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <div id="benefits-header" className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#fff0f4] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f72a6b]">
              Partner Benefits
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0f172a] md:text-4xl">
              What You Gain as an Elim Partner
            </h2>
          </div>

          <div
            id="benefits-grid"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-gray-100 bg-[#f8f9fc] p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-3 h-1 w-8 rounded-full bg-[#f72a6b]" />
                <h3 className="mb-2 font-display text-base font-bold text-[#0f172a]">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#475569]">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0d1126] py-24">
        <img
          src="/images/office-building.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#0d1126]/95 to-[#0d1126]/80" />
        <div
          id="partner-cta"
          className="relative mx-auto w-full max-w-3xl px-8 text-center lg:px-16"
        >
          <span className="mb-4 inline-block rounded-full bg-[#fff0f4]/12 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#ff8fab]">
            Get Started
          </span>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Ready to Start Earning?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/60">
            Our partnership has offered tremendous benefits to partners spread
            across Nigeria and its environs. Take a step and enjoy yours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#f72a6b] px-8 py-3.5 text-sm font-semibold text-white no-underline shadow-lg transition-all hover:bg-[#d4186d] hover:shadow-[#f72a6b]/30"
            >
              Contact Us Today
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <a
              href="tel:+2348119623509"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-8 py-3.5 text-sm font-semibold text-white no-underline backdrop-blur-sm transition-all hover:bg-white/15"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
                />
              </svg>
              +234-811-962-3509
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
