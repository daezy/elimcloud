import { useEffect, useRef } from "react";
import { Link, useParams, Navigate } from "react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  getService,
  accountingServices,
  erpServices,
} from "../data/serviceData";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDetail() {
  const { type, slug } = useParams<{ type: string; slug: string }>();
  const pageRef = useRef<HTMLDivElement>(null);

  const serviceType = type === "accounting" || type === "erp" ? type : null;
  const service = serviceType && slug ? getService(serviceType, slug) : null;

  useEffect(() => {
    if (!service) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#sd-header",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 },
      );
      gsap.fromTo(
        "#sd-overview > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: "#sd-overview", start: "top 88%" },
        },
      );
      gsap.fromTo(
        "#sd-modules > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: "#sd-modules", start: "top 85%" },
        },
      );
      gsap.fromTo(
        "#sd-related > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: { trigger: "#sd-related", start: "top 85%" },
        },
      );
      gsap.fromTo(
        "#sd-cta > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: "#sd-cta", start: "top 88%" },
        },
      );
    }, pageRef);
    return () => ctx.revert();
  }, [service]);

  if (!service) return <Navigate to="/services" replace />;

  const isPink = service.accentColor === "pink";
  const relatedServices = (
    service.type === "accounting" ? accountingServices : erpServices
  ).filter((s) => s.slug !== service.slug);

  return (
    <div ref={pageRef}>
      {/* ── PAGE HEADER ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0d1126] pb-20 pt-32">
        <img
          src={service.photo}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0d1126]/96 via-[#0d1126]/78 to-[#0d1126]/50" />
        <div
          className={`pointer-events-none absolute inset-0 ${
            isPink
              ? "bg-[radial-gradient(ellipse_55%_50%_at_0%_60%,rgba(247,42,107,0.14),transparent_70%)]"
              : "bg-[radial-gradient(ellipse_55%_50%_at_0%_60%,rgba(74,52,160,0.18),transparent_70%)]"
          }`}
        />
        <div
          id="sd-header"
          className="relative mx-auto w-full max-w-7xl px-8 lg:px-16"
        >
          {/* Breadcrumb */}
          <nav className="mb-5 flex items-center gap-2 text-xs text-white/40">
            <Link to="/services" className="transition hover:text-white/70">
              Services
            </Link>
            <span>/</span>
            <span className={isPink ? "text-[#ff8fab]" : "text-[#b09fff]"}>
              {service.label}
            </span>
          </nav>
          <span
            className={`mb-4 inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${
              isPink
                ? "bg-[#fff0f4]/12 text-[#ff8fab]"
                : "bg-white/8 text-[#b09fff]"
            }`}
          >
            {service.label} — Industry Solutions
          </span>
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[52px]">
            {service.title}
          </h1>
          <p
            className={`mt-4 text-lg font-medium ${
              isPink ? "text-[#ff8fab]" : "text-[#b09fff]"
            }`}
          >
            {service.tagline}
          </p>
        </div>
      </section>

      {/* ── OVERVIEW ───────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div
          id="sd-overview"
          className="mx-auto grid w-full max-w-7xl items-start gap-16 px-8 lg:grid-cols-[1fr_360px] lg:px-16"
        >
          {/* Left — intro */}
          <div>
            <span
              className={`mb-3 inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${
                isPink
                  ? "bg-[#fff0f4] text-[#f72a6b]"
                  : "bg-[#f0eeff] text-[#4a34a0]"
              }`}
            >
              Overview
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#0f172a] md:text-3xl">
              What is {service.title}?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#475569]">
              {service.intro}
            </p>
            <Link
              to="/contact"
              className={`mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all hover:scale-105 ${
                isPink
                  ? "bg-[#f72a6b] hover:bg-[#e01e5a] hover:shadow-[0_0_24px_-4px_rgba(247,42,107,0.45)]"
                  : "bg-[#4a34a0] hover:bg-[#3d2a8a] hover:shadow-[0_0_24px_-4px_rgba(74,52,160,0.45)]"
              }`}
            >
              Request a Demo
            </Link>
          </div>

          {/* Right — key benefits */}
          <div
            className={`rounded-2xl border p-7 ${
              isPink
                ? "border-[#fce0e8] bg-[#fff8fa]"
                : "border-[#e0daf8] bg-[#f6f4ff]"
            }`}
          >
            <h3
              className={`mb-5 font-display text-sm font-extrabold uppercase tracking-[0.14em] ${
                isPink ? "text-[#f72a6b]" : "text-[#4a34a0]"
              }`}
            >
              Key Benefits
            </h3>
            <ul className="space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      isPink ? "bg-[#f72a6b]" : "bg-[#4a34a0]"
                    }`}
                  >
                    <svg
                      className="h-3 w-3 text-white"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-[#334155]">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── MODULES GRID ───────────────────────────────────────────────────── */}
      <section className="border-b border-gray-200 bg-[#f4f7fb] py-20">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <div className="mb-10">
            <span
              className={`mb-3 inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${
                isPink
                  ? "bg-[#fff0f4] text-[#f72a6b]"
                  : "bg-[#f0eeff] text-[#4a34a0]"
              }`}
            >
              Platform Modules
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#0f172a] md:text-3xl">
              What's included in this solution
            </h2>
          </div>
          <div
            id="sd-modules"
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {service.modules.map((mod, i) => (
              <div
                key={mod.title}
                className={`group rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] ${
                  isPink
                    ? "border-gray-100 hover:border-[#f72a6b]/20"
                    : "border-gray-100 hover:border-[#4a34a0]/20"
                }`}
              >
                <div
                  className={`mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl font-display text-xs font-extrabold transition-colors ${
                    isPink
                      ? "bg-[#fff0f4] text-[#f72a6b] group-hover:bg-[#f72a6b] group-hover:text-white"
                      : "bg-[#f0eeff] text-[#4a34a0] group-hover:bg-[#4a34a0] group-hover:text-white"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-2 font-display text-base font-bold text-[#0f172a]">
                  {mod.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#475569]">
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ───────────────────────────────────────────────── */}
      <section className="bg-[#0d0b1e] py-20">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <div className="mb-8">
            <span
              className={`mb-3 inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${
                isPink
                  ? "bg-white/8 text-[#ff8fab]"
                  : "bg-white/8 text-[#b09fff]"
              }`}
            >
              {service.type === "accounting"
                ? "More ECPAS Solutions"
                : "More ECPBES Solutions"}
            </span>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              Other industry solutions
            </h2>
          </div>
          <div
            id="sd-related"
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {relatedServices.slice(0, 4).map((s) => (
              <Link
                key={`${s.type}-${s.slug}`}
                to={`/services/${s.type}/${s.slug}`}
                className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 ${
                  isPink
                    ? "border-white/8 bg-white/4 hover:border-[#f72a6b]/30"
                    : "border-white/8 bg-white/4 hover:border-[#4a34a0]/40"
                }`}
              >
                <div
                  className={`h-1 w-full bg-linear-to-r ${
                    isPink
                      ? "from-[#f72a6b] to-[#ff8fab]"
                      : "from-[#4a34a0] to-[#9d8bf0]"
                  }`}
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-sm font-bold leading-snug text-white">
                    {s.title}
                  </h3>
                  <span
                    className={`mt-3 inline-flex items-center gap-1 text-xs font-bold ${
                      isPink ? "text-[#ff8fab]" : "text-[#b09fff]"
                    }`}
                  >
                    Learn more
                    <svg
                      className="h-3 w-3"
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
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-white/50 transition hover:text-white/80"
            >
              ← Back to all services
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
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
          id="sd-cta"
          className="relative mx-auto w-full max-w-3xl px-8 text-center"
        >
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-light text-white/65">
            Request a personalised demo of {service.title} and see exactly how
            it fits your business.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#f72a6b] px-10 py-4 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-[#e01e5a] hover:shadow-[0_0_30px_-5px_rgba(247,42,107,0.5)]"
            >
              Request a Demo
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/8 px-10 py-4 text-sm font-bold text-white transition hover:bg-white/14"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
