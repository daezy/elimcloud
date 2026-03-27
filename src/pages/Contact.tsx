import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="bg-[#0e0818] pb-16 pt-32">
        <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-[#f72a6b]">
            Get In Touch
          </span>
          <h1 className="mb-4 font-display text-4xl font-extrabold md:text-5xl">
            Contact Us
          </h1>
          <p className="max-w-2xl text-lg text-white/60">
            Have questions about our solutions? We'd love to hear from you. Send
            us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* ===== CONTACT BODY ===== */}
      <section className="bg-[#0b0510] py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-8 md:grid-cols-2 lg:px-16">
          {/* INFO */}
          <div>
            <h2 className="mb-8 font-display text-2xl font-bold">Our Office</h2>

            <div className="mb-8 space-y-6">
              <div>
                <h3 className="mb-1 text-sm font-bold uppercase tracking-widest text-[#f72a6b]">
                  Address
                </h3>
                <p className="leading-relaxed text-white/60">
                  Suite 1, Ground Floor, #2 Community Road,
                  <br />
                  Satellite Town, Lagos, Nigeria
                </p>
              </div>

              <div>
                <h3 className="mb-1 text-sm font-bold uppercase tracking-widest text-[#f72a6b]">
                  Phone
                </h3>
                <a
                  href="tel:+2348119623509"
                  className="text-white/60 no-underline transition-colors hover:text-white"
                >
                  +234-811-962-3509
                </a>
              </div>

              <div>
                <h3 className="mb-1 text-sm font-bold uppercase tracking-widest text-[#f72a6b]">
                  Email
                </h3>
                <a
                  href="mailto:info@clouderpsolutions.net"
                  className="text-white/60 no-underline transition-colors hover:text-white"
                >
                  info@clouderpsolutions.net
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 font-bold">Business Hours</h3>
              <div className="space-y-1 text-sm text-white/60">
                <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
                <p>Saturday: 9:00 AM – 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-4 text-5xl">✓</div>
                <h3 className="mb-2 font-display text-2xl font-bold">
                  Thank You!
                </h3>
                <p className="text-white/60">
                  We've received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <h2 className="mb-6 font-display text-2xl font-bold">
                  Send A Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-white/80">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#f72a6b]/60"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-white/80">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#f72a6b]/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/80">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#f72a6b]/60"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/80">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#f72a6b]/60"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/80">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#f72a6b]/60"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#f72a6b] px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#e0215e]"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
