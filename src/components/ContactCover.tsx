// src/components/ContactSection.tsx
import React, { useState } from "react";
import { Mail, Phone, Clock, Headset, ShieldCheck, MapPin, ArrowRight } from "lucide-react";

type ContactSectionProps = {
  heroImageSrc?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  contactEmail?: string;
  contactPhone?: string;
  hqAddress?: string;
};

const GRAD = "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500";

const ContactSection: React.FC<ContactSectionProps> = ({
  heroImageSrc = "/businessman.jpg",
  heroTitle = "Let’s Build Sustainable Solutions Together",
  heroSubtitle = "Tell us what you need across feedstock, renewable diesel inputs, or partnerships.",
  contactEmail = "hello@moltechglobal.com",
  contactPhone = "+65 6000 0000",
  hqAddress = "Blk 511 Kampong Bahru Rd, #03-01 Keppel Distripark, 099447",
}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      // TODO: replace with your API call (fetch/axios)
      await new Promise((r) => setTimeout(r, 700));
      console.log("Contact form payload:", form);
      setStatus({ ok: true, msg: "Thanks! We’ll get back to you shortly." });
      setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
    } catch {
      setStatus({ ok: false, msg: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ===== HERO (shorter, premium look) ===== */}
      <section className="relative h-[46vh] md:h-[52vh] flex items-center">
        <img
          src={heroImageSrc}
          alt="Sustainable operations and global collaboration"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -right-24 h-96 w-96 rounded-full bg-cyan-400/25 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur">
            <Headset className="h-5 w-5" />
            <span className="text-sm font-medium">We reply within 1 business day</span>
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight">
            {heroTitle}
          </h1>
          <p className="mt-3 max-w-2xl text-white/85">{heroSubtitle}</p>
        </div>
      </section>

      {/* ===== MAIN (glass cards) ===== */}
      <main className="relative bg-gradient-to-b from-white to-slate-50">
        <section className="-mt-16 md:-mt-20 pb-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* FORM CARD */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl bg-white/80 backdrop-blur-xl shadow-[0_30px_80px_rgba(2,6,23,0.10)] ring-1 ring-black/5 p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                        Get in Touch
                      </h2>
                      <p className="mt-1 text-slate-600">
                        Share your requirements and timelines. We’ll connect you to the right team.
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-md bg-gradient-to-r from-blue-600 to-blue-400">
                      <ShieldCheck className="h-4 w-4" />
                      ISCC (EU) Certified
                    </div>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-xl">
                    <img
                      src="/contact.png"
                      alt="Team collaboration"
                      className="w-full h-56 md:h-64 object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={onSubmit}>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your Email *"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3"
                    />
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3"
                    />
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="md:col-span-2 w-full rounded-lg border border-gray-300 px-4 py-3"
                    />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Message"
                      rows={5}
                      className="md:col-span-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                    <div className="md:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button
                        type="submit"
                        disabled={submitting}
                        className={`inline-flex items-center justify-center rounded-xl text-white font-semibold px-6 py-3 disabled:opacity-50 ${GRAD} hover:brightness-110 shadow-lg`}
                      >
                        {submitting ? "Sending..." : "Send Message"}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                      <p className="text-xs text-slate-500">
                        By submitting, you agree to be contacted by our regional team.
                      </p>
                    </div>
                  </form>

                  {status && (
                    <p
                      className={`mt-4 text-sm ${
                        status.ok ? "text-emerald-600" : "text-red-600"
                      }`}
                    >
                      {status.msg}
                    </p>
                  )}
                </div>
              </div>

              {/* INFO STACK */}
              <div className="space-y-6">
                <div className="rounded-2xl bg-white/80 backdrop-blur-xl p-6 ring-1 ring-black/5 shadow-[0_20px_60px_rgba(2,6,23,0.08)]">
                  <h3 className="text-xl font-bold text-slate-900">Contact Channels</h3>
                  <div className="mt-5 space-y-5">
                    <a
                      href={`mailto:${contactEmail}`}
                      className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white/70 p-4 hover:border-blue-400 transition"
                    >
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Email</div>
                        <div className="text-slate-600 group-hover:text-slate-800">
                          {contactEmail}
                        </div>
                      </div>
                    </a>

                    <a
                      href={`tel:${contactPhone.replace(/[^+\d]/g, "")}`}
                      className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white/70 p-4 hover:border-blue-400 transition"
                    >
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-indigo-50">
                        <Phone className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Call</div>
                        <div className="text-slate-600 group-hover:text-slate-800">
                          {contactPhone}
                        </div>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white/70 p-4">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-50">
                        <Clock className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Hours</div>
                        <div className="text-slate-600">Mon–Fri · 9:00–18:00</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white/70 p-4">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-50">
                        <MapPin className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">HQ</div>
                        <div className="text-slate-600">{hqAddress}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/80 backdrop-blur-xl p-6 ring-1 ring-black/5 shadow-[0_20px_60px_rgba(2,6,23,0.08)]">
                  <h3 className="text-xl font-bold text-slate-900">Why work with us?</h3>
                  <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
                    <li>ISCC (EU) certified systems and compliance</li>
                    <li>Cross-border logistics and reliable supply</li>
                    <li>Regional experts across APAC, MENA, EU, and USA</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactSection;
