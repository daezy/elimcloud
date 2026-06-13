import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router";
import { gsap } from "gsap";

type DropdownItem = { label: string; to: string };

const accountingItems: DropdownItem[] = [
  {
    label: "Cloud Accounting for Retail Business",
    to: "/services/accounting/retail",
  },
  {
    label: "Cloud Accounting for Manufacturing",
    to: "/services/accounting/manufacturing",
  },
  {
    label: "Cloud Accounting for Professional Business",
    to: "/services/accounting/professional",
  },
  {
    label: "Cloud Accounting for Real Estate",
    to: "/services/accounting/real-estate",
  },
  {
    label: "Cloud Accounting for Contract Services",
    to: "/services/accounting/contract",
  },
  {
    label: "Cloud Accounting for Engineering Services",
    to: "/services/accounting/engineering",
  },
  {
    label: "Cloud Accounting for Trading & Distribution",
    to: "/services/accounting/distribution",
  },
  {
    label: "Cloud Accounting for Construction Industry",
    to: "/services/accounting/construction",
  },
];

const erpItems: DropdownItem[] = [
  {
    label: "Cloud ERP for Real Estate Companies",
    to: "/services/erp/real-estate",
  },
  {
    label: "Cloud ERP for Gen. Business Services",
    to: "/services/erp/general",
  },
  {
    label: "Cloud ERP for Professional Services",
    to: "/services/erp/professional",
  },
  { label: "Cloud ERP for Contract Services", to: "/services/erp/contract" },
  {
    label: "Cloud ERP for Engineering Services",
    to: "/services/erp/engineering",
  },
  {
    label: "Cloud ERP for Trading & Distribution",
    to: "/services/erp/distribution",
  },
  {
    label: "Cloud ERP for Construction Industry",
    to: "/services/erp/construction",
  },
  {
    label: "Cloud ERP for Production Companies",
    to: "/services/erp/production",
  },
];

const hotelItems: DropdownItem[] = [
  {
    label: "Eliim Hotel ERP Software (Online & Offline Hybrid)",
    to: "/services/erp/hms",
  },
  { label: "Elim Cloud Hotel Management Software", to: "/services/erp/hms" },
  {
    label: "Elim Premium Hotel Software (Desktop)",
    to: "/services/erp/hms",
  },
  { label: "Elim Group Hotel Management Software", to: "/services/erp/hms" },
  { label: "Elim Hotel POS Software", to: "/services/erp/hms" },
  { label: "Elim Eatery & Fast Food POS Software", to: "/services/erp/hms" },
  { label: "Epordo Hotel Keylock System", to: "/services/erp/hms" },
  { label: "Hotel Cloud Attendance System", to: "/services/erp/hms" },
];

const healthcareItems: DropdownItem[] = [
  { label: "Elim Hospital ERP Software", to: "/services/erp/hospitalerp" },
  {
    label: "Elim Hospital ERP Accounting System",
    to: "/services/erp/hospitalerp",
  },
  {
    label: "Elim Eye Clinic Management Software",
    to: "/services/erp/hospitalerp",
  },
  {
    label: "Elim Laboratory and Diagnostic Software",
    to: "/services/erp/hospitalerp",
  },
  {
    label: "Elim Health Clinic Management Software",
    to: "/services/erp/hospitalerp",
  },
];

const hrmsItems: DropdownItem[] = [
  {
    label: "Elim Payroll & HR Software — Public Sector",
    to: "/services/erp/ehps",
  },
  {
    label: "Elim HR Payroll Software — Productive Sector",
    to: "/services/erp/ehps",
  },
  {
    label: "Elim HR & Payroll System — Employee Outsourcing",
    to: "/services/erp/ehps",
  },
  { label: "Elim Cloud Payroll Software", to: "/services/erp/ehps" },
  { label: "Elim Cloud HRMS & Payroll Software", to: "/services/erp/ehps" },
  {
    label: "Elim Premium Cloud HRMS and Payroll Software",
    to: "/services/erp/ehps",
  },
];

const posItems: DropdownItem[] = [
  { label: "Point of Sales Software — Eatery", to: "/services/erp/pos" },
  { label: "Point of Sales Software — Retail Store", to: "/services/erp/pos" },
  {
    label: "Point of Sales Software — Small Business",
    to: "/services/erp/pos",
  },
  {
    label: "Point of Sales Software — Pharmacy Stores",
    to: "/services/erp/pos",
  },
  {
    label: "Point of Sales Software — Electronic Store",
    to: "/services/erp/pos",
  },
];

const productItems: DropdownItem[] = [
  // { label: "Hospitality", to: "/services/erp/ehps-oce" },
  // { label: "Point of Sales", to: "/services/erp/pos" },
];

function NavDropdown({
  label,
  items,
  scrolled,
}: {
  label: string;
  items: DropdownItem[];
  scrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex cursor-pointer items-center gap-1 text-[15px] font-medium transition-colors ${
          scrolled
            ? "text-white/90 hover:text-[#f72a6b]"
            : "text-white/90 hover:text-white"
        }`}
      >
        {label}
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div
          className="absolute left-0 top-full z-50 mt-1 w-72 overflow-hidden rounded-xl border border-gray-100 bg-white py-1.5 shadow-xl"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-[13px] font-medium text-gray-600 no-underline transition-colors hover:bg-[#f72a6b]/5 hover:text-[#f72a6b]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navItemsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Entrance animation ─────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Header slides down from above
      tl.fromTo(
        headerRef.current,
        { y: -72, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0,
      );

      // Logo fades up
      tl.fromTo(
        logoRef.current,
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        0.3,
      );

      // Nav items stagger in
      if (navItemsRef.current) {
        tl.fromTo(
          navItemsRef.current.children,
          { y: -8, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.07 },
          0.4,
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 z-50 w-full">
      {/* ── Main navbar ───────────────────────────────────────────────────── */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/8 bg-[#0d1326]/60 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.25)] backdrop-blur-2xl backdrop-saturate-150"
            : "border-transparent bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-2 lg:px-16">
          <Link
            ref={logoRef}
            to="/"
            className="flex items-center gap-2 no-underline transition-opacity hover:opacity-80"
          >
            <img
              src="/logo.jpg"
              alt="Elim"
              className="h-10 w-auto rounded object-contain"
            />
          </Link>

          <ul ref={navItemsRef} className="hidden items-center gap-7 lg:flex">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `cursor-pointer text-[15px] font-medium no-underline transition-colors ${
                    isActive
                      ? "font-semibold text-[#f72a6b]"
                      : scrolled
                        ? "text-white/90 hover:text-[#f72a6b]"
                        : "text-white/90 hover:text-white"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `cursor-pointer text-[15px] font-medium no-underline transition-colors ${
                    isActive
                      ? "font-semibold text-[#f72a6b]"
                      : scrolled
                        ? "text-white/90 hover:text-[#f72a6b]"
                        : "text-white/90 hover:text-white"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <NavDropdown
              label="Accounting"
              items={accountingItems}
              scrolled={scrolled}
            />
            <NavDropdown label="ERP" items={erpItems} scrolled={scrolled} />
            <NavDropdown
              label="Hotel Software"
              items={hotelItems}
              scrolled={scrolled}
            />
            <NavDropdown
              label="Healthcare"
              items={healthcareItems}
              scrolled={scrolled}
            />
            <NavDropdown
              label="HRMS & Payroll"
              items={hrmsItems}
              scrolled={scrolled}
            />
            <NavDropdown
              label="Point of Sales"
              items={posItems}
              scrolled={scrolled}
            />
            {productItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `cursor-pointer text-[15px] font-medium no-underline transition-colors ${
                      isActive
                        ? "font-semibold text-[#f72a6b]"
                        : scrolled
                          ? "text-white/90 hover:text-[#f72a6b]"
                          : "text-white/90 hover:text-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            {/* Features nav link removed — content distributed to service pages
            <li>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  `cursor-pointer text-[15px] font-medium no-underline transition-colors ${
                    isActive
                      ? "font-semibold text-[#f72a6b]"
                      : scrolled
                        ? "text-white/90 hover:text-[#f72a6b]"
                        : "text-white/90 hover:text-white"
                  }`
                }
              >
                Features
              </NavLink>
            </li>
            */}
            <li>
              <NavLink
                to="/partnership"
                className={({ isActive }) =>
                  `cursor-pointer text-[15px] font-medium no-underline transition-colors ${
                    isActive
                      ? "font-semibold text-[#f72a6b]"
                      : scrolled
                        ? "text-white/90 hover:text-[#f72a6b]"
                        : "text-white/90 hover:text-white"
                  }`
                }
              >
                Partnership
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `cursor-pointer text-[15px] font-medium no-underline transition-colors ${
                    isActive
                      ? "font-semibold text-[#f72a6b]"
                      : scrolled
                        ? "text-white/90 hover:text-[#f72a6b]"
                        : "text-white/90 hover:text-white"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
