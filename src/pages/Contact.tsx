import { useEffect, useRef, useState, type FormEvent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "#contact-header",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 },
      );
      gsap.fromTo(
        "#contact-info",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: "#contact-info", start: "top 85%" },
        },
      );
      gsap.fromTo(
        "#contact-form",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: "#contact-form", start: "top 85%" },
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
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0d1126]/96 via-[#0d1126]/78 to-[#0d1126]/55" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_0%_60%,rgba(247,42,107,0.13),transparent_70%)]" />
        <div
          id="contact-header"
          className="relative mx-auto w-full max-w-7xl px-8 lg:px-16"
        >
          <span className="mb-4 inline-block rounded-full bg-[#fff0f4]/12 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#ff8fab]">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[56px]">
            Let's Start a{" "}
            <span className="bg-linear-to-r from-[#ff6090] via-[#f72a6b] to-[#d4186d] bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/55">
            Have questions about our solutions? We'd love to hear from you. Send
            us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* ── CONTACT BODY — light ─────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-8 md:grid-cols-[380px_1fr] md:items-start lg:px-16">
          {/* INFO COLUMN */}
          <div id="contact-info" className="space-y-5">
            <div>
              <span className="mb-3 inline-block rounded-full bg-[#fff0f4] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f72a6b]">
                Our Office
              </span>
              <h2 className="font-display text-2xl font-bold text-[#0f172a]">
                Find Us
              </h2>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-[#f8f9fc] p-5">
              <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f72a6b]">
                Address
              </p>
              <p className="text-sm leading-relaxed text-[#475569]">
                Suite 1, Ground Floor, #2 Community Road,
                <br />
                Satellite Town, Lagos, Nigeria
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-[#f8f9fc] p-5">
              <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f72a6b]">
                Phone
              </p>
              <a
                href="tel:+2348119623509"
                className="text-sm text-[#475569] transition-colors hover:text-[#0f172a]"
              >
                +234-811-962-3509
              </a>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-[#f8f9fc] p-5">
              <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f72a6b]">
                Email
              </p>
              <a
                href="mailto:info@clouderpsolutions.net"
                className="text-sm text-[#475569] transition-colors hover:text-[#0f172a]"
              >
                info@clouderpsolutions.net
              </a>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-[#f8f9fc] p-5">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f72a6b]">
                Business Hours
              </p>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#475569]">Monday – Friday</span>
                  <span className="font-medium text-[#0f172a]">
                    8:00 AM – 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#475569]">Saturday</span>
                  <span className="font-medium text-[#0f172a]">
                    9:00 AM – 2:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#475569]">Sunday</span>
                  <span className="font-medium text-[#94a3b8]">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* FORM COLUMN */}
          <div
            id="contact-form"
            className="rounded-3xl border border-gray-100 bg-[#f8f9fc] p-8 shadow-sm md:p-10"
          >
            {submitted ? (
              <div className="flex min-h-80 flex-col items-center justify-center text-center">
                <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <svg
                    className="h-8 w-8 text-emerald-600"
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
                </div>
                <h3 className="mb-2 font-display text-2xl font-bold text-[#0f172a]">
                  Message Sent!
                </h3>
                <p className="max-w-xs text-[#475569]">
                  We've received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <h2 className="mb-1 font-display text-2xl font-bold text-[#0f172a]">
                  Send a Message
                </h2>
                <p className="mb-7 text-sm text-[#475569]">
                  Fill in the form below and we'll be in touch.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="mb-1.5 block text-sm font-medium text-[#0f172a]"
                      >
                        First Name
                      </label>
                      <input
                        id="first-name"
                        type="text"
                        required
                        autoComplete="given-name"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#0f172a] outline-none placeholder:text-[#94a3b8] transition-colors focus:border-[#f72a6b]/60 focus:ring-2 focus:ring-[#f72a6b]/10"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="mb-1.5 block text-sm font-medium text-[#0f172a]"
                      >
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        type="text"
                        required
                        autoComplete="family-name"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#0f172a] outline-none placeholder:text-[#94a3b8] transition-colors focus:border-[#f72a6b]/60 focus:ring-2 focus:ring-[#f72a6b]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-[#0f172a]"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#0f172a] outline-none placeholder:text-[#94a3b8] transition-colors focus:border-[#f72a6b]/60 focus:ring-2 focus:ring-[#f72a6b]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-sm font-medium text-[#0f172a]"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#0f172a] outline-none placeholder:text-[#94a3b8] transition-colors focus:border-[#f72a6b]/60 focus:ring-2 focus:ring-[#f72a6b]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-[#0f172a]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#0f172a] outline-none placeholder:text-[#94a3b8] transition-colors focus:border-[#f72a6b]/60 focus:ring-2 focus:ring-[#f72a6b]/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#f72a6b] px-8 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-[#e01e5a] hover:shadow-[0_0_24px_-4px_rgba(247,42,107,0.45)]"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
