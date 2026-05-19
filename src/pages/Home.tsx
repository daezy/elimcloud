import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router";

gsap.registerPlugin(ScrollTrigger);

/* ─── Random badge positions (computed once at module load) ─────────────── */
const rnd = (min: number, max: number) =>
  `${(min + Math.random() * (max - min)).toFixed(1)}%`;

const badgePositions: React.CSSProperties[] = [
  { top: rnd(6, 20), right: "-22px" }, // upper right
  { bottom: rnd(16, 32), right: "-18px" }, // lower right
  { top: rnd(10, 24), left: "-26px" }, // upper left
  { top: rnd(42, 56), left: "-22px" }, // mid left
  { bottom: rnd(6, 16), left: rnd(20, 50) }, // lower centre
];

/* ─── Data ──────────────────────────────────────────────────────────────── */

const accountingSolutions = [
  {
    title: "Cloud Accounting for Retail Business Services",
    desc: "Elim Cloud Accounting For Retail Services helps your business run efficiently, achieve maximum growth, and meet your company goals.",
    href: "/services",
  },
  {
    title: "Cloud Accounting for Manufacturing Companies",
    desc: "Designed to manage your entire manufacturing operation from purchasing, inventory, sales and financials.",
    href: "/services",
  },
  {
    title: "Cloud Accounting for Professional Business",
    desc: "Provides solutions ranging from stock integrations, cash flow and profitability forecasts, through to timesheet and staff management.",
    href: "/services",
  },
  {
    title: "Cloud Accounting for Real Estate Companies",
    desc: "Elim Cloud Accounting for real estate management pulls everything together for streamlined, single-source control of project activities.",
    href: "/services",
  },
  {
    title: "Cloud Accounting for Contract Services",
    desc: "ECPAS is a cloud-based small business accounting software with tools for managing contractors and contract financials.",
    href: "/services",
  },
  {
    title: "Cloud Accounting for Engineering Services",
    desc: "Built for Engineering Services — easily create invoices, monitor expenses, generate financial reports, time-track projects, and more.",
    href: "/services",
  },
  {
    title: "Cloud Accounting for Trading & Distribution Services",
    desc: "ECPAS gives a complete solution to manage logistics or shipping, sales, inventory, and finance-related activities.",
    href: "/services",
  },
  {
    title: "Cloud Accounting for Construction Industry",
    desc: "Create budgets, projects, and sub-tasks to keep your construction organized. Track expenses incurred for the project from start to finish.",
    href: "/services",
  },
];

const erpSolutions = [
  {
    title: "Elim Cloud ERP for Real Estate Companies",
    desc: "Covers property development, real estate investment, property management, and day-to-day operations and contract management.",
    href: "/services",
  },
  {
    title: "Elim Cloud ERP for Gen. Business Services",
    desc: "One complete system to run your business financials, Project Accounting, CRM, and Reporting for small and mid-market businesses.",
    href: "/services",
  },
  {
    title: "Elim Cloud ERP for Professional Services",
    desc: "A single, unified suite of applications connecting the business across finance, sales, and service, beyond traditional financial management.",
    href: "/services",
  },
  {
    title: "Elim Cloud ERP for Contract Services",
    desc: "Designed to work with contractors in real estate, manufacturing, retail, and other industries to manage finances, sales, and purchases.",
    href: "/services",
  },
  {
    title: "Cloud ERP for Engineering Services",
    desc: "Focused on strategy, marketing, operations, and technology for engineering-oriented organizations.",
    href: "/services",
  },
  {
    title: "Cloud ERP for Trading & Distribution Companies",
    desc: "Comprehensive ERP addressing challenges in strategy, operations, and technology for trading and distribution businesses.",
    href: "/services",
  },
  {
    title: "Cloud ERP for Construction Industry",
    desc: "Comprehensive ERP supporting project planning, site management, and financial control throughout the construction lifecycle.",
    href: "/services",
  },
  {
    title: "Cloud ERP for Production Companies",
    desc: "Engineered to support production operations with process automation, tracking, and enterprise-wide visibility.",
    href: "/services",
  },
];

const featureModules = [
  {
    title: "Multiple Branch Management",
    desc: "Configure any number of locations — production or sales — to monitor performance and assign people across your entire business.",
  },
  {
    title: "Store & Inventory Management",
    desc: "Track items as they move into and out of your storefronts and storage facilities, maintaining the right amount of stock at all times.",
  },
  {
    title: "Logistics and Suppliers Mgt",
    desc: "Full supplier management with integrated logistics tools to coordinate procurement, deliveries, and vendor relationships.",
  },
  {
    title: "Payroll and HRMS System",
    desc: "Handle varied payroll types and business-specific rules, ensuring all statutory requirements are implemented in the software.",
  },
  {
    title: "Book-keeping & Accounting System",
    desc: "Manage all aspects of general ledger, accounts payable, receivable, and multi-entity financial reporting in one place.",
  },
  {
    title: "Contracts & Projects Management",
    desc: "Create and manage contracts and projects, monitor budgets, and track milestones from initiation to completion.",
  },
  {
    title: "Customers and Sales Management",
    desc: "Full CRM and sales pipeline management, connecting customer communication, quotes, orders, and invoicing seamlessly.",
  },
  {
    title: "Maintenance Management",
    desc: "Schedule, track, and manage maintenance tasks to keep assets and facilities running efficiently and reducing downtime.",
  },
  {
    title: "Fixed Assets & Maintenance Mgt",
    desc: "Register and depreciate fixed assets while scheduling preventive maintenance and tracking asset lifecycles automatically.",
  },
  {
    title: "Risk & Control Management",
    desc: "Identify, assess, and mitigate operational risks with built-in compliance controls and audit-ready reporting.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const featuresSectionRef = useRef<HTMLElement>(null);
  const featuresTrackRef = useRef<HTMLDivElement>(null);
  const featuresProgressRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroPhotoRef = useRef<HTMLDivElement>(null);
  const heroGlowRef = useRef<HTMLDivElement>(null);
  const heroBadge1Ref = useRef<HTMLDivElement>(null);
  const heroBadge2Ref = useRef<HTMLDivElement>(null);
  const heroBadge3Ref = useRef<HTMLDivElement>(null);
  const heroBadge4Ref = useRef<HTMLDivElement>(null);
  const heroBadge5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Hero timeline ────────────────────────────────────────────────
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Background image fades up from slight scale
      if (heroBgRef.current) {
        tl.fromTo(
          heroBgRef.current,
          { scale: 1.06, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.6, ease: "power2.out" },
          0,
        );
      }

      // 2. Trust badge
      tl.fromTo(
        "#hero-badge",
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.35,
      );

      // 3. Headline line 1 — slides up with clip
      tl.fromTo(
        "#hero-h1-line1",
        { y: 48, opacity: 0, clipPath: "inset(0 0 100% 0)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.9,
          ease: "power4.out",
        },
        0.5,
      );

      // 4. Headline line 2 — slides up slightly staggered
      tl.fromTo(
        "#hero-h1-line2",
        { y: 48, opacity: 0, clipPath: "inset(0 0 100% 0)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.9,
          ease: "power4.out",
        },
        0.65,
      );

      // 5. Sub-headline fades in
      tl.fromTo(
        "#hero-sub",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.85,
      );

      // 6. CTAs pop in
      tl.fromTo(
        "#hero-ctas",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        1.0,
      );

      // 7. Proof pills
      tl.fromTo(
        "#hero-pills",
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55 },
        1.1,
      );

      // 8. Stats row slide-in + count-up
      tl.fromTo(
        "#hero-stats",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55 },
        1.2,
      );

      // Count-up for each stat figure
      const statCounters = [
        { id: "stat-years", target: 15, suffix: "+" },
        { id: "stat-biz", target: 500, suffix: "+" },
        { id: "stat-mods", target: 10, suffix: "+" },
      ];
      statCounters.forEach(({ id, target, suffix }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const obj = { val: 0 };
        tl.to(
          obj,
          {
            val: target,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = Math.round(obj.val) + suffix;
            },
          },
          1.25,
        );
      });

      // 9. Photo — scale + rise from below with perspective tilt
      if (heroPhotoRef.current) {
        gsap.set(heroPhotoRef.current.parentElement, { perspective: 900 });
        tl.fromTo(
          heroPhotoRef.current,
          { scale: 0.82, opacity: 0, y: 60, rotateX: 12 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.3,
            ease: "expo.out",
          },
          0.5,
        );
      }

      // 10. Floating badges fly in
      if (heroBadge1Ref.current) {
        tl.fromTo(
          heroBadge1Ref.current,
          { x: 30, opacity: 0, scale: 0.85 },
          { x: 0, opacity: 1, scale: 1, duration: 0.65, ease: "back.out(1.6)" },
          1.1,
        );
      }
      if (heroBadge2Ref.current) {
        tl.fromTo(
          heroBadge2Ref.current,
          { x: 30, opacity: 0, scale: 0.85 },
          { x: 0, opacity: 1, scale: 1, duration: 0.65, ease: "back.out(1.6)" },
          1.25,
        );
      }
      if (heroBadge3Ref.current) {
        tl.fromTo(
          heroBadge3Ref.current,
          { x: -30, opacity: 0, scale: 0.85 },
          { x: 0, opacity: 1, scale: 1, duration: 0.65, ease: "back.out(1.6)" },
          1.35,
        );
      }
      if (heroBadge4Ref.current) {
        tl.fromTo(
          heroBadge4Ref.current,
          { x: -30, opacity: 0, scale: 0.85 },
          { x: 0, opacity: 1, scale: 1, duration: 0.65, ease: "back.out(1.6)" },
          1.45,
        );
      }
      if (heroBadge5Ref.current) {
        tl.fromTo(
          heroBadge5Ref.current,
          { x: -30, opacity: 0, scale: 0.85 },
          { x: 0, opacity: 1, scale: 1, duration: 0.65, ease: "back.out(1.6)" },
          1.55,
        );
      }

      // 11. Glow pulse — ambient purple glow breathes
      if (heroGlowRef.current) {
        gsap.fromTo(
          heroGlowRef.current,
          { opacity: 0.18 },
          {
            opacity: 0.42,
            duration: 2.8,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          },
        );
      }

      // 12. Continuous float on badges
      if (heroBadge1Ref.current) {
        gsap.to(heroBadge1Ref.current, {
          y: -7,
          duration: 2.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.8,
        });
      }
      if (heroBadge2Ref.current) {
        gsap.to(heroBadge2Ref.current, {
          y: 7,
          duration: 3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 2.1,
        });
      }
      if (heroBadge3Ref.current) {
        gsap.to(heroBadge3Ref.current, {
          y: -6,
          duration: 2.7,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 2.3,
        });
      }
      if (heroBadge4Ref.current) {
        gsap.to(heroBadge4Ref.current, {
          y: 8,
          duration: 3.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 2.5,
        });
      }
      if (heroBadge5Ref.current) {
        gsap.to(heroBadge5Ref.current, {
          y: -5,
          duration: 2.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 2.7,
        });
      }

      // ── Scroll-triggered section animations ──────────────────────────

      // Welcome — copy slides from left, photo reveals from right
      gsap.fromTo(
        "#welcome-copy",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: "#welcome-copy", start: "top 85%" },
        },
      );
      gsap.fromTo(
        "#welcome-photo",
        { x: 60, scale: 0.95, opacity: 0 },
        {
          x: 0,
          scale: 1,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: { trigger: "#welcome-photo", start: "top 85%" },
        },
      );

      // Bento header — fade + slide up
      gsap.fromTo(
        "#bento-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: "#bento-header", start: "top 88%" },
        },
      );

      // Bento grid — directional entrance per tile on scroll
      const bentoFroms = [
        { x: -60, y: 0 }, // hero — slides in from left
        { x: 0, y: -45 }, // 15yr — drops from above
        { x: 40, y: -35 }, // 500+ — sweeps from upper-right
        { x: 65, y: 0 }, // multi-branch — slides from right
        { x: -55, y: 0 }, // industry — slides from left
        { x: 0, y: 55 }, // modules — rises from below
      ];
      (gsap.utils.toArray("#bento-grid > *") as HTMLElement[]).forEach(
        (tile, i) => {
          const bentoFrom = bentoFroms[i] ?? { x: 0, y: 50 };
          gsap.fromTo(
            tile,
            { x: bentoFrom.x, y: bentoFrom.y, opacity: 0, scale: 0.94 },
            {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.9,
              ease: "expo.out",
              delay: i * 0.1,
              scrollTrigger: { trigger: "#bento-grid", start: "top 82%" },
            },
          );
        },
      );

      // ECPAS cards stagger in
      gsap.fromTo(
        "#ecpas-cards > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: "#ecpas-cards", start: "top 85%" },
        },
      );

      // ECPBES header block + cards
      gsap.fromTo(
        "#ecpbes-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: "#ecpbes-header", start: "top 85%" },
        },
      );
      gsap.fromTo(
        "#ecpbes-cards > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: "#ecpbes-cards", start: "top 85%" },
        },
      );

      // CTA content fades up staggered
      gsap.fromTo(
        "#cta-content > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: "#cta-content", start: "top 85%" },
        },
      );

      // ── Horizontal scroll for feature modules ────────────────────────
      const section = featuresSectionRef.current;
      const track = featuresTrackRef.current;
      const progressBar = featuresProgressRef.current;

      if (section && track) {
        const getScrollAmount = () =>
          -(track.scrollWidth - section.offsetWidth);

        gsap.to(track, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 88px",
            end: () => `+=${Math.abs(getScrollAmount()) * 0.6}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: progressBar
              ? (self) => gsap.set(progressBar, { scaleX: self.progress })
              : undefined,
          },
        });
      }

      // ── Section image parallax (all [data-parallax] elements) ────────
      (gsap.utils.toArray("[data-parallax]") as HTMLElement[]).forEach((el) => {
        // Bento wrapper divs are position:absolute inset-0 — use a lighter
        // scale and yPercent so they don't escape their tile boundary.
        const isBentoWrapper = el.tagName === "DIV";
        const scaleAmt = isBentoWrapper ? 1.22 : 1.45;
        const fromPct = isBentoWrapper ? -14 : -25;
        const toPct = isBentoWrapper ? 14 : 25;

        gsap.set(el, { scale: scaleAmt, transformOrigin: "50% 50%" });
        gsap.fromTo(
          el,
          { yPercent: fromPct },
          {
            yPercent: toPct,
            ease: "none",
            scrollTrigger: {
              trigger: el.closest("section") ?? el.parentElement ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          },
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#05010a] pt-28 pb-28 lg:pt-40 lg:pb-40">
        {/* Background image — directional overlay so photo shows on right */}
        <div ref={heroBgRef} className="pointer-events-none absolute inset-0">
          <img
            src="/hero-bg.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#050108]/95 via-[#05010a]/80 to-[#05010a]/45" />
        </div>

        {/* Pink radial glow top-center */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_30%_0%,rgba(247,42,107,0.16),transparent_70%)]" />
        {/* Purple glow — animated breathe */}
        <div
          ref={heroGlowRef}
          className="pointer-events-none absolute -right-32 -top-32 h-130 w-130 rounded-full bg-[radial-gradient(circle,rgba(74,52,160,0.22),transparent_65%)] blur-3xl"
        />
        {/* Dot grid */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[28px_28px] mask-[radial-gradient(ellipse_80%_60%_at_30%_0%,black_30%,transparent_100%)]" />

        <div className="relative mx-auto w-full max-w-7xl px-8 lg:px-16">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_560px] lg:gap-8">
            {/* ── Left: copy ───────────────────────────────────────────── */}
            <div>
              {/* Trust badge */}
              <div
                id="hero-badge"
                className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/6 px-4 py-1.5 backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
                  15+ Years · Cloud ERP · Lagos, Nigeria
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-[42px] leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[58px]">
                <span id="hero-h1-line1" className="block whitespace-nowrap">
                  Run Your Entire Business
                </span>
                <span id="hero-h1-line2" className="block whitespace-nowrap">
                  <span className="relative inline-block">
                    <span className="bg-linear-to-r from-[#ff6090] via-[#f72a6b] to-[#d4186d] bg-clip-text text-transparent">
                      From One Solution.
                    </span>
                    {/* Underline accent */}
                    <span className="absolute -bottom-1 left-0 h-0.75 w-full rounded-full bg-linear-to-r from-[#f72a6b] to-transparent opacity-60" />
                  </span>
                </span>
              </h1>

              {/* Sub-headline */}
              <p
                id="hero-sub"
                className="mt-6 max-w-lg text-base leading-relaxed text-white/50 md:text-lg"
              >
                Accounting, ERP, Payroll, Inventory &amp; Sales — purpose-built
                for Trading, Distribution, Manufacturing, Construction, and
                more.
              </p>

              {/* CTAs */}
              <div
                id="hero-ctas"
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#f72a6b] px-8 py-4 text-sm font-bold text-white shadow-[0_0_40px_-8px_rgba(247,42,107,0.7)] transition-all hover:scale-105 hover:bg-[#e01e5a] hover:shadow-[0_0_50px_-8px_rgba(247,42,107,0.9)]"
                >
                  Get a Free Demo
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                <Link
                  to="/features"
                  className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/6 px-8 py-4 text-sm font-bold text-white/80 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  Explore Features
                </Link>
              </div>

              {/* Feature proof points */}
              <div id="hero-pills" className="mt-8 flex flex-wrap gap-3">
                {[
                  {
                    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                    text: "10+ Integrated Modules",
                  },
                  {
                    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999A5.002 5.002 0 0010.1 5C6 5 3 8 3 12v3z",
                    text: "100% Cloud-Based",
                  },
                  {
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0",
                    text: "Multi-Branch Support",
                  },
                ].map(({ icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/4 px-3.5 py-1.5 text-[12px] font-medium text-white/55"
                  >
                    <svg
                      className="h-3.5 w-3.5 shrink-0 text-[#f72a6b]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={icon}
                      />
                    </svg>
                    {text}
                  </span>
                ))}
              </div>

              {/* Stats row */}
              <div
                id="hero-stats"
                className="mt-10 grid grid-cols-3 gap-0 divide-x divide-white/10 border-t border-white/10 pt-8"
              >
                {[
                  {
                    id: "stat-years",
                    value: 15,
                    suffix: "+",
                    label: "Years in Business",
                  },
                  {
                    id: "stat-biz",
                    value: 500,
                    suffix: "+",
                    label: "Businesses Served",
                  },
                  {
                    id: "stat-mods",
                    value: 10,
                    suffix: "+",
                    label: "ERP & Accounting Modules",
                  },
                ].map(({ id, suffix, label }, i) => (
                  <div
                    key={label}
                    className={`flex flex-col ${i === 0 ? "pr-6" : i === 1 ? "px-6" : "pl-6"}`}
                  >
                    <span
                      id={id}
                      className="font-display text-2xl font-extrabold text-white md:text-3xl"
                    >
                      0{suffix}
                    </span>
                    <span className="mt-1 text-[11px] font-medium leading-snug text-white/40">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: photo with floating overlays ───────────────────── */}
            <div className="relative hidden lg:block">
              {/* Ambient glow */}
              <div className="absolute -inset-6 rounded-3xl bg-[radial-gradient(ellipse_80%_80%_at_60%_50%,rgba(74,52,160,0.25),transparent_70%)]" />

              {/* Frameless photo — clip-path wipe reveal via GSAP */}
              <div ref={heroPhotoRef} className="relative overflow-hidden">
                <img
                  src="/images/hero-photo.png"
                  alt="Business team working with ERP software"
                  className="h-170 w-full object-cover object-center"
                  loading="eager"
                />
                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#05010a]/50 to-transparent" />
              </div>

              {/* Floating: invoice notification */}
              <div
                ref={heroBadge1Ref}
                style={badgePositions[0]}
                className="absolute flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0f172a]/90 px-3.5 py-2.5 shadow-xl backdrop-blur-md"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#f72a6b]/15">
                  <svg
                    className="h-3.5 w-3.5 text-[#f72a6b]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">
                    Invoice Generated
                  </p>
                  <p className="text-[10px] text-white/40">
                    Lagos Branch · just now
                  </p>
                </div>
              </div>

              {/* Floating: live users */}
              <div
                ref={heroBadge2Ref}
                style={badgePositions[1]}
                className="absolute rounded-xl border border-white/10 bg-[#0f172a]/90 px-3 py-2 shadow-lg backdrop-blur-md"
              >
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-bold text-white">
                    500+ Businesses
                  </span>
                </div>
                <p className="text-[9px] text-white/40">
                  Across Nigeria &amp; West Africa
                </p>
              </div>

              {/* Floating: payroll processed */}
              <div
                ref={heroBadge3Ref}
                style={badgePositions[2]}
                className="absolute flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0f172a]/90 px-3.5 py-2.5 shadow-xl backdrop-blur-md"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15">
                  <svg
                    className="h-3.5 w-3.5 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">
                    Payroll Processed
                  </p>
                  <p className="text-[10px] text-white/40">
                    48 employees · today
                  </p>
                </div>
              </div>

              {/* Floating: real-time sync */}
              <div
                ref={heroBadge4Ref}
                style={badgePositions[3]}
                className="absolute flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0f172a]/90 px-3.5 py-2.5 shadow-xl backdrop-blur-md"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#4a34a0]/25">
                  <svg
                    className="h-3.5 w-3.5 text-[#9d8bf0]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">
                    Real-time Sync
                  </p>
                  <p className="text-[10px] text-white/40">
                    All branches · live
                  </p>
                </div>
              </div>

              {/* Floating: report ready */}
              <div
                ref={heroBadge5Ref}
                style={badgePositions[4]}
                className="absolute flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0f172a]/90 px-3.5 py-2.5 shadow-xl backdrop-blur-md"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/15">
                  <svg
                    className="h-3.5 w-3.5 text-amber-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">
                    Report Ready
                  </p>
                  <p className="text-[10px] text-white/40">
                    Q1 Financial · exported
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WELCOME — light, white background
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white pt-20 pb-20 border-b border-gray-100">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Left column */}
            <div id="welcome-copy">
              <span className="mb-4 inline-block rounded-full bg-[#fff0f4] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f72a6b]">
                Welcome!
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#0f172a] md:text-4xl">
                Trusted by businesses across Nigeria for over 15 years.
              </h2>
              <p className="mt-5 leading-relaxed text-[#475569]">
                Elim ERP Solutions are products of{" "}
                <strong className="font-semibold text-[#0f172a]">
                  Elim Business Ventures Limited
                </strong>
                , a company based in Lagos, Nigeria. We possess over{" "}
                <strong className="font-semibold text-[#0f172a]">
                  15 years' experience
                </strong>{" "}
                in developing custom software solutions for small and medium
                businesses. Our solutions are scalable to accommodate future
                expansion or additional requirements.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#f72a6b] transition-colors hover:text-[#c01550]"
              >
                Learn more about us
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

            {/* Right column — photo with floating stat chips */}
            <div
              id="welcome-photo"
              className="relative hidden overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.12)] lg:block"
            >
              <img
                src="/images/team-collab.png"
                alt="Elim team collaborating"
                data-parallax
                className="h-full min-h-96 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0f172a]/65 via-[#0f172a]/10 to-transparent" />
              {/* Floating stat grid */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-2.5">
                {[
                  { stat: "15+", label: "Years of Experience" },
                  { stat: "500+", label: "Businesses Served" },
                  { stat: "2", label: "Flagship Platforms" },
                  { stat: "8", label: "Industry Verticals" },
                ].map(({ stat, label }) => (
                  <div
                    key={label}
                    className="rounded-xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm"
                  >
                    <p className="font-display text-xl font-extrabold text-[#f72a6b]">
                      {stat}
                    </p>
                    <p className="mt-0.5 text-[11px] font-medium text-[#475569]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          ECPAS — light gray background, elevated white cards
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f4f7fb] pb-20 border-b border-gray-200">
        {/* Full-width photo intro banner */}
        <div className="relative mb-16 overflow-hidden">
          <img
            src="/images/accounting-banner.png"
            alt="Financial analysis and accounting"
            data-parallax
            className="h-80 w-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0f172a]/85 via-[#0f172a]/55 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
              <span className="mb-3 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff8fab]">
                Elim Cloud Premium Accounting Software
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                ECPAS — Industry-Specific
                <br />
                Accounting
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/65 md:text-base">
                Purpose-built for eight major verticals — the financial platform
                that truly understands your industry's workflow.
              </p>
              <Link
                to="/services"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#ff8fab] transition-colors hover:text-white"
              >
                Explore accounting solutions
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
          </div>
        </div>
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <div
            id="ecpas-cards"
            className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
          >
            {accountingSolutions.map((item) => (
              <article
                key={item.title}
                className="animate-in group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_12px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)]"
              >
                <div className="h-1 w-full bg-linear-to-r from-[#f72a6b] to-[#ff8fab]" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-base font-bold leading-snug text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#64748b]">
                    {item.desc}
                  </p>
                  <Link
                    to={item.href}
                    className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-[#f72a6b] transition-colors hover:text-[#c01550]"
                  >
                    Learn More
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

      {/* ═══════════════════════════════════════════════════════════════════
          ECPBES — dark accent section (contrast break)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0d0b1e] py-20">
        <div className="relative mx-auto w-full max-w-7xl px-8 lg:px-16">
          {/* Header: text left, tall image right */}
          <div
            id="ecpbes-header"
            className="mb-12 grid items-stretch gap-0 overflow-hidden rounded-3xl lg:grid-cols-[1fr_420px]"
          >
            {/* Left: text */}
            <div className="flex flex-col justify-center bg-white/4 border border-white/8 rounded-l-3xl p-8 lg:p-12 border-r-0">
              <span className="animate-in mb-3 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#9d8bf0]">
                Elim Cloud Premium Business ERP Software
              </span>
              <h2 className="animate-in font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                ECPBES — Enterprise ERP
                <br />
                Solutions
              </h2>
              <p className="animate-in mt-4 text-base text-white/55">
                Full-scale ERP spanning real estate, professional services,
                construction, distribution, and production — built for
                businesses that need more than accounting.
              </p>
            </div>
            {/* Right: tall photo */}
            <div className="relative hidden overflow-hidden rounded-r-3xl border border-white/8 border-l-0 lg:block">
              <img
                src="/images/erp-software.png"
                alt="ERP dashboard and logistics"
                data-parallax
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-l from-transparent via-[#0d0b1e]/20 to-[#0d0b1e]/60" />
            </div>
          </div>

          <div
            id="ecpbes-cards"
            className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
          >
            {erpSolutions.map((item) => (
              <article
                key={item.title}
                className="animate-in group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/4 transition-all duration-300 hover:border-[#4a34a0]/40 hover:bg-white/7"
              >
                <div className="h-1 w-full bg-linear-to-r from-[#4a34a0] to-[#9d8bf0]" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-base font-bold leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                    {item.desc}
                  </p>
                  <Link
                    to={item.href}
                    className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-[#9d8bf0] transition-colors hover:text-[#c2b3ff]"
                  >
                    Read More
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

      {/* ═══════════════════════════════════════════════════════════════════
          BENTO — why choose Elim
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#f8f9fc] py-20 border-b border-gray-200">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <div id="bento-header" className="mb-10">
            <span className="mb-3 inline-block rounded-full bg-[#fff0f4] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f72a6b]">
              Why Elim?
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0f172a] md:text-4xl">
              Everything your business needs,
              <br />
              in one platform.
            </h2>
          </div>

          <div
            id="bento-grid"
            className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {/* Tile 1 — Cloud Hero (1 col × 2 rows on desktop) */}
            <div className="group relative flex min-h-96 flex-col justify-between overflow-hidden rounded-3xl p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(0,0,0,0.30)] lg:min-h-0 lg:row-span-2">
              <div data-parallax className="absolute inset-0">
                <img
                  src="/images/analytics-header.png"
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-b from-[#0d1126]/60 via-[#0d1126]/72 to-[#0d1126]/90" />
              <div className="pointer-events-none absolute -right-12 -top-12 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(247,42,107,0.28),transparent_65%)] blur-2xl" />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f72a6b]/20 ring-1 ring-[#f72a6b]/30">
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
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999A5.002 5.002 0 0010.1 5C6 5 3 8 3 12v3z"
                    />
                  </svg>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold leading-snug text-white">
                  Cloud-First
                  <br />
                  Business Platform
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  No servers, no IT overhead. Access your complete ERP from
                  anywhere, on any device — fully managed in the cloud.
                </p>
              </div>
              <Link
                to="/features"
                className="relative inline-flex items-center gap-1.5 text-sm font-bold text-[#f72a6b] transition-all duration-300 hover:gap-3 hover:text-[#ff8fab]"
              >
                Explore platform
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

            {/* Tile 2 — 15+ Years expertise */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.24)]">
              <div data-parallax className="absolute inset-0">
                <img
                  src="/images/team-collab.png"
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-[#0f172a]/80" />
              <svg
                className="relative h-7 w-7 text-[#f72a6b] transition-transform duration-300 group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="relative">
                <p className="font-display text-5xl font-extrabold text-white">
                  15+
                </p>
                <p className="mt-1.5 text-sm font-medium leading-snug text-white/60">
                  Years of proven expertise in Nigerian business software
                </p>
              </div>
            </div>

            {/* Tile 3 — 500+ Businesses */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(247,42,107,0.30)]">
              <div data-parallax className="absolute inset-0">
                <img
                  src="/images/office-building.png"
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-[#c01040]/80" />
              <svg
                className="relative h-7 w-7 text-white/80 transition-transform duration-300 group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"
                />
              </svg>
              <div className="relative">
                <p className="font-display text-5xl font-extrabold text-white">
                  500+
                </p>
                <p className="mt-1.5 text-sm font-medium leading-snug text-white/85">
                  Businesses across Nigeria &amp; West Africa
                </p>
              </div>
            </div>

            {/* Tile 4 — Multi-Branch Management (2 cols wide) */}
            <div className="group relative flex flex-col justify-between gap-5 overflow-hidden rounded-3xl p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(74,52,160,0.30)] sm:col-span-2 lg:col-span-2">
              <div data-parallax className="absolute inset-0">
                <img
                  src="/images/office-building.png"
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-r from-[#4a34a0]/92 via-[#4a34a0]/78 to-[#0d1126]/70" />
              <div className="relative flex items-start gap-4">
                <div className="shrink-0 rounded-2xl bg-white/15 p-3 ring-1 ring-white/20">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Multi-Branch Management
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                    Centralized control across all locations — inventory,
                    finance, HR, and sales unified under one live dashboard.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-wrap gap-2">
                {[
                  "Live Sync",
                  "Role-Based Access",
                  "Consolidated Reports",
                  "Branch KPIs",
                ].map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[12px] font-semibold text-white/80 transition-all duration-300 group-hover:border-white/35 group-hover:bg-white/18 group-hover:text-white"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Tile 5 — 8 Industry Verticals (2 cols wide) */}
            <div className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:col-span-2 lg:col-span-2">
              <div data-parallax className="absolute inset-0">
                <img
                  src="/images/erp-software.png"
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-r from-[#0d1126]/90 via-[#0d1126]/78 to-[#0d1126]/60" />
              <div className="relative">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9d8bf0]">
                  Industry Coverage
                </p>
                <p className="mt-1 font-display text-xl font-bold text-white">
                  Purpose-built for 8 industry verticals
                </p>
              </div>
              <div className="relative flex flex-wrap gap-2">
                {[
                  "Retail",
                  "Manufacturing",
                  "Construction",
                  "Real Estate",
                  "Trading & Distribution",
                  "Engineering",
                  "Professional Services",
                  "Contract Services",
                ].map((ind) => (
                  <span
                    key={ind}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[12px] font-medium text-white/75 transition-all duration-300 group-hover:border-[#9d8bf0]/40 group-hover:bg-[#9d8bf0]/15 group-hover:text-white/90"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Tile 6 — 10+ Modules */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(157,139,240,0.30)]">
              <div data-parallax className="absolute inset-0">
                <img
                  src="/images/hero-photo.png"
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-[#0d1126]/85" />
              <svg
                className="relative h-7 w-7 text-[#9d8bf0] transition-transform duration-300 group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <div className="relative">
                <p className="font-display text-5xl font-extrabold text-[#9d8bf0] transition-colors duration-500 group-hover:text-[#c5b8ff]">
                  10+
                </p>
                <p className="mt-1.5 text-sm font-medium leading-snug text-white/60">
                  Fully integrated ERP &amp; accounting modules
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FEATURES — light, white background with numbered cards
      ═══════════════════════════════════════════════════════════════════ */}
      {/* ── Features: photo banner + horizontal scroll, pinned together ─── */}
      <section
        ref={featuresSectionRef}
        className="border-b border-gray-100 bg-white"
      >
        {/* Photo banner — part of the pinned section */}
        <div className="relative overflow-hidden">
          <img
            src="/images/erp-software.png"
            alt="Team using ERP software"
            data-parallax
            className="h-72 w-full object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-l from-[#0f172a]/85 via-[#0f172a]/55 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-end">
            <div className="mx-auto w-full max-w-7xl px-8 text-right lg:px-16">
              <span className="mb-2 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#f72a6b]">
                Platform Capabilities
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                Features of Our
                <br />
                ERP Solutions
              </h2>
              <p className="mt-2 ml-auto max-w-md text-sm leading-relaxed text-white/65 md:text-base">
                A comprehensive suite of integrated modules — from bookkeeping
                to risk management — in a single cloud platform.
              </p>
            </div>
          </div>
        </div>

        {/* Cards sub-section */}
        <div className="py-8">
          {/* Label + progress bar */}
          <div className="mb-5 flex items-center justify-between px-8 lg:px-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#94a3b8]">
              Scroll to explore all modules
              <span className="ml-2 inline-block translate-y-px">→</span>
            </p>
            <div className="h-0.5 w-36 overflow-hidden rounded-full bg-gray-100">
              <div
                ref={featuresProgressRef}
                className="h-full w-full origin-left scale-x-0 rounded-full bg-[#f72a6b]"
              />
            </div>
          </div>

          {/* Overflow clip wrapper */}
          <div className="overflow-hidden">
            {/* Horizontal track — GSAP translates this */}
            <div
              ref={featuresTrackRef}
              className="flex gap-4 px-8 will-change-transform lg:px-16"
            >
              {featureModules.map((f, i) => (
                <article
                  key={f.title}
                  className="group w-64 shrink-0 rounded-2xl border border-gray-100 bg-[#f8fafc] p-5 transition-colors duration-300 hover:border-[#f72a6b]/25 hover:bg-white hover:shadow-[0_6px_28px_rgba(0,0,0,0.08)]"
                >
                  <span className="mb-3 block font-display text-2xl font-extrabold text-[#f72a6b]/25 transition-colors group-hover:text-[#f72a6b]/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-sm font-bold leading-snug text-[#0f172a]">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
                    {f.desc}
                  </p>
                  <Link
                    to="/features"
                    className="mt-4 inline-flex items-center gap-0.5 text-[11px] font-bold text-[#f72a6b] transition-colors hover:text-[#c01550]"
                  >
                    Details ›
                  </Link>
                </article>
              ))}
              {/* Trailing spacer */}
              <div className="w-8 shrink-0" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CTA — navy dark close section
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#1a3a5f] py-24">
        {/* Background photo */}
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/images/office-building.png"
            alt=""
            aria-hidden="true"
            data-parallax
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#0d1f35]/62" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(247,42,107,0.12),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[24px_24px]" />
        <div
          id="cta-content"
          className="relative mx-auto w-full max-w-3xl px-8 text-center"
        >
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Ready to transform the way your business operates?
          </h2>
          <p className="animate-in mx-auto mt-5 max-w-xl text-lg font-light text-white/65">
            Elim ERP Solutions are scalable, robust, and easy to implement —
            carefully built to suit best practices in Enterprise Business
            Automation worldwide.
          </p>
          <div className="animate-in mt-10 flex flex-wrap justify-center gap-4">
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
