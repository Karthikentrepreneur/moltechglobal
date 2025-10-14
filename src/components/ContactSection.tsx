// src/components/ContactSection.tsx
import React from "react";
import { Mail, Phone, Clock, ShieldCheck, Headset } from "lucide-react";
import GetInTouchCard from "@/components/GetInTouchCard";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-white text-gray-900">
      {/* 50/50 grid (no hero, no top title) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
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

          {/* RIGHT: Message Box + Contact Channels (no white gap) */}
          <div className="space-y-0">
            <GetInTouchCard />

            {/* Contact Channels flush under the message box */}
            <div className="-mt-4 rounded-t-none bg-gray-50 rounded-b-xl p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)] border border-slate-200 border-t-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Channels
              </h3>

              {/* Email full-width */}
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

              {/* Call & Hours in one row (stacks on mobile) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Call */}
                <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-indigo-50">
                    <Phone className="h-7 w-7 text-indigo-500" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">Call</div>
                    <a href="tel:+6560000000" className="text-gray-600 hover:text-gray-900">
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
      </div>
    </section>
  );
};

export default ContactSection;
