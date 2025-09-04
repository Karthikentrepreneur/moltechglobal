// src/pages/Contact.tsx
import React, { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  Send,
  Headset,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

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
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      await new Promise((r) => setTimeout(r, 700));
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
    <main className="bg-white text-gray-900">
      {/* ---------- HERO ---------- */}
      <section className="relative -mt-20 h-[60vh] md:h-[70vh]">
        <img
          src="/contact.png"
          alt="Sustainable operations and global collaboration"
          className="absolute inset-0 block h-full w-full object-cover object-top"
          loading="eager"
          decoding="async"
          referrerPolicy="no-referrer"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-wide text-white">
            CONTACT US –<br />
            LET’S BUILD SUSTAINABLE SOLUTIONS TOGETHER
          </h1>
        </div>
      </section>

      {/* ---------- INTRO 2-COLUMN ---------- */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 lg:px-8">
        <div className="max-w-none">
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

        <div className="overflow-hidden rounded-2xl bg-gray-100">
          <img
            src="/contact.png"
            alt="Team collaboration"
            className="h-full w-full object-cover"
            draggable={false}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* ---------- CHANNELS ROW ---------- */}
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-4 lg:px-8">
          <div className="flex items-center gap-5">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-sky-50">
              <Mail className="h-8 w-8 text-sky-500" />
            </div>
            <div>
              <div className="text-2xl font-extrabold">Email</div>
              <a
                href="mailto:hello@moltechglobal.com"
                className="text-gray-600 hover:text-gray-900"
              >
                hello@moltechglobal.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5 md:border-l md:pl-8 md:border-gray-200">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-indigo-50">
              <Phone className="h-8 w-8 text-indigo-500" />
            </div>
            <div>
              <div className="text-2xl font-extrabold">Call</div>
              <a
                href="tel:+6560000000"
                className="text-gray-600 hover:text-gray-900"
              >
                +65 6000 0000
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5 md:border-l md:pl-8 md:border-gray-200">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-amber-50">
              <Clock className="h-8 w-8 text-amber-600" />
            </div>
            <div>
              <div className="text-2xl font-extrabold">Hours</div>
              <div className="text-gray-600">Mon–Fri · 9:00–18:00</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CONTACT FORM ---------- */}
      <section className="mx-auto max-w-7xl pb-16 lg:px-8 px-0">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 px-[6px]">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 id="contact-form" className="text-xl font-semibold text-gray-900">
              Send us a message
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Tell us about your requirements. We typically respond within one
              business day.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={onSubmit}
              aria-labelledby="contact-form"
            >
              {/* Form fields here (unchanged) */}
              {/* ... */}
            </form>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      {/* Keep the rest of your FAQ and CTA sections unchanged */}
    </main>
  );
};

export default Contact;
export { Contact };
