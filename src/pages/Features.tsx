import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Multiple Branch Management",
    desc: "Support multiple location setups — configure branches, production lines, or sales offices. Monitor operations, assign personnel, and track performance across every branch from one dashboard.",
  },
  {
    title: "Store & Inventory Management",
    desc: "Track items as they come into and leave your storefronts and storage facilities. Get real-time stock levels, set reorder points, manage batch/serial numbers, and perform stock-takes with ease.",
  },
  {
    title: "Logistics & Suppliers Management",
    desc: "Powerful analytics tools for managing supplier relationships, procurement workflows, delivery tracking, and purchase order management to keep your supply chain running smoothly.",
  },
  {
    title: "Payroll & HRMS System",
    desc: "Handle varied types of payroll and business-specific rules ensuring all tax and statutory deductions are implemented seamlessly. Manage employee records, leave, and attendance in one place.",
  },
  {
    title: "Book-keeping & Accounting",
    desc: "Manage all aspects of your finances — general ledger, accounts payable/receivable, bank reconciliation, budgeting, and comprehensive financial reporting from a single platform.",
  },
  {
    title: "Contracts & Projects Management",
    desc: "Create and manage contracts, project timelines, milestones, and deliverables. Track project costs, manage resources, and generate progress billing accurately.",
  },
  {
    title: "Customer & Sales Management",
    desc: "Manage your entire sales pipeline — from leads and quotations to invoicing and receipts. Track customer interactions, credit limits, and sales performance analytics.",
  },
  {
    title: "Maintenance Management",
    desc: "Schedule and track preventive and corrective maintenance for your assets and equipment. Reduce downtime and extend asset lifecycle with systematic maintenance planning.",
  },
  {
    title: "Fixed Assets Management",
    desc: "Track all your capital assets from acquisition through disposal. Calculate depreciation automatically, manage asset transfers, and maintain a complete audit trail.",
  },
  {
    title: "Risk & Control Management",
    desc: "Implement internal controls, manage audit processes, and maintain compliance. Identify, assess, and mitigate risks with systematic monitoring and reporting tools.",
  },
];

export default function Features() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#features-header",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 },
      );
      gsap.fromTo(
        "#features-intro",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: "#features-intro", start: "top 88%" },
        },
      );
      gsap.fromTo(
        "#features-grid > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: "#features-grid", start: "top 85%" },
        },
      );
      gsap.fromTo(
        "#features-cta > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: "#features-cta", start: "top 88%" },
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
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0d1126]/96 via-[#0d1126]/78 to-[#0d1126]/55" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_0%_60%,rgba(74,52,160,0.2),transparent_70%)]" />
        <div
          id="features-header"
          className="relative mx-auto w-full max-w-7xl px-8 lg:px-16"
        >
          <span className="mb-4 inline-block rounded-full bg-[#fff0f4]/12 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#ff8fab]">
            Platform Capabilities
          </span>
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[56px]">
            Powerful Modules,
            <br />
            <span className="bg-linear-to-r from-[#9d8bf0] via-[#7c6bd4] to-[#4a34a0] bg-clip-text text-transparent">
              One Platform.
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/55">
            Our ERP and accounting platforms come packed with integrated modules
            designed to handle every aspect of your business operations from a
            single cloud dashboard.
          </p>
        </div>
      </section>

      {/* ── FEATURES GRID — light gray ────────────────────────────────────────── */}
      <section className="border-b border-gray-200 bg-[#f4f7fb] py-20">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <div id="features-intro" className="mb-12">
            <span className="mb-3 inline-block rounded-full bg-[#fff0f4] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f72a6b]">
              Features &amp; Modules
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0f172a] md:text-4xl">
              Everything you need to run your business.
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[#475569]">
              10+ fully integrated modules covering accounting, ERP, HR,
              logistics, and more — all connected in one cloud platform built
              for Nigerian businesses.
            </p>
          </div>
          <div
            id="features-grid"
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#f72a6b]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0f4] font-display text-sm font-extrabold text-[#f72a6b] transition-colors group-hover:bg-[#f72a6b] group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-2 font-display text-base font-bold text-[#0f172a]">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#475569]">
                  {f.desc}
                </p>
              </div>
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
          id="features-cta"
          className="relative mx-auto w-full max-w-3xl px-8 text-center"
        >
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            See it in action.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-light text-white/65">
            Request a demo and experience how Elim solutions can streamline your
            business operations end-to-end.
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
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
