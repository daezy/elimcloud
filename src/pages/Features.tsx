import { Link } from "react-router";

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
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="bg-[#0e0818] pb-16 pt-32">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-[#f72a6b]">
            Platform Capabilities
          </span>
          <h1 className="mb-4 font-display text-4xl font-extrabold md:text-5xl">
            Features &amp; Modules
          </h1>
          <p className="max-w-2xl text-lg text-white/60">
            Our ERP and accounting platforms come packed with powerful modules
            designed to handle every aspect of your business operations.
          </p>
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section className="bg-[#0b0510] py-20">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-[#f72a6b]/40"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f72a6b]/20 font-bold text-[#f72a6b]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-3 text-xl font-bold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {f.desc}
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
            See It In Action
          </h2>
          <p className="mb-8 text-white/80">
            Request a demo and experience how Elim solutions can streamline your
            business operations.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-white px-10 py-4 text-sm font-bold text-[#0b0510] no-underline transition-transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Request A Demo
          </Link>
        </div>
      </section>
    </>
  );
}
