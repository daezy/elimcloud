import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#0a0410] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-8 py-16 md:grid-cols-4 lg:px-16">
        {/* Brand */}
        <div>
          <Link
            to="/"
            className="mb-6 flex items-center gap-2 text-white no-underline transition-opacity hover:opacity-80"
          >
            <img
              src="/logo.jpg"
              alt="Elim"
              className="h-12 w-auto rounded object-contain"
            />
          </Link>
          <p className="text-sm leading-relaxed text-white/60">
            Elim Business Ventures Limited — over 15 years of experience
            developing custom software solutions for small and medium
            businesses.
          </p>
        </div>

        {/* Accounting */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">
            Cloud Accounting
          </h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li>Retail Business</li>
            <li>Manufacturing</li>
            <li>Professional Business</li>
            <li>Real Estate</li>
            <li>Contract Services</li>
            <li>Trading &amp; Distribution</li>
          </ul>
        </div>

        {/* ERP */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">
            Cloud ERP
          </h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li>Real Estate</li>
            <li>General Business</li>
            <li>Professional Services</li>
            <li>Engineering Services</li>
            <li>Construction Industry</li>
            <li>Production Companies</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/80">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li>Elim Business Ventures Limited</li>
            <li>Suite 1, Ground Floor</li>
            <li>#2 Community Road, Satellite Town</li>
            <li>Lagos, Nigeria</li>
            <li className="pt-2 text-white/70">+234-811-962-3509</li>
            <li className="text-white/70">info@clouderpsolutions.net</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-8 py-5 text-center text-xs text-white/40">
        &copy; {new Date().getFullYear()} Elim Business Ventures Limited. All
        Rights Reserved.
      </div>
    </footer>
  );
}
