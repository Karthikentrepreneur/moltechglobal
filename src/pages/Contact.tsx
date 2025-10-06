// src/pages/Contact.tsx
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, Clock, Headset, ShieldCheck } from "lucide-react";

const GRAD = "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500";

const Contact: React.FC = () => {
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
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      await new Promise((r) => setTimeout(r, 700));
      // eslint-disable-next-line no-console
      console.log("Contact form payload:", form);
      setStatus({ ok: true, msg: "Thanks! We’ll get back to you shortly." });
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus({ ok: false, msg: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Header over hero */}
      <div className="relative">
        <Header />
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
          <img
            src="/businessman.jpg"
            alt="Sustainable operations and global collaboration"
            className="absolute inset-0 block h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/60" aria-hidden />
          {/* (Intentionally no hero text content) */}
        </section>
      </div>

      {/* Main content */}
      <main className="bg-white text-gray-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT: Main card */}
            <article className="lg:col-span-2">
              <div className="rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white">
                <div className="px-6 sm:px-8 pt-8">
                  <img
                    src="/contact.png"
                    alt="Team collaboration"
                    className="w-full h-[420px] object-cover rounded-2xl border border-gray-200 shadow-md"
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="px-6 sm:px-8 pb-8 mt-6">
                  {/* Heading row */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-md ${GRAD} text-white`}
                    >
                      <Headset className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                      Get in Touch
                    </h2>
                  </div>

                  {/* Original content */}
                  <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-wide text-black max-w-4xl mb-6">
                    CONTACT US – <br />
                    LET’S BUILD SUSTAINABLE SOLUTIONS TOGETHER
                  </h1>

                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    We’d love to hear from you—whether you’re exploring sustainable
                    feedstock, renewable diesel inputs, or strategic partnerships across
                    regions. Our global team is here to help you make confident,
                    climate-positive moves.
                  </p>
                  <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
                    Share your requirements and timelines, and we’ll connect you with
                    the right experts from our regional hubs across Asia, the Middle
                    East, the UK, and the USA. Together, we’ll craft reliable, scalable
                    solutions.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm text-sky-800">
                      <ShieldCheck className="h-4 w-4" /> Compliance & Certifications
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-800">
                      Cross-border Logistics
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm text-indigo-800">
                      <Headset className="h-4 w-4" /> Dedicated Support
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* RIGHT: Sidebar */}
            <aside className="space-y-6">
              {/* Channels */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact Channels
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-sky-50">
                      <Mail className="h-7 w-7 text-sky-500" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">Email</div>
                      <a
                        href="mailto:hello@moltechglobal.com"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        hello@moltechglobal.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-indigo-50">
                      <Phone className="h-7 w-7 text-indigo-500" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">Call</div>
                      <a
                        href="tel:+6560000000"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        +65 6000 0000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-50">
                      <Clock className="h-7 w-7 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">Hours</div>
                      <div className="text-gray-600">Mon–Fri · 9:00–18:00</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                <h3 id="contact-form" className="text-2xl font-bold text-gray-900">
                  Send us a message
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Tell us about your requirements. We typically respond within one
                  business day.
                </p>

                <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-sky-500 focus:ring focus:ring-sky-200"
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-sky-500 focus:ring focus:ring-sky-200"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                  />
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                  />
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                  />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-sky-500 focus:ring focus:ring-sky-200"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full rounded-lg text-white font-semibold px-4 py-2 disabled:opacity-50 ${GRAD} hover:brightness-110`}
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
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
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
export { Contact };
