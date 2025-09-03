// src/pages/Contact.tsx
import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Building2, Globe, Headset, ShieldCheck, MessageCircle } from "lucide-react";
const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | {
    ok: boolean;
    msg: string;
  }>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      // TODO: Replace with your real submit (API route, Supabase, Formspree, etc.)
      // Example: await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })
      await new Promise(r => setTimeout(r, 700));
      console.log("Contact form payload:", form);
      setStatus({
        ok: true,
        msg: "Thanks! We’ll get back to you shortly."
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
      });
    } catch {
      setStatus({
        ok: false,
        msg: "Something went wrong. Please try again."
      });
    } finally {
      setSubmitting(false);
    }
  };
  return <main className="pt-20 bg-white text-gray-900">
      {/* ---------- HERO ---------- */}
      <section className="relative min-h-[55vh]">
        <div className="absolute inset-0" style={{
        backgroundImage: "url('/images/contact-hero.jpg')",
        // swap to your asset
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="relative inline-block max-w-3xl p-4 sm:p-6 md:p-8">
            <span className="pointer-events-none absolute -top-4 -left-4 h-10 w-10 border-t-4 border-l-4 border-white" />
            <span className="pointer-events-none absolute -bottom-4 -right-4 h-10 w-10 border-b-4 border-r-4 border-white" />
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-wide text-white">
              CONTACT US –<br />
              LET’S BUILD SUSTAINABLE SOLUTIONS TOGETHER
            </h1>
          </div>
        </div>
      </section>

      {/* ---------- INTRO 2-COLUMN ---------- */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 lg:px-8">
        <div className="max-w-none">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            We’d love to hear from you—whether you’re exploring sustainable
            feedstock, renewable diesel inputs, or strategic partnerships across regions.
            Our global team is here to help you make confident, climate-positive moves.
          </p>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            Share your requirements and timelines, and we’ll connect you with the
            right experts from our regional hubs across Asia, the Middle East, the UK,
            and the USA. Together, we’ll craft reliable, scalable solutions.
          </p>

          {/* Quick help pills */}
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
          <img src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1600&auto=format&fit=crop" alt="Team collaboration" className="h-full w-full object-cover" draggable={false} />
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
              <a href="mailto:hello@moltechglobal.com" className="text-gray-600 hover:text-gray-900">
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
              <a href="tel:+6560000000" className="text-gray-600 hover:text-gray-900">
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

      {/* ---------- LOCATIONS GRID ---------- */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Offices</h2>
        <p className="mt-2 text-gray-600">
          Reach the nearest regional team for faster coordination and on-ground support.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[{
          city: "Singapore (HQ)",
          addr: ["#03-01, Keppel Distripark", "Singapore 089057"]
        }, {
          city: "Kuala Lumpur, Malaysia",
          addr: ["Level 20, City Center", "Kuala Lumpur 50050"]
        }, {
          city: "Bangkok, Thailand",
          addr: ["Sathorn Square Office Tower", "Bangkok 10500"]
        }, {
          city: "Dubai, UAE",
          addr: ["Business Bay", "Dubai"]
        }, {
          city: "London, UK",
          addr: ["Canary Wharf", "London E14"]
        }, {
          city: "Houston, USA",
          addr: ["Energy Corridor", "Houston, TX"]
        }].map((o, i) => <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gray-100">
                  <Building2 className="h-5 w-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{o.city}</h3>
                  <address className="not-italic text-sm text-gray-700">
                    {o.addr.map(line => <div key={line}>{line}</div>)}
                  </address>
                </div>
              </div>
            </div>)}
        </div>
      </section>

      {/* ---------- CONTACT FORM + DETAILS ---------- */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 id="contact-form" className="text-xl font-semibold text-gray-900">
              Send us a message
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Tell us about your requirements. We typically respond within one business day.
            </p>

            <form className="mt-6 space-y-4" onSubmit={onSubmit} aria-labelledby="contact-form">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                    Name
                  </label>
                  <input id="name" type="text" name="name" required value={form.name} onChange={handleChange} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="company">
                    Company
                  </label>
                  <input id="company" type="text" name="company" value={form.company} onChange={handleChange} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400" placeholder="Organization" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                    Email
                  </label>
                  <input id="email" type="email" name="email" required value={form.email} onChange={handleChange} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
                    Phone
                  </label>
                  <input id="phone" type="tel" name="phone" value={form.phone} onChange={handleChange} pattern="^[0-9+()\-.\s]{6,}$" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400" placeholder="+65 6000 0000" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="subject">
                  Subject
                </label>
                <input id="subject" type="text" name="subject" required value={form.subject} onChange={handleChange} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400" placeholder="How can we help?" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400" placeholder="Share details about your requirement, timelines, and locations." />
              </div>

              {/* WhatsApp quick-contact */}
              <a href={`https://wa.me/6560000000?text=${encodeURIComponent("Hi Moltech team, I’d like to discuss a requirement.")}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900 hover:bg-emerald-100">
                <MessageCircle className="h-4 w-4" />
                Prefer WhatsApp? Chat with us
              </a>

              {status && <div role="status" className={`rounded-xl px-4 py-3 text-sm ${status.ok ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-rose-50 text-rose-800 border border-rose-200"}`}>
                  {status.msg}
                </div>}

              <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-60">
                <Send className="h-5 w-5" />
                {submitting ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>

          {/* Contact details / Map */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Global HQ</h3>
              <p className="mt-2 text-sm text-gray-700">
                <strong>Moltech Global</strong>
                <br />
                #03-01, Keppel Distripark, Singapore 089057
              </p>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a href="mailto:hello@moltechglobal.com" className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 hover:bg-gray-100">
                  <Mail className="h-4 w-4 text-sky-600" />
                  hello@moltechglobal.com
                </a>
                <a href="tel:+6560000000" className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 hover:bg-gray-100">
                  <Phone className="h-4 w-4 text-sky-600" />
                  +65 6000 0000
                </a>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-gray-700">
                <Clock className="h-4 w-4 text-amber-600" />
                Mon–Fri · 9:00–18:00 (SGT)
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <iframe title="HQ Map" src="https://maps.google.com/maps?q=keppel%20distripark%20singapore&t=&z=13&ie=UTF8&iwloc=&output=embed" className="h-64 w-full" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[{
          q: "What information helps you respond faster?",
          a: "Volume estimates, product specs, origin/destination countries, and target timelines help us route your request to the right team immediately."
        }, {
          q: "Do you support custom formulations?",
          a: "Yes. Our teams can evaluate custom requirements for feed fats, esters, and other application-specific blends."
        }, {
          q: "Can you handle multi-region sourcing?",
          a: "Absolutely. With offices across Asia, the Middle East, the UK, and the USA, we coordinate cross-border sourcing and compliance seamlessly."
        }, {
          q: "Which certifications do you hold?",
          a: "We work with relevant international sustainability and quality frameworks. Share your compliance needs and we’ll match the right documentation."
        }].map(({
          q,
          a
        }) => <div key={q} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">{q}</h3>
              <p className="mt-2 text-sm text-gray-700">{a}</p>
            </div>)}
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl px-6 py-12 lg:px-8 mb-16">
        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600&auto=format&fit=crop" alt="Sustainable partnership" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600/40 via-cyan-600/35 to-emerald-600/35" />
        <div className="relative text-white">
          <h3 className="text-2xl md:text-3xl font-bold">
            Ready to collaborate on renewable feedstock and clean energy inputs?
          </h3>
          <p className="mt-2 max-w-2xl text-white/95">
            Send us your brief and a regional specialist will reach out with next steps.
          </p>
          <a href="#contact-form" onClick={e => {
          // ensure smooth scroll to the form anchor
          e.preventDefault();
          document.getElementById("contact-form")?.scrollIntoView({
            behavior: "smooth"
          });
        }} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 font-semibold text-gray-900 shadow-sm transition hover:bg-gray-100">
            <Send className="h-5 w-5" /> Start a conversation
          </a>
        </div>
      </section>
    </main>;
};
export default Contact;
export { Contact };