// src/pages/Contact.tsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, Clock, Headset, ShieldCheck } from "lucide-react";
import GetInTouchCard from "@/components/GetInTouchCard";

const Contact: React.FC = () => {
  return (
    <>
      {/* ✅ HEADER OVER HERO */}
      <div className="relative">
        <Header />

        {/* ---------- HERO SECTION ---------- */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center">
          <img
            src="/businessman.jpg"
            alt="Sustainable operations and global collaboration"
            className="absolute inset-0 block h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/60" aria-hidden />
          <div className="relative z-10 px-6">
            <div className="mx-auto inline-flex items-center justify-center rounded-2xl bg-blue-600/85 p-4 mb-6">
              <Headset className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              CONTACT US – <br className="hidden sm:block" />
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90">
              LET’S BUILD SUSTAINABLE SOLUTIONS TOGETHER
            </p>
          </div>
        </section>
      </div>

      {/* ---------- MAIN CONTENT ---------- */}
      <main className="bg-white text-gray-900">
        {/* “Get in Touch” SECTION HEADING */}
        <section className="text-center py-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Get in Touch
          </h1>
          <div className="mt-3 h-1 w-24 mx-auto bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 rounded-full" />
        </section>

        {/* 50/50 grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT: Article with image + paragraphs + chips */}
            <article>
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

                  {/* Tags/Chips */}
                  <div className="mt-8 flex flex-wrap gap-3">
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

            {/* RIGHT: Message Box, then Contact Channels underneath */}
            <div className="space-y-6">
              <GetInTouchCard />

              {/* Contact Channels (Call + Hours in one row) */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact Channels
                </h3>

                {/* Email stays full-width */}
                <div className="mb-6 flex items-center gap-4">
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

                {/* ✅ Call & Hours on the same row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Call */}
                  <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
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

                  {/* Hours */}
                  <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
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
            </div>
            {/* END RIGHT */}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
export { Contact };
