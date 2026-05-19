import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { num: "15+", label: "Years of Experience" },
  { num: "500+", label: "Businesses Served" },
  { num: "8", label: "Industry Verticals" },
  { num: "2", label: "Flagship Platforms" },
];

const reasons = [
  {
    title: "Industry Expertise",
    desc: "Certified accountants, project managers, and software engineers who understand your industry's unique requirements deeply.",
  },
  {
    title: "Cloud-Native Solutions",
    desc: "Access your business data securely from anywhere, on any device — no heavy infrastructure investment required.",
  },
  {
    title: "Tailored to Your Needs",
    desc: "Software carefully designed to meet diverse industry standards and specifications for your specific business.",
  },
  {
    title: "Continuous Support",
    desc: "Dedicated support team available for implementation, training, and ongoing maintenance throughout your journey.",
  },
  {
    title: "Proven Track Record",
    desc: "Over 15 years delivering reliable solutions to businesses across multiple sectors throughout Nigeria and beyond.",
  },
  {
    title: "Scalable Architecture",
    desc: "Grow confidently — our solutions scale from single-branch operations to full multi-location enterprises.",
  },
];

export default function About() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#about-header",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 },
      );
      gsap.fromTo(
        "#who-copy",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: "#who-copy", start: "top 85%" },
        },
      );
      gsap.fromTo(
        "#who-stats > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: "#who-stats", start: "top 85%" },
        },
      );
      gsap.fromTo(
        "#mv-cards > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: "#mv-cards", start: "top 85%" },
        },
      );
      gsap.fromTo(
        "#why-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: "#why-header", start: "top 88%" },
        },
      );
      gsap.fromTo(
        "#why-cards > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: "#why-cards", start: "top 85%" },
        },
      );
      gsap.fromTo(
        "#about-cta > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: "#about-cta", start: "top 88%" },
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
          className="absolute inset-0 h-full w-full object-cover object-center opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0d1126]/95 via-[#0d1126]/75 to-[#0d1126]/50" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_60%,rgba(247,42,107,0.14),transparent_70%)]" />
        <div
          id="about-header"
          className="relative mx-auto w-full max-w-7xl px-8 lg:px-16"
        >
          <span className="mb-4 inline-block rounded-full bg-[#fff0f4]/12 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#ff8fab]">
            About Us
          </span>
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[56px]">
            15+ Years Building
            <br />
            <span className="bg-linear-to-r from-[#ff6090] via-[#f72a6b] to-[#d4186d] bg-clip-text text-transparent">
              Africa's Business Future
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/55">
            Elim Business Ventures Limited — a Lagos-based software company
            delivering cloud ERP and accounting solutions to 500+ businesses
            across Nigeria and West Africa.
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE — light ───────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-16 px-8 md:grid-cols-[1fr_440px] md:items-center lg:px-16">
          <div id="who-copy">
            <span className="mb-4 inline-block rounded-full bg-[#fff0f4] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f72a6b]">
              Who We Are
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0f172a] md:text-4xl">
              Trusted by businesses across Nigeria for over 15 years.
            </h2>
            <p className="mt-5 leading-relaxed text-[#475569]">
              Elim ERP Solutions are products of{" "}
              <strong className="font-semibold text-[#0f172a]">
                Elim Business Ventures Limited
              </strong>
              , based in Lagos, Nigeria. We possess over 15 years' experience
              developing custom software solutions to small and medium
              businesses.
            </p>
            <p className="mt-4 leading-relaxed text-[#475569]">
              Our team consists of professional accountants, certified personnel
              managers, project managers, software engineers, and management
              consultants experienced in business automation. We deliver
              scalable solutions built to suit best practices in Enterprise
              Business Automation worldwide.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#f72a6b] transition-colors hover:text-[#c01550]"
            >
              Get in touch with us
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          <div id="who-stats" className="grid grid-cols-2 gap-4">
            {stats.map(({ num, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-gray-100 bg-[#f8f9fc] p-6 text-center shadow-sm"
              >
                <p className="font-display text-3xl font-extrabold text-[#f72a6b]">
                  {num}
                </p>
                <p className="mt-1 text-sm font-medium text-[#475569]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION — dark ──────────────────────────────────────── */}
      <section className="bg-[#0d0b1e] py-20">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full bg-white/8 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9d8bf0]">
              Our Foundation
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
              Mission &amp; Vision
            </h2>
          </div>
          <div id="mv-cards" className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/8 bg-white/4 p-8 transition-all duration-300 hover:border-[#f72a6b]/30 hover:bg-white/6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f72a6b]/20">
                <svg
                  className="h-5 w-5 text-[#f72a6b]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-white">
                Our Mission
              </h3>
              <p className="leading-relaxed text-white/60">
                To deliver innovative, reliable, and scalable cloud-based
                accounting and ERP solutions that empower small and medium
                businesses to achieve operational excellence and sustainable
                growth.
              </p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/4 p-8 transition-all duration-300 hover:border-[#4a34a0]/50 hover:bg-white/6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#4a34a0]/30">
                <svg
                  className="h-5 w-5 text-[#9d8bf0]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-white">
                Our Vision
              </h3>
              <p className="leading-relaxed text-white/60">
                To be a leading provider of cloud business solutions in Africa,
                recognized for transforming how businesses manage their
                operations through technology and professional service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ELIM — light gray ─────────────────────────────────── */}
      <section className="border-b border-gray-200 bg-[#f4f7fb] py-20">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <div id="why-header" className="mb-12">
            <span className="mb-3 inline-block rounded-full bg-[#fff0f4] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f72a6b]">
              Why Choose Elim?
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0f172a] md:text-4xl">
              Built for businesses that want to grow.
            </h2>
          </div>
          <div
            id="why-cards"
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {reasons.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#f72a6b]/25 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff0f4]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f72a6b]" />
                </div>
                <h3 className="mb-2 font-display text-base font-bold text-[#0f172a]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#475569]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1a3a5f] py-24">
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/images/office-building.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#0d1f35]/70" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(247,42,107,0.12),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[24px_24px]" />
        <div
          id="about-cta"
          className="relative mx-auto w-full max-w-3xl px-8 text-center"
        >
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Ready to work with us?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-light text-white/65">
            Let us show you how Elim ERP Solutions can transform your business
            operations.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#f72a6b] px-10 py-4 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-[#e01e5a] hover:shadow-[0_0_30px_-5px_rgba(247,42,107,0.5)]"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/8 px-10 py-4 text-sm font-bold text-white transition hover:bg-white/14"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
