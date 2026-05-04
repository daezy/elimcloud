import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { accountingServices, erpServices } from "../data/serviceData";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#services-header",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 },
      );
      gsap.fromTo(
        "#svc-ecpas-cards > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: "#svc-ecpas-cards", start: "top 85%" },
        },
      );
      gsap.fromTo(
        "#svc-ecpbes-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: "#svc-ecpbes-header", start: "top 85%" },
        },
      );
      gsap.fromTo(
        "#svc-ecpbes-cards > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: "#svc-ecpbes-cards", start: "top 85%" },
        },
      );
      gsap.fromTo(
        "#services-cta > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: "#services-cta", start: "top 88%" },
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
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-28"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0d1126]/95 via-[#0d1126]/78 to-[#0d1126]/55" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_0%_60%,rgba(247,42,107,0.14),transparent_70%)]" />
        <div
          id="services-header"
          className="relative mx-auto w-full max-w-7xl px-8 lg:px-16"
        >
          <span className="mb-4 inline-block rounded-full bg-[#fff0f4]/12 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#ff8fab]">
            Our Solutions
          </span>
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[56px]">
            Accounting &amp; ERP
            <br />
            <span className="bg-linear-to-r from-[#ff6090] via-[#f72a6b] to-[#d4186d] bg-clip-text text-transparent">
              Built for Your Industry
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/55">
            Software carefully designed to meet diverse industry standards and
            specifications. Take advantage of our solutions for all your
            business needs.
          </p>
        </div>
      </section>

      {/* ── ECPAS — light gray ────────────────────────────────────────────── */}
      <section className="border-b border-gray-200 bg-[#f4f7fb] py-16">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <div className="mb-10 flex flex-col gap-1 border-l-4 border-[#f72a6b] pl-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f72a6b]">
              Cloud Accounting Solutions — ECPAS
            </span>
            <h2 className="font-display text-xl font-bold text-[#0f172a] md:text-2xl">
              Industry-Specific Accounting Software
            </h2>
            <p className="mt-1 max-w-xl text-sm text-[#475569]">
              Purpose-built for eight major verticals — the financial platform
              that truly understands your industry's workflow.
            </p>
          </div>
          <div
            id="svc-ecpas-cards"
            className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
          >
            {accountingServices.map((item) => (
              <article
                key={item.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#f72a6b]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.09)]"
              >
                <div className="h-1 w-full bg-linear-to-r from-[#f72a6b] to-[#ff8fab]" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-base font-bold leading-snug text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#475569]">
                    {item.intro.slice(0, 120)}…
                  </p>
                  <Link
                    to={`/services/accounting/${item.slug}`}
                    className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-[#f72a6b] transition-colors hover:text-[#c01550]"
                  >
                    Learn more
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECPBES — dark ────────────────────────────────────────────────── */}
      <section className="bg-[#0d0b1e] py-20">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <div
            id="svc-ecpbes-header"
            className="mb-10 flex flex-col gap-1 border-l-4 border-[#9d8bf0] pl-5"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9d8bf0]">
              Enterprise ERP Solutions — ECPBES
            </span>
            <h2 className="font-display text-xl font-bold text-white md:text-2xl">
              Full-Scale ERP for Every Industry
            </h2>
            <p className="mt-1 max-w-xl text-sm text-white/55">
              Full-scale ERP spanning real estate, professional services,
              construction, distribution, and production — built for businesses
              that need more than accounting.
            </p>
          </div>

          <div
            id="svc-ecpbes-cards"
            className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
          >
            {erpServices.map((item) => (
              <article
                key={item.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/4 transition-all duration-300 hover:border-[#4a34a0]/40 hover:bg-white/7"
              >
                <div className="h-1 w-full bg-linear-to-r from-[#4a34a0] to-[#9d8bf0]" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-base font-bold leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                    {item.intro.slice(0, 120)}…
                  </p>
                  <Link
                    to={`/services/erp/${item.slug}`}
                    className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-[#9d8bf0] transition-colors hover:text-[#c2b3ff]"
                  >
                    Learn more
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#1a3a5f] py-24">
        <div className="pointer-events-none absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=60"
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
          id="services-cta"
          className="relative mx-auto w-full max-w-3xl px-8 text-center"
        >
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Need a custom solution?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-light text-white/65">
            Let us understand your unique business requirements and build the
            perfect solution for you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#f72a6b] px-10 py-4 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-[#e01e5a] hover:shadow-[0_0_30px_-5px_rgba(247,42,107,0.5)]"
            >
              Get in Touch
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/8 px-10 py-4 text-sm font-bold text-white transition hover:bg-white/14"
            >
              View All Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
