// src/components/ContactCover.tsx
import React from "react";
import { Headset, Mail, Phone, Clock } from "lucide-react";

type Props = {
  /** Background image under /public */
  src?: string;
  /** Main title (large) */
  title?: string;
  /** Subheading (smaller) */
  subtitle?: string;
  /** Show small support badge pill */
  showBadge?: boolean;
  /** Custom height classes (defaults to Contact page sizes) */
  heightClassName?: string;

  /** --- New: Contact cards (below hero) --- */
  showContacts?: boolean;
  email?: string;            // "hello@moltechglobal.com"
  phone?: string;            // "+65 6000 0000"
  hoursLabel?: string;       // "Mon–Fri · 9:00–18:00"
};

const ContactCover: React.FC<Props> = ({
  src = "/businessman.jpg",
  title = "CONTACT US –",
  subtitle = "LET’S BUILD SUSTAINABLE SOLUTIONS TOGETHER",
  showBadge = true,
  heightClassName = "h-[60vh] md:h-[70vh]",

  // contacts defaults (from your Contact page)
  showContacts = true,
  email = "hello@moltechglobal.com",
  phone = "+65 6000 0000",
  hoursLabel = "Mon–Fri · 9:00–18:00",
}) => {
  // sanitized tel: strip spaces and punctuation except +
  const telHref = `tel:${phone.replace(/[^+\d]/g, "")}`;
  const mailHref = `mailto:${email}`;

  return (
    <section className="relative w-full overflow-hidden">
      {/* HERO */}
      <div
        className={`relative w-full flex items-center justify-center text-center ${heightClassName}`}
      >
        {/* Background image */}
        <img
          src={src}
          alt="Sustainable operations and global collaboration"
          className="absolute inset-0 block h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
          draggable={false}
        />

        {/* Overlays (match Contact page) */}
        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -right-24 h-96 w-96 rounded-full bg-cyan-400/25 blur-3xl" />

        {/* Centered content */}
        <div className="relative z-10 px-6">
          {showBadge && (
            <div className="mx-auto inline-flex items-center justify-center rounded-2xl bg-blue-600/85 p-4 mb-6">
              <Headset className="h-8 w-8 text-white" />
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title} <br className="hidden sm:block" />
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90">{subtitle}</p>
        </div>
      </div>

      {/* CONTACT CARDS (below hero) */}
      {showContacts && (
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-12 md:-mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email */}
              <a
                href={mailHref}
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-gray-50 p-5 shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:border-blue-400 transition"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-sky-50">
                  <Mail className="h-7 w-7 text-sky-500" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600 group-hover:text-gray-900">{email}</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={telHref}
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-gray-50 p-5 shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:border-blue-400 transition"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-indigo-50">
                  <Phone className="h-7 w-7 text-indigo-500" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">Call</div>
                  <div className="text-gray-600 group-hover:text-gray-900">{phone}</div>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-gray-50 p-5 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-50">
                  <Clock className="h-7 w-7 text-amber-600" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">Hours</div>
                  <div className="text-gray-600">{hoursLabel}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactCover;
