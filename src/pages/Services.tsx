import { Link } from "react-router";

const accounting = [
  {
    title: "Cloud Accounting for Retail Business",
    desc: "Help your business run efficiently, achieve maximum growth and meet your company goals. Track sales, inventory, and expenses across multiple storefronts in real time.",
  },
  {
    title: "Cloud Accounting for Manufacturing",
    desc: "Manage your entire manufacturing operation — purchasing, raw materials, production, inventory, sales, and financials in one integrated platform.",
  },
  {
    title: "Cloud Accounting for Professional Business",
    desc: "Solutions ranging from stock integrations, cash flow and profitability forecasts, through to timesheet, staff management, and client billing.",
  },
  {
    title: "Cloud Accounting for Real Estate",
    desc: "Streamlined, single-source control of all your real estate project activities — from property acquisitions and sales to rental income tracking.",
  },
  {
    title: "Cloud Accounting for Contract Services",
    desc: "Track project budgets, milestones, and payments. Generate accurate billing, manage sub-contractors, and maintain compliance.",
  },
  {
    title: "Cloud Accounting for Engineering",
    desc: "Manage complex engineering projects, resource allocation, timesheet tracking, and financial reporting in one unified system.",
  },
  {
    title: "Cloud Accounting for Trading & Distribution",
    desc: "End-to-end management of trading operations — purchase orders, stock levels, customer orders, dispatch, and comprehensive financial reports.",
  },
  {
    title: "Cloud Accounting for Construction",
    desc: "Create budgets, projects, and sub-tasks to keep your construction organized. Track expenses from project start to finish with detailed cost analysis.",
  },
];

const erp = [
  {
    title: "ERP for Real Estate",
    desc: "Covers property development, real estate investment, property management whilst also catering for day-to-day operations and contract management.",
  },
  {
    title: "ERP for General Business",
    desc: "An integrated business management solution for small and mid-market businesses — financials, project accounting, CRM, and reporting.",
  },
  {
    title: "ERP for Professional Services",
    desc: "Goes beyond traditional financial management providing a single, unified suite that connects finance, sales, and service delivery.",
  },
  {
    title: "ERP for Construction Industry",
    desc: "Create budgets, projects, and sub-tasks to keep your construction organized. Full cost tracking from project start to finish.",
  },
  {
    title: "ERP for Engineering",
    desc: "Manage complex engineering workflows, resource planning, procurement, and project financials from a single dashboard.",
  },
  {
    title: "ERP for Trading & Distribution",
    desc: "Warehouse management, order processing, logistics, supplier management, and integrated accounting for trading companies.",
  },
  {
    title: "ERP for Manufacturing",
    desc: "Bill of materials, production scheduling, quality control, and cost accounting — everything manufacturers need in one platform.",
  },
  {
    title: "ERP for Contract Services",
    desc: "Contract lifecycle management, milestone billing, resource scheduling, and financial controls for service-based businesses.",
  },
];

export default function Services() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="bg-[#0e0818] pb-16 pt-32">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-[#f72a6b]">
            Our Solutions
          </span>
          <h1 className="mb-4 font-display text-4xl font-extrabold md:text-5xl">
            Services We Offer
          </h1>
          <p className="max-w-2xl text-lg text-white/60">
            Software carefully designed to meet diverse industry standards and
            specifications. Take advantage of our offerings for all your
            business needs.
          </p>
        </div>
      </section>

      {/* ===== ECPAS ===== */}
      <section className="bg-[#0b0510] py-20">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-[#f72a6b]">
            ECPAS
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            Elim Cloud Premium Accounting Software
          </h2>
          <p className="mb-12 max-w-2xl text-white/60">
            A comprehensive cloud accounting solution designed for businesses
            across multiple industries. Manage your finances, inventory,
            payroll, and reporting from anywhere.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {accounting.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-[#f72a6b]/40"
              >
                <h3 className="mb-3 text-lg font-bold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ECPBES ===== */}
      <section className="bg-[#0e0818] py-20">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-[#f72a6b]">
            ECPBES
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
            Elim Cloud Premium Business ERP Software
          </h2>
          <p className="mb-12 max-w-2xl text-white/60">
            A fully integrated ERP solution tailor-made for Nigerian and West
            African businesses. From procurement to HR, from finance to project
            management.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {erp.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-[#f72a6b]/40"
              >
                <h3 className="mb-3 text-lg font-bold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-linear-to-r from-[#c51162] to-[#4a34a0] py-16">
        <div className="mx-auto w-full max-w-3xl px-8 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold">
            Need A Custom Solution?
          </h2>
          <p className="mb-8 text-white/80">
            Let us understand your unique business requirements and build the
            perfect solution for you.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-white px-10 py-4 text-sm font-bold text-[#0b0510] no-underline transition-transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
